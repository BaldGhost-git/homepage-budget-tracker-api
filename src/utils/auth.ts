// @deno-types="npm:@types/jsonwebtoken@9.0.9";

import { Algorithm, verify } from "jsonwebtoken";
const alg = (Deno.env.get("JWT_ALG") ?? "HS256") as Algorithm;
const JWT_SECRET = Deno.env.get("JWT_SECRET") ?? "xxx";

export function validate(token: string) {
  const credential = verify(token, JWT_SECRET, { algorithms: [alg] });
  return credential;
}

export function createJwt(payload: object) {
  return null;
}
