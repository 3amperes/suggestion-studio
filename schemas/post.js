import { FiEdit } from 'react-icons/fi';

export default {
  name: 'post',
  title: 'Article',
  type: 'document',
  icon: FiEdit,
  fields: [
    {
      name: 'slug',
      title: 'Référence',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Vignette',
      type: 'figure',
    },
    { name: 'description', title: 'Description', type: 'richText' },
  ],
};
