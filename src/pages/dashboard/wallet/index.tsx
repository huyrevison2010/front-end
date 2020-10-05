import React from 'react'

import { translate } from '../../../languages';
import { WalletCard } from './components/walletCard'
import { HeadService } from '../../../services/head';
import { withDashboardWraper } from '../DashboardWraper';

export const WalletPage = withDashboardWraper({ screenType: 'MobileMain' })(() => {
    return <>
        {HeadService.render()}
        <div className="Wallet">
            <p className="title">{translate('your-wallet')}</p>
            <div>
                <WalletCard id="IDA" />
                <WalletCard id="IDAA" />
                <WalletCard id="USDT" />
            </div>
        </div>
    </>
})