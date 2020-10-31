import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.editor().schemaType('settings').documentId('settings')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings'].includes(listItem.getId())
      ),
    ]);
