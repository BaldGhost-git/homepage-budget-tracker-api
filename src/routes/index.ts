import express from "express";
import auth from "../modules/auth/index.ts";

const routing = express();

routing.disable("x-powered-by");

const API_TAG: string = "/api";

routing.use(`${API_TAG}/auth`, auth);

export default routing;
