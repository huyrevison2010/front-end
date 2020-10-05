import React, { useEffect, useState } from 'react'

import { TreeView } from '../../../components/tree-view'
import { Message } from '../../../modules/message'
import { ObjectUtils } from '../../../modules/utils'
import { RequestMainService } from '../../../services/request'
import { useSelector } from '../../../store'
import { MainService } from '../../../services/main'
import { SplashScreen } from '../../splash-screen'
import { HeadService } from '../../../services/head'
import { withDashboardWraper } from '../DashboardWraper'

export const NetworkMobile = withDashboardWraper({ screenType: 'MobileMain' })(() => {
    const investor = useSelector(state => state.investor);
    const rank = +ObjectUtils.getIn(investor, 'rank', 0);

    const [affiliation, setAffiliation] = useState(null as any);

    useEffect(() => {
        if (rank !== 0) {
            RequestMainService.get(`/tree`)
                .then(res => setAffiliation({ data: res }))
                .catch(err => setAffiliation({ error: err.error }));
        }
        // eslint-disable-next-line
    }, [rank])

    return (
        <div className="container">
            {HeadService.render()}
            {(() => {
                if (!investor) return <Message type="loading" />
                if (rank <= 0) return <Message type="info" message="You don't have rank" />

                if (!affiliation) return <Message type="loading" />
                if (affiliation.error) return <Message type="error" message={affiliation.error.message} />

                return <TreeView affiliate={affiliation.data} />
            })()}
        </div>
    )
})

export const Network = () => {
    const deviceType = MainService.useDeviceType();
    return <>
        {(() => {
            if (deviceType === "Desktop") return <SplashScreen />
            return <NetworkMobile />
        })()}
    </>
}