import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon } from '../icon'
import { CreateAlert } from '../../modules/alert';
import { ButtonSelectLanguage } from '../button-select-language';
import { MainService } from '../../services/main';
import { useSelector } from '../../store';
import { ObjectUtils } from '../../modules/utils';
import { getEnv } from '../../AppConfig';

export const Header = () => {
    const deviceType = MainService.useDeviceType();
    const investor = useSelector(state => state.investor);

    const rank = ObjectUtils.getIn(investor, 'rank', '0');
    const investorAddress = ObjectUtils.getIn(investor, 'investorAddress', '');

    const address = +rank > 0 ? `${getEnv('PUBLIC_URL')}?ref=${investorAddress}` : '';

    if (deviceType === "Desktop") return (
        <div className="Header">
            <div className="container-fluid">
                <div className="content">
                    <div className="left">
                        <div className="logo">
                            <img src="/assets/images/logo.png" alt="" />
                        </div>
                        {address ? <CopyToClipboard
                            text={address}
                            onCopy={() => CreateAlert({ type: 'success', title: 'Success', message: `URL Copied: ${address}` })}
                        >

                            <div className="addressBox">
                                <div className="label">Address</div>
                                <div className="value">{address}</div>
                                <Icon.Coppy />
                            </div>
                        </CopyToClipboard> : null}

                    </div>
                    <div className="right">
                        <ButtonSelectLanguage />
                    </div>
                </div>
            </div>
        </div>
    )
    
    return (
        <div className="Header">
            <div className="logo">
                <img src="/assets/images/logo.png" alt="logo" />
            </div>
            {address ? <CopyToClipboard
                text={address}
                onCopy={() => CreateAlert({ type: 'success', title: 'Success', message: `URL Copied: ${address}` })}
            >
                <div className="addressBox">
                    <div className="value">{address}</div>
                    <Icon.Coppy />
                </div>
            </CopyToClipboard> : null}
        </div>
    )
}