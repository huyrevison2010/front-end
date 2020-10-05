import React from 'react'

import { HeadService } from '../../../services/head'
import { MainService } from '../../../services/main'
import { ViewMobile } from './ViewMobile'
import { ViewDesktop } from './ViewDesktop'

export const DashboardGeneralPage = () => {
    const deviceType = MainService.useDeviceType();
    
    return <>
        {HeadService.render({ title: 'Dashboard' })}
        {deviceType === 'Desktop' ? <ViewDesktop /> : <ViewMobile />}
    </>
}