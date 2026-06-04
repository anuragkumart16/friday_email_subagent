// import app from "./../src/app"

// export default app 


// // this file lets the server work on vercel.

export default function handler(req: any, res: any) {
  return res.status(200).json({
    success: true,
    message: "Hello from Vercel",
  });
}