import { Request, Response } from "express"
import ApiResponse from "./../utils/response.util"
import { emailAgentGraph } from "./graph/graph"

/**
 * @description Health check controller for email agent
 * @route       GET /api/v1/healthcheck
 * @returns     JSON response with health status
 */
export async function healthcheckController(req: Request, res: Response) {
    return ApiResponse(res, 200, "Email agent server up and running!")
}


export async function emailAgentController(req: Request, res: Response) {

    const response = await emailAgentGraph.invoke({
        recipient : "anurag@google.com"
    })
    console.log(response)
    
    return ApiResponse(res,200,"Agent Responded Succeddfully",response)

}
