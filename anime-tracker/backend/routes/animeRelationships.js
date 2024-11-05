import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

async function animeRelationShipsRoute(fastify, options) {
  fastify.get(
    "/relationships/id",

    async (request, reply) => {
      try {
        const { id } = request.query;

        if (!id) {
          return reply
            .status(400)
            .send({ error: "The 'id' query parameter is required" });
        }

        const urls = {
          genres: `https://kitsu.io/api/edge/anime/${id}/genres`,
          characters: `https://kitsu.io/api/edge/anime/${id}/characters`,
          productions: `https://kitsu.io/api/edge/anime/${id}/productions`,
          castings: `https://kitsu.io/api/edge/anime/${id}/castings`,
          reviews: `https://kitsu.io/api/edge/anime/${id}/reviews`,
        };

        const responses = await Promise.all(
          Object.entries(urls).map(async ([key, url]) => {
            const response = await fetch(url);
            const data = await response.json();
            return { [key]: data };
          })
        );

        const result = responses.reduce((acc, item) => {
          return { ...acc, ...item };
        }, {});

        reply.send(result);
      } catch (error) {
        reply.status(500).send({ error: "Something went wrong" });
      }
    }
  );
}

export default animeRelationShipsRoute;
