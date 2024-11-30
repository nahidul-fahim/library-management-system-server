"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = __importDefault(require("../../error/custom-error"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            statusCode = http_status_codes_1.StatusCodes.CONFLICT;
            message = "Already exists";
        }
    }
    else if (err instanceof custom_error_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    res.status(statusCode).json({
        success,
        status: statusCode,
        message,
        // error
    });
};
exports.default = globalErrorHandler;
