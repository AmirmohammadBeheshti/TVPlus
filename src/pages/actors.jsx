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
        <div className="container-fluid p-45">

            <br/>
            <br/>
            <br/>
            <div className="row rtl card-style">

                <div className="col-xl-2 col-lg-3 col-md-12">
                    <img src="img/actors/zare.jpg" className="actor-img"
                         alt=""/>
                </div>
                <div className="col-xl-10 col-lg-9 col-md-12">
                    <h1 className="text-white actor-txt">
                        لیلا زارع
                    </h1>
                    <p className="text-white actor-txt">متولد 1359</p>
                    <h3 className="text-white actor-txt">
                        لیلا زارع هنرپیشه سینما، تلویزیون و تئاتر اهل ایران است.او فارغ التحصیل رشته مدیریت بازرگانی
                        مقطع کارشناسی می باشد.در سال ۱۳۸۲ اولین سریال خود را بازی کرد اما این سریال به خاطر مشکلات
                        تولیدی پخش نشد.پس از آن در فیلم ما همه خوبیم به ایفای نقش پرداخت و بسیار خوش درخشید
                    </h3>
                </div>
            </div>

            <h2 className="content__title">گالری تصاویر</h2>

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
        </div>
        <div className="container">
            <h2 className="content__title">فیلم های لیلا زارع</h2>
            <div className="row mt-5">
                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/9.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/10.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/7.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/8.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/10.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/7.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/7.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/10.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/8.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/7.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/10.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                        <div className="card__cover actor-card">
                            <img src="img/covers/9.jpg" alt=""/>
                            <a href="blog" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>

                    </div>
                </div>


            </div>
            <section className="home">


                <div className="container container-style">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="home__title"><b>پست های مرتبط </b></h1>

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
        </div>

    <Footer/>
</>
)
}