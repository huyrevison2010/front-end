import React, { FC, useState, useEffect } from 'react'

import { Icon } from '../icon'
import { TreeView } from '../tree-view';
import { useSelector } from '../../store';
import { translate } from '../../languages';
import { ObjectUtils } from '../../modules/utils';
import { RequestMainService } from '../../services/request';
import { Message } from '../../modules/message';

export let OnModalNetWork: () => any = () => true;

export const ModalNetwork: FC = () => {
    const [affiliation, setAffiliation] = useState(null as any);
    const [isActive, setIsActive] = useState(false);
    const investor = useSelector(state => state.investor);
    const rank = +ObjectUtils.getIn(investor, 'rank', 0);

    OnModalNetWork = () => setIsActive(true);

    useEffect(() => {
        if (rank !== 0) {
            RequestMainService.get(`/tree`)
                .then(res => setAffiliation({ data: res }))
                .catch(err => setAffiliation({ error: err.error }));
        }
        // eslint-disable-next-line
    }, [rank])

    if (!isActive) return null

    return (
        <div className="ModalNetwork" id="ModalNetwork" onClick={(e: any) => e.target.id === 'ModalNetwork' ? setIsActive(false) : null}>
            <div className="wraper">
                <div className="head">
                    <div className="title">{translate('affiliation')}</div>
                    <div className="btnClose" onClick={() => setIsActive(false)}>
                        <Icon.Close />
                    </div>
                </div>

                <div className="content">
                    {(() => {
                        if (!investor) return <Message type="loading" />
                        if (rank <= 0) return <Message type="info" message="You don't have rank" />

                        if (!affiliation) return <Message type="loading" />
                        if (affiliation.error) return <Message type="error" message={affiliation.error.message} />

                        return <TreeView affiliate={affiliation.data} />
                    })()}
                </div>
            </div>
        </div>
    )
}