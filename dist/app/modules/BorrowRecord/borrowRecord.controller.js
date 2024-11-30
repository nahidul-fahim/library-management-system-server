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
exports.BorrowRecordController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catch_async_1 = __importDefault(require("../../shared/catch-async"));
const send_response_1 = __importDefault(require("../../shared/send-response"));
const borrowRecord_service_1 = require("./borrowRecord.service");
// borrow a book
const borrowBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowRecord_service_1.BorrowRecordService.borrowBook(req.body);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book borrowed successfully",
        data: result
    });
}));
// return a book
const returnBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowRecord_service_1.BorrowRecordService.returnBook(req.body);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book returned successfully",
        data: result
    });
}));
// get all members
const getAllOverDue = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowRecord_service_1.BorrowRecordService.getAllOverdueFromDb();
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Overdue borrow list fetched",
        data: result
    });
}));
exports.BorrowRecordController = {
    borrowBook,
    returnBook,
    getAllOverDue
};
