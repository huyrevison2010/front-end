import React from 'react';
import { Icon } from '../../../../../components/icon';
export const StatusCard = (props: any) => {
    const { data } = props;
    const { title, value } = data;

    return (
        <div className="StatusCard">
            <div className="content">
                <div className="titleWraper">
                    <Icon.Network />
                    <p>{title}</p>
                </div>
                <p className="txtValue">{value}</p>
            </div>
        </div>
    )
}