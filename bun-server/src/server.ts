import Bao from "baojs";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("OK");
});

const server = app.listen({ port: 4000 });

console.log(`Listening on ${server.hostname}:${server.port}`);
