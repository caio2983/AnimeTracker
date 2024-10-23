import Fastify from "fastify";
import trendingRoute from "./routes/trending.js";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});

fastify.register(trendingRoute);

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
