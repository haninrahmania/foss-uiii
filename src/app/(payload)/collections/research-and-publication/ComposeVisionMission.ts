import { CollectionConfig } from "payload";

export const ComposeVisionMission: CollectionConfig = {
  slug: "compose-vision-mission",
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: { useAsTitle: "id" },
  fields: [
    { name: "vision", type: "textarea", required: true },
    {
      name: "missions",
      type: "array",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
  ],
};
