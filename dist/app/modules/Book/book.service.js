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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create book
const createNewBookIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({ data });
    return result;
});
// get all books
const getAllBooksFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany({});
    return result;
});
// get a book
const getSingleBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findUniqueOrThrow({
        where: {
            bookId: id
        }
    });
    return result;
});
// update a book
const updateBookIntoDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.update({
        where: {
            bookId: id
        },
        data
    });
    return result;
});
// delete a book
const deleteBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.delete({
        where: {
            bookId: id
        }
    });
    return result;
});
exports.BookService = {
    createNewBookIntoDb,
    getAllBooksFromDb,
    getSingleBookFromDb,
    updateBookIntoDb,
    deleteBookFromDb
};
