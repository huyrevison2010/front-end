import getNextConfig from 'next/config';
const { publicRuntimeConfig } = getNextConfig();

export const isServer = typeof window === 'undefined'

export function getEnv(key:
    | 'ENV'

    // General information
    | 'PUBLIC_URL'
    | 'LOCALE_DEFAULT'

    // Meta tag for SEO
    | 'META_SIZE_NAME'
    | 'META_AUTH'
    | 'META_KEYWORDS'
    | 'META_OG_TYPE'
    | 'META_TITLE_DEFAULT'
    | 'META_DESCRIPTION_DEFAULT'

    // RESTful APIs
    | 'URL_API_MAIN_CLIENT_SIDE'
    | 'URL_API_MAIN_SERVER_SIDE'

    // Tron address configs
    | 'TRON_ADDRESS_DEFI'
    | 'TRON_ADDRESS_IDA'
    | 'TRON_ADDRESS_IMD'
    | 'TRON_ADDRESS_TETHER'
): string {
    return publicRuntimeConfig[key]
}

export const ENV = getEnv('ENV');
export const isDev = getEnv('ENV') === 'local';
