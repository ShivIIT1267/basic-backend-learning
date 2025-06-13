import mongoose from "mongoose";
import express from "express";
import { error } from "console";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// needed to be done as early as possible to start the dotenv thing
dotenv.config({
  path: "./.env",
});

connectDB();

// this is a method of making and calling
// in place

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}`);

//     app.on("Error", (error) => {
//       console.log("Error Found", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// })();

// import express from "express";

// const app = express();

// import cors from "cors";
// app.get("/api/jokes", (req, res) => {
//   const jokes = [
//     {
//       id: 1,
//       title: "A joke",
//       content: "This is joke 1",
//     },
//     {
//       id: 2,
//       title: "A joke",
//       content: "This is joke 2",
//     },
//     {
//       id: 3,
//       title: "A joke",
//       content: "This is joke 3",
//     },
//     {
//       id: 4,
//       title: "A joke",
//       content: "This is joke 4",
//     },
//   ];
//   res.send(jokes);
// });

// app.listen(3005, () => {
//   console.log("server is running on port 3005");
// });
