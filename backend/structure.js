import { UsersIcon, InfoOutlineIcon, TokenIcon, EmptyIcon, InfoFilledIcon, DocumentIcon} from '@sanity/icons'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const myStructure = (S, context) => {
  const entities = [
    S.divider(),
    S.documentTypeListItem('news')
      .title('News'),
    S.documentTypeListItem('featuredNews')
      .title('Featured News'),
  ];

  const partnersMenu = S.listItem()
    .title('Partners')
    .icon(TokenIcon)
    .child(
      S.list()
        .title('Partners by Language')
        .items([
          orderableDocumentListDeskItem({
            type: 'partner',
            title: 'Partners [DE]',
            id: 'partners-de',
            filter: `language == "de"`,
            S,
            context
          }),
          orderableDocumentListDeskItem({
            type: 'partner',
            title: 'Partners [FR]',
            id: 'partners-fr',
            filter: `language == "fr"`,
            S,
            context
          })
        ])
    );

  const pages = [
    S.divider(),
    S.listItem()
      .title('About')
      .icon(InfoOutlineIcon)
      .child(
        S.list()
          .title('About')
          .items([
			S.listItem()
				.title('Europan Switzerland')
				.icon(DocumentIcon)
				.child(
				S.document()
					.schemaType('pageSelector')
					.documentId('europan-switzerland')
					.title('Europan Switzerland')
				),
            S.documentTypeListItem('team'),
            partnersMenu,
            S.documentTypeListItem('supportUs')
          ])
      ),
    S.documentTypeListItem('contact'),
	S.documentTypeListItem('page')
      .title('Pages'),
  ];
  const competition = [
    S.divider(),
    S.listItem()
      .title('What is Europan')
      .icon(DocumentIcon)
      .child(
        S.document()
          .schemaType('pageSelector')
          .documentId('what-is-europan')
          .title('What is Europan')
      ),
	S.listItem()
      .title('Promoter')
      .icon(DocumentIcon)
      .child(
        S.document()
          .schemaType('pageSelector')
          .documentId('promoter')
          .title('promoter')
      ),
    S.documentTypeListItem('competition').title('Competitions'),
    S.documentTypeListItem('site').title('Sites'),
    S.documentTypeListItem('project').title('Projects'),
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