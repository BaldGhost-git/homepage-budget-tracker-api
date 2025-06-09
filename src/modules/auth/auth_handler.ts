import { Context } from "@oak/oak";
import { createUser, getUser } from "./auth_repository.ts";
import {
  baseResponse,
  mappingError,
  mappingSuccess,
} from "../../utils/index.ts";

export async function login(ctx: Context) {
  const { username, password } = await ctx.request.body.json();
  // TODO: Check if user exists
  // TODO: Compare password from username

  // TODO: Call function to generate JWT
  return baseResponse(ctx, mappingSuccess("Fetched user", []));
}

export async function register(ctx: Context) {
  const { username, password, full_name, email } = await ctx.request.body
    .json();
  const user = await getUser(username);
  if (user) {
    return baseResponse(ctx, mappingError("User exists"));
  }
  try {
    await createUser(username, password, full_name, email);
    return baseResponse(ctx, mappingSuccess("Success", []));
  } catch (e) {
    return baseResponse(ctx, mappingError("Failed to register", e));
  }
}
