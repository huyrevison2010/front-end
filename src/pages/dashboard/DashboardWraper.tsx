import React, { Fragment } from 'react'
import { Footer } from '../../components/footer';

import { Header } from '../../components/header';
import { Icon } from '../../components/icon';
import { ModalNetwork } from '../../components/modal-network';
import { ModalWithdraw } from '../../components/modal-withdraw';
import { MobileNavigatorMenu } from '../../components/navigator';
import { HeadService } from '../../services/head';
import { useSelector } from '../../store';

type TWithDashboardWraperSettings = {
  screenType: 'DesktopMain' | 'MobileMain' | 'MobileDetail'
}

export const withDashboardWraper = (settings: TWithDashboardWraperSettings) => (Component: any) => (props: any) => {
  const isClientInitialized = useSelector(state => state.main.isClientInitialized);

  if (!isClientInitialized) return (
    <div className="SplashScreen">
      {HeadService.render()}
      <img className="background" src="/assets/images/background.png" alt="" />
      <img className="logo" src="/assets/images/logo_2.png" alt="" />

      <Icon.Loading />
    </div>
  )

  return (
    <Fragment>
      {settings.screenType === 'DesktopMain' || settings.screenType === 'MobileMain' ? <Header /> : null}

      <div className="content">
        <Component {...props} />
      </div>

      {settings.screenType === 'MobileMain' ? <MobileNavigatorMenu /> : null}
      {settings.screenType === 'DesktopMain' ? <Footer /> : null} 

      <ModalWithdraw /> 
      <ModalNetwork />
    </Fragment>
  )
}