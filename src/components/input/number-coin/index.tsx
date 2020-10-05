import React, { FC } from 'react'
import NumberFormat from 'react-number-format';
import { getLocaleKey } from '../../../languages';
import { IInputProps } from '../../../modules/form';

interface IInputNumberCoinProps extends IInputProps {
    coinCode?: string,
    isShowCoinIcon?: boolean
}

export const InputNumberCoin: FC<IInputNumberCoinProps> = (props) => {
    const locale = getLocaleKey();
    const decimalSeparator = locale === 'vi-VN' ? ',' : '.';
    const thousandSeparator = locale === 'vi-VN' ? '.' : ',';

    return (
        <div className="InputNumberCoin">
            {props.isShowCoinIcon && props.coinCode ? <img className="coinIcon" src={`/assets/images/coin-symbols/${props.coinCode}.png`} /> : null}

            <NumberFormat
                value={props.value}
                onValueChange={({ floatValue }) => {
                    const data = floatValue || 0;
                    props.onChange(+data);
                }}
                onBlur={() => setTimeout(() => props.onTouched(), 500)}
                disabled={props.isDisabled}
                decimalSeparator={decimalSeparator}
                thousandSeparator={thousandSeparator}
            />

            {props.coinCode ? <div className="symbol">
                {props.coinCode === 'IDAA' ? 'IDA' : props.coinCode}
            </div> : null}
        </div>
    )
}