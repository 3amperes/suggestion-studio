export default {
  name: "figure",
  type: "image",
  options: {
    hotspot: true
  },
  fields: [
    {
      title: "Texte alternatif",
      name: "alt",
      type: "string",
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "attribution",
      type: "string",
      title: "Attribution"
    }
  ]
};
