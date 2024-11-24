import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catch-async";
import sendResponse from "../../shared/send-response";
import { BookService } from "./book.service";

// create book
const createBook = catchAsync(async (req, res) => {
    const result = await BookService.createNewBookIntoDb(req.body);
    sendResponse(res, {
        status: StatusCodes.CREATED,
        success: true,
        message: "Book created successfully",
        data: result
    });
});

// get all books
const getAllBooks = catchAsync(async (req, res) => {
    const result = await BookService.getAllBooksFromDb();
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result
    });
});

// get single book
const getSingleBook = catchAsync(async (req, res) => {
    const result = await BookService.getSingleBookFromDb(req?.params?.bookId);
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result
    });
});

// update book
const updateBook = catchAsync(async (req, res) => {
    const result = await BookService.updateBookIntoDb(req?.params?.bookId, req.body);
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Book updated successfully",
        data: result
    });
});

// delete a book
const deleteBook = catchAsync(async (req, res) => {
    await BookService.deleteBookFromDb(req?.params?.bookId);
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Book successfully deleted",
    });
});

export const BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
};
