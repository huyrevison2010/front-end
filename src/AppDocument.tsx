import Document, { Html, Head, Main, NextScript } from 'next/document'
import Useragent from 'express-useragent'

import { EDeviceType } from './types'
import { ClassNames } from './modules/utils'

class AppDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        const device = Useragent.parse(ctx.req.headers['user-agent'])

        return {
            ...initialProps,
            deviceType: device.isDesktop ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
        }
    }

    render() {
        // @ts-ignore
        const deviceType = this.props['deviceType'];

        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="theme-color" content="#c59e57" />
                    <link rel="shortcut icon" href="/favicon.ico" />

                    {/* --------- Include Styles --------- */}
                    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="/assets/styles/bootstrap-grid.min.css" />
                    {/* --------- End Include Styles --------- */}
                </Head>

                <body className={ClassNames({ [deviceType]: true, App: true })}>
                    <script src="/assets/js/OrgChart.js"></script>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument