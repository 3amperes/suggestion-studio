import { FiHome } from "react-icons/fi";

export default {
  name: "property",
  title: "Bien Immobilier",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "category",
      title: "Categorie",
      type: "string",
      options: {
        list: [
          { title: "Appartement", value: "apartment" },
          { title: "Maison", value: "house" },
          { title: "Autre (garage, atelier, etc)", value: "other" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "floor",
      title: "Étage",
      type: "number",
      validation: (Rule) => Rule.integer(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "T1", value: "1" },
          { title: "T2", value: "2" },
          { title: "T3", value: "3" },
          { title: "T4", value: "4" },
          { title: "T5", value: "5" },
        ],
      },
    },
    {
      name: "surface",
      title: "Surface",
      type: "number",
    },
    {
      name: "thumbnail",
      title: "Vignette",
      type: "figure",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your event.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
