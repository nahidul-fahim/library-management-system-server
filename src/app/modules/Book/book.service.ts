import { PrismaClient } from "@prisma/client";
import { IBook } from "./book.interface";

const prisma = new PrismaClient();

// create book
const createNewBookIntoDb = async (data: IBook) => {
    const result = await prisma.book.create({ data });
    return result;
};

// get all books
const getAllBooksFromDb = async () => {
    const result = await prisma.book.findMany({});
    return result;
};

// get a book
const getSingleBookFromDb = async (id: string) => {
    const result = await prisma.book.findUniqueOrThrow({
        where: {
            bookId: id
        }
    });
    return result;
};

// update a book
const updateBookIntoDb = async (id: string, data: Partial<IBook>) => {
    const result = await prisma.book.update({
        where: {
            bookId: id
        },
        data
    });
    return result;
};

// delete a book
const deleteBookFromDb = async (id: string) => {
    const result = await prisma.book.delete({
        where: {
            bookId: id
        }
    });
    return result;
};

export const BookService = {
    createNewBookIntoDb,
    getAllBooksFromDb,
    getSingleBookFromDb,
    updateBookIntoDb,
    deleteBookFromDb
};
