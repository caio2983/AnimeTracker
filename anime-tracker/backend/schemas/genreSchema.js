export const genreSchema = {
  $id: "genreSchema",
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
                  self: { type: "string", format: "uri" },
                },
                required: ["self"],
              },
              attributes: {
                type: "object",
                properties: {
                  createdAt: { type: "string", format: "date-time" },
                  updatedAt: { type: "string", format: "date-time" },
                  name: { type: "string" },
                  slug: { type: "string" },
                  description: { type: ["string", "null"] },
                },
                required: [
                  "createdAt",
                  "updatedAt",
                  "name",
                  "slug",
                  "description",
                ],
              },
            },
            required: ["id", "type", "links", "attributes"],
          },
        },
      },
      required: ["data"],
    },
  },
};
