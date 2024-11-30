"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordValidation = void 0;
const zod_1 = require("zod");
const borrowBook = zod_1.z.object({
    body: zod_1.z.object({
        memberId: zod_1.z.string({
            invalid_type_error: "Member ID must be a string",
            required_error: "Member ID is required",
        }),
        bookId: zod_1.z.string({
            invalid_type_error: "Book ID must be a string",
            required_error: "Book ID is required",
        }),
    })
});
const returnBook = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string({
            invalid_type_error: "Borrow ID must be a string",
            required_error: "Borrow ID is required",
        }),
    })
});
exports.BorrowRecordValidation = {
    borrowBook,
    returnBook
};
