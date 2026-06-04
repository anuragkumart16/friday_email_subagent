import { Router } from "express";
import {
    healthcheckController,
    emailAgentController
} from "./controller"
import { authenticateApiKey } from "../middlewares/auth.middleware"

const emailAgentRouter = Router()

emailAgentRouter.route("/healthcheck").get(healthcheckController)
emailAgentRouter.route("/").post(authenticateApiKey, emailAgentController)

export default emailAgentRouter