import React from 'react'
import { Icon } from '../../../components/icon';
import { InvestForm } from '../../../components/invest-form';
import { translate } from '../../../languages';
import { MainService } from '../../../services/main';
import { withDashboardWraper } from '../DashboardWraper'
import { WalletCard } from '../wallet/components/walletCard';
import { ReferralStatus } from './components/referralStatus';

export const ViewDesktop = withDashboardWraper({ screenType: 'DesktopMain' })(() => {
  const { personalNumberReports, numberReports } = MainService.useDashboardPage();

  return <div className="DashboardGeneralPage">
    <div className="container">
      <div className="row justify-content-center">
        {personalNumberReports.map((item, index) => (
          <div className="col-sm-4" key={index}>
            <div className="NumberReportCard">
              <div className="title">
                {item.icon}
                {item.title}
              </div>
              <p className="value textWarning">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row justify-content-center">
        {numberReports.map((item, index) => (
          <div className="col-sm-4" key={index}>
            <div className="NumberReportCard">
              <div className="title">
                {item.icon}
                {item.title}
              </div>
              <p className="value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <section className="boxBg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="InvestFormWraper">
              <div className="investmentTitle">
                <Icon.Invest />
                {translate('investment')}
              </div>
              <InvestForm />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="WalletsWraper">
              <p className="title">{translate('your-wallets')}</p>

              <div className="box">
                <WalletCard id="IDA" />
                <WalletCard id="IDAA" />
                <WalletCard id="USDT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="refferalStatus">
      <ReferralStatus />
    </section>
  </div>
})