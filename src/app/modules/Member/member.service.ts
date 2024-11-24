import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

// create member
const createNewMemberIntoDb = async (data: any) => {
    const result = await prisma.member.create({ data })
    return result;
};

// get all members
const getAllMembersFromDb = async () => {
    const result = await prisma.member.findMany({});
    return result;
}

// get a member
const getSingleMemberFromDb = async (id: string) => {
    const result = await prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    });
    return result;
};

// update a member
const updateMemberIntoDb = async (id: string, data: any) => {
    const result = await prisma.member.update({
        where: {
            memberId: id
        },
        data
    });
    return result;
};

// delete a member
const deleteMemberFromDb = async (id: string) => {
    const result = await prisma.member.delete({
        where: {
            memberId: id
        }
    });
    return result;
}


export const MemberService = {
    createNewMemberIntoDb,
    getAllMembersFromDb,
    getSingleMemberFromDb,
    updateMemberIntoDb,
    deleteMemberFromDb
}