import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Blog() {
    return (
        <>
            <Head>
                {/*css*/}
                <link rel="stylesheet" href="css/nouislider.min.css"/>
                <link rel="stylesheet" href="css/ionicons.min.css"/>
                <link rel="stylesheet" href="css/plyr.css"/>
                <link rel="stylesheet" href="css/photoswipe.css"/>
                <link rel="stylesheet" href="css/default-skin.css"/>
                <link rel="stylesheet" href="css/videoPlayer.css"/>
                <link rel="stylesheet" href="css/main.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                {/*js*/}

                <script src="js/plyr.min.js"></script>
                <script src="js/jquery.morelines.min.js"></script>
                <script src="js/photoswipe.min.js"></script>
                <script src="js/photoswipe-ui-default.min.js"></script>
                <script src="js/videoPlayer.js"></script>
                <script src="js/nouislider.min.js"></script>

            </Head>
            <Header/>
            <div className="container">

                <br />
                    <br />
                        <br/>


                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="video-border">
                                        <video controls width="100%" poster="img/videoCover.jpg" id="player">
                                            <source src="img/1.mp4" type="video/mp4" size="576" />
                                                <a href="img/1.mp4" download>Download</a>
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <br />
                                <br/>

                                    <div className="video-des">
                                        <h1>توضیحات ویدئو</h1>
                                        <p>
                                            توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ،توضیحات ویدئو
                                            ، توضیحات ویدئو ، توضیحات ویدئو
                                            ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات
                                            ویدئو ، توضیحات ویدئو ، توضیحات
                                            ویدئو ،
                                            توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ،توضیحات ویدئو
                                            ، توضیحات ویدئو ، توضیحات ویدئو
                                            ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات
                                            ویدئو ، توضیحات ویدئو ، توضیحات
                                            ویدئو ،
                                            توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ،توضیحات ویدئو
                                            ، توضیحات ویدئو ، توضیحات ویدئو
                                            ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات ویدئو ، توضیحات
                                            ویدئو ، توضیحات ویدئو ، توضیحات
                                            ویدئو ،
                                        </p>
                                    </div>
                                    <br/>
                                        <div className="tag-part">
                                            <span className="tag-title">دسته بندی ها : </span>

                                            <ul className="tag-list">
                                                <li><a href="#">سینما</a></li>
                                                <li><a href="#">تلویزیون</a></li>
                                                <li><a href="#">بازیگران</a></li>
                                                <li><a href="#">تی وی پلاس</a></li>
                                                <li><a href="#">سینما</a></li>
                                                <li><a href="#">تلویزیون</a></li>
                                                <li><a href="#">بازیگران</a></li>
                                                <li><a href="#">تی وی پلاس</a></li>


                                            </ul>
                                        </div>
                                        <div className="related_actor">
                                            <h2 className="actor-title">افراد مرتبط</h2>
                                            <div className="row-flex">
                                                <div className="actor-img">
                                                    <a href="actors">
                                                        <img className="img" src="img/actors/homan.jpg" alt=""/>
                                                        <div className="actor-details">
                                                            <h4 className="actor-font actor-name">هومن سیدی</h4>
                                                            <p className="actor-font">بازیگر</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="actor-img">
                                                    <a href="actors">
                                                        <img className="img" src="img/actors/alizade.jpg" alt=""/>
                                                        <div className="actor-details">
                                                            <h4 className="actor-font actor-name">محمد علیزاده</h4>
                                                            <p className="actor-font">خواننده</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="actor-img">
                                                    <a href="actors">
                                                        <img className="img" src="img/actors/elnaz.jpg" alt=""/>
                                                        <div className="actor-details">
                                                            <h4 className="actor-font actor-name"> شاکر دوست</h4>
                                                            <p className="actor-font">بازیگر</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="actor-img">
                                                    <a href="actors">
                                                        <img className="img" src="img/actors/mozafari.jpg" alt=""/>
                                                        <div className="actor-details">
                                                            <h4 className="actor-font actor-name">شهاب مظفری</h4>
                                                            <p className="actor-font">خواننده</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="actor-img">
                                                    <a href="actors">
                                                        <img className="img" src="img/actors/setareh.jpg" alt=""/>
                                                        <div className="actor-details">
                                                            <h4 className="actor-font actor-name">ستاره حسینی</h4>
                                                            <p className="actor-font">بازیگر</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="actor-img">
                                                    <a href="actors">
                                                        <img className="img" src="img/actors/shahab.jpg" alt=""/>
                                                        <div className="actor-details">
                                                            <h4 className="actor-font actor-name">شهاب حسینی</h4>
                                                            <p className="actor-font">بازیگر</p>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                        <section className="home">
                                            <div className="container video-container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h1 className="home__title"><b>ویدئو های مرتبط </b></h1>

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
                                                                        <img src="img/covers/slide1.jpg" alt="" />
                                                                            <a href="blog" className="card__play">
                                                                                <i className="icon ion-ios-play"></i>
                                                                            </a>
                                                                    </div>
                                                                    <div className="card__content">
                                                                        <h3 className="card__title"><a href="#">لحظه تلخ
                                                                            ترکیدن بغض حامد زمانی حین کتک خوردنش از
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
                                                                        <img src="img/covers/slide2.jpg" alt="" />
                                                                            <a href="blog" className="card__play">
                                                                                <i className="icon ion-ios-play"></i>
                                                                            </a>
                                                                    </div>
                                                                    <div className="card__content">
                                                                        <h3 className="card__title"><a href="#">لحظه تلخ
                                                                            ترکیدن بغض حامد زمانی حین کتک خوردنش از
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
                                                                        <img src="img/covers/slide3.jpg" alt="" />
                                                                            <a href="blog" className="card__play">
                                                                                <i className="icon ion-ios-play"></i>
                                                                            </a>
                                                                    </div>
                                                                    <div className="card__content">
                                                                        <h3 className="card__title"><a href="#">لحظه تلخ
                                                                            ترکیدن بغض حامد زمانی حین کتک خوردنش از
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
                                                                        <img src="img/covers/slide4.jpg" alt="" />
                                                                            <a href="blog" className="card__play">
                                                                                <i className="icon ion-ios-play"></i>
                                                                            </a>
                                                                    </div>
                                                                    <div className="card__content">
                                                                        <h3 className="card__title"><a href="#">لحظه تلخ
                                                                            ترکیدن بغض حامد زمانی حین کتک خوردنش از
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
                                        <section className="rtl">
                                            <div className="container">
                                                <div>
                                                    <ul className="comment-part">
                                                        <li>
                                                            <div className="comment">
                                                                <i className="fa fa-user"></i>
                                                            </div>
                                                            <div className="comment-details">
                                                                <div className="comment-time">
                                                                    <span>روژین - </span>
                                                                    <span>سه‌شنبه ۲۱ بهمن ساعت ۱۰:۳۷</span>
                                                                </div>
                                                                <div className="comment-des">
                                                                    <p>
                                                                        عالی کی مرام چه میپردازه در هر فیلمش
                                                                    </p>
                                                                </div>
                                                                <div className="comment-like">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                                         height="40" viewBox="0 0 40 40"
                                                                         className="t-svg-0-1-253">
                                                                        <path className="svg-c1"
                                                                              d="M29.884 15.13c-2.536 0-9.32-1.1-10.248-6.118-.556-3-2.4-3.8-3.8-3.54-1.768.35-2.927 2.056-2.6 3.83l1.033 5.828h-2.83a3.84 3.84 0 0 0-3.095 1.546 3.84 3.84 0 0 0-.625 3.4l2.48 8.57a5.46 5.46 0 0 0 5.218 3.923h5.556a5.44 5.44 0 0 0 3.472-1.255l1.216-1.01a5.13 5.13 0 0 1 3.273-1.184h.957a2.56 2.56 0 0 0 2.557-2.557v-8.876a2.56 2.56 0 0 0-2.554-2.555zm.932 2.557v8.876c-.001.514-.418.93-.932.93h-.957a6.75 6.75 0 0 0-4.312 1.56l-1.215 1c-.684.568-1.544.88-2.433.88H15.4c-1.693-.006-3.18-1.124-3.656-2.75l-2.478-8.57c-.2-.678-.065-1.41.362-1.974.423-.57 1.09-.904 1.8-.9h4.768l-1.37-7.73a1.66 1.66 0 0 1 1.275-1.952c.91-.16 1.646.7 1.93 2.234.5 2.7 2.374 4.818 5.422 6.12a17.75 17.75 0 0 0 6.423 1.327c.514.003.93.42.928.935z"></path>
                                                                    </svg>
                                                                    <span>0</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                                         height="40" viewBox="0 0 40 40"
                                                                         className="t-svg-0-1-253">
                                                                        <path className="svg-c1"
                                                                              d="M29.807 11.352c-.68-2.318-2.802-3.914-5.218-3.922h-5.56c-1.27 0-2.497.444-3.473 1.255l-1.215 1a5.13 5.13 0 0 1-3.274 1.184h-.956a2.56 2.56 0 0 0-2.557 2.557v8.876a2.56 2.56 0 0 0 2.557 2.557c2.536 0 9.322 1.1 10.248 6.118.614 3.324 2.7 3.582 3.322 3.582.164 0 .328-.014.49-.043a3.3 3.3 0 0 0 2.6-3.829l-1.032-5.828h2.83a3.84 3.84 0 0 0 3.1-1.546 3.84 3.84 0 0 0 .625-3.4zm.554 11a2.23 2.23 0 0 1-1.8.9h-4.768l1.37 7.73a1.66 1.66 0 0 1-1.275 1.951c-.91.16-1.646-.7-1.93-2.233-.5-2.7-2.373-4.818-5.422-6.122-2.04-.838-4.22-1.288-6.424-1.327-.514-.001-.93-.418-.93-.932v-8.876a.93.93 0 0 1 .931-.931h.956c1.576-.001 3.1-.553 4.313-1.56l1.215-1.01c.684-.568 1.545-.88 2.434-.88h5.556c1.693.006 3.18 1.124 3.656 2.748l2.48 8.57a2.23 2.23 0 0 1-.357 1.968z"></path>
                                                                    </svg>
                                                                    <span>0</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment">
                                                                <i className="fa fa-user"></i>
                                                            </div>
                                                            <div className="comment-details">
                                                                <div className="comment-time">
                                                                    <span>روژین - </span>
                                                                    <span>سه‌شنبه ۲۱ بهمن ساعت ۱۰:۳۷</span>
                                                                </div>
                                                                <div className="comment-des">
                                                                    <p>
                                                                        عالی کی مرام چه میپردازه در هر فیلمش
                                                                    </p>
                                                                </div>
                                                                <div className="comment-like">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                                         height="40" viewBox="0 0 40 40"
                                                                         className="t-svg-0-1-253">
                                                                        <path className="svg-c1"
                                                                              d="M29.884 15.13c-2.536 0-9.32-1.1-10.248-6.118-.556-3-2.4-3.8-3.8-3.54-1.768.35-2.927 2.056-2.6 3.83l1.033 5.828h-2.83a3.84 3.84 0 0 0-3.095 1.546 3.84 3.84 0 0 0-.625 3.4l2.48 8.57a5.46 5.46 0 0 0 5.218 3.923h5.556a5.44 5.44 0 0 0 3.472-1.255l1.216-1.01a5.13 5.13 0 0 1 3.273-1.184h.957a2.56 2.56 0 0 0 2.557-2.557v-8.876a2.56 2.56 0 0 0-2.554-2.555zm.932 2.557v8.876c-.001.514-.418.93-.932.93h-.957a6.75 6.75 0 0 0-4.312 1.56l-1.215 1c-.684.568-1.544.88-2.433.88H15.4c-1.693-.006-3.18-1.124-3.656-2.75l-2.478-8.57c-.2-.678-.065-1.41.362-1.974.423-.57 1.09-.904 1.8-.9h4.768l-1.37-7.73a1.66 1.66 0 0 1 1.275-1.952c.91-.16 1.646.7 1.93 2.234.5 2.7 2.374 4.818 5.422 6.12a17.75 17.75 0 0 0 6.423 1.327c.514.003.93.42.928.935z"></path>
                                                                    </svg>
                                                                    <span>0</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                                         height="40" viewBox="0 0 40 40"
                                                                         className="t-svg-0-1-253">
                                                                        <path className="svg-c1"
                                                                              d="M29.807 11.352c-.68-2.318-2.802-3.914-5.218-3.922h-5.56c-1.27 0-2.497.444-3.473 1.255l-1.215 1a5.13 5.13 0 0 1-3.274 1.184h-.956a2.56 2.56 0 0 0-2.557 2.557v8.876a2.56 2.56 0 0 0 2.557 2.557c2.536 0 9.322 1.1 10.248 6.118.614 3.324 2.7 3.582 3.322 3.582.164 0 .328-.014.49-.043a3.3 3.3 0 0 0 2.6-3.829l-1.032-5.828h2.83a3.84 3.84 0 0 0 3.1-1.546 3.84 3.84 0 0 0 .625-3.4zm.554 11a2.23 2.23 0 0 1-1.8.9h-4.768l1.37 7.73a1.66 1.66 0 0 1-1.275 1.951c-.91.16-1.646-.7-1.93-2.233-.5-2.7-2.373-4.818-5.422-6.122-2.04-.838-4.22-1.288-6.424-1.327-.514-.001-.93-.418-.93-.932v-8.876a.93.93 0 0 1 .931-.931h.956c1.576-.001 3.1-.553 4.313-1.56l1.215-1.01c.684-.568 1.545-.88 2.434-.88h5.556c1.693.006 3.18 1.124 3.656 2.748l2.48 8.57a2.23 2.23 0 0 1-.357 1.968z"></path>
                                                                    </svg>
                                                                    <span>0</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment">
                                                                <i className="fa fa-user"></i>
                                                            </div>
                                                            <div className="comment-details">
                                                                <div className="comment-time">
                                                                    <span>روژین - </span>
                                                                    <span>سه‌شنبه ۲۱ بهمن ساعت ۱۰:۳۷</span>
                                                                </div>
                                                                <div className="comment-des">
                                                                    <p>
                                                                        عالی کی مرام چه میپردازه در هر فیلمش
                                                                    </p>
                                                                </div>
                                                                <div className="comment-like">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                                         height="40" viewBox="0 0 40 40"
                                                                         className="t-svg-0-1-253">
                                                                        <path className="svg-c1"
                                                                              d="M29.884 15.13c-2.536 0-9.32-1.1-10.248-6.118-.556-3-2.4-3.8-3.8-3.54-1.768.35-2.927 2.056-2.6 3.83l1.033 5.828h-2.83a3.84 3.84 0 0 0-3.095 1.546 3.84 3.84 0 0 0-.625 3.4l2.48 8.57a5.46 5.46 0 0 0 5.218 3.923h5.556a5.44 5.44 0 0 0 3.472-1.255l1.216-1.01a5.13 5.13 0 0 1 3.273-1.184h.957a2.56 2.56 0 0 0 2.557-2.557v-8.876a2.56 2.56 0 0 0-2.554-2.555zm.932 2.557v8.876c-.001.514-.418.93-.932.93h-.957a6.75 6.75 0 0 0-4.312 1.56l-1.215 1c-.684.568-1.544.88-2.433.88H15.4c-1.693-.006-3.18-1.124-3.656-2.75l-2.478-8.57c-.2-.678-.065-1.41.362-1.974.423-.57 1.09-.904 1.8-.9h4.768l-1.37-7.73a1.66 1.66 0 0 1 1.275-1.952c.91-.16 1.646.7 1.93 2.234.5 2.7 2.374 4.818 5.422 6.12a17.75 17.75 0 0 0 6.423 1.327c.514.003.93.42.928.935z"></path>
                                                                    </svg>
                                                                    <span>0</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                                         height="40" viewBox="0 0 40 40"
                                                                         className="t-svg-0-1-253">
                                                                        <path className="svg-c1"
                                                                              d="M29.807 11.352c-.68-2.318-2.802-3.914-5.218-3.922h-5.56c-1.27 0-2.497.444-3.473 1.255l-1.215 1a5.13 5.13 0 0 1-3.274 1.184h-.956a2.56 2.56 0 0 0-2.557 2.557v8.876a2.56 2.56 0 0 0 2.557 2.557c2.536 0 9.322 1.1 10.248 6.118.614 3.324 2.7 3.582 3.322 3.582.164 0 .328-.014.49-.043a3.3 3.3 0 0 0 2.6-3.829l-1.032-5.828h2.83a3.84 3.84 0 0 0 3.1-1.546 3.84 3.84 0 0 0 .625-3.4zm.554 11a2.23 2.23 0 0 1-1.8.9h-4.768l1.37 7.73a1.66 1.66 0 0 1-1.275 1.951c-.91.16-1.646-.7-1.93-2.233-.5-2.7-2.373-4.818-5.422-6.122-2.04-.838-4.22-1.288-6.424-1.327-.514-.001-.93-.418-.93-.932v-8.876a.93.93 0 0 1 .931-.931h.956c1.576-.001 3.1-.553 4.313-1.56l1.215-1.01c.684-.568 1.545-.88 2.434-.88h5.556c1.693.006 3.18 1.124 3.656 2.748l2.48 8.57a2.23 2.23 0 0 1-.357 1.968z"></path>
                                                                    </svg>
                                                                    <span>0</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="section">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <h2 className="section__title">نظر خود را بنویسید</h2>
                                                            </div>

                                                            <div className="col-12">
                                                                <form action="#" className="form form--contacts">
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <input type="text" className="form__input"
                                                                                   placeholder="نام" />
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <input type="text" className="form__input"
                                                                                   placeholder="نام خانوادگی" />
                                                                        </div>
                                                                        <div className="col-md-6">

                                                                            <input type="text" className="form__input"
                                                                                   placeholder="ایمیل" />
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <input type="text" className="form__input"
                                                                                   placeholder="موضوع" />
                                                                        </div>
                                                                    </div>
                                                                    <textarea id="text" name="text"
                                                                              className="form__textarea"
                                                                              placeholder="متن را وارد کنید ..."></textarea>
                                                                    <button type="button" className="form__btn">ارسال
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
            </div>

            <Footer/>
        </>
    )
}