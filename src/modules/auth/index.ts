// @deno-types="npm:@types/express@5.0.3";
import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login endpoint should be here");
});

export default router;
