import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang === 'en' || lang === 'es') return lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: UiKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export function otherLang(lang: Lang): Lang {
	return lang === 'en' ? 'es' : 'en';
}
