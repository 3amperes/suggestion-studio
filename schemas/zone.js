import { FiMap } from 'react-icons/fi';

export default {
  name: 'zone',
  title: 'Secteurs',
  type: 'document',
  icon: FiMap,
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'city',
      title: 'Ville',
      type: 'reference',
      to: [{ type: 'place' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city.name',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle,
      };
    },
  },
};
