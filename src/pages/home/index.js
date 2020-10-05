import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'

export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}

export const HomePage = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            setTimeout(() => {
                appendScript(`home/js/jquery-min.js`)
            }, 100);
            setTimeout(() => {
                appendScript(`home/js/popper.min.js`)
            }, 500);
            setTimeout(() => {
                appendScript(`home/js/bootstrap.min.js`)
            }, 800);
            setTimeout(() => {
                appendScript(`home/js/all-plugins.js`)
            }, 1100);
            setTimeout(() => {
                appendScript(`home/js/timeline.min.js`)
            }, 1400);
            setTimeout(() => {
                appendScript(`home/js/wave/three.min.js`)
            }, 1700);
            setTimeout(() => {
                appendScript(`home/js/wave/Projector.js`)
            }, 2000);
            setTimeout(() => {
                appendScript(`home/js/wave/CanvasRenderer.js`)
            }, 2500);
            setTimeout(() => {
                appendScript(`home/js/wave/index.js`)
            }, 2800);
            setTimeout(() => {
                appendScript(`home/js/bubbly-bg.js`)
            }, 3100);
            setTimeout(() => {
                appendScript(`https://www.amcharts.com/lib/3/amcharts.js`)
                appendScript(`https://www.amcharts.com/lib/3/pie.js`)
                appendScript(`https://www.amcharts.com/lib/3/serial.js`)
                appendScript(`https://www.amcharts.com/lib/3/themes/light.js`)

                // appendScript(`home/js/amcharts/amcharts.js`)
                // appendScript(`home/js/amcharts/serial.js`)
                // appendScript(`home/js/amcharts/export.min.js`)
                // appendScript(`home/js/amcharts/none.js`)
                appendScript(`home/js/custom.js`)
            }, 1500);
            setIsInitialized(true);
        }
    }, [isInitialized])


    return <Fragment>
        <Head>
            <title>IDA Decentralized ASO</title>
            {/* <!-- Favicon --> */}
            {/* <link rel="shortcut icon" href="home/images/favicon.ico" /> */}
            {/* <!-- Google Fonts --> */}
            <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:100i,200,300,400,700,800,900" rel="stylesheet" />
            {/* <!-- Bootstrap CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/bootstrap.min.css" />
            {/* <!-- owl-carousel CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/owl-carousel/owl.carousel.css" />
            {/* <!-- Magnific Popup --> */}
            <link rel="stylesheet" href="home/css/magnific-popup/magnific-popup.css" />
            {/* <!-- Animate CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/animate.css" />
            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" type="text/css" href="home/css/font-awesome.min.css" />
            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" type="text/css" href="home/css/export.css" />
            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" type="text/css" href="home/css/line-awesome.min.css" />
            {/* <!-- media element player --> */}
            <link rel="stylesheet" type="text/css" href="home/css/mediaelementplayer.min.css" />
            {/* <!-- Timeline CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/timeline.min.css" />
            {/* <!-- style CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/style.css" />
            {/* <!-- Responsive CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/responsive.css" />
            {/* <!-- Custom CSS --> */}
            <link rel="stylesheet" type="text/css" href="home/css/custom.css" />
        </Head>

        <div className="HomePage">
            {/* loading */}
            <div id="loading">
                <div id="loading-center">
                    <div className="loader loader2">
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* loading End */}
            {/* Header */}
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="">
                                    <img src="home/images/logo.png" className="img-fluid" alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="la la-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#wave">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#ico">What is IDA Token?</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#ico">How is start</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#product">Benefits</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#token">Token holder</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#road">Road Map</a>
                                        </li>
                                        {/* <li class="nav-item">
                              <a class="nav-link" href="#team">Team</a>
                          </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact-us">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            English
                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="">Chinese</a>
                                        </div>
                                    </li>
                                    <li className="nav-item iq-mlr-0">
                                        <a className="nav-link button" data-toggle="modal" data-target=".iq-login" data-whatever="@mdo" href="">Login</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header END */}
            {/* banner */}
            <div id="wave" className="iq-banner">
                <div className="banner-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 align-self-center">
                                <div className="banner-text text-left iq-font-white">
                                    <h1 className="iq-font-white iq-mb-20">ASO - First Asset Security Offering Concept in Crypto World <b className="iq-font-yellow">Crypto World</b></h1>
                                    <p>Decentralized Digital Assets Platform for investors, property buyers, Crypto beginners and experts by using IDA Token
              </p>
                                    <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="button-play video-popup"><i className="fa fa-play" />
                                        {/* <ion-icon name="play" /> */}
                                    </a>
                                    <a href="" className="button bt-white iq-mt-5 iq-ml-10">White Paper</a>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center r9-mt-40">
                                <div className="iq-countdown">
                                    <h2 className="iq-tw-8 iq-font-yellow">ICO Ends In:</h2>
                                    <ul id="countdown">
                                        <li className="border-white"><span className="days">00</span>
                                            <p className="days_text ">Days</p>
                                        </li>
                                        <li className=" border-white"><span className="hours">00</span>
                                            <p className="hours_text">Hours</p>
                                        </li>
                                        <li className=" border-white"><span className="minutes">00</span>
                                            <p className="minutes_text">Minutes</p>
                                        </li>
                                        <li className="border-white"><span className="seconds">00</span>
                                            <p className="seconds_text">Seconds</p>
                                        </li>
                                    </ul>
                                    <div className="iq-progress-bar-linear">
                                        <p className="iq-progress-bar-text text-left">Sale Raised
                  <span>50000 IDA</span>
                                        </p>
                                        <div className="iq-progress-bar">
                                            <span data-percent={90} />
                                        </div>
                                    </div>
                                    <a className="button iq-mb-20 bt-white" href="" role="button">Sign Up &amp; Buy Token Now</a>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href=""><i className="fa fa-cc-visa" /></a></li>
                                        <li className="list-inline-item"><a href=""><i className="fa fa-paypal" /></a></li>
                                        <li className="list-inline-item"><a href=""><i className="fa fa-bitcoin" /></a></li>
                                        <li className="list-inline-item"><a href=""><i className="fa fa-credit-card-alt" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner */}
            {/* Main-Contain */}
            <div className="main-contain">
                {/* Clients */}
                <div className="iq-our-clients iq-ptb-60 light-bg">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 col-md-12 ">
                                <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="false" data-items={7} data-items-laptop={6} data-items-tab={5} data-items-mobile={2} data-items-mobile-sm={1} data-margin={30}>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/01.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/02.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/03.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/04.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/05.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/06.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/01.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/02.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/03.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/04.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/05.png" alt="#" /></a></div>
                                    <div className="item"> <a href="clients.html"><img className="img-fluid center-block" src="home/images/clients/white/06.png" alt="#" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Clients */}
                {/* What is Ico */}
                <section id="ico" className="overview-block-pt">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-6 align-self-center">
                                <img src="home/images/about/01.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="heading-title left">
                                    <small className="iq-font-green">wow Awesome</small>
                                    <h2 className="iq-tw-6">WHAT IS IDA COIN?</h2>
                                </div>
                                <p>IDA Coin is a coin which been built basing on real estate value. Each IDA token has been guaranteed by per square meter of 600 hectares leasehold land contract with Government in Cambodia for 50 years.
            </p>
                                <p>Investors can be guaranteed for their capital because of IDA value have real base price basing on real property value and be exchangeable whenever token price lesser than base price and calculated by base price and onward. </p>
                                <p> • ASO Concept  <br />
                                    • Blockchain Technology <br />
                                    • Smart Contracts<br />
                                    • Financial Strategy<br />
                                    • Crossboders Transactions <br />
                                    • Anonymity of Clients Profile</p>
                                <a className="button iq-mt-20" href="" role="button">Buy Token</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* What is Ico END */}
                {/* Our Mission */}
                <section className="overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <img src="home/images/about/02.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="heading-title left">
                                    <small className="iq-font-green" />
                                    <h2 className="iq-tw-6"> HOW IT START?
              </h2>
                                </div>
                                <p>We are widen up the market for those investors with their ability capitals can join into investing lease land and development to maximize their profits. With our IDA platform, we give chance for investors who have from small to big capacity can enroll into properties and project development business</p>
                                <p>Our goal is bring project, marketplace and finance together which secure and maximize benefits for those our clients - both corporate partners or private ones </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Mission END */}
                {/* What is Ico */}
                <section id="ico" className="overview-block-pt">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-6 align-self-center">
                                <img src="home/images/about/01.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="heading-title left">
                                    <small className="iq-font-green">wow Awesome</small>
                                    <h2 className="iq-tw-6">WE ARE PROTECTING INVESTORS CAPITALS AND BENEFITS
              </h2>
                                </div>
                                <p>IDA had been started by  600 Hectares Leasing - Development Project for Special Economic Zone and Multi Purposes Business for 50 years at Kandal Province, Cambodia. IDA token price and future evaluated by leasing value and increasing land price with very good starting price from $0.005
            </p>
                                <p>We are protecting our IDA token holders by if value in crypto market lesser than starting price, token holders have right to choose continue keeping token or parking back token to get enquiry of leasing project equal based price and still can enjoy leasing project incomes with 10 years contract.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* What is Ico END */}
                {/* Tranding Platform */}
                <section className="iq-tranding-Platform overview-block-pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">Exchange</small>
                                    <h2 className="title iq-tw-6">G-Exchange</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="light-bg">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                <i className="la la-gg-circle" /><span>IDA: Web Portal</span>
                                            </a>
                                            <a className="nav-item nav-link" id="nav-app-tab" data-toggle="tab" href="#nav-app" role="tab" aria-controls="nav-app" aria-selected="false">
                                                <i className="la la-mobile" /><span>IDA: App</span>
                                            </a>
                                        </div>
                                    </nav>
                                    <div className="tab-content iq-mt-50" id="nav-tabContent">
                                        <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img className="img-fluid" src="home/images/about/03.png" alt="#" />
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <h3 className="iq-tw-6 iq-mb-15">IDA: Token Usage</h3>
                                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text ever sincehar the 1500s.</p>
                                                    <ul>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade  show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img className="img-fluid" src="home/images/about/03.png" alt="#" />
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <h3 className="iq-tw-6 iq-mb-15">IDA: Token Usage</h3>
                                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text ever sincehar the 1500s.</p>
                                                    <ul>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-app" role="tabpanel" aria-labelledby="nav-app-tab">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img className="img-fluid" src="home/images/about/03.png" alt="#" />
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <h3 className="iq-tw-6 iq-mb-15">IDA: Token Usage</h3>
                                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text ever sincehar the 1500s.</p>
                                                    <ul>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-token" role="tabpanel" aria-labelledby="nav-token-tab">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img className="img-fluid" src="home/images/about/03.png" alt="#" />
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <h3 className="iq-tw-6 iq-mb-15">IDA: Token Usage</h3>
                                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text ever sincehar the 1500s.</p>
                                                    <ul>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img className="img-fluid" src="home/images/about/03.png" alt="#" />
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <h3 className="iq-tw-6 iq-mb-15">IDA: Token Usage</h3>
                                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text ever sincehar the 1500s.</p>
                                                    <ul>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                        <li><i className="la la-arrow-right iq-mr-10" />Lorem Ipsum is simply dummy text</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Tranding Platform END */}
                {/* Product Description */}
                <section id="product" className="iq-product-description overview-block-pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">Main Features</small>
                                    <h2 className="title iq-tw-6">Product Description</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row iq-mt-100">
                            <div className="col-lg-4">
                                <div className="iq-fancy-box text-sm-center">
                                    <div className="fancy-icon">
                                        <img className="img-fluid" src="home/images/fancy/1.png" alt="" />
                                    </div>
                                    <div className="fancy-content">
                                        <h5 className="iq-tw-7">Professional Code</h5>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer Lorem </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-fancy-box text-sm-center">
                                    <div className="fancy-icon">
                                        <img className="img-fluid" src="home/images/fancy/2.png" alt="" />
                                    </div>
                                    <div className="fancy-content">
                                        <h5 className="iq-tw-7">Professional Code</h5>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer Lorem </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-fancy-box text-sm-center">
                                    <div className="fancy-icon">
                                        <img className="img-fluid" src="home/images/fancy/3.png" alt="" />
                                    </div>
                                    <div className="fancy-content">
                                        <h5 className="iq-tw-7">Professional Code</h5>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer Lorem </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-fancy-box text-sm-center">
                                    <div className="fancy-icon">
                                        <img className="img-fluid" src="home/images/fancy/4.png" alt="" />
                                    </div>
                                    <div className="fancy-content">
                                        <h5 className="iq-tw-7">Professional Code</h5>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer Lorem </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-fancy-box text-sm-center">
                                    <div className="fancy-icon">
                                        <img className="img-fluid" src="home/images/fancy/5.png" alt="" />
                                    </div>
                                    <div className="fancy-content">
                                        <h5 className="iq-tw-7">Professional Code</h5>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer Lorem </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-fancy-box text-sm-center">
                                    <div className="fancy-icon">
                                        <img className="img-fluid" src="home/images/fancy/6.png" alt="" />
                                    </div>
                                    <div className="fancy-content">
                                        <h5 className="iq-tw-7">Professional Code</h5>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer Lorem </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product Description END */}
                {/* Tranding platform */}
                <section id="token" className="iq-Tranding-platform light-bg overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">Token</small>
                                    <h2 className="title iq-tw-6">Token Sale</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Token Name:</td>
                                                <td>IDA</td>
                                            </tr>
                                            <tr>
                                                <td>Token Platform:</td>
                                                <td>Ethereum</td>
                                            </tr>
                                            <tr>
                                                <td>Token Standard:</td>
                                                <td>REC150</td>
                                            </tr>
                                            <tr>
                                                <td>Max. Supply (Hard Cap):</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>Available for Purchase: </td>
                                                <td>70,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Pre-Sale Stage 1</td>
                                                <td>15-1 May 2019: 40% bonus, 1 IDA ~ $14</td>
                                            </tr>
                                            <tr>
                                                <td>Pre-Sale Stage 2</td>
                                                <td>1-5 May 2019: 20% bonus, 1 IDA ~ $28</td>
                                            </tr>
                                            <tr>
                                                <td>Pre-Sale Stage 3</td>
                                                <td>9-14 May 2019: 10% bonus, 1 IDA ~ $30</td>
                                            </tr>
                                            <tr>
                                                <td>Main ICO</td>
                                                <td>28 May – 30 June: 0% bonus, 1 IDA ~ $33</td>
                                            </tr>
                                            <tr>
                                                <td>Emission Rate: </td>
                                                <td>No period</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-sm-12 iq-mt-60">
                                <div className="heading-title">
                                    <h2 className="title iq-tw-6">Token Sale Proceeds</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div id="chartdiv" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Tranding platform END */}
                {/* Token Sale Timeline */}
                <section id="road" className="iq-timeline iq-bg-over overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">PROCESS</small>
                                    <h2 className="title iq-tw-6">Company Roadmap</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline">
                                    <div className="timeline__wrap">
                                        <div className="timeline__items">
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2018</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2015</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2014</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2012</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2010</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2007</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2004</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                            <div className="timeline__item">
                                                <div className="timeline__content">
                                                    <h2>2002</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Token Sale Timeline */}
                {/* Team */}
                {/* <section id="team" class="iq-team overview-block-pb">
      <div class="container">
          <div class="row">
              <div class="col-sm-12">
                  <div class="heading-title">
                      <small class="iq-font-green">Executive Team</small>
                      <h2 class="title iq-tw-6">Team Members</h2>
                      <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-3 col-md-6">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/01.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">Nik Jorden</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 r4-mt-40 ">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/02.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">JD Scot</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 r4-mt-40 ">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/03.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">Haris Morgan</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 r4-mt-40">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/04.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">Kips Leo</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row iq-mt-60">
              <div class="col-sm-12">
                  <div class="heading-title">
                      <h2 class="title iq-tw-6">Executive Advisor</h2>
                      <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-sm-4">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/05.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">Williamson</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-4 r4-mt-40 ">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/06.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">Kips Leo</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-4 r4-mt-40 ">
                  <div class="our-team">
                      <div class="team-image">
                          <img alt="#" src="home/images/team/07.jpg">
                          <ul class="social">
                              <li><a href="" class="fa fa-facebook"></a></li>
                              <li><a href="" class="fa fa-linkedin"></a></li>
                          </ul>
                      </div>
                      <div class="team-content">
                          <h5 class="title iq-tw-7">Niks Adams</h5>
                          <small class="iq-mt-5 d-block iq-mb-10 iq-font-yellow">CEO & Lead IDA</small>
                          <p class="description">when an unknownshil printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> */}
                {/* Team END */}
                {/* PARTNERS */}
                <section className="iq-partners overview-block-pb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">Executive Partners</small>
                                    <h2 className="title iq-tw-6">Partners &amp; Supporters</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/01.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/02.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/03.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/04.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/05.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/06.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/06.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/05.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/04.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/05.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/06.png" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="Signal-partners">
                                    <img className="img-fluid center-block" src="home/images/clients/white/01.png" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* PARTNERS END */}
                {/* FAQ */}
                <section id="faq" className="iq-anything overview-block-pb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">Ask Anything</small>
                                    <h2 className="title iq-tw-6">Frequently Asked Questions</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <iframe className="anything-video" src="https://www.youtube.com/embed/d95RnJorlQ4?rel=0" allow="autoplay; encrypted-media" allowFullScreen />
                            </div>
                            <div className="col-lg-6 r9-mt-40">
                                <div className="iq-accordion">
                                    <div className="iq-ad-block ad-active"> <a href="" className="ad-title iq-tw-6">Ipsum is simply dummy the printing?</a>
                                        <div className="ad-details">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
                                    </div>
                                    <div className="iq-ad-block"> <a href="" className="ad-title iq-tw-6">Dummy the printing and type setting?</a>
                                        <div className="ad-details">It has survived not only five centuries, but also the leap into electronic typesetting. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                                    </div>
                                    <div className="iq-ad-block"> <a href="" className="ad-title iq-tw-6">Standard dummy since the 1500s?</a>
                                        <div className="ad-details">It has survived not only five centuries, but also the leap into electronic typesetting. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                                    </div>
                                    <div className="iq-ad-block"> <a href="" className="ad-title iq-tw-6">It has survived five centuries?</a>
                                        <div className="ad-details">It has survived not only five centuries, but also the leap into electronic typesetting. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ END */}
                {/* Our Blog */}
                <section className="overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <small className="iq-font-green">News</small>
                                    <h2 className="title iq-tw-6">Our Blog</h2>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="true" data-dots="false" data-items={3} data-items-laptop={3} data-items-tab={2} data-items-mobile={1} data-items-mobile-sm={1} data-margin={30}>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="media-wrapper">
                                                    <video style={{ width: '100%', height: '100%' }} id="player1" poster="home/video/01.jpg" controls preload="none">
                                                        <source type="video/m4v" src="home/video/01.m4v" />
                                                        <source type="video/webm" src="home/video/01.webm" />
                                                        <source type="video/ogg" src="home/video/01.ogv" />
                                                    </video>
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With HTML Video</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <img className="img-fluid center-block" src="home/images/blog/01.jpg" alt="#" />
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With Image</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="iq-bolg-video">
                                                    <iframe src="https://player.vimeo.com/video/176916362" />
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With Vimeo</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="iq-bolg-video">
                                                    <iframe src="https://www.youtube.com/embed/nrJtHemSPW4?rel=0" allowFullScreen />
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With Youtube</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <img className="img-fluid center-block" src="home/images/blog/03.jpg" alt="#" />
                                                <div className="players" id="player2-container">
                                                    <div className="media-wrapper">
                                                        <audio id="player2" preload="none" controls>
                                                            <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" type="audio/mp3" />
                                                        </audio>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With Audio</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <img className="img-fluid center-block" src="home/images/blog/02.jpg" alt="#" />
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With Image</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="owl-carousel arrow-1" data-autoplay="true" data-loop="true" data-nav="true" data-dots="false" data-items={1} data-items-laptop={1} data-items-tab={1} data-items-mobile={1} data-items-mobile-sm={1} data-margin={30}>
                                                    <div className="item">
                                                        <img className="img-fluid" src="home/images/blog/01.jpg" alt="#" />
                                                    </div>
                                                    <div className="item">
                                                        <img className="img-fluid" src="home/images/blog/02.jpg" alt="#" />
                                                    </div>
                                                    <div className="item">
                                                        <img className="img-fluid" src="home/images/blog/03.jpg" alt="#" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-7 iq-mb-10">Blogpost With Slider</h5> </a> </div>
                                                <div className="blog-content">
                                                    <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                                </div>
                                                <div className="iq-blog-meta">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                                                        <li className="list-inline-item"><a href=""><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Blog END */}
            </div>
            {/* Token Sale Proceeds */}
            <section id="contact-us" className="contact-us overview-block-pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <form id="contact" method="post">
                                <div className="heading-title left">
                                    <small className="iq-font-green">Contact With Us</small>
                                    <h2 className="title iq-tw-6">Contact ICO IDA</h2>
                                </div>
                                <p className="iq-mb-30">Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                                <div className="contact-form">
                                    <div className="section-field">
                                        <input className="require" id="contact_name" type="text" placeholder="Name*" name="name" />
                                    </div>
                                    <div className="section-field">
                                        <input className="require" id="contact_email" type="email" placeholder="Email*" name="email" />
                                    </div>
                                    <div className="section-field">
                                        <input className="require" id="contact_phone" type="text" placeholder="Phone*" name="phone" />
                                    </div>
                                    <div className="section-field textarea">
                                        <textarea id="contact_message" className="input-message require" placeholder="Comment*" rows={5} name="message" defaultValue={""} />
                                    </div>
                                    <div className="section-field iq-mt-20">
                                        <div className="g-recaptcha" data-sitekey="6Lc5XV4UAAAAAJzUmGomye9Peru8lXyzT22FH0lX" />
                                    </div>
                                    <div className="d-block text-center">
                                        <button id="submit" name="submit" type="submit" value="Send" className="button iq-mt-15">Send Message</button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible fade show" role="alert" id="success">
                                        <strong>Thank You, Your message has been received.</strong>.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 iq-pl-50">
                            <div className="heading-title left iq-mt-30">
                                <small className="iq-font-green">JUST ONE CALLs</small>
                                <h2 className="title iq-tw-6">Address</h2>
                            </div>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting. It has survived not only five centuries.</p>
                            <div className="iq-contact-box-01 iq-mt-40">
                                <div className="iq-icon yellow-bg">
                                    <i aria-hidden="true" className="la la-map-marker" />
                                </div>
                                <div className="contact-content">
                                    <h5 className="iq-tw-7">Address</h5>
                                    <span className="lead">1234 North Luke Lane,<br />South Bend,IN 360001</span>
                                </div>
                            </div>
                            <div className="iq-contact-box-01 iq-mt-40">
                                <div className="iq-icon yellow-bg">
                                    <i aria-hidden="true" className="la la-phone-square" />
                                </div>
                                <div className="contact-content">
                                    <h5 className="iq-tw-6">Phone</h5>
                                    <span className="lead iq-tw-6">+0123 456 789</span>
                                    <p className="iq-mb-0">Mon-Fri 8:00am - 8:00pm</p>
                                </div>
                            </div>
                            <div className="iq-contact-box-01 iq-mt-40">
                                <div className="iq-icon yellow-bg">
                                    <i aria-hidden="true" className="la la-envelope-o" />
                                </div>
                                <div className="contact-content">
                                    <h5 className="iq-tw-6">Mail</h5>
                                    <span className="lead iq-tw-6">support@IDA.com</span>
                                    <p className="iq-mb-0">24 X 7 online support</p>
                                </div>
                            </div>
                            <ul className="info-share">
                                <li><a href=""><i className="fa fa-facebook" /></a></li>
                                <li><a href=""><i className="fa fa-twitter" /></a></li>
                                <li><a href=""><i className="fa fa-pinterest" /></a></li>
                                <li><a href=""><i className="fa fa-linkedin" /></a></li>
                                <li><a href=""><i className="fa fa-youtube" /></a></li>
                                <li><a href=""><i className="fa fa-google" /></a></li>
                                <li><a href=""><i className="fa fa-github" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright-box text-center iq-bg-over iq-over-black-20 text-center iq-ptb-20 iq-mt-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="iq-copyright iq-font-white">© Copyright 2018 IDA Developed by <a href="https://iqonicthemes.com/" target="_blank">iqonicthemes.</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Token Sale Proceeds END */}
            {/* back-to-top */}
            <div id="back-to-top">
                <a className="top" id="top" href="#top"><i className="fa fa-angle-double-up" aria-hidden="true" /> </a>
            </div>
            {/* back-to-top End */}
            {/* bubbly */}
            <canvas id="canvas1" />
            {/* bubbly End */}
        </div>

    </Fragment >
}

