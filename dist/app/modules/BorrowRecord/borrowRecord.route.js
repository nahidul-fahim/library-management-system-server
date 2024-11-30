"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validate_request_1 = __importDefault(require("../../middlewares/validate-request"));
const borrowRecord_validation_1 = require("./borrowRecord.validation");
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const router = express_1.default.Router();
router.post("/borrow", (0, validate_request_1.default)(borrowRecord_validation_1.BorrowRecordValidation.borrowBook), borrowRecord_controller_1.BorrowRecordController.borrowBook);
router.post("/return", (0, validate_request_1.default)(borrowRecord_validation_1.BorrowRecordValidation.returnBook), borrowRecord_controller_1.BorrowRecordController.returnBook);
router.get("/borrow/overdue", borrowRecord_controller_1.BorrowRecordController.getAllOverDue);
exports.borrowRecordRoutes = router;
