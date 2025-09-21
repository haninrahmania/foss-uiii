import { CollectionConfig } from "payload";

export const ComposeAbout: CollectionConfig = {
  slug: "compose-about",
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: "heading",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "About The Center",
    },
    { name: "logo", type: "upload", relationTo: "media" },
    {
      name: "paragraphs",
      type: "array",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
  ],
};
