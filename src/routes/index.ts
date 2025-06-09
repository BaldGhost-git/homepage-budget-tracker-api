import { Router } from "@oak/oak";
import auth from "../modules/auth/index.ts";

const routing = new Router();

const API_TAG: string = "/api";

routing.use(`${API_TAG}/auth`, auth.routes(), auth.allowedMethods());

export default routing;
