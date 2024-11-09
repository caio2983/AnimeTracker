"use strict";

import Fastify from "fastify";
import animeRelationShipsRoute from "../backend/routes/animeRelationships.js";
const app = Fastify({ logger: true });

app.get(
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
      }

      async function fetchGenresData() {
        const genres = [];
        const responseGenres = await fetch(urls.genres);
        const genresData = await responseGenres.json();

        genresData.data.forEach((genre) => {
          genres.push(genre.attributes.name);
        });

        return genres;
      }

      async function fetchCastingsData() {
        const castings = [];

        const responseCastings = await fetch(urls.castings);
        const reviewsData = await responseReviews.json();

        reviewsData.data.forEach((review) => {
          reviews.push(review);
        });

        return reviews;
      }

      async function fetchReviewsData() {
        const reviews = [];

        const responseReviews = await fetch(urls.reviews);
        const reviewsData = await responseReviews.json();

        reviewsData.data.forEach((review) => {
          reviews.push(review);
        });

        return reviews;
      }

      const resCharacter = await fetchCharacterData();
      const resGenres = await fetchGenresData();
      const resReviews = await fetchReviewsData();
      responseObject.characters = resCharacter;
      responseObject.genres = resGenres;
      responseObject.reviews = resReviews;

      process.on("uncaughtException", function (err) {
        console.log(err);
      });

      reply.send(responseObject);
    } catch (error) {
      reply.status(500).send({ error: "Something went wrong" });
    }
  }
);

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
