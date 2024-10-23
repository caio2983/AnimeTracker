export const trendingSchema = {
  $id: "trendingSchema",
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
              },
              attributes: {
                type: "object",
                properties: {
                  createdAt: { type: "string" },
                  updatedAt: { type: "string" },
                  slug: { type: "string" },
                  synopsis: { type: "string" },
                  description: { type: "string" },
                  coverImageTopOffset: { type: "number" },
                  titles: {
                    type: "object",
                    properties: {
                      en: { type: "string" },
                      en_jp: { type: "string" },
                      ja_jp: { type: "string" },
                    },
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
                  userCount: { type: "number" },
                  favoritesCount: { type: "number" },
                  startDate: { type: "string" },
                  endDate: { type: "object" },
                  nextRelease: { type: "string" },
                  popularityRank: { type: "number" },
                  ratingRank: { type: "number" },
                  ageRating: { type: "string" },
                  ageRatingGuide: { type: "string" },
                  subtype: { type: "string" },
                  status: { type: "string" },
                  episodeLength: { type: "number" },
                  totalLength: { type: "number" },
                  youtubeVideoId: { type: "string" },
                  showType: { type: "string" },
                  nsfw: { type: "boolean" },
                  posterImage: {
                    type: "object",
                    properties: {
                      tiny: { type: "string" },
                      large: { type: "string" },
                      small: { type: "string" },
                      medium: { type: "string" },
                      original: { type: "string" },
                    },
                  },
                  coverImage: {
                    type: "object",
                    properties: {
                      tiny: { type: "string" },
                      large: { type: "string" },
                      small: { type: "string" },
                      original: { type: "string" },
                    },
                  },
                },
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
                      },
                    },
                  },
                  castings: {
                    type: "object",
                    properties: {
                      links: {
                        type: "object",
                        properties: {
                          self: { type: "string" },
                          related: { type: "string" },
                        },
                      },
                    },
                  },
                  installments: {
                    type: "object",
                    properties: {
                      links: {
                        type: "object",
                        properties: {
                          self: { type: "string" },
                          related: { type: "string" },
                        },
                      },
                    },
                  },
                  reviews: {
                    type: "object",
                    properties: {
                      links: {
                        type: "object",
                        properties: {
                          self: { type: "string" },
                          related: { type: "string" },
                        },
                      },
                    },
                  },
                  episodes: {
                    type: "object",
                    properties: {
                      links: {
                        type: "object",
                        properties: {
                          self: { type: "string" },
                          related: { type: "string" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
