"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import animeRelationShipsRoute from "../backend/routes/animeRelationships.js";
const app = Fastify({ logger: true });

app.get("/api", async (request, reply) => {
  reply.send({ message: "Welcome to the API!" });
});

app.register(animeRelationShipsRoute);

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
