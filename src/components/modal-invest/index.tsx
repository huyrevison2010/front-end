import React, { FC, useState } from 'react'

import { Icon } from '../icon'
import { translate } from '../../languages';
import { InvestForm } from '../invest-form';

export let OnModalInvest: () => any = () => true;

export const ModalInvest: FC = () => {
    const [isActive, setIsActive] = useState(false);
    OnModalInvest = () => setIsActive(true);

    if (!isActive) return null

    return (
        <div className="ModalInvest" id="ModalInvest" onClick={(e: any) => e.target.id === 'ModalInvest' ? setIsActive(false) : null}>
            <div className="wraperPopup">
                <div className="head">
                    <div className="title">{translate('investment')}</div>
                    <div className="btnClose" onClick={() => setIsActive(false)}>
                        <Icon.Close />
                    </div>
                </div>

                <div className="content">
                    <InvestForm onInvestSuccess={() => setIsActive(false)} />
                </div>
            </div>
        </div>
    )
}