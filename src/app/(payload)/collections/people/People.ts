import { CollectionConfig } from "payload";

export const People: CollectionConfig = {
  slug: "people",
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "group", "position", "isActive"],
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: { description: "URL-friendly slug. Auto-generated if empty" },
    },
    {
      name: "group",
      type: "select",
      required: true,
      options: [
        { label: "Faculty Member", value: "faculty" },
        { label: "Secretariat Team", value: "secretariat" },
        { label: "Student", value: "student" },
      ],
    },
    { name: "position", type: "text" },
    {
      name: "program",
      type: "select",
      options: [
        { label: "Ph.D. in Political Science", value: "phd-political-science" },
        { label: "M.A. in Political Science", value: "ma-political-science" },
        { label: "MPP - Climate Change", value: "mpp-climate-change" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    { name: "bio", type: "richText" },
    {
      name: "links",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "url", type: "text" },
      ],
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 100,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.name && !data.slug) {
          data.slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        return data;
      },
    ],
  },
};
