import { Request, Response } from "express"
import ApiResponse from "./../utils/response.util"

export async function healthcheckController(req: Request, res: Response) {
    return ApiResponse(res, 200, "Email agent server up and running!")
}