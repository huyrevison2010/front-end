import React, { FC, memo, useState } from 'react'

import { TableStructureItemFilter } from './types'
import { isEqual } from '../utils'
import { Button } from '../button'
import { Icon } from '../icon'

type Props = {
    filters: TableStructureItemFilter[],
    onSubmit: (params: any) => any
}

export const TableFilter: FC<Props> = memo((props) => {
    const { filters } = props;
    const [params, setParams] = useState(props.filters.reduce((output, item) => {
        if (item.defaultValue) {
            const defaultValue = item.defaultValue;
            if (typeof defaultValue === 'object') output = { ...output, ...defaultValue }
            else output = { ...output, [item.key || '']: defaultValue }
        }
        return output;
    }, {}) as any)
    const [isShowPopup, setIsShowPopup] = useState(false);
    const id = `TableFilter__Popup${Date.now()}`;

    const handleSubmit = async () => {
        await props.onSubmit(params);
        setIsShowPopup(false);
    };

    const handleReset = async () => {
        const temp = props.filters.reduce((output: any = {}, item) => {
            output[item.key] = '';
            return output;
        }, {})

        await props.onSubmit(temp);

        setParams({});
        setIsShowPopup(false);
    };

    const handleClear = async (paramKey: string) => {
        const temp = { ...params, [paramKey]: '' };
        setParams(temp);
        await props.onSubmit(temp);
    }

    const qtyFilterActive = props.filters.filter(v => typeof params[v.key] !== 'undefined' && params[v.key] !== '').length;

    return (
        <div className="Table__Filter">
            <div className="Table__Filter__Pannel">
                <div className="button" onClick={() => setIsShowPopup(true)}>
                    <Icon.Filter />
                    Filter Box

                    {qtyFilterActive ? <div className="qty">
                        {qtyFilterActive}
                    </div> : null}
                </div>

                {props.filters.filter(v => params[v.key]).map((item, key) => (
                    <div className="paramItem" key={key}>
                        {item.name}: {item.renderValue ? item.renderValue(params[item.key]) : `${params[item.key]}`}
                        <div className="btnRemove" onClick={() => handleClear(item.key)}>
                            <Icon.Remove />
                        </div>
                    </div>
                ))}
            </div>

            {isShowPopup ? <div className="Table__Filter__Popup" id={id} onClick={(e: any) => e.target.id === id ? setIsShowPopup(false) : null}>
                <div className="content">
                    <div className="head">
                        <div className="title">
                            Filter Box
                        </div>
                        <div className="btnClose" onClick={() => setIsShowPopup(false)}>
                            <Icon.Close />
                        </div>
                    </div>
                    <div className="list">
                        {filters.map((item, key) => {
                            return (
                                <div key={key} className="item">
                                    <div className="label">
                                        {item.name}:
                                </div>
                                    <item.input
                                        paramKey={item.key || ''}
                                        onChange={(value) => setParams((state: any) => ({ ...state, [item.key]: value }))}
                                        params={params}
                                        value={params[item.key]}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="btnActions">
                        <Button label="Reset" buttonType="grey-outline" onClick={handleReset} />
                        <Button label="Apply" onClick={handleSubmit} />
                    </div>
                </div>
            </div> : null}
        </div>
    )
}, (prev, next) => isEqual(prev.filters, next.filters))