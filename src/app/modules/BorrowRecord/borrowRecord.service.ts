import { PrismaClient } from "@prisma/client";
import { IBorrowRecord } from "./borrowRecord.interface";

const prisma = new PrismaClient();

const borrowBook = async ({ memberId, bookId }: IBorrowRecord) => {
  const isBookAvailable = await prisma.book.findUnique({
    where: {
      bookId
    },
    select: {
      availableCopies: true
    }
  })

  const member = await prisma.member.findUnique({
    where: {
      memberId
    }
  });

  if (!member) {
    throw new Error("Member not found");
  }

  if (!isBookAvailable || isBookAvailable.availableCopies <= 0) {
    throw new Error("Book is not available");
  }

  const borrowDate = new Date().toISOString();

  const result = await prisma.$transaction(async (tx) => {
    const borrowRecord = await tx.borrowRecord.create({
      data: {
        memberId,
        bookId,
        borrowDate
      }
    });

    await tx.book.update({
      where: {
        bookId
      },
      data: {
        availableCopies: {
          decrement: 1
        }
      }
    });
    const { returnDate, ...filteredBorrowRecord } = borrowRecord;
    return filteredBorrowRecord;
  });
  return result;
};

const returnBook = async ({ borrowId }: Partial<IBorrowRecord>) => {
  const isBorrowRecordExist = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
      returnDate: null
    }
  });
  if (!isBorrowRecordExist) {
    throw new Error("Borrow record not found");
  };

  const returnDate = new Date().toISOString();

  const result = await prisma.$transaction(async (tx) => {
    const borrowRecord = await tx.borrowRecord.update({
      where: {
        borrowId
      },
      data: {
        returnDate
      }
    });

    await tx.book.update({
      where: {
        bookId: borrowRecord.bookId
      },
      data: {
        availableCopies: {
          increment: 1
        }
      }
    });
  });
  return result;
}


export const BorrowRecordService = {
  borrowBook,
  returnBook
};
