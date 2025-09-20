// payload/collections/Media.ts
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: { read: () => true },
  upload: {
    // staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      { name: "card", width: 600, height: 600, crop: "centre" },
      { name: "hero", width: 1600, height: 900, crop: "centre" },
    ],
    mimeTypes: ["image/*"],
  },
  admin: { useAsTitle: "filename" },
  fields: [
    { name: "alt", type: "text" },
    { name: "credit", type: "text" },
  ],
};
