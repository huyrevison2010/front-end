import React from 'react'
import { Icon } from '../../../../../components/icon';

export const ValueCard = (props: any) => {
    const { data } = props;
    const { title, value } = data;
    return (
        <div className="ValueCard">
            <div className="content">
                <div className="titleWraper">
                    <Icon.Ida />
                    <p>{title}</p>
                </div>
                <p className="txtValue">{value}</p>
            </div>
        </div>
    )
}