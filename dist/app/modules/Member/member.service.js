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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create member
const createNewMemberIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.create({ data });
    return result;
});
// get all members
const getAllMembersFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findMany({});
    return result;
});
// get a member
const getSingleMemberFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    });
    return result;
});
// update a member
const updateMemberIntoDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.update({
        where: {
            memberId: id
        },
        data
    });
    return result;
});
// delete a member
const deleteMemberFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.delete({
        where: {
            memberId: id
        }
    });
    return result;
});
exports.MemberService = {
    createNewMemberIntoDb,
    getAllMembersFromDb,
    getSingleMemberFromDb,
    updateMemberIntoDb,
    deleteMemberFromDb
};
