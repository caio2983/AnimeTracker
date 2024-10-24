import Fastify from "fastify";
import { animeSchema } from "../schemas/animeSchema.js";

const fastify = Fastify({
  logger: true,
});

fastify.addSchema(animeSchema);

async function animesByGenreRoute(fastify, options) {
  fastify.get(
    "/anime/genre",
    { schema: animeSchema },
    async (request, reply) => {
      try {
        const { genres } = request.query;

        if (!genres) {
          return reply
            .status(400)
            .send({ error: "The 'genres' query parameter is required" });
        }

        const response = await fetch(
          `https://kitsu.io/api/edge/anime?filter[genres]=${encodeURIComponent(
            genres
          )}`
        );
        const data = await response.json();

        reply.send(data);
      } catch (error) {
        reply.status(500).send({ error: "Something went wrong" });
      }
    }
  );
}

export default animesByGenreRoute;
