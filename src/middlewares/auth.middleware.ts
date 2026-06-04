import { Request, Response, NextFunction } from "express";
import { authConfig } from "../config/envConfig";
import ApiResponse from "../utils/response.util";
import { logger } from "../logger/logger";

/**
 * Middleware to authenticate requests using an API key.
 * Checks for the API key in the 'x-api-key' header or 'Authorization' Bearer token.
 */
export const authenticateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const expectedApiKey = authConfig.AGENT_API_KEY;

  if (!expectedApiKey) {
    logger.error("API key configuration (AGENT_API_KEY) is missing on the server.");
    return ApiResponse(res, 500, "API key configuration is missing on the server.");
  }

  let apiKey = req.headers["x-api-key"];

  if (!apiKey && req.headers["authorization"]) {
    const parts = req.headers["authorization"].toString().split(" ");
    if (parts.length === 2 && parts[0].toLowerCase() === "bearer") {
      apiKey = parts[1];
    }
  }

  if (!apiKey || apiKey !== expectedApiKey) {
    return ApiResponse(res, 401, "Unauthorized: Invalid or missing API key.");
  }

  next();
};
