"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const validate_request_1 = __importDefault(require("../../middlewares/validate-request"));
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
router.post("/", (0, validate_request_1.default)(member_validation_1.MemberValidation.createMember), member_controller_1.MemberController.createMember);
router.get("/", member_controller_1.MemberController.getAllMembers);
router.get("/:memberId", member_controller_1.MemberController.getSingleMember);
router.put("/:memberId", (0, validate_request_1.default)(member_validation_1.MemberValidation.updateMember), member_controller_1.MemberController.updateMember);
router.delete("/:memberId", member_controller_1.MemberController.deleteMember);
exports.memberRoutes = router;
