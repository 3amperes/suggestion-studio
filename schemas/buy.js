import { FiPenTool } from 'react-icons/fi';

export default {
  name: 'buy',
  title: 'Vente',
  type: 'document',
  icon: FiPenTool,
  fields: [
    {
      name: 'buyReference',
      title: 'Référence',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'property',
      title: 'Bien',
      type: 'property',
    },
    {
      name: 'price',
      title: 'Loyer CC',
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
};
