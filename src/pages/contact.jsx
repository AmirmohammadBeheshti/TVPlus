import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
    return (
        <>
            <Head>
                {/*css*/}
                <link rel="stylesheet" href="css/nouislider.min.css"/>
                <link rel="stylesheet" href="css/ionicons.min.css"/>
                <link rel="stylesheet" href="css/plyr.css"/>
                <link rel="stylesheet" href="css/photoswipe.css"/>
                <link rel="stylesheet" href="css/default-skin.css"/>
                <link rel="stylesheet" href="css/main.css"/>
                {/*js*/}
                <script src="js/nouislider.min.js"></script>
                <script src="js/plyr.min.js"></script>
                <script src="js/jquery.morelines.min.js"></script>
                <script src="js/photoswipe.min.js"></script>
                <script src="js/photoswipe-ui-default.min.js"></script>
            </Head>
            <Header/>
            <section class="section section--first section--bg" data-bg="img/section/section.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section__wrap">
                                <h2 class="section__title">تماس با ما</h2>

                                <ul class="breadcrumb">
                                    <li class="breadcrumb__item"><a href="index.html">خانه</a></li>
                                    <li class="breadcrumb__item breadcrumb__item--active">تماس با ما</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-7 col-lg-8">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="section__title">تماس با ما</h2>
                                </div>

                                <div class="col-12">
                                    <form action="#" class="form form--contacts">
                                        <input type="text" class="form__input" placeholder="نام و نام خانوادگی" />
                                            <input type="text" class="form__input" placeholder="ایمیل"/>
                                                <input type="text" class="form__input" placeholder="موضوع"/>
                                                    <textarea id="text" name="text" class="form__textarea"
                                                              placeholder="متن خود را بنویسید..."></textarea>
                                                    <button type="button" class="form__btn">ارسال</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-5 col-lg-4">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="section__title">اطلاعات</h2>
                                </div>

                                <div class="col-12">
                                    <p class="section__text">
                                        گروه تی‌وی پلاس تصمیم دارد تمامی اتفاقات مهم فرهنگی، اجتماعی، سبک زندگی، ورزشی و
                                        هنری را در قالب ویدئوهایی پر ریتم و انرژیک برای مردم ایران تهیه و روی آنتن
                                        بفرستد تا تصویر ایرانی پر نشاط و پر امید را همانطور که شایسته نام زیبای ایران
                                        است به معرض نمایش بگذارد. ویدئوهایی که محتوای درون آنها را گزارش‌های پشت صحنه
                                        کنسرت‌ها، تئاترها، فیلم‌های سینمایی، سریال‌ها، اتفاقات جذاب دنیای ورزش و گفتگو
                                        با ستاره‌هایی که در تمام این زمینه‌ها تبدیل به چهره‌ای شناخته شده و پرطرفدار
                                        شده‌اند تشکیل می‌دهد.
                                    </p>

                                    <ul class="contacts__list">
                                        <li><a href="tel:+18002345678">021-1234567</a></li>
                                        <li><a href="mailto:support@moviego.com">info@gmail.com</a></li>
                                    </ul>
                                    <ul class="contacts__social">
                                        <li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
                                        <li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a>
                                        </li>
                                        <li class="twitter"><a href="#"><i class="icon ion-logo-twitter"></i></a></li>
                                        <li class="vk"><a href="#"><i class="icon ion-logo-vk"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
)
}