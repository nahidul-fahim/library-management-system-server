import { z } from "zod";

const borrowBook = z.object({
  body: z.object({
    memberId: z.string({
      invalid_type_error: "Member ID must be a string",
      required_error: "Member ID is required",
    }),
    bookId: z.string({
      invalid_type_error: "Book ID must be a string",
      required_error: "Book ID is required",
    }),
  })
});

const returnBook = z.object({
  body: z.object({
    borrowId: z.string({
      invalid_type_error: "Borrow ID must be a string",
      required_error: "Borrow ID is required",
    }),
  })
});


export const BorrowRecordValidation = {
  borrowBook,
  returnBook
};