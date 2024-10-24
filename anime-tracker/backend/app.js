import Fastify from "fastify";
import trendingRoute from "./routes/trending.js";
import genresAllRoute from "./routes/genresAll.js";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});

fastify.register(trendingRoute);
fastify.register(genresAllRoute);

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

// TODO : search category animes with https://kitsu.io/api/edge/anime?filter[categories]=adventure
