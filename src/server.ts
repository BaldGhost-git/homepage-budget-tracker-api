import { Application, Router } from "@oak/oak";
import api from "./routes/index.ts";
import { connect } from "./config/database.ts";

const app = new Application();
const route = new Router();
const port = Deno.env.get("APP_PORT") ?? "8000";
await connect();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${ctx.request.method} ${ctx.request.url} - ${rt} - ${ctx.response.status}`,
  );
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

route.get("/", (ctx) => {
  ctx.response.body = "Welcome to the Budget Tracking API";
});

app.use(api.routes());
app.use(api.allowedMethods());

app.listen({ port: parseInt(port) });
console.log(`Server is running on http://localhost:${port}`);
