import React from 'react'

import { Button } from '../../../components/button';
import { Icon } from '../../../components/icon';
import { ModalInvest, OnModalInvest } from '../../../components/modal-invest';
import { translate } from '../../../languages';
import { ClassNames } from '../../../modules/utils';
import { HeadService } from '../../../services/head';
import { MainService } from '../../../services/main';
import { withDashboardWraper } from '../DashboardWraper';
import { ReferralStatus } from './components/referralStatus';

export const ViewMobile = withDashboardWraper({ screenType: 'MobileMain' })(() => {
  const { personalNumberReports, numberReports } = MainService.useDashboardPage();
  return (
      <div className="DashboardGeneralPage">
          {HeadService.render()}
          <div className="container">
              <div className="row">
                  {personalNumberReports.map((item, index) => (
                      <div className="col-6" key={index}>
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

              {numberReports.map((item, key) => <div className={ClassNames({ NumberReportCard: true, animate: !!item.isHasAnimate && item.value !== '--' })} key={key}>
                  <div className="content">
                      <div className="title">
                          {item.icon}
                          {item.title}
                      </div>
                      <p className="value">{item.value}</p>
                  </div>
              </div>)}

              <div className="referralStatus">
                  <ReferralStatus />
              </div>
          </div>

          <Button
              className="btnInvest"
              type="button"
              label={translate('invest')}
              icon={Icon.Invest}
              buttonType="success"
              onClick={() => OnModalInvest()}
          />

          <ModalInvest />
      </div>
  )
})