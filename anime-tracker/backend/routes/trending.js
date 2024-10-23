import Fastify from "fastify";
import { trendingSchema } from "../schemas/trendingSchema.js";

const fastify = Fastify({
  logger: true,
});

fastify.addSchema(trendingSchema);

async function trendingRoute(fastify, options) {
  fastify.get(
    "/trending",
    { schema: trendingSchema },
    async (request, reply) => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/trending/anime"
        );
        const data = await response.json();

        reply.send(data);
      } catch (error) {
        reply.status(500).send({ error: "Something went wrong" });
      }
    }
  );
}

export default trendingRoute;
