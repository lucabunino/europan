import { UsersIcon, EarthGlobeIcon, InfoOutlineIcon} from '@sanity/icons'

export const myStructure = (S, context) => {
  const entities = [
    S.divider(),
    S.documentTypeListItem('news')
      .title('News'),
    S.documentTypeListItem('featuredNews')
      .title('Featured News'),
  ];
  const pages = [
    S.divider(),
    S.listItem()
      .title('About')
      .icon(InfoOutlineIcon)
      .child(
        S.list()
          .title('About')
          .items([
            S.documentTypeListItem('whatIsEuropan'),
            S.documentTypeListItem('team'),
            S.documentTypeListItem('partner')
              .title('Partners'),
            S.documentTypeListItem('supportUs')
          ])
      ),
    S.documentTypeListItem('contact')
  ];
  const competition = [
    S.divider(),
    S.documentTypeListItem('competition')
      .title('Competitions'),
    S.documentTypeListItem('site')
      .title('Sites'),
    S.documentTypeListItem('project')
      .title('Projects'),
    S.documentTypeListItem('person')
      .title('People')
      .icon(UsersIcon),
  ];
  const siteSettings = [
    S.divider(),
    S.documentTypeListItem('seo')
      .title('SEO'),
    S.documentTypeListItem('policy')
      .title('Policy'),
    S.documentTypeListItem('translation.metadata')
      .title('Translations'),
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