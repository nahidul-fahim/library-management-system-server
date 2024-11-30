"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validate_request_1 = __importDefault(require("../../middlewares/validate-request"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post("/", (0, validate_request_1.default)(book_validation_1.BookValidation.createBook), book_controller_1.BookController.createBook);
router.get("/", book_controller_1.BookController.getAllBooks);
router.get("/:bookId", book_controller_1.BookController.getSingleBook);
router.put("/:bookId", (0, validate_request_1.default)(book_validation_1.BookValidation.updateBook), book_controller_1.BookController.updateBook);
router.delete("/:bookId", book_controller_1.BookController.deleteBook);
exports.bookRoutes = router;
