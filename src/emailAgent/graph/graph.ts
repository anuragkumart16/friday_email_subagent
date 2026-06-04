import { StateGraph, START, END } from "@langchain/langgraph";
import { EmailStateAnnotation } from "./state";



// Node imports
import generateEmail from "./nodes/generateEmail.node";
import sendEmail from "./nodes/sendEmail.node";
import checkApproval from "./nodes/checker.node";
import { IEmailState } from "./state";

const graph = new StateGraph(EmailStateAnnotation)
  .addNode("generateEmail", generateEmail)
  .addNode("sendEmail",sendEmail)
  .addNode("checkApproval",checkApproval)
  .addEdge(START, "checkApproval")
  .addConditionalEdges("checkApproval",(state:IEmailState)=>state.approved?"sendEmail":"generateEmail")
  .addEdge("generateEmail",END)
  .addEdge("sendEmail", END);


export const emailAgentGraph = graph.compile()