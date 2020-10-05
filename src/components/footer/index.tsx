import React, { FC } from 'react';

export const Footer: FC = () => {
    return (
        <>
            <div className="Footer">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="section left">
                            <p className="title">How it works</p>
                            <div className="contentWraper">
                                <div className="item">
                                    <p className="number">1</p>
                                    <p className="title">Register Account</p>
                                </div>
                                <div className="item">
                                    <p className="number">2</p>
                                    <p className="title">Make a Deposit</p>
                                </div>
                                <div className="item">
                                    <p className="number">3</p>
                                    <p className="title">Withdraw Profits</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="section middle">
                            <p className="title">Affiliate Program</p>
                            <div className="contentWraper">
                                <div className="level">
                                    <img src="/assets/images/level.png" alt="" />
                                    <p className="txtPercent">5%-3%-2%-2%</p>
                                </div>
                                <div className="content">
                                    Promote our platform to others using your referral link and receive a commission from each of them.
                                    Your team can count many people, each their deposit or reinvestment is additional funds to your balance.
                                     More information are available after logging in.
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="section right">
                            <p className="title">Follow Us</p>
                            <div className="contentWraper">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="socialItem">
                                            <div className="socialIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:#3b5999;}.b{fill:#fff;}" }} /></defs><path className="a" d="M175,0H25A25.02,25.02,0,0,0,0,25V175a25.025,25.025,0,0,0,25,25H175a25.031,25.031,0,0,0,25-25V25A25.025,25.025,0,0,0,175,0Z" /><path className="b" d="M71.5,67V42c0-6.9,5.6-6.25,12.5-6.25H96.5V4.5h-25A37.492,37.492,0,0,0,34,42V67H9V98.25H34V167H71.5V98.25H90.25L102.75,67Z" transform="translate(66 33)" /></svg>
                                            </div>
                                            <div>
                                                <p className="link">IDA Defi</p>
                                                <p className="name">Facebook</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="socialItem">
                                            <div className="socialIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:#039be5;}.b{fill:#fff;}" }} /></defs><circle className="a" cx={100} cy={100} r={100} /><path className="b" d="M9.946,44.854,106.362,7.679c4.475-1.617,8.383,1.092,6.933,7.858l.008-.008L96.887,92.871c-1.217,5.483-4.475,6.817-9.033,4.233l-25-18.425L50.8,90.3c-1.333,1.333-2.458,2.458-5.042,2.458l1.775-25.442L93.862,25.454c2.017-1.775-.45-2.775-3.108-1.008L33.5,60.5,8.812,52.8c-5.358-1.7-5.475-5.358,1.133-7.942Z" transform="translate(35.813 52.979)" /></svg>
                                            </div>
                                            <div>
                                                <p className="link">IDA Defi</p>
                                                <p className="name">Telegram</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyRightWraper">
                <p className="txtCopyRight">©2020 EX BONDS LTD. All rights reserved.</p>
            </div>
        </>
    )
}