import React, { FC } from 'react'
import NumberFormat from 'react-number-format';
import { IInputProps } from '../../../modules/form';

interface IInputNumberProps extends IInputProps {
    suffix?: string
    prefix?: string
    max?: number,
    min?: number,
}

export const InputNumber: FC<IInputNumberProps> = (props) => {
    const { value, onTouched, suffix, prefix, max, min, onChange } = props;

    return (
        <NumberFormat
            value={value}
            decimalSeparator="."
            thousandSeparator=","
            onValueChange={({ floatValue, value }) => {
                const data = floatValue;
                if (typeof max === 'number' && data && data > max) return onChange(+max);
                return onChange(data);
            }}
            onBlur={() => setTimeout(() => onTouched(), 500)}
            suffix={suffix}
            prefix={prefix}
        />
    )
}