import { CollectionConfig } from 'payload'

export const AcademicProgramLanding: CollectionConfig = {
  slug: 'academic-program-landing',
  labels: {
    singular: 'Academic Program Landing',
    plural: 'Academic Program Landing',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'pageTitle',
    defaultColumns: ['pageTitle', 'updatedAt'],
    description: 'Content for the main /academic-program page',
  },
  fields: [
    {
      name: 'pageTitle',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'heroTitle',
          label: 'Hero Title',
          type: 'text',
        },
        {
          name: 'heroSubtitle',
          label: 'Hero Subtitle',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'introTitle',
      label: 'Intro Title',
      type: 'text',
    },
    {
      name: 'introDescription',
      label: 'Intro Description',
      type: 'textarea',
    },
    {
      name: 'vision',
      label: 'Vision',
      type: 'richText',
    },
    {
      name: 'mission',
      label: 'Mission',
      type: 'richText',
    },
    {
      name: 'featuredPrograms',
      label: 'Featured Academic Programs',
      type: 'relationship',
      relationTo: 'academic-programs', 
      hasMany: true,
      admin: {
        description: 'Select which programs to display on the landing page',
      },
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      label: 'Is Published?',
      defaultValue: false,
    },
  ],
}
