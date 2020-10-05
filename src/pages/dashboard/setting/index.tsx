import React from 'react'

import { getEnv } from '../../../AppConfig'
import { Icon } from '../../../components/icon'
import { MainService } from '../../../services/main'
import { SplashScreen } from '../../splash-screen'
import { useSelector } from '../../../store'
import { getLocaleKey, translate } from '../../../languages'
import { ObjectUtils } from '../../../modules/utils'
import { ButtonSelectLanguage } from '../../../components/button-select-language'
import { HeadService } from '../../../services/head'
import { withDashboardWraper } from '../DashboardWraper'

export const SettingMobile = withDashboardWraper({ screenType: 'MobileMain' })(() => {
  const numberReports = useSelector(state => state.numberReports);
  return (
    <div className="container">
      <div className="SetttingPage">
        <div className="startAt mb15">
          {translate('start-at')}: {ObjectUtils.getIn(numberReports, 'startAt', '--', value => new Date(+value * 1000).toLocaleString(getLocaleKey()))}
        </div>

        <div className="settingItem">
          <div className="label">{translate('change-language')}</div>
          <div className="wraper">
            <ButtonSelectLanguage />
          </div>
        </div>

        <a className="settingItem" href={`https://tronscan.io/#/contract/${getEnv('TRON_ADDRESS_DEFI')}`} target="__blank">
          <span>{translate('smart-contract')}</span>

          <span className="btnNav">
            <Icon.ArrowLeft />
          </span>
        </a>
      </div>
    </div>
  )
})

export const Setting = () => {
  const deviceType = MainService.useDeviceType();
  return <>
    {HeadService.render()}
    {(() => {
      if (deviceType === "Desktop") return <SplashScreen />
      return <SettingMobile />
    })()}
  </>
}