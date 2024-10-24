import Fastify from "fastify";
import { genreSchema } from "../schemas/genreSchema.js";

const fastify = Fastify({
  logger: true,
});

fastify.addSchema(genreSchema);

async function genresAllRoute(fastify, options) {
  fastify.get("/genresALL", { schema: genreSchema }, async (request, reply) => {
    try {
      const response = await fetch(
        "https://kitsu.io/api/edge/genres?page%5Blimit%5D=10000&page%5Boffset%5D=0"
      );
      const data = await response.json();

      reply.send(data);
    } catch (error) {
      reply.status(500).send({ error: "Something went wrong" });
    }
  });
}

export default genresAllRoute;
