import { Router } from "express";
import {
    healthcheckController
} from "./controller"

const emailAgentRouter = Router()

emailAgentRouter.route("/healthcheck").get(healthcheckController)

export default emailAgentRouter