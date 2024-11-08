"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import animeRelationShipsRoute from "../backend/routes/animeRelationships";
const app = Fastify({ logger: true });

app.register(cors, {
  origin: "*",
});

app.register(animeRelationShipsRoute);

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
