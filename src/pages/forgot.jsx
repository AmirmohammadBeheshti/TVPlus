import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Forgot() {
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
            <div className="sign section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row" dir="rtl">
                        <div className="col-12">
                            <div className="sign__content">
                                <form action="#" className="sign__form">
                                    <a href="index.html" className="sign__logo">
                                        <img src="img/logo.png" alt=""/>
                                    </a>

                                    <div className="sign__group">
                                        <input type="text" className="sign__input" placeholder="ایمیل"/>
                                    </div>

                                    <div className="sign__group sign__group--checkbox">
                                        <input id="remember" name="remember" type="checkbox"/>
                                        <label htmlFor="remember" className="checkBox-rtl"> <a
                                            href="privacy.html">قوانین </a>را مطالعه کرده ام </label>
                                    </div>

                                    <button className="sign__btn" type="button">ارسال ایمیل</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}