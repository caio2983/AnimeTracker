import Fastify from "fastify";
import trendingRoute from "./routes/trending.js";

const fastify = Fastify({
  logger: true,
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
