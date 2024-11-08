import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

async function animeRelationShipsRoute(fastify, options) {
  fastify.get(
    "/relationships/:id",

    async (request, reply) => {
      try {
        const { id } = request.params;

        if (!id) {
          return reply
            .status(400)
            .send({ error: "The 'id' query parameter is required" });
        }

        const responseObject = {
          characters: null,
          genres: null,
          productions: null,
          castings: null,
          reviews: null,
        };

        const urls = {
          genres: `https://kitsu.io/api/edge/anime/${id}/genres`,
          characters: `https://kitsu.io/api/edge/anime/${id}/characters`,
          productions: `https://kitsu.io/api/edge/anime/${id}/productions`,
          castings: `https://kitsu.io/api/edge/anime/${id}/castings`,
          reviews: `https://kitsu.io/api/edge/anime/${id}/reviews`,
        };

        async function fetchCharacterData() {
          const responseCharacter = await fetch(urls.characters);
          const characterData = await responseCharacter.json();

          const characterDetailsPromises = characterData.data.map(
            async (character) => {
              const relatedLinks = character.relationships;

              const mediaLink = relatedLinks.media.links.related;
              const characterLink = relatedLinks.character.links.related;
              const voicesLink = relatedLinks.voices.links.related;

              const [mediaResponse, characterResponse, voicesResponse] =
                await Promise.all([
                  fetch(mediaLink).then((res) => res.json()),
                  fetch(characterLink).then((res) => res.json()),
                  fetch(voicesLink).then((res) => res.json()),
                ]);

              return {
                id: character.id,
                media: mediaResponse,
                character: characterResponse,
                voices: voicesResponse,
              };
            }
          );

          const characterDetails = await Promise.all(characterDetailsPromises);
          return characterDetails;
          // console.log(characterDetails);
        }

        const resCharacter = await fetchCharacterData();
        responseObject.characters = resCharacter;

        reply.send(responseObject);
      } catch (error) {
        reply.status(500).send({ error: "Something went wrong" });
      }
    }
  );
}

export default animeRelationShipsRoute;
