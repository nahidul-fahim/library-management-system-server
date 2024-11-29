import express from "express";
import validateRequest from "../../middlewares/validate-request";
import { BorrowRecordValidation } from "./borrowRecord.validation";
import { BorrowRecordController } from "./borrowRecord.controller";

const router = express.Router();

router.post(
  "/borrow",
  validateRequest(BorrowRecordValidation.borrowBook),
  BorrowRecordController.borrowBook
);

router.post(
  "/return",
  validateRequest(BorrowRecordValidation.returnBook),
  BorrowRecordController.returnBook
)

router.get(
  "/borrow/overdue",
  BorrowRecordController.getAllOverDue
)

export const borrowRecordRoutes = router;