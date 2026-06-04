// import app from "./../src/app"

// export default app 


// // this file lets the server work on vercel.

import { StateGraph } from "@langchain/langgraph";
import { Annotation } from "@langchain/langgraph";

const TestState = Annotation.Root({
  message: Annotation<string>(),
});

const graph = new StateGraph(TestState);

export default function handler(req: any, res: any) {
  return res.status(200).json({
    success: true,
  });
}