import App, { AppContext, AppInitialProps } from 'next/app'
import Useragent from 'express-useragent'
import withRedux from 'next-redux-wrapper'

import { Provider } from 'react-redux'
import Head from 'next/head'
import { MainService, SET_DEVICE } from '../src/services/main'
import { EDeviceType } from './types'
import { makeStore } from './store'
import { Fragment } from 'react'
import { CookieService, ECookieVariable } from './services/cookie'
import { Alert } from './modules/alert'
import { ModalConfirmation } from './components/modal-confirmation'

class MyApp extends App<AppInitialProps> {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const isServer = !!ctx.req;
        CookieService.setContext(ctx);

        if (isServer) {
            await MainService.initialFromServer(ctx.store);

            // ============================ Detect Device ============================
            // @ts-ignore
            const device = Useragent.parse(ctx.req.headers['user-agent'])
            // @ts-ignore
            ctx.device = device;
            ctx.store.dispatch({
                type: SET_DEVICE,
                data: {
                    type: device.isDesktop ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
                    platform: device.platform,
                    os: device.os,
                    version: device.version,
                    source: device.source
                }
            })
            // ============================ End Detect Device ============================

            const ref = (ctx.query['ref'] || '') as string;
            if (ref) CookieService.set(ECookieVariable.USER_REF, ref);
        }

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }

    componentDidMount() {
        MainService.initializeClient();
    }

    render() {
        // @ts-ignore
        const { Component, pageProps, store } = this.props;
        return (
            <Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                </Head>

                <Provider store={store}>
                    <Component {...pageProps} />
                    <Alert />
                    <ModalConfirmation />
                </Provider>
            </Fragment>
        );
    }
}

export default withRedux(makeStore)(MyApp);