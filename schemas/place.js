import { FiMapPin } from "react-icons/fi";

export default {
  name: "city",
  title: "Ville",
  type: "document",
  icon: FiMapPin,
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
