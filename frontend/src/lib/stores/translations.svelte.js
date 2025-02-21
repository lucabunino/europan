let translations = $state([]);

export function getTranslations() {
	
	function setTranslations(s) {
		translations = s
	}

	return {
		get translations() {
			return translations;
		},
		setTranslations,
	};
}