export const animeSchema = {
  $id: "animeSchema",
  response: {
    200: {
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              type: { type: "string" },
              links: {
                type: "object",
                properties: {
                  self: { type: "string" },
                },
                required: ["self"],
              },
              attributes: {
                type: "object",
                properties: {
                  createdAt: { type: "string" },
                  updatedAt: { type: "string" },
                  slug: { type: "string" },
                  synopsis: { type: "string" },
                  description: { type: "string" },
                  coverImageTopOffset: { type: "integer" },
                  titles: {
                    type: "object",
                    properties: {
                      en: { type: "string" },
                      en_jp: { type: "string" },
                      en_us: { type: "string" },
                      ja_jp: { type: "string" },
                    },
                    required: ["en", "en_jp", "ja_jp"],
                  },
                  canonicalTitle: { type: "string" },
                  abbreviatedTitles: {
                    type: "array",
                    items: { type: "string" },
                  },
                  averageRating: { type: "string" },
                  ratingFrequencies: {
                    type: "object",
                    additionalProperties: { type: "string" },
                  },
                  userCount: { type: "integer" },
                  favoritesCount: { type: "integer" },
                  startDate: { type: "string" },
                  endDate: { type: "string" },
                  nextRelease: { type: ["string", "null"] },
                  popularityRank: { type: "integer" },
                  ratingRank: { type: "integer" },
                  ageRating: { type: "string" },
                  ageRatingGuide: { type: "string" },
                  subtype: { type: "string" },
                  status: { type: "string" },
                  tba: { type: ["string", "null"] },
                  posterImage: {
                    type: "object",
                    properties: {
                      tiny: { type: "string" },
                      large: { type: "string" },
                      small: { type: "string" },
                      medium: { type: "string" },
                      original: { type: "string" },
                      meta: {
                        type: "object",
                        properties: {
                          dimensions: {
                            type: "object",
                            properties: {
                              tiny: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                              large: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                              small: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                              medium: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                            },
                            required: ["tiny", "large", "small", "medium"],
                          },
                        },
                      },
                    },
                    required: ["tiny", "large", "small", "medium", "original"],
                  },
                  coverImage: {
                    type: "object",
                    properties: {
                      tiny: { type: "string" },
                      large: { type: "string" },
                      small: { type: "string" },
                      original: { type: "string" },
                      meta: {
                        type: "object",
                        properties: {
                          dimensions: {
                            type: "object",
                            properties: {
                              tiny: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                              large: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                              small: {
                                type: "object",
                                properties: {
                                  width: { type: "integer" },
                                  height: { type: "integer" },
                                },
                                required: ["width", "height"],
                              },
                            },
                            required: ["tiny", "large", "small"],
                          },
                        },
                      },
                    },
                    required: ["tiny", "large", "small", "original"],
                  },
                  episodeCount: { type: "integer" },
                  episodeLength: { type: "integer" },
                  totalLength: { type: "integer" },
                  youtubeVideoId: { type: "string" },
                  showType: { type: "string" },
                  nsfw: { type: "boolean" },
                },
                required: [
                  "createdAt",
                  "updatedAt",
                  "slug",
                  "titles",
                  "canonicalTitle",
                  "averageRating",
                  "userCount",
                  "popularityRank",
                  "posterImage",
                  "coverImage",
                  "episodeCount",
                ],
              },
              relationships: {
                type: "object",
                properties: {
                  genres: {
                    type: "object",
                    properties: {
                      links: {
                        type: "object",
                        properties: {
                          self: { type: "string" },
                          related: { type: "string" },
                        },
                        required: ["self", "related"],
                      },
                    },
                  },
                  categories: {
                    type: "object",
                    properties: {
                      links: {
                        type: "object",
                        properties: {
                          self: { type: "string" },
                          related: { type: "string" },
                        },
                        required: ["self", "related"],
                      },
                    },
                  },
                },
                required: ["genres", "categories"],
              },
            },
            required: ["id", "type", "links", "attributes", "relationships"],
          },
        },
      },
    },
  },
};
