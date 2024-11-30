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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catch_async_1 = __importDefault(require("../../shared/catch-async"));
const send_response_1 = __importDefault(require("../../shared/send-response"));
const book_service_1 = require("./book.service");
// create book
const createBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createNewBookIntoDb(req.body);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Book created successfully",
        data: result
    });
}));
// get all books
const getAllBooks = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getAllBooksFromDb();
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result
    });
}));
// get single book
const getSingleBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield book_service_1.BookService.getSingleBookFromDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.bookId);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result
    });
}));
// update book
const updateBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield book_service_1.BookService.updateBookIntoDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.bookId, req.body);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book updated successfully",
        data: result
    });
}));
// delete a book
const deleteBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield book_service_1.BookService.deleteBookFromDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.bookId);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book successfully deleted",
    });
}));
exports.BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
};
