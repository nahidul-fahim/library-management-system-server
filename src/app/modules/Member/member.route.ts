import express from "express";
import { MemberController } from "./member.controller";
import validateRequest from "../../middlewares/validate-request";
import { MemberValidation } from "./member.validation";

const router = express.Router();

router.post(
    "/",
    validateRequest(MemberValidation.createMember),
    MemberController.createMember
);

router.get("/", MemberController.getAllMembers);

router.get("/:memberId", MemberController.getSingleMember);

router.put("/:memberId", MemberController.updateMember);

router.delete("/:memberId", MemberController.deleteMember);

export const memberRoutes = router;