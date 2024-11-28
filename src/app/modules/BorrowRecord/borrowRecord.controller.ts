import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catch-async";
import sendResponse from "../../shared/send-response";
import { BorrowRecordService } from "./borrowRecord.service";

const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.borrowBook(req.body);
  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result
  });
});

const returnBook = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.returnBook(req.body);
  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
    data: result
  });
});


export const BorrowRecordController = {
  borrowBook,
  returnBook
}