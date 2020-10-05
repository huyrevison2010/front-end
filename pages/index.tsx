import React, { Fragment } from 'react'
import { NextPage } from 'next'
import { Routes } from '../src/AppRoutes'

interface Props {
    query?: object
}

const HomePage: NextPage<Props> = (props) => {
    return (
        <Fragment>
            
        </Fragment>
    )
}

HomePage.getInitialProps = async (ctx: any) => {
    const { store, req, query } = ctx;
    const isServer = !!req;

    if (isServer) {
        // Fetching data from server
        ctx.res.writeHead(302, { Location: '/dashboard' })
        ctx.res.end()
    }

    return { query }
}

export default HomePage