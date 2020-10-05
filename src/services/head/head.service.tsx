import React from 'react'
import Head from "next/head"
import { getEnv } from '../../AppConfig';
import { StringUtils } from '../../utils/string.utils';

export interface IHead {
    title?: string,
    thumbnailURL?: string,
    webURL?: string,
    description?: string,
    siteName?: string,
    type?: string,
}

export class HeadService {
    static render(main: IHead = {}): any {
        const defaultHead: any = {
            title: getEnv('META_TITLE_DEFAULT'),
            thumbnailURL: `${getEnv('PUBLIC_URL')}/assets/images/thumbnail.png`,
            webURL: '/',
            description: getEnv('META_DESCRIPTION_DEFAULT'),
            siteName: getEnv('META_SIZE_NAME'),
            type: getEnv('META_OG_TYPE'),
        }

        for (const key in defaultHead) {
            if (defaultHead.hasOwnProperty(key)) {
                const item = defaultHead[key];
                // @ts-ignore
                if (!main[key]) main[key] = item;
            }
        }

        const { title, siteName, type, thumbnailURL } = main;

        // ============================ Convert Values ============================
        const description = StringUtils.removeHtmlTags(main.description || defaultHead.description);

        let webURL = StringUtils.isURL(main.webURL || '') ? main.webURL : `${getEnv('PUBLIC_URL')}${main.webURL}`;
        if (main.webURL === '/') webURL = getEnv('PUBLIC_URL');

        // ============================ Render ============================
        return (
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={webURL} />

                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:image:url" content={thumbnailURL} />
                <meta property="og:image" content={thumbnailURL} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={webURL} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:type" content={type} />
            </Head>
        );
    }
}