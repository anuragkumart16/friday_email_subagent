// import app from "./../src/app"

// export default app 


// // this file lets the server work on vercel.

import { StateGraph } from "@langchain/langgraph";

console.log("Before graph");

const graph = new StateGraph({} as any);

console.log("After graph");

export default function handler(req: any, res: any) {
  return res.json({ success: true });
}