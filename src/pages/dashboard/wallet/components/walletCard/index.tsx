import React, { FC } from 'react'
import Link from 'next/link';

import { Routes } from '../../../../../AppRoutes';
import { Button } from '../../../../../components/button';
import { MainService } from '../../../../../services/main';
import { useSelector } from '../../../../../store';
import { ClassNames, ObjectUtils } from '../../../../../modules/utils';
import { getLocaleKey, translate } from '../../../../../languages';
import { WalletService } from '../../../../../services/wallet/wallet.service';
import { EDeviceType, TCoin } from '../../../../../types';
import { OnModalWithdraw } from '../../../../../components/modal-withdraw';

type Props = {
    id: TCoin
}

export const WalletCard: FC<Props> = (props) => {
    const deviceType = MainService.useDeviceType();

    const { id } = props;
    const walletTotalPayouts = useSelector(state => state.walletTotalPayouts);
    const totalPayout = ObjectUtils.getIn(walletTotalPayouts, id, '--', (amount: number) => (+amount / 1000000000000000000).toLocaleString(getLocaleKey()));
    const symbolName = id === 'IDAA' ? 'IDA' : id;

    if (deviceType === EDeviceType.DESKTOP) return (
        <div className="WalletCard">
            <div className="content">
                <div className="name">
                    <img src={`${`/assets/images/coin-symbols/${id}.png`}`} alt="" />
                    <p>{WalletService.getWalletNameFromId(id)}</p>
                </div>
                <div className="info">
                    <p className="value">{`${totalPayout} ${symbolName}`}</p>
                </div>
            </div>

            {deviceType === EDeviceType.DESKTOP ? <div className={ClassNames({ cta: true, hide: id === 'IDA' })}>
                <Button
                    // disabled={!totalPayout}
                    buttonType="danger"
                    label={translate('withdraw')}
                    onClick={() => {
                        // if (!totalPayout) return CreateAlert({ type: 'danger', title: 'Error', message: 'Don\'t have enough balance to withdraw.' })
                        OnModalWithdraw({ coin: id as string });
                    }}
                />
            </div> : null}
        </div>
    )

    return (
        <Link href={Routes.walletDetail.href} as={Routes.walletDetail.renderPath(id)}>
            <div className="WalletCard">
                <div className="content">
                    <div className="name">
                        <img src={`${`/assets/images/coin-symbols/${id}.png`}`} alt="" />
                        <p>{WalletService.getWalletNameFromId(id)}</p>
                    </div>
                    <div className="info">
                        <p className="value">{`${totalPayout} ${symbolName}`}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}