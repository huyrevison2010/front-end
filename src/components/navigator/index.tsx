import React, { FC } from 'react'

import { Routes } from '../../AppRoutes'
import { Icon } from '../../components/icon'
import { Link } from '../../components/link'
import { translate } from '../../languages'

export const MobileNavigatorMenu: FC = () => {
    return <div className="MobileNavigatorMenu" id="MobileNavigatorMenu">
        <Link href={Routes.dashboard.href} exact>
            <Icon.Ida />
            <span>{translate('ida')}</span>
        </Link>

        <Link href={Routes.wallet.href}>
            <Icon.Wallet />
            <span>{translate('wallet')}</span>
        </Link>

        <Link href={Routes.network.href}>
            <Icon.Network />
            <span>{translate('network')}</span>
        </Link>

        <Link href={Routes.setting.href}>
            <Icon.Setting />
            <span>{translate('settings')}</span>
        </Link>

    </div>
}