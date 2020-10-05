import React from 'react'

import { useSelector } from '../../../../../store';
import { translate } from '../../../../../languages';
import { ClassNames } from '../../../../../modules/utils';
import { MainService } from '../../../../../services/main';
import { Button } from '../../../../../modules/button';
import { OnModalNetWork } from '../../../../../components/modal-network';
import { EDeviceType } from '../../../../../types';

export const ReferralStatus = () => {
    const data = useSelector(state => state.treeReport) || [];
    const deviceType = MainService.useDeviceType();

    if (!data.length) return null

    const totalMembers = data.reduce((output: number, item: any) => output + item.total, 0);

    return (
        <div className="referralStatusBox">
            <div className="titleWraper">
                <div className="title">{translate('referral-status')}</div>
                <div className="exceprt">
                    Total Members: {totalMembers}
                </div>
            </div>

            <div className="contentWraper">
                <div className={ClassNames({ table: true, isOnlyOne: data.length === 1 })}>
                    <div className="row justify-content-center">
                        {data.map((item: any, key: number) => {
                            return (
                                <div className={`col-sm-${data.length === 1 ? '12' : '6'}`} key={key}>
                                    <div className="table-row">
                                        <p>F{item.f}</p>
                                        <p>{item.total} {translate('referrals')}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="buttonWraper mt20">
                    <Button
                        className="button"
                        type="button"
                        label="Benefit Scheme"
                        onClick={() => window.open('https://facebook.com', '__blank')}
                    />

                    <Button
                        isVisible={deviceType === EDeviceType.DESKTOP}
                        className="button ml15"
                        type="button"
                        label="Your Network"
                        buttonType="warning"
                        onClick={() => OnModalNetWork()}
                    />
                </div>
            </div>
        </div>
    )
}