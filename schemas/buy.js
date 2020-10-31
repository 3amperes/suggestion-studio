import { FiPenTool } from 'react-icons/fi';

export default {
  name: 'buy',
  title: 'À Vendre',
  type: 'document',
  icon: FiPenTool,
  fields: [
    {
      name: 'slugRef',
      title: 'Référence',
      type: 'slug',
      validation: (Rule) => Rule.required(),
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
    {
      name: 'property',
      title: 'Bien immobilier',
      type: 'property',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    { name: 'description', title: 'Description', type: 'richText' },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
      description: 'en €',
    },
    {
      name: 'priceDetail',
      type: 'array',
      title: 'Détail du prix',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Titre' },
            { name: 'desc', type: 'number', title: 'Prix' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      ref: 'slugRef.current',
      title: 'title',
      city: 'property.place.name',
      sector: 'property.zone.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const { title, city, sector, media, ref } = selection;
      function getSubtitle() {
        if (!!sector) {
          return `${city} - ${sector}`;
        }
        return city;
      }
      return {
        title: `[${ref}] ${title}`,
        subtitle: getSubtitle(),
        media: media,
      };
    },
  },
};
