import { FiTag } from 'react-icons/fi';

export default {
  name: 'category',
  title: 'Types de bien',
  type: 'document',
  icon: FiTag,
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
