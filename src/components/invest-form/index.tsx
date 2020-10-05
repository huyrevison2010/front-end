import React, { FC } from 'react'
import { getLocaleKey, translate } from '../../languages';
import { Button } from '../../modules/button';
import { InputWraper } from '../../modules/form';
import { Message } from '../../modules/message';
import { TronService } from '../../services/tron/tron.service';
import { WalletService } from '../../services/wallet/wallet.service';
import { InputNumber } from '../input/number';

export const InvestForm: FC<{ onInvestSuccess?: () => any }> = (props) => {
  const { handleSubmitWithCoinType, isSubmitting, amountInputProps, walletBalanceUSDT, walletBalanceIMD, invested } = WalletService.useInvestForm({ onInvestSuccess: () => props.onInvestSuccess ? props.onInvestSuccess() : undefined });

  return (
    <div className="InvestForm">
      <p className="invested mb15">{translate('your-investment')}: {invested === null ? '0' : `$${TronService.convertCurrencyAmountToShow(+invested / 1000000000000000000, 'DIF').toLocaleString(getLocaleKey())}`}</p>

      <InputWraper
        inputProps={amountInputProps}
        component={InputNumber}
      />

      {(() => {
        if (isSubmitting) return <Message type="loading" />
        return <div className="ctas normal">
          <div className="item">
            <Button
              onClick={async () => handleSubmitWithCoinType('USDT')}
              isLoading={isSubmitting}
              label={`${translate('invest-by')} USDT`}
              buttonType="success"
            />
            <p>{translate('balance')}: {walletBalanceUSDT} USDT</p>
          </div>

          <div className="item">
            <Button
              onClick={async () => handleSubmitWithCoinType('IMD')}
              isLoading={isSubmitting}
              label={`${translate('invest-by')} IMD`}
              buttonType="info"
            />
            <p>{translate('balance')}: {walletBalanceIMD} IMD</p>
          </div>
        </div>
      })()}
    </div>
  )
}