import { UsersIcon, EarthGlobeIcon, EnvelopeIcon} from '@sanity/icons'

export const myStructure = (S, context) => {
  const entities = [
    S.divider(),
    S.documentTypeListItem('news')
      .title('News'),
  ];
  const pages = [
    S.divider(),
    S.documentTypeListItem('about')
      .title('About'),
    S.documentTypeListItem('person')
      .icon(UsersIcon)
      .title('Committee'),
    S.listItem()
      .title('Contacts')
      .icon(EnvelopeIcon)
      .child(S.document().schemaType('contact').documentId('contact')),
  ];
  const competition = [
    S.divider(),
    S.documentTypeListItem('competition')
      .title('Competitions'),
    S.documentTypeListItem('site')
      .title('Sites'),
    S.documentTypeListItem('project')
      .title('Projects'),
  ];
  const siteSettings = [
    S.divider(),
    S.listItem()
      .title('SEO')
      .icon(EarthGlobeIcon)
      .child(S.document().schemaType('seo').documentId('seo')),
    S.documentTypeListItem('policy')
      .title('Policy'),
  ];

  return S.list()
    .title('Contenuti')
    .items([
      ...entities,
      ...competition,
      ...pages,
      ...siteSettings,
    ]);
};