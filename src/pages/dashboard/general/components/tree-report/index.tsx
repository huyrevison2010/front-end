import React, { FC } from 'react'
import { translate } from '../../../../../languages';
import { useSelector } from '../../../../../store';

type Props = {}

export const TreeReport: FC<Props> = (props) => {
    const data = useSelector(state => state.treeReport) || [];
    const numberReports = useSelector(state => state.numberReports);

    return (
        <div className="TreeReport">
            <div className="referralStatusBox">
                <div className="title">{translate('referral-status')}</div>
                <div className="exceprt">
                    {/* {translate('total-commission')}: {`${numberReports.commission} TRX`} */}
                </div>

                <div className="table">
                    <div className="row">
                        {data.map((item: any, key: number) => {
                            return (
                                <div className="col-sm-6" key={key}>
                                    <div className="table-row">
                                        <p>F{item.f}</p>
                                        <p>{item.total} Referrals</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}