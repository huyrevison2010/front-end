import React from 'react'
import { Icon } from '../../components/icon'

export const SplashScreen = () => {
    return (
        <div className="SplashScreen">
            <img className="background" src="/assets/images/background.png" alt=""/>
            <img className="logo" src="/assets/images/logo_2.png" alt=""/>

            <Icon.Loading />
        </div>
    )
}