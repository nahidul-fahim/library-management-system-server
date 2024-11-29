import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express"
import { StatusCodes } from 'http-status-codes';
import CustomError from "../../error/custom-error";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;

    if (err instanceof Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            statusCode = StatusCodes.CONFLICT;
            message = "Already exists";
        }
    }
    else if (err instanceof CustomError){
        statusCode = err.statusCode;
        message = err.message;
    }

    res.status(statusCode).json({
        success,
        status: statusCode,
        message,
        // error
    })
};

export default globalErrorHandler;