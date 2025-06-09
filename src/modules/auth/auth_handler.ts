import { Request, Response } from "express";
import { createUser, getUser } from "./auth_repository.ts";
import {
  baseResponse,
  mappingError,
  mappingSuccess,
} from "../../utils/index.ts";

export function login(req: Request, res: Response) {
  const { username, password } = req.body;
  // TODO: Check if user exists
  // TODO: Compare password from username

  // TODO: Call function to generate JWT
  return baseResponse(res, mappingSuccess("Fetched user", []));
}

export async function register(req: Request, res: Response) {
  const { username, password, full_name, email } = req.body;
  const user = await getUser(username);
  if (user) {
    res.send("Failed to register, user exists").status(400);
  }
  try {
    await createUser(username, password, full_name, email);
    return baseResponse(res, mappingSuccess("Success", []));
  } catch (e) {
    return baseResponse(res, mappingError("Failed to register", e));
  }
}
