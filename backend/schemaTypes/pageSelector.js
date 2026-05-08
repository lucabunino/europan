

export default {
	name: 'pageSelector',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			  hidden: true,
		},
		{
			name: 'pageFrench',
			type: 'reference',
			to: [{ type: 'page' }],
			options: {
				filter: 'language == $lang',
				filterParams: { lang: 'fr' }
			}
		},
		{
			name: 'pageGerman',
			type: 'reference',
			to: [{ type: 'page' }],
			options: {
				filter: 'language == $lang',
				filterParams: { lang: 'de' }
			}
		},
	],
}