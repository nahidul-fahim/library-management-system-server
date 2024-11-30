"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const createBook = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            invalid_type_error: "Title must be a string",
            required_error: "Title is required",
        }).min(1, { message: "Title cannot be empty" }),
        genre: zod_1.z.string({
            invalid_type_error: "Genre must be a string",
            required_error: "Genre is required",
        }).min(1, { message: "Genre cannot be empty" }),
        publishedYear: zod_1.z.number({
            invalid_type_error: "Published Year must be a number",
            required_error: "Published Year is required",
        }).int({ message: "Published Year must be an integer" }),
        totalCopies: zod_1.z.number({
            invalid_type_error: "Total Copies must be a number",
            required_error: "Total Copies is required",
        }).int({ message: "Total Copies must be an integer" }),
        availableCopies: zod_1.z.number({
            invalid_type_error: "Available Copies must be a number",
            required_error: "Available Copies is required",
        }).int({ message: "Available Copies must be an integer" }),
    })
});
const updateBook = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            invalid_type_error: "Title must be a string"
        }).min(1, { message: "Title cannot be empty" }).optional(),
        genre: zod_1.z.string({
            invalid_type_error: "Genre must be a string"
        }).min(1, { message: "Genre cannot be empty" }).optional(),
        publishedYear: zod_1.z.number({
            invalid_type_error: "Published Year must be a number"
        }).int({ message: "Published Year must be an integer" }).optional(),
        totalCopies: zod_1.z.number({
            invalid_type_error: "Total Copies must be a number"
        }).int({ message: "Total Copies must be an integer" }).optional(),
        availableCopies: zod_1.z.number({
            invalid_type_error: "Available Copies must be a number"
        }).int({ message: "Available Copies must be an integer" }).optional(),
    })
});
exports.BookValidation = {
    createBook,
    updateBook
};
