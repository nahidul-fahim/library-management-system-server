import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catch-async";
import sendResponse from "../../shared/send-response";
import { MemberService } from "./member.service";

// create member
const createMember = catchAsync(async (req, res) => {
    const result = await MemberService.createNewMemberIntoDb(req.body);
    sendResponse(res, {
        status: StatusCodes.CREATED,
        success: true,
        message: "Member created successfully",
        data: result
    })
});

// get all members
const getAllMembers = catchAsync(async (req, res) => {
    const result = await MemberService.getAllMembersFromDb();
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Members retrieved successfully",
        data: result
    })
});

// get single member
const getSingleMember = catchAsync(async (req, res) => {
    const result = await MemberService.getSingleMemberFromDb(req?.params?.memberId);
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Member retrieved successfully",
        data: result
    })
});

// update member
const updateMember = catchAsync(async (req, res) => {
    const result = await MemberService.updateMemberIntoDb(req?.params?.memberId, req.body);
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Member updated successfully",
        data: result
    })
});

// delete a member
const deleteMember = catchAsync(async (req, res) => {
    await MemberService.deleteMemberFromDb(req?.params?.memberId);
    sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Member successfully deleted",
    })
})


export const MemberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember
}