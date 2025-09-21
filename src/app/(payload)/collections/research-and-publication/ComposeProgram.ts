import { CollectionConfig } from "payload";

export const ComposeProgram: CollectionConfig = {
  slug: "compose-programs",
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "type",
      type: "select",
      options: ["research-program", "approach", "fellowship"],
      required: true,
    },
  ],
};
