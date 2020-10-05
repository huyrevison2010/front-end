import React, { FC, Fragment } from 'react'
import { useRouter } from 'next/router'

// import './CpnMobileHead.scss'
import { Icon } from '../icon'

type Props = {
    title: string,
    goBack?: () => void,
}

export const CpnMobileHead: FC<Props> = (props) => {
    const router = useRouter();
    return (
        <Fragment>
            <header className="CpnMobileHead">
                <div className="btnBack" onClick={() => props.goBack ? props.goBack() : router.back()}>
                    <Icon.ArrowLeft />
                </div>

                <h1 className="title">
                    {props.title}
                </h1>
            </header>
            <div className="headSpacingTop" />
        </Fragment>
    )
}