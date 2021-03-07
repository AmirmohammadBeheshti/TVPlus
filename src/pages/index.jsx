import {useState} from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Index() {


    return (
        <>
            <Head>
                {/*css*/}

                <link rel="stylesheet" href="/css/nouislider.min.css"/>
                <link rel="stylesheet" href="/css/ionicons.min.css"/>
                <link rel="stylesheet" href="/css/plyr.css"/>
                <link rel="stylesheet" href="/css/photoswipe.css"/>
                <link rel="stylesheet" href="/css/default-skin.css"/>
                <link rel="stylesheet" href="css/swiper.min.css"/>
                <link rel="stylesheet" href="/css/main.css"/>

                {/*js*/}
                <script src="js/nouislider.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.4/plyr.min.js"></script>
                <script src="js/jquery.morelines.min.js"></script>
                <script src="js/photoswipe.min.js"></script>
                <script src="js/photoswipe-ui-default.min.js"></script>

            </Head>
            <Header/>


            <section id="slideerjs">

                <div className="swiper-container swiper-container1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <video data-keepplaying="" autoPlay=""
                                   muted=""
                                   loop="" className="myVideo">
                                <source src="http://golzar1.spad-host.ir//img/Golzar/4.mp4" type="video/mp4"/>
                            </video>
                            <div className="slidertext slider-box-layout9">

                                <div className="item-content">
                                    <div className="container">
                                        <ul className="entry-meta meta-color-light">
                                            <li><i className="fas fa-tag"></i>سینما</li>
                                            <li><i className="fas fa-calendar-alt"></i>19 مهر 1399</li>
                                            <li><i className="fas fa-user"></i>توسط <a href="#">آرش خادملو</a></li>
                                            <li><i className="far fa-clock"></i>10 دقیقه خواندن</li>
                                        </ul>
                                        <h2 className="item-title">نکات جالبی درباره بازیگران سینما</h2>
                                        <div className="action-area">
                                            <ul>
                                                <li className="item-btn-wrap">
                                                    <a href="single-blog2.html">ادامه مطلب<i
                                                        className="icon ion-ios-arrow-back"></i></a>
                                                </li>
                                                <li className="entry-meta meta-color-light">
                                                    <a href="#"><i className="icon ion-ios-heart"></i>15</a>
                                                    <a href="#"><i className="icon ion-ios-text"></i>02</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="swiper-slide">
                            <video data-keepplaying="" autoPlay=""
                                   muted=""
                                   loop="" className="myVideo">
                                <source src="http://golzar1.spad-host.ir//img/Golzar/4.mp4" type="video/mp4"/>
                            </video>
                            <div className="slidertext slider-box-layout9">

                                <div className="item-content">
                                    <div className="container">
                                        <ul className="entry-meta meta-color-light">
                                            <li><i className="fas fa-tag"></i>سینما</li>
                                            <li><i className="fas fa-calendar-alt"></i>19 مهر 1399</li>
                                            <li><i className="fas fa-user"></i>توسط <a href="#">آرش خادملو</a></li>
                                            <li><i className="far fa-clock"></i>10 دقیقه خواندن</li>
                                        </ul>
                                        <h2 className="item-title">نکات جالبی درباره بازیگران سینما</h2>
                                        <div className="action-area">
                                            <ul>
                                                <li className="item-btn-wrap">
                                                    <a href="single-blog2.html">ادامه مطلب<i
                                                        className="icon ion-ios-arrow-back"></i></a>
                                                </li>
                                                <li className="entry-meta meta-color-light">
                                                    <a href="#"><i className="icon ion-ios-heart"></i>15</a>
                                                    <a href="#"><i className="icon ion-ios-text"></i>02</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="swiper-slide">
                            <video data-keepplaying="" autoPlay=""
                                   muted=""
                                   loop="" className="myVideo">
                                <source src="http://golzar1.spad-host.ir//img/Golzar/4.mp4" type="video/mp4"/>
                            </video>
                            <div className="slidertext slider-box-layout9">

                                <div className="item-content">
                                    <div className="container">
                                        <ul className="entry-meta meta-color-light">
                                            <li><i className="fas fa-tag"></i>سینما</li>
                                            <li><i className="fas fa-calendar-alt"></i>19 مهر 1399</li>
                                            <li><i className="fas fa-user"></i>توسط <a href="#">آرش خادملو</a></li>
                                            <li><i className="far fa-clock"></i>10 دقیقه خواندن</li>
                                        </ul>
                                        <h2 className="item-title">نکات جالبی درباره بازیگران سینما</h2>
                                        <div className="action-area">
                                            <ul>
                                                <li className="item-btn-wrap">
                                                    <a href="single-blog2.html">ادامه مطلب<i
                                                        className="icon ion-ios-arrow-back"></i></a>
                                                </li>
                                                <li className="entry-meta meta-color-light">
                                                    <a href="#"><i className="icon ion-ios-heart"></i>15</a>
                                                    <a href="#"><i className="icon ion-ios-text"></i>02</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>


            <section className="home">


                <div className="container container-style">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="home__title"><b>پیشنهاد </b> ویژه </h1>

                            <button className="home__nav home__nav--prev" type="button">
                                <i className="icon ion-ios-arrow-round-back"></i>
                            </button>
                            <button className="home__nav home__nav--next" type="button">
                                <i className="icon ion-ios-arrow-round-forward"></i>
                            </button>
                        </div>

                        <div className="col-12">
                            <div className="owl-carousel-top owl-carousel home__carousel">
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/covers/slide1.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس حین کتک خوردنش از پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/covers/slide2.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/covers/slide3.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/covers/slide4.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="df-style">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="home__title home-title">
                                <b>
                                    Trend TV
                                </b>
                            </h1>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 slow-carouseldiv">
                            <div className="owl-carousel home__carousel slow-carousel">
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/1.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/2.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/3.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/4.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/1.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/2.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/3.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/4.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/1.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/2.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/3.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/4.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/1.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/2.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/3.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/4.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12  slow-carouseldiv">
                            <div className="owl-carousel home__carousel slow-carousel2">
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/5.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/6.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/5.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/6.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/5.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/6.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/5.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/6.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/5.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/6.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">

                                    <div className="card card--big">
                                        <div className="card__cover">
                                            <img src="img/gallery/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section className="content content-style">
                <div className="content__head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <h2 className="content__title"> به تی وی پلاس خوش آمدید</h2>

                                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
                                           aria-controls="tab-1" aria-selected="true"> آخرین ویدیو ها</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab"
                                           aria-controls="tab-2"
                                           aria-selected="false">داغترین ها</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab"
                                           aria-controls="tab-3"
                                           aria-selected="false">جنجالی ترین ها </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab"
                                           aria-controls="tab-4"
                                           aria-selected="false">پربازدیدترین ها</a>
                                    </li>


                                </ul>

                                <div className="content__mobile-tabs" id="content__mobile-tabs">
                                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation"
                                         id="mobile-tabs"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        <span></span>
                                        <input type="button" value=" ایتم ها"/>
                                    </div>

                                    <div className="content__mobile-tabs-menu dropdown-menu"
                                         aria-labelledby="mobile-tabs">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item"><a className="nav-link active" id="1-tab"
                                                                        data-toggle="tab"
                                                                        href="#tab-1" role="tab" aria-controls="tab-1"
                                                                        aria-selected="true"> آخرین
                                                ودیو ها</a></li>

                                            <li className="nav-item"><a className="nav-link" id="2-tab"
                                                                        data-toggle="tab" href="#tab-2"
                                                                        role="tab" aria-controls="tab-2"
                                                                        aria-selected="false">داغترین ها</a></li>

                                            <li className="nav-item"><a className="nav-link" id="3-tab"
                                                                        data-toggle="tab" href="#tab-3"
                                                                        role="tab" aria-controls="tab-3"
                                                                        aria-selected="false">سینما </a></li>

                                            <li className="nav-item"><a className="nav-link" id="4-tab"
                                                                        data-toggle="tab" href="#tab-4"
                                                                        role="tab" aria-controls="tab-4"
                                                                        aria-selected="false">تلویزیون</a></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <div className="card card--list">
                                        <div className="row">
                                            <div className="col-12 col-sm-4">
                                                <div className="card__cover">
                                                    <img src="img/covers/9.jpg" alt=""/>
                                                    <a href="blog" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-8">
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد
                                                        زمانی حین کتک
                                                        خوردنش از پلیس</a></h3>
                                                    <span className="card__category">
												<a href="#">نیما اسلامی</a>
												<a href="#">22 /اسفند/99</a>
											</span>

                                                    <div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-eye"></i>20
													بازدید</span>

                                                        <ul className="card__list">
                                                            <li>سینما</li>
                                                            <li>تلوزیون</li>
                                                        </ul>
                                                    </div>

                                                    <div className="card__description">
                                                        <p>رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                            ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی
                                                            هایش با
                                                            علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی
                                                            پلاس</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-12 col-lg-6">
                                    <div className="card card--list">
                                        <div className="row">
                                            <div className="col-12 col-sm-4">
                                                <div className="card__cover">
                                                    <img src="img/covers/10.jpg" alt=""/>
                                                    <a href="blog" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-8">
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد
                                                        زمانی حین کتک
                                                        خوردنش از پلیس</a></h3>
                                                    <span className="card__category">
												<a href="#">نیما اسلامی</a>
												<a href="#">22 /اسفند/99</a>
											</span>

                                                    <div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-eye"></i>30
													بازدید</span>

                                                        <ul className="card__list">
                                                            <li>سینما</li>
                                                            <li>تلوزیون</li>
                                                        </ul>
                                                    </div>

                                                    <div className="card__description">
                                                        <p>رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                            ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی
                                                            هایش با
                                                            علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی
                                                            پلاس</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-12 col-lg-6">
                                    <div className="card card--list">
                                        <div className="row">
                                            <div className="col-12 col-sm-4">
                                                <div className="card__cover">
                                                    <img src="img/covers/7.jpg" alt=""/>
                                                    <a href="blog" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-8">
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد
                                                        زمانی حین کتک
                                                        خوردنش از پلیس</a></h3>
                                                    <span className="card__category">
												<a href="#">نیما اسلامی</a>
												<a href="#">22 /اسفند/99</a>
											</span>

                                                    <div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-eye"></i>30
													بازدید</span>

                                                        <ul className="card__list">
                                                            <li>سینما</li>
                                                            <li>تلوزیون</li>
                                                        </ul>
                                                    </div>

                                                    <div className="card__description">
                                                        <p>رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                            ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی
                                                            هایش با
                                                            علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی
                                                            پلاس</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-12 col-lg-6">
                                    <div className="card card--list">
                                        <div className="row">
                                            <div className="col-12 col-sm-4">
                                                <div className="card__cover">
                                                    <img src="img/covers/8.jpg" alt=""/>
                                                    <a href="blog" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-8">
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد
                                                        زمانی حین کتک
                                                        خوردنش از پلیس</a></h3>
                                                    <span className="card__category">
												<a href="#">نیما اسلامی</a>
												<a href="#">22 /اسفند/99</a>
											</span>

                                                    <div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-eye"></i>30
													بازدید</span>

                                                        <ul className="card__list">
                                                            <li>سینما</li>
                                                            <li>تلوزیون</li>
                                                        </ul>
                                                    </div>

                                                    <div className="card__description">
                                                        <p>رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                            ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی
                                                            هایش با
                                                            علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی
                                                            پلاس</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                            <div className="row">
                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/9.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/9.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                            <div className="row">

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/9.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/9.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
                            <div className="row">
                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/9.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس </a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/8.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/7.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img/covers/9.jpg" alt=""/>
                                            <a href="blog" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از
                                                پلیس</a></h3>
                                            <span className="card__category">
										<a href="#">نیما اسلامی</a>
										<a href="#">22 /اسفند/99</a>
									</span>
                                            <span className="card__rate"><i
                                                className="icon ion-ios-eye"></i>30 بازدید</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section2" style={{position: "relative"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="content__title text-center"> Top 10 Plus </h2>
                        </div>
                    </div>
                </div>
                <div className="swiper-container swiper-container2 ">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide2 swiper-slide"
                             style={{backgroundImage:"url(img/gallery/project-2.jpg)"}}>
                            <div className="container">

                                <div className="row">
                                    <h1 className="swipertitle">
                                        هدیه گرانقیمت جشن عروسی پوریا پورسرخ توسط یک برند لوکس
                                    </h1>

                                </div>


                            </div>

                        </div>
                        <div className="swiper-slide2 swiper-slide"
                             style={{backgroundImage:"url(img/gallery/project-3.jpg)"}}>
                            <div className="container">
                                <div className="row">
                                    <h1 className="swipertitle">
                                        رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در ایران
                                    </h1>

                                </div>


                            </div>

                        </div>
                        <div className="swiper-slide2 swiper-slide"
                             style={{backgroundImage:"url(img/gallery/project-4.jpg)"}}>
                            <div className="container">
                                <div className="row">
                                    <h1 className="swipertitle">
                                        ترلان پروانه: یک خبرگزاری نامعتبر آن عکس را منتشر کرد
                                    </h1>

                                </div>


                            </div>

                        </div>

                    </div>

                    <div className="swiper-pagination"></div>
                </div>


            </section>

            <section className="content-section content-style">


                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 align-self-center res-section1 text-right">
                            <div className="text-right">
                                <img  className="logo-title-img" src="img/logo2.png"/>
                                <p className="res-title2">کانون تبلیغاتی</p>
                                <p className="res-txt2">
                                    شما می توانید با هر دستگاهی اعم از : تبلت ، گوشی ، و دسکتاپ فیلم و ویدئو های پایان
                                    ناپذیر تی
                                    وی
                                    پلاس را مشاهده کنید و لحظات خود را با ما تبدیل به خاطره کنید
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 res-section2">
                            <img src="img/res.png" className="our-story-card-img"/>
                            <div className="our-story-card-animation">
                                <video className="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                                    <source src="https://www.spad.co/df.m4v" type="video/mp4"/>
                                </video>
                                <div className="our-story-card-animation-text"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section__title"> آخرین خبر</h2>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/9.jpg" alt=""/>
                                    <a href="blog" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از
                                        پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">نیما اسلامی</a>
								<a href="#">22 /اسفند/99</a>
							</span>
                                    <span className="card__rate"><i className="icon ion-ios-eye"></i>30 بازدید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/7.jpg" alt=""/>
                                    <a href="blog" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از
                                        پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">نیما اسلامی</a>
								<a href="#">22 /اسفند/99</a>
							</span>
                                    <span className="card__rate"><i className="icon ion-ios-eye"></i>30 بازدید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/10.jpg" alt=""/>
                                    <a href="blog" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از
                                        پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">نیما اسلامی</a>
								<a href="#">22 /اسفند/99</a>
							</span>
                                    <span className="card__rate"><i className="icon ion-ios-eye"></i>30 بازدید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/7.jpg" alt=""/>
                                    <a href="blog" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از
                                        پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">نیما اسلامی</a>
								<a href="#">22 /اسفند/99</a>
							</span>
                                    <span className="card__rate"><i className="icon ion-ios-eye"></i>30 بازدید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/8.jpg" alt=""/>
                                    <a href="blog" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از
                                        پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">نیما اسلامی</a>
								<a href="#">22 /اسفند/99</a>
							</span>
                                    <span className="card__rate"><i className="icon ion-ios-eye"></i>30 بازدید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/10.jpg" alt=""/>
                                    <a href="blog" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از
                                        پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">نیما اسلامی</a>
								<a href="#">22 /اسفند/99</a>
							</span>
                                    <span className="card__rate"><i className="icon ion-ios-eye"></i>30 بازدید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <a href="#" className="section__btn"> بیشتر</a>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </>
    )
}