import { z } from "zod";

const createBook = z.object({
    body: z.object({
        title: z.string({
            invalid_type_error: "Title must be a string",
            required_error: "Title is required",
        }).min(1, { message: "Title cannot be empty" }),

        genre: z.string({
            invalid_type_error: "Genre must be a string",
            required_error: "Genre is required",
        }).min(1, { message: "Genre cannot be empty" }),

        publishedYear: z.number({
            invalid_type_error: "Published Year must be a number",
            required_error: "Published Year is required",
        }).int({ message: "Published Year must be an integer" }),

        totalCopies: z.number({
            invalid_type_error: "Total Copies must be a number",
            required_error: "Total Copies is required",
        }).int({ message: "Total Copies must be an integer" }),

        availableCopies: z.number({
            invalid_type_error: "Available Copies must be a number",
            required_error: "Available Copies is required",
        }).int({ message: "Available Copies must be an integer" }),
    })
});


const updateBook = z.object({
    body: z.object({
        title: z.string({
            invalid_type_error: "Title must be a string"
        }).min(1, { message: "Title cannot be empty" }).optional(),

        genre: z.string({
            invalid_type_error: "Genre must be a string"
        }).min(1, { message: "Genre cannot be empty" }).optional(),

        publishedYear: z.number({
            invalid_type_error: "Published Year must be a number"
        }).int({ message: "Published Year must be an integer" }).optional(),

        totalCopies: z.number({
            invalid_type_error: "Total Copies must be a number"
        }).int({ message: "Total Copies must be an integer" }).optional(),

        availableCopies: z.number({
            invalid_type_error: "Available Copies must be a number"
        }).int({ message: "Available Copies must be an integer" }).optional(),
    })
});

export const BookValidation = {
    createBook,
    updateBook
};
