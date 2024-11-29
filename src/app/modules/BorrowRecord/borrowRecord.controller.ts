import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catch-async";
import sendResponse from "../../shared/send-response";
import { BorrowRecordService } from "./borrowRecord.service";

// borrow a book
const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.borrowBook(req.body);
  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result
  });
});

// return a book
const returnBook = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.returnBook(req.body);
  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
    data: result
  });
});

// get all members
const getAllOverDue = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.getAllOverdueFromDb();
  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Overdue borrow list fetched",
    data: result
  })
});


export const BorrowRecordController = {
  borrowBook,
  returnBook,
  getAllOverDue
}