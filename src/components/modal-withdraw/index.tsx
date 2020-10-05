import React, { FC, useState } from 'react'

import { Icon } from '../icon'
import { InputNumberCoin } from '../input/number-coin';
import { Button } from '../button';
import { InputWraper } from '../../modules/form';
import { getLocaleKey, translate } from '../../languages';
import { WalletService } from '../../services/wallet/wallet.service';

export interface IModalWithdrawState {
    coin: string
}

export let OnModalWithdraw: (state: IModalWithdrawState) => any = (state) => state;

export const ModalWithdraw: FC = () => {
    const [state, setState] = useState(null as IModalWithdrawState | null);

    const { totalPayout, amountInputProps, handleSubmit, isSubmitting } = WalletService.useWithdrawForm({ onWithdrawSuccess: () => setState(null), coin: state?.coin })

    OnModalWithdraw = (state) => setState(state);

    if (!state) return null

    return (
        <div className="ModalWithdraw" id="ModalWithdraw" onClick={(e: any) => e.target.id === 'ModalWithdraw' ? setState(null) : null}>
            <div className="wraperModal">
                <div className="head">
                    <div className="title">{translate('withdraw')}</div>
                    <div className="btnClose" onClick={() => setState(null)}>
                        <Icon.Close />
                    </div>
                </div>

                <div className="content">

                    <InputWraper
                        inputProps={amountInputProps}
                        renderInput={s => <InputNumberCoin {...s} coinCode={state.coin} isShowCoinIcon />}
                    />

                    <p className="mb15">
                        {translate('your-balance')}: {(totalPayout / 1000000000000000000).toLocaleString(getLocaleKey())} {state.coin === 'IDAA' ? 'IDA' : state.coin}
                    </p>

                    <Button
                        disabled={!totalPayout}
                        className="btnWithdraw"
                        type="button"
                        label={translate('withdraw')}
                        icon={Icon.WithDraw}
                        buttonType="danger"
                        onClick={handleSubmit}
                        isLoading={isSubmitting}
                    />

                </div>
            </div>
        </div>
    )
}