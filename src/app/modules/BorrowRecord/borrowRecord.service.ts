import { PrismaClient } from "@prisma/client";
import { IBorrowRecord } from "./borrowRecord.interface";
import CustomError from "../../../error/custom-error";

const prisma = new PrismaClient();

// borrow a book
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
    throw new CustomError(404, "Member not found");
  }
  if (!isBookAvailable || isBookAvailable.availableCopies <= 0) {
    throw new CustomError(404, "Book is not available for borrowing");
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

// return a book
const returnBook = async ({ borrowId }: Partial<IBorrowRecord>) => {
  const isBorrowRecordExist = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
      returnDate: null
    }
  });
  if (!isBorrowRecordExist) {
    throw new CustomError(404, "Borrow record not found");
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

// get all overdue
const getAllOverdueFromDb = async () => {
  const unreturnedBorrowList = await prisma.borrowRecord.findMany({
    where: { returnDate: null },
    include: { book: true, member: true }
  });

  const overdueRecords = unreturnedBorrowList.map((record) => {
    const borrowDate = record.borrowDate;
    const today = new Date();
    const overdueDays = Math.ceil((today.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24));
    if (overdueDays > 14) {
      return {
        borrowId: record.borrowId,
        bookTitle: record.book.title,
        borrowerName: record.member.name,
        overdueDays
      }
    }
    return null;
  })
    .filter((record) => record !== null);
  return overdueRecords;
};


export const BorrowRecordService = {
  borrowBook,
  returnBook,
  getAllOverdueFromDb
};
