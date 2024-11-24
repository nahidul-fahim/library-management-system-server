import { Response } from "express"

const sendResponse = <T>(res: Response, jsonData: {
    status: number,
    success: boolean,
    message: string,
    data?: T | null | undefined
}) => {
    res.status(jsonData.status).json({
        success: jsonData.success,
        status: jsonData.status,
        message: jsonData.message,
        data: jsonData.data || null || undefined
    })
}

export default sendResponse;