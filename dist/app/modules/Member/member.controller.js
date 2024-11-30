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
exports.MemberController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catch_async_1 = __importDefault(require("../../shared/catch-async"));
const send_response_1 = __importDefault(require("../../shared/send-response"));
const member_service_1 = require("./member.service");
// create member
const createMember = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.createNewMemberIntoDb(req.body);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Member created successfully",
        data: result
    });
}));
// get all members
const getAllMembers = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.getAllMembersFromDb();
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Members retrieved successfully",
        data: result
    });
}));
// get single member
const getSingleMember = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield member_service_1.MemberService.getSingleMemberFromDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.memberId);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Member retrieved successfully",
        data: result
    });
}));
// update member
const updateMember = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield member_service_1.MemberService.updateMemberIntoDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.memberId, req.body);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Member updated successfully",
        data: result
    });
}));
// delete a member
const deleteMember = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield member_service_1.MemberService.deleteMemberFromDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.memberId);
    (0, send_response_1.default)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Member successfully deleted",
    });
}));
exports.MemberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember
};
