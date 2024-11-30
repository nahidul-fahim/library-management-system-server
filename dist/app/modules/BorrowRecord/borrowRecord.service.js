"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordService = void 0;
const client_1 = require("@prisma/client");
const custom_error_1 = __importDefault(require("../../../error/custom-error"));
const prisma = new client_1.PrismaClient();
// borrow a book
const borrowBook = (_a) => __awaiter(void 0, [_a], void 0, function* ({ memberId, bookId }) {
    const isBookAvailable = yield prisma.book.findUnique({
        where: {
            bookId
        },
        select: {
            availableCopies: true
        }
    });
    const member = yield prisma.member.findUnique({
        where: {
            memberId
        }
    });
    if (!member) {
        throw new custom_error_1.default(404, "Member not found");
    }
    if (!isBookAvailable || isBookAvailable.availableCopies <= 0) {
        throw new custom_error_1.default(404, "Book is not available for borrowing");
    }
    const borrowDate = new Date().toISOString();
    const result = yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowRecord = yield tx.borrowRecord.create({
            data: {
                memberId,
                bookId,
                borrowDate
            }
        });
        yield tx.book.update({
            where: {
                bookId
            },
            data: {
                availableCopies: {
                    decrement: 1
                }
            }
        });
        const { returnDate } = borrowRecord, filteredBorrowRecord = __rest(borrowRecord, ["returnDate"]);
        return filteredBorrowRecord;
    }));
    return result;
});
// return a book
const returnBook = (_a) => __awaiter(void 0, [_a], void 0, function* ({ borrowId }) {
    const isBorrowRecordExist = yield prisma.borrowRecord.findUnique({
        where: {
            borrowId,
            returnDate: null
        }
    });
    if (!isBorrowRecordExist) {
        throw new custom_error_1.default(404, "Borrow record not found");
    }
    ;
    const returnDate = new Date().toISOString();
    const result = yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowRecord = yield tx.borrowRecord.update({
            where: {
                borrowId
            },
            data: {
                returnDate
            }
        });
        yield tx.book.update({
            where: {
                bookId: borrowRecord.bookId
            },
            data: {
                availableCopies: {
                    increment: 1
                }
            }
        });
    }));
    return result;
});
// get all overdue
const getAllOverdueFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const unreturnedBorrowList = yield prisma.borrowRecord.findMany({
        where: { returnDate: null },
        include: { book: true, member: true }
    });
    const overdueRecords = unreturnedBorrowList.map((record) => {
        const borrowDate = record.borrowDate;
        const today = new Date();
        const overdueDays = Math.ceil((today.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24));
        if (overdueDays > 14) {
            return {
                borrowId: record.borrowId,
                bookTitle: record.book.title,
                borrowerName: record.member.name,
                overdueDays
            };
        }
        return null;
    })
        .filter((record) => record !== null);
    return overdueRecords;
});
exports.BorrowRecordService = {
    borrowBook,
    returnBook,
    getAllOverdueFromDb
};
