import { z } from "zod";


const createMember = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Name must be a string",
            required_error: "Name is required",
        }).min(1, { message: "Name cannot be empty" }),

        email: z.string({
            invalid_type_error: "Email must be a string",
            required_error: "Email is required",
        }).email({ message: "Invalid email format" }),

        phone: z.string({
            invalid_type_error: "Phone number must be a string",
            required_error: "Phone number is required",
        }).min(1, { message: "Phone number cannot be empty" }),

        membershipDate: z.string({
            invalid_type_error: "Membership date must be a valid date",
            required_error: "Membership date is required",
        }),
    })
});

export const MemberValidation = {
    createMember,
};