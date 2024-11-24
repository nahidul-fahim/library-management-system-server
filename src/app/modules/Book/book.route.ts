import express from "express";
import { BookController } from "./book.controller";
import validateRequest from "../../middlewares/validate-request";
import { BookValidation } from "./book.validation";

const router = express.Router();

router.post(
    "/",
    validateRequest(BookValidation.createBook),
    BookController.createBook
);

router.get("/", BookController.getAllBooks);

router.get("/:bookId", BookController.getSingleBook);

router.put("/:bookId", validateRequest(BookValidation.updateBook), BookController.updateBook);

router.delete("/:bookId", BookController.deleteBook);

export const bookRoutes = router;
