import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";

export default function About() {
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

                <script src="/js/nouislider.min.js"></script>
                <script src="/js/plyr.min.js"></script>
                <script src="/js/jquery.morelines.min.js"></script>
                <script src="/js/photoswipe.min.js"></script>
                <script src="/js/photoswipe-ui-default.min.js"></script>
                <script src="/js/main.js"></script>
            </Head>
            <Header/>
            <section className="section section--first section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__wrap">
                                <h2 className="section__title">درباره ما</h2>

                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="#">خانه</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">درباره ما</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row" dir="rtl">
                        <div className="col-12">
                            <h2 className="section__title"><b>تی وی پلاس</b> مجله ویدئویی آنلاین</h2>
                        </div>

                        <div className="col-12">
                            <p className="section__text">
                                گروه تی‌وی پلاس تصمیم دارد تمامی اتفاقات مهم فرهنگی، اجتماعی، سبک زندگی، ورزشی و هنری را
                                در قالب ویدئوهایی پر ریتم و انرژیک برای مردم ایران تهیه و روی آنتن بفرستد تا تصویر
                                ایرانی پر نشاط و پر امید را همانطور که شایسته نام زیبای ایران است به معرض نمایش بگذارد.
                                ویدئوهایی که محتوای درون آنها را گزارش‌های پشت صحنه کنسرت‌ها، تئاترها، فیلم‌های سینمایی،
                                سریال‌ها، اتفاقات جذاب دنیای ورزش و گفتگو با ستاره‌هایی که در تمام این زمینه‌ها تبدیل به
                                چهره‌ای شناخته شده و پرطرفدار شده‌اند تشکیل می‌دهد.
                            </p>

                            <p className="section__text section__text--last-with-margin">
                                با توجه به بالا رفتن سرعت زندگی و علاقه‌مندی مردم به در جریان قرار گرفتن لحظه به لحظه
                                اخبار و اتفاقاتی که حول زندگی، ستاره‌های محبوب و جامعه‌‌شان می‌افتد، تیراژ رسانه‌های
                                مکتوب مانند روزنامه‌ها و مجلات به شدت نزول کرد. آنچنان که امروز تیراژ تمامی رسانه‌های
                                مکتوب کشور در طول یک روز، به یک میلیون نسخه هم نمی‌رسد! البته معلوم نیست چند هزار نسخه
                                از این یک میلیون تیراژ روزانه برگشت می‌خورد و بدون آنکه خریداری داشته باشد، از بین
                                می‌رود. البته این آماری فاجعه‌بار برای جمعیت قریب به 80 میلیون نفری ایران است که کمتر از
                                یک میلیون نفر روزانه رسانه‌های نوشتاری‌اش را دنبال می‌کنند.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-tv feature__icon"></i>
                                <h3 className="feature__title">ویدئو با کیفیت های بالا</h3>
                                <p className="feature__text">تی وی پلاس یکی از بهترین وبسایت های موجود است ، تی وی پلاس
                                    یکی از بهترین وبسایت های موجود است ، تی وی پلاس یکی از بهترین وبسایت های موجود است
                                    ، </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-film feature__icon"></i>
                                <h3 className="feature__title">ویدئو با کیفیت های بالا</h3>
                                <p className="feature__text">تی وی پلاس یکی از بهترین وبسایت های موجود است ، تی وی پلاس
                                    یکی از بهترین وبسایت های موجود است ، تی وی پلاس یکی از بهترین وبسایت های موجود است
                                    ، </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-trophy feature__icon"></i>
                                <h3 className="feature__title">ویدئو با کیفیت های بالا</h3>
                                <p className="feature__text">تی وی پلاس یکی از بهترین وبسایت های موجود است ، تی وی پلاس
                                    یکی از بهترین وبسایت های موجود است ، تی وی پلاس یکی از بهترین وبسایت های موجود است
                                    ، </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-notifications feature__icon"></i>
                                <h3 className="feature__title">ویدئو با کیفیت های بالا</h3>
                                <p className="feature__text">تی وی پلاس یکی از بهترین وبسایت های موجود است ، تی وی پلاس
                                    یکی از بهترین وبسایت های موجود است ، تی وی پلاس یکی از بهترین وبسایت های موجود است
                                    ، </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-rocket feature__icon"></i>
                                <h3 className="feature__title">ویدئو با کیفیت های بالا</h3>
                                <p className="feature__text">تی وی پلاس یکی از بهترین وبسایت های موجود است ، تی وی پلاس
                                    یکی از بهترین وبسایت های موجود است ، تی وی پلاس یکی از بهترین وبسایت های موجود است
                                    ، </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-globe feature__icon"></i>
                                <h3 className="feature__title">ویدئو با کیفیت های بالا</h3>
                                <p className="feature__text">تی وی پلاس یکی از بهترین وبسایت های موجود است ، تی وی پلاس
                                    یکی از بهترین وبسایت های موجود است ، تی وی پلاس یکی از بهترین وبسایت های موجود است
                                    ، </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}