import { FiHome } from 'react-icons/fi';
import LeafletGeopointInput from 'sanity-plugin-leaflet-input';

export default {
  name: 'property',
  title: 'Bien Immobilier',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rooms',
      title: 'Nombre de pièces',
      type: 'number',
      options: {
        list: [1, 2, 3, { value: 4, title: '4 et plus' }],
      },
    },
    {
      name: 'area',
      title: 'Surface',
      type: 'number',
    },

    {
      name: 'place',
      title: 'Ville',
      type: 'reference',
      to: [{ type: 'place' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'zone',
      title: 'Secteur',
      type: 'reference',
      to: [{ type: 'zone' }],
      options: {
        filter: ({ document }) => {
          // Always make sure to check for document properties
          // before attempting to use them
          if (!document.property.place) {
            return {};
          }

          return {
            filter: 'city._ref == $city._ref',
            params: {
              city: document.property.place,
            },
          };
        },
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      inputComponent: LeafletGeopointInput,
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your event.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'gallery',
      title: 'Galerie',
      type: 'array',
      of: [{ type: 'figure' }],
    },
    {
      name: 'detail',
      type: 'array',
      title: 'Caractéristiques Détaillées',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Titre' },
            { name: 'desc', type: 'string', title: 'desc' },
          ],
        },
      ],
    },
    {
      name: 'dpe',
      type: 'number',
      title: 'Consommation énergétique (DPE)',
      description: 'en KWh/m²/an',
    },
    {
      name: 'ges',
      type: 'number',
      title: 'Émission de gaz à effet de serre (GES)',
      description: 'en  kg éq CO2/m²/an',
    },
  ],
};
