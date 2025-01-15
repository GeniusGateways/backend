import type { CollectionConfig } from "payload";

export const StudyAbroad: CollectionConfig = {
    slug: 'studyabroad',
    labels: {
        singular: 'Study Abroad',
        plural: 'Study Abroad',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'createdAt'],
    },
    access: {
        read: () => true, // Allow public read access
        create: ({ req: { user } }) => Boolean(user), // Only logged-in users can create
        update: ({ req: { user } }) => Boolean(user), // Only logged-in users can update
        delete: ({ req: { user } }) => Boolean(user), // Only logged-in users can delete
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Title',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Image',
        },
        {
            name: 'detail',
            type: 'richText',
            label: 'Detail',
            required: true,
        },
        {
            name: 'short_detail',
            type: 'richText',
            label: 'Short_Detail',
            required: true,
        },
    ],
   
}
