"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberValidation = void 0;
const zod_1 = require("zod");
const createMember = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Name must be a string",
            required_error: "Name is required",
        }).min(1, { message: "Name cannot be empty" }),
        email: zod_1.z.string({
            invalid_type_error: "Email must be a string",
            required_error: "Email is required",
        }).email({ message: "Invalid email format" }),
        phone: zod_1.z.string({
            invalid_type_error: "Phone number must be a string",
            required_error: "Phone number is required",
        }).min(1, { message: "Phone number cannot be empty" }),
        membershipDate: zod_1.z.string({
            invalid_type_error: "Membership date must be a valid date",
            required_error: "Membership date is required",
        }),
    })
});
const updateMember = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Name must be a string"
        }).min(1, { message: "Name cannot be empty" }).optional(),
        email: zod_1.z.string({
            invalid_type_error: "Email must be a string"
        }).email({ message: "Invalid email format" }).optional(),
        phone: zod_1.z.string({
            invalid_type_error: "Phone number must be a string"
        }).min(1, { message: "Phone number cannot be empty" }).optional(),
        membershipDate: zod_1.z.string({
            invalid_type_error: "Membership date must be a valid date"
        }).optional()
    })
});
exports.MemberValidation = {
    createMember,
    updateMember
};
