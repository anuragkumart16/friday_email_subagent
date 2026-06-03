import { Router } from "express";
import {
    healthcheckController,
    emailAgentController
} from "./controller"

const emailAgentRouter = Router()

emailAgentRouter.route("/healthcheck").get(healthcheckController)
emailAgentRouter.route("/").post(emailAgentController)

export default emailAgentRouter