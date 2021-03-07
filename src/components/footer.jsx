import Head from "next/head";

export default function Footer() {
    return (
        <>
            <footer className="footer mt-5">
                <div className="container">
                    <div className="row text-right">
                        <div className="col-12 col-md-3">
                            <h6 className="footer__title">دانلود نرم افزار تی وی پلاس </h6>
                            <ul className="footer__app">
                                <li><a href="#"><img src="img/Download_on_the_App_Store_Badge.svg" alt="" /></a></li>
                                <li><a href="#"><img src="img/google-play-badge.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <h6 className="footer__title">صفحه ها</h6>
                            <ul className="footer__list">
                                <li><a href="about.html">درباره ما</a></li>
                                <li><a href="contacts.html">تماس با ما</a></li>
                                <li><a href="privacy.html">قوانین سایت</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <h6 className="footer__title">کاربر</h6>
                            <ul className="footer__list">
                                <li><a href="signin.html">ورود</a></li>
                                <li><a href="signup.html">ثبت نام</a></li>
                                <li><a href="privacy.html">قوانین سایت</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3">
                            <h6 className="footer__title">تماس با ما</h6>
                            <ul className="footer__list">
                                <li><a href="tel:+18002345678">021-1234567</a></li>
                                <li><a href="mailto:support@moviego.com">info@gmail.com</a></li>
                            </ul>
                            <ul className="footer__social">
                                <li className="facebook"><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
                                <li className="instagram"><a href="#"><i className="icon ion-logo-instagram"></i></a>
                                </li>
                                <li className="twitter"><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
                                <li className="vk"><a href="#"><i className="icon ion-logo-vk"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="footer__copyright">
                                <small>© طراحی شده توسط <a href="https://www.spad.co/" target="_blank">اسپاد</a></small>

                                <ul>
                                    <li><a href="privacy.html">تمامی حقوق برای تی وی پلاس محفوظ است</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}