import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Catalog() {
    return (
        <>
            <Head>
                {/*css*/}
                <link rel="stylesheet" href="/css/nouislider.min.css"/>
                <link rel="stylesheet" href="/css/ionicons.min.css"/>
                <link rel="stylesheet" href="/css/plyr.css"/>
                <link rel="stylesheet" href="/css/photoswipe.css"/>
                <link rel="stylesheet" href="/css/default-skin.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                {/*js*/}
                <script src="/js/plyr.min.js"></script>
                <script src="/js/jquery.morelines.min.js"></script>
                <script src="/js/photoswipe.min.js"></script>
                <script src="js/nouislider.min.js"></script>
                <script src="/js/photoswipe-ui-default.min.js"></script>

            </Head>
            <Header/>
            <section className="section section--first section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__wrap">
                                <h2 className="section__title">سینما</h2>

                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="#">خانه</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">سینما</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="filter">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filter__content">
                                <div className="filter__items">
                                    <div className="filter__item" id="filter__genre">
                                        <span className="filter__item-label">ژانر :</span>

                                        <div className="filter__item-btn dropdown-toggle" role="navigation"
                                             id="filter-genre" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                            <input type="button" value="دسته بندی"/>
                                                <span></span>
                                        </div>

                                        <ul className="filter__item-menu dropdown-menu scrollbar-dropdown"
                                            aria-labelledby="filter-genre">
                                            <li>سینما</li>
                                            <li>تلویزیون</li>
                                            <li>ورزشی</li>
                                            <li>اجتماعی</li>
                                            <li>تئاتر</li>
                                            <li>اخبار</li>
                                            <li>زیبایی</li>
                                            <li>سینما</li>
                                        </ul>
                                    </div>

                                    <div className="filter__item" id="filter__quality">
                                        <span className="filter__item-label">کیفیت:</span>

                                        <div className="filter__item-btn dropdown-toggle" role="navigation"
                                             id="filter-quality" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                            <input type="button" value="HD 1080"/>
                                                <span></span>
                                        </div>

                                        <ul className="filter__item-menu dropdown-menu scrollbar-dropdown"
                                            aria-labelledby="filter-quality">
                                            <li>HD 1080</li>
                                            <li>HD 720</li>
                                            <li>DVD</li>
                                            <li>TS</li>
                                        </ul>
                                    </div>


                                    <div className="filter__item" id="filter__year">
                                        <span className="filter__item-label">سال ساخت :</span>

                                        <div className="filter__item-btn dropdown-toggle" role="button" id="filter-year"
                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div className="filter__range">
                                                <div id="filter__years-start"></div>
                                                <div id="filter__years-end"></div>
                                            </div>
                                            <span></span>
                                        </div>

                                        <div className="filter__item-menu filter__item-menu--range dropdown-menu"
                                             aria-labelledby="filter-year">
                                            <div id="filter__years"></div>
                                        </div>
                                    </div>
                                </div>

                                <button className="filter__btn" type="button">اعمال فیلتر</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="catalog">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/10.jpg" alt=""/>
                                                <a href="#" className="card__play">
                                                    <i className="icon ion-ios-play"></i>
                                                </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از پلیس</a></h3>


                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-eye"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>سینما</li>
                                                    <li>بازیگران</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>
                                                    رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                    ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی هایش با
                                                    علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی پلاس
                                                </p>
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
                                                <a href="#" className="card__play">
                                                    <i className="icon ion-ios-play"></i>
                                                </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از پلیس</a></h3>


                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-eye"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>سینما</li>
                                                    <li>بازیگران</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>
                                                    رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                    ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی هایش با
                                                    علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی پلاس
                                                </p>
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
                                                <a href="#" className="card__play">
                                                    <i className="icon ion-ios-play"></i>
                                                </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از پلیس</a></h3>


                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-eye"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>سینما</li>
                                                    <li>بازیگران</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>
                                                    رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                    ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی هایش با
                                                    علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی پلاس
                                                </p>
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
                                                <a href="#" className="card__play">
                                                    <i className="icon ion-ios-play"></i>
                                                </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از پلیس</a></h3>


                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-eye"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>سینما</li>
                                                    <li>بازیگران</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>
                                                    رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                    ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی هایش با
                                                    علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی پلاس
                                                </p>
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
                                                <a href="#" className="card__play">
                                                    <i className="icon ion-ios-play"></i>
                                                </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از پلیس</a></h3>


                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-eye"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>سینما</li>
                                                    <li>بازیگران</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>
                                                    رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                    ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی هایش با
                                                    علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی پلاس
                                                </p>
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
                                                <a href="#" className="card__play">
                                                    <i className="icon ion-ios-play"></i>
                                                </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین
                                                کتک خوردنش از پلیس</a></h3>


                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-eye"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>سینما</li>
                                                    <li>بازیگران</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>
                                                    رونمایی محمدرضا گلزار از گرانقیمت ترین اتومبیل شخصی اش در
                                                    ایران/اظهارنظر آقای سوپراستار درباره مهناز افشار، کری خوانی هایش با
                                                    علی کریمی و کامنت جنجال برانگیز پریس هیلتون - اختصاصی تی وی پلاس
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <ul className="paginator paginator--list">
                                <li className="paginator__item paginator__item--prev">
                                    <a href="#"><i className="icon ion-ios-arrow-back"></i></a>
                                </li>
                                <li className="paginator__item"><a href="#">1</a></li>
                                <li className="paginator__item paginator__item--active"><a href="#">2</a></li>
                                <li className="paginator__item"><a href="#">3</a></li>
                                <li className="paginator__item"><a href="#">4</a></li>
                                <li className="paginator__item paginator__item--next">
                                    <a href="#"><i className="icon ion-ios-arrow-forward"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section__title">بهترین ها </h2>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/9.jpg" alt=""/>
                                        <a href="blog.html" className="card__play">
                                            <i className="icon ion-ios-play"></i>
                                        </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">امیر بهشتی</a>
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
                                        <a href="blog.html" className="card__play">
                                            <i className="icon ion-ios-play"></i>
                                        </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">امیر بهشتی</a>
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
                                        <a href="blog.html" className="card__play">
                                            <i className="icon ion-ios-play"></i>
                                        </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">امیر بهشتی</a>
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
                                        <a href="blog.html" className="card__play">
                                            <i className="icon ion-ios-play"></i>
                                        </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">امیر بهشتی</a>
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
                                        <a href="blog.html" className="card__play">
                                            <i className="icon ion-ios-play"></i>
                                        </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">امیر بهشتی</a>
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
                                        <a href="blog.html" className="card__play">
                                            <i className="icon ion-ios-play"></i>
                                        </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">لحظه تلخ ترکیدن بغض حامد زمانی حین کتک
                                        خوردنش از پلیس</a></h3>
                                    <span className="card__category">
								<a href="#">امیر بهشتی</a>
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