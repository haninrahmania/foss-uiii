import { CollectionConfig } from "payload";

export const ComposePrinciples: CollectionConfig = {
  slug: "compose-principles",
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "icon", type: "upload", relationTo: "media" },
    { name: "sortOrder", type: "number", defaultValue: 100 },
  ],
};
