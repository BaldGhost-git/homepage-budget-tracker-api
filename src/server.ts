// @deno-types="npm:@types/express@5.0.3";
import express from "express";
import api from "./routes/index.ts";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Budget Tracking API!");
});

app.use(api);

app.listen(8000);
console.log(`Server is running on http://localhost:8000`);
