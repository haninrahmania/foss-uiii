import { CollectionConfig } from "payload";

export const Publications: CollectionConfig = {
  slug: "publications",
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "authorName", "publishedAt", "isActive"],
    group: "Research & Publication",
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: { description: "Auto dari title bila kosong" },
    },

    // tipe konten: halaman2 kamu bisa share schema yg sama
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Lecturers Journal", value: "lecturer" },
        { label: "Students Journal", value: "student" },
        { label: "Working Paper (COMPOSE)", value: "working-paper" },
        { label: "Compose Article", value: "compose-article" },
      ],
    },

    // cover
    { name: "cover", type: "upload", relationTo: "media", required: true },

    // author bebas teks (simple). kalau mau relate ke People, tambahkan relationTo 'people'
    { name: "authorName", type: "text", required: true },

    // tanggal publish
    {
      name: "publishedAt",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
    },

    // ringkas & konten penuh
    { name: "excerpt", type: "textarea" },
    { name: "content", type: "richText" },

    // tagging & kontrol
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
    },
    { name: "isFeatured", type: "checkbox", defaultValue: false },
    { name: "isActive", type: "checkbox", defaultValue: true },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        return data;
      },
    ],
  },
};
