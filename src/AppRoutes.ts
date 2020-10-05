import { translate } from './languages';

import Router from "next/router";
import { TCoin } from './types';

export const Routes = {
    // ============================ Public ============================
    homePage: {
        href: '/',
        renderPath: () => `/`,
        push: function () {
            return Router.push(this.href, this.renderPath())
        }
    },
    
    // ======================= User =======================
    dashboard: {
        href: '/dashboard',
        renderPath: () => `/dashboard`,
        push: function () {
            return Router.push(this.href, this.renderPath())
        }
    },
    wallet: {
        href: '/wallets',
        renderPath: () => `/wallets`,
        push: function () {
            return Router.push(this.href, this.renderPath())
        }
    },
    network: {
        href: '/network',
        renderPath: () => `/network`,
        push: function () {
            return Router.push(this.href, this.renderPath())
        }
    },
    setting: {
        href: '/setting',
        renderPath: () => `/setting`,
        push: function () {
            return Router.push(this.href, this.renderPath())
        }
    },
    walletDetail: {
        title: translate('wallet-detail'),
        href: '/wallets/[id]',
        renderPath: (id: TCoin) => `/wallets/${id}`,
        push: function (id: TCoin) {
            return Router.push(this.href, this.renderPath(id))
        }
    },

    splashScreen: {
        href: '/splash-screen',
        renderPath: () => `/splash-screen`,
        push: function () {
            return Router.push(this.href, this.renderPath())
        }
    }
}