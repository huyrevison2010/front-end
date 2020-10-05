import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

import { CpnMobileHead } from '../../../../components/header-mobile'
import { Routes } from '../../../../AppRoutes'
import { WalletCard } from '../components/walletCard'
import { Button } from '../../../../components/button'
import { Icon } from '../../../../components/icon'
import { DateTimeUtils } from '../../../../modules/utils/dateTime.utils'
import { ModalWithdraw, OnModalWithdraw } from '../../../../components/modal-withdraw'
import { ObjectUtils, StringUtils } from '../../../../modules/utils'
import { getLocaleKey, translate } from '../../../../languages'
import { Table } from '../../../../modules/table'
import { RequestMainService } from '../../../../services/request'
import { useSelector } from '../../../../store'
import { CreateAlert } from '../../../../modules/alert'
import { HeadService } from '../../../../services/head'
import { withDashboardWraper } from '../../DashboardWraper'

export const WalletDetail = withDashboardWraper({ screenType: 'MobileDetail' })(() => {
    const router = useRouter();
    const [type, setType] = useState('invest' as | 'withdraw' | 'invest');
    const walletTotalPayouts = useSelector(state => state.walletTotalPayouts);

    const coin: any = router.query.id;
    const totalPayout = ObjectUtils.getIn(walletTotalPayouts, coin);

    return (
        <Fragment>
            {HeadService.render()}

            <CpnMobileHead
                title={Routes.walletDetail.title}
            />

            <div className="WalletDetail">
                <WalletCard id={coin} />

                {coin !== 'IDA' ? <div className="btnWithDraw">
                    <Button
                        type="button"
                        label={translate('withdraw')}
                        icon={Icon.WithDraw}
                        buttonType="danger"
                        onClick={() => {
                            if (!totalPayout) return CreateAlert({ type: 'danger', title: 'Error', message: 'Don\'t have enough balance to withdraw.' })
                            OnModalWithdraw({ coin: coin as string });
                        }}
                    />
                </div> : null}

                <div className="transactionWraper">
                    <div className="titleWraper">
                        <Icon.History />
                        <p>Your transactions</p>
                    </div>
                    <div className="btnWraper">
                        <Button
                            className="button btnRight"
                            type="button"
                            label="Invest"
                            buttonType={type === 'invest' ? 'primary' : 'grey-outline'}
                            onClick={() => setType('invest')}
                        />
                        <Button
                            className="button btnRight"
                            type="button"
                            label="Withdraw"
                            buttonType={type === 'withdraw' ? 'primary' : 'grey-outline'}
                            onClick={() => setType('withdraw')}
                        />
                    </div>
                    <div className="transactions">
                        {type === 'invest' ? <Table
                            className="hidePaging"
                            structure={[
                                {
                                    name: `${translate('hash')}`,
                                    render: (item) => {
                                        if (item.hash) return <a href={`https://tronscan.org/#/transaction/${item.hash}`} target="__blank">
                                            {`${item.hash.slice(0, 5)}...`}
                                        </a>
                                    }
                                },
                                {
                                    name: `${translate('createdAt')}`,
                                    render: (item) => (
                                        DateTimeUtils.formatToShow(item.createdAt)
                                    )
                                },
                                {
                                    name: `${translate('amount')}`,
                                    key: 'value',
                                    render: (item) => `${(+item.value).toLocaleString(getLocaleKey())}`
                                },
                            ]}
                            onFetchData={async () => {
                                return RequestMainService.get(`/investments`)
                                    .then(result => {
                                        const coinFilter = coin === 'IDAA' ? 'IDA' : coin;
                                        const data = result.filter((v: any) => v.token === coinFilter)
                                        return ({
                                            count: data.length,
                                            data
                                        })
                                    })
                            }}
                        /> : null}

                        {type === 'withdraw' ? <Table
                            className="hidePaging"
                            structure={[
                                {
                                    name: `${translate('hash')}`,
                                    render: (item) => {
                                        if (item.hash) return <a href={`https://tronscan.org/#/transaction/${item.hash}`} target="__blank">
                                            {StringUtils.limitCharacters(item.hash, 10, '...')}
                                        </a>
                                    }
                                },
                                {
                                    name: `${translate('createdAt')}`,
                                    render: (item) => (
                                        DateTimeUtils.formatToShow(item.createdAt)
                                    )
                                },
                                {
                                    name: `${translate('amount')}`,
                                    render: (item) => `${(+item.value).toLocaleString(getLocaleKey())}`
                                },
                            ]}
                            onFetchData={async () => {
                                return RequestMainService.get(`/withdrawals`)
                                    .then(result => {
                                        const coinFilter = coin === 'IDAA' ? 'IDA' : coin;
                                        const data = result.filter((v: any) => v.token === coinFilter)
                                        return ({
                                            count: data.length,
                                            data
                                        })
                                    })
                            }}
                        /> : null}
                    </div>

                </div>
            </div>

        </Fragment>

    )
})