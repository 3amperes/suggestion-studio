import { FiMapPin } from "react-icons/fi";

export default {
  name: "rent",
  title: "Annonce de location",
  type: "document",
  icon: FiMapPin,
  fields: [
    {
      name: "rentReference",
      title: "Référence",
      type: "string",
      validation: Rule => Rule.required()
    },
    { name: "date", title: "Date", type: "date" },
    {
      name: "property",
      title: "Bien",
      type: "reference",
      to: [{ type: "property" }],
      validation: Rule => Rule.required()
    }
    // {
    //   name: "thumbnail",
    //   title: "Vignette",
    //   type: "figure"
    // },
    // {
    //   name: "description",
    //   title: "Description",
    //   type: "richText"
    // },
    // {
    //   name: "rent",
    //   title: "Loyer",
    //   type: "number"
    // },
    // {
    //   name: "charges",
    //   title: "Prix des charges",
    //   type: "number"
    // },
    // {
    //   name: "depositAmount",
    //   title: "Montant du dépôt de garantie",
    //   type: "number"
    // },
    // {
    //   name: "rentalAmount",
    //   title: "Montant des honoraires de location",
    //   type: "number"
    // }
  ]
};
