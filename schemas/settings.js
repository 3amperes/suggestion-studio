import { FiSettings } from 'react-icons/fi';
export default {
  name: 'settings',
  title: 'Configuration',
  type: 'document',
  icon: FiSettings,
  fields: [
    {
      name: 'title',
      title: 'Titre du site',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
