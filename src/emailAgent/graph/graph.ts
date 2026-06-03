import { StateGraph, START, END } from "@langchain/langgraph";
import { EmailStateAnnotation } from "./state";



// Node imports
import generateEmail from "./nodes/generateEmail.node";

const graph = new StateGraph(EmailStateAnnotation)
  .addNode("generateEmail", generateEmail)
  .addEdge(START, "generateEmail")
  .addEdge("generateEmail", END);


export const emailAgentGraph = graph.compile()