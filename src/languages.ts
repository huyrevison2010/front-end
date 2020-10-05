import { CookieService, ECookieVariable } from './services/cookie/cookie.service';

import { ELocale } from "./types";
import dictionary from '../bin/lang/dictionary.min.json';

export type TLocale = {
    id: number,
    key: ELocale,
    label: string,
    isActive: boolean,
    order: number
}

export const locales: TLocale[] = [
    {
        id: 1,
        key: ELocale.ENGLISH,
        label: 'English',
        isActive: true,
        order: 1,
    },
    {
        id: 2,
        key: ELocale.VIETNAM,
        label: 'Việt Nam',
        isActive: true,
        order: 7
    },
    {
        id: 3,
        key: ELocale.JAPAN,
        label: 'Japan',
        isActive: false,
        order: 3,
    },
    {
        id: 4,
        key: ELocale.THAILAN,
        label: 'Thailand',
        isActive: false,
        order: 4,
    },
    {
        id: 5,
        key: ELocale.INDONESIA,
        label: 'Bahasa Indonesia',
        isActive: false,
        order: 5
    },
    {
        id: 6,
        key: ELocale.MALAYSIA,
        label: 'Bahasa Malaysia',
        isActive: false,
        order: 6
    },
    {
        id: 7,
        key: ELocale.CHINA,
        label: '中文',
        isActive: true,
        order: 2,
    },
    {
        id: 8,
        key: ELocale.KHMER,
        label: 'Khmer',
        isActive: false,
        order: 8,
    },
].sort((a, b) => a.order - b.order);

export const defaultLocale = locales[0];

export const setLocale = (locale: ELocale): void => {
    CookieService.set(ECookieVariable.USER_LOCALE, locale)
    window.location.reload();
};

export const getLocale = (): TLocale => {
    let locale: TLocale;

    const fromCookie = CookieService.get(ECookieVariable.USER_LOCALE);
    const currentLocale = locales.find(item => item.key === fromCookie);
    if (!currentLocale) {
        locale = defaultLocale;
        CookieService.set(ECookieVariable.USER_LOCALE, locale.key);
    } else {
        locale = currentLocale;
    }

    return locale;
}

export const getLocaleKey = (): string => getLocale().key

export const translate = (id: string, values?: any): string => {
    const locale: string = getLocaleKey();
    let sentence: string;

    // @ts-ignore
    if (dictionary[id] && dictionary[id][locale]) {
        // @ts-ignore
        sentence = dictionary[id][locale]
    } else {
        console.warn(`Don't have any messages match with id: "${id}"`);
        return `<${id}>`
    }

    // Match values
    if (typeof values === 'object') {
        Object.entries(values).map(item => {
            // @ts-ignore
            sentence = sentence.replace(new RegExp(`{${item[0]}}`, 'g'), item[1])
            return item
        })
    }

    return sentence
}