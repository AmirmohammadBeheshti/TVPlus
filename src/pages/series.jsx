import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Actors() {
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
                <link rel='stylesheet'
                      href='css/fancyBox.css'/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                {/*js*/}

                <script src="js/plyr.min.js"></script>
                <script src="js/jquery.morelines.min.js"></script>
                <script src="js/photoswipe.min.js"></script>
                <script src="js/photoswipe-ui-default.min.js"></script>
                <script src="js/videoPlayer.js"></script>
                <script src="js/nouislider.min.js"></script>
                <script src='js/fancyBox.js'></script>

            </Head>
            <Header/>
            <div>

                <br/>
                <div id="top-media-box">
                    <div className="t-root-0-1-78 t-root-d27-0-1-102 ">
                        <div className="vertical-parent t-content-0-1-92">
                            <div className="vertical-center"><img className="t-logoImage-0-1-81"
                                                                  src="https://static.namava.ir/Content/Upload/Images/b142943e-1e3b-4fce-aaa9-7af19ce2571e.png"
                                                                  alt="سیاوش" title="سیاوش"/>
                                <div><h1 className="t-title-0-1-83">سیاوش</h1></div>
                                <div className="t-root-0-1-103">
                                    <div className="t-root-0-1-104"><span className="t-item-0-1-105">۱۳۹۹</span></div>
                                    <div className="t-root-0-1-104">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"
                                             viewBox="0 0 20 20" className="t-icon-0-1-107">
                                            <path className="svg-c1"
                                                  d="M13.548 3a4.55 4.55 0 0 0-3.486 1.642C9.2 3.605 7.925 3.003 6.577 3A4.58 4.58 0 0 0 2 7.577c0 6.2 4.852 10.388 8.062 10.388s8.063-4.184 8.063-10.388A4.58 4.58 0 0 0 13.548 3z"></path>
                                        </svg>
                                        <span className="t-item-0-1-105">۸۴٪</span></div>
                                </div>
                                <div className="t-story-0-1-82">حاضری برای حمایت از خانواده&zwnj;ات چی کار کنی؟ اگه
                                    مجبور بشی دیگه عضوی از خانواده هم نباشی، کار درست رو انجام میدی یا منتظر میشی که
                                    نابود بشن؟
                                </div>
                                <div className="t-story-0-1-82">قسمت جدید سیاوش، جمعه&zwnj;ها ساعت ۱۲ در نماوا</div>
                                <div className="t-actions-0-1-79 inline-block">
                                    <div
                                        className="Button-root-0-1-52 t-boxButton-0-1-80 Button-ghostRoot-0-1-75 Button-alignCenter-0-1-70">
                                        <span className="Button-title-0-1-54 Button-ghostTitle-0-1-55">پیش نمایش</span>
                                    </div>
                                </div>
                                <div className="inline-block t-withMargin-0-1-100"></div>
                                <div className="Stars-root-0-1-109"><span className="Stars-term-0-1-110">ستارگان:</span><a
                                    href="/person-7086-%D9%85%DB%8C%D9%84%D8%A7%D8%AF_%DA%A9%DB%8C_%D9%85%D8%B1%D8%A7%D9%85"><span
                                    className="Stars-item-0-1-111">میلاد کی مرام</span></a><span
                                    className="Stars-separator-0-1-112"></span><a
                                    href="/person-6025-%D8%B1%D8%B6%D8%A7_%DA%A9%DB%8C%D8%A7%D9%86%DB%8C%D8%A7%D9%86"><span
                                    className="Stars-item-0-1-111">رضا کیانیان</span></a><span
                                    className="Stars-separator-0-1-112"></span><a
                                    href="/person-2499-%D9%85%D8%AC%DB%8C%D8%AF_%D8%B5%D8%A7%D9%84%D8%AD%DB%8C"><span
                                    className="Stars-item-0-1-111">مجید صالحی</span></a><span
                                    className="Stars-separator-0-1-112"></span><a
                                    href="/person-3448-%D8%AA%D8%B1%D9%84%D8%A7%D9%86_%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87"><span
                                    className="Stars-item-0-1-111">ترلان پروانه</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <section className="content content-style series-tab">
                <div className="content__head">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">


                                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
                                           aria-controls="tab-1" aria-selected="true">فصل 1</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab"
                                           aria-controls="tab-2"
                                           aria-selected="false">فصل 2</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab"
                                           aria-controls="tab-3"
                                           aria-selected="false">فصل 3 </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab"
                                           aria-controls="tab-4"
                                           aria-selected="false">فصل 4</a>
                                    </li>


                                </ul>

                                <div className="content__mobile-tabs" id="content__mobile-tabs">
                                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation"
                                         id="mobile-tabs"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        <span></span>
                                        <input type="button" value="فصل 1"/>
                                    </div>

                                    <div className="content__mobile-tabs-menu dropdown-menu"
                                         aria-labelledby="mobile-tabs">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item"><a className="nav-link active" id="1-tab"
                                                                        data-toggle="tab"
                                                                        href="#tab-1" role="tab" aria-controls="tab-1"
                                                                        aria-selected="true"> فصل 1</a></li>

                                            <li className="nav-item"><a className="nav-link" id="2-tab"
                                                                        data-toggle="tab" href="#tab-2"
                                                                        role="tab" aria-controls="tab-2"
                                                                        aria-selected="false">فصل 2</a></li>

                                            <li className="nav-item"><a className="nav-link" id="3-tab"
                                                                        data-toggle="tab" href="#tab-3"
                                                                        role="tab" aria-controls="tab-3"
                                                                        aria-selected="false">فصل 3 </a></li>

                                            <li className="nav-item"><a className="nav-link" id="4-tab"
                                                                        data-toggle="tab" href="#tab-4"
                                                                        role="tab" aria-controls="tab-4"
                                                                        aria-selected="false">فصل 4</a></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                            <div className="row rtl">
                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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


                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                            <div className="row rtl">
                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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


                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                            <div className="row rtl">
                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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


                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
                            <div className="row rtl">
                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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

                                <div className="col-6 col-sm-6 col-lg-4 col-xl-2">
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


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid p-45">
                <h2 className="content__title">تصاویر و جزئیات</h2>

                <section id="gallery">
                    <div className="gallery-section">
                        <div className="container-fluid">

                            <div className="gallery-box delay">

                                <div className="box delay">
                                    <a className="delay-1"
                                       href="img/gallery/1.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/1.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay vertical">
                                    <a className="delay-1"
                                       href="img/gallery/2.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/2.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay">
                                    <a className="delay-1"
                                       href="img/gallery/3.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/3.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay vertical">
                                    <a className="delay-1"
                                       href="img/gallery/2.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/2.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay">
                                    <a className="delay-1"
                                       href="img/gallery/1.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/1.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay">
                                    <a className="delay-1"
                                       href="img/gallery/3.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/3.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay">
                                    <a className="delay-1"
                                       href="img/gallery/3.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/3.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="box delay">
                                    <a className="delay-1"
                                       href="img/gallery/1.jfif"
                                       data-fancybox="gallery1">
                                        <img alt=""
                                             src="img/gallery/1.jfif"
                                             className="img-fluid"/>
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

                <div className="about-series">
                    <h2 className="red-color">درباره سریال سیاوش</h2>
                    <p className="text-white">
                        سیاوش سریالی درام و اجتماعی با هنرنمایی میلاد کی‌مرام، رضا کیانیان، مجید صالحی، ترلان پروانه،
                        سوگل خلیق، گیتی قاسمی، خسرو شهراز، علیرضا جعفری، محمدرضا صولتی، ناهید مسلمی، مهدخت مولایی، محمد
                        ولی زادگان، مهدی حسینی نیا، علی عامل هاشمی، مرجان اتفاقیان، الهام جدی، مرجان قمری و رویا
                        جاویدنیا و نویسندگی پویا سعیدی و کارگردانی سروش محمدزاده و تهیه کنندگی مهدی یاری محصول سال ۱۳۹۹
                        کشور ایران است.
                    </p>
                    <p className="text-white">
                        صادق یاری به عنوان مجری طرح در این سریال حضور دارد. سریال سیاوش یک درام اجتماعی با حال و هوایی
                        معمایی و قصه‌ای جذاب است که به صورت انحصاری از نماوا پخش می‌شود.

                        در سریال سیاوش شاهد داستانی درگیرکننده و نقش‌آفرینی‌های متفاوتی از میلاد کی‌مرام، رضا کیانیان،
                        مجید صالحی، ترلان پروانه و دیگر بازیگران هستیم. موسیقی تیتراژ این سریال نیز توسط پرواز همای
                        ساخته شده است.

                        مهدی و صادق یاری پیش از این سریال ممنوعه را با حضور میلاد کی‌مرام تولید کرده بودند و سریال سیاوش
                        دومین همکاری آن‌ها در شبکه نمایش خانگی به حساب می‌آید.
                    </p>
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
            </div>
            <div className="container">
                <div className="related-video">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="home__title"><b>همچنین تماشا </b> کنید </h1>

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

                                    <div className="card">
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
            </div>
            <Footer/>
        </>
    )
}