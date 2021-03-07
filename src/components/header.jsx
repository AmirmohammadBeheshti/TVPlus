import Head from "next/head";

export default function Header() {
    return (
        <>
            <Head>
                {/*<link rel="stylesheet" href="HeaderJs/bootstrap-rtl.min.css"/>*/}
                {/*<link rel="stylesheet" href="HeaderJs/style.css"/>*/}

            </Head>


            <div className="page-wrapper">
                <header className="header header-5">
                    <div className="header-middle ">
                        <div className="container">
                            <div className="header-left">
                                <button className="mobile-menu-toggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <a href="/" className="logo">
                                    <img src="img/logo.png" alt="TvPlus Logo" width="105"
                                         height="25"/>
                                </a>

                                <nav className="main-nav">
                                    <ul className="menu sf-arrows">
                                        <li>
                                            <a href="/">
                                                خانه
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="sf-with-ul">عناوین </a>

                                            <ul className="drop-back">
                                                <li>
                                                    <a href="series" className="sf-with-ul">سینما</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">سینما</a></li>
                                                        <li><a href="series">سینما</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">تبلیغات</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">تبلیغات</a></li>
                                                        <li><a href="series">تبلیغات</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">ورزشی</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">ورزشی</a></li>
                                                        <li><a href="series">ورزشی</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">تکنولوژی</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">تکنولوژی</a></li>
                                                        <li><a href="series">تکنولوژی</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">سیاست</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">سیاست</a></li>
                                                        <li><a href="series">سیاست</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">اقتصاد</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">اقتصاد</a></li>
                                                        <li><a href="series">اقتصاد</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">بیزینس</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">بیزینس</a></li>
                                                        <li><a href="series">بیزینس</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">حوادث</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">حوادث</a></li>
                                                        <li><a href="series">حوادث</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">گردشگری</a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">گردشگری</a></li>
                                                        <li><a href="series">گردشگری</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="series" className="sf-with-ul">شهربازی </a>

                                                    <ul className="drop-back">
                                                        <li><a href="series">شهربازی</a></li>
                                                        <li><a href="series">شهربازی</a></li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact">
                                                تماس با ما
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about">
                                                درباره ما
                                            </a>
                                        </li>
                                    </ul>

                                </nav>

                            </div>

                            <div className="header-right">
                                <button className="header__search-btn" type="button">
                                    <i className="icon ion-ios-search"></i>
                                </button>
                                <a href="/SignIn" className="header__sign-in">
                                    <span> ورود</span>
                                </a>

                            </div>


                        </div>

                    </div>
                    <form action="#" className="header__search">
                        <div className="container">
                            <div className="row search-row">
                                <div className="col-12">
                                    <div className="header__search-content">
                                        <input type="text" placeholder="جستجو..." />

                                        <button type="button">جستجو</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </header>


                <main className="main">


                    <div className="mb-5"></div>


                </main>

            </div>


            <div className="mobile-menu-overlay"></div>


            <div className="mobile-menu-container mobile-menu-light">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>


                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li>
                                <a href="/">
                                    خانه
                                </a>
                            </li>
                            <li>
                                <a href="#" className="sf-with-ul">عناوین </a>

                                <ul className="drop-back">
                                    <li>
                                        <a href="series" className="sf-with-ul">سینما</a>

                                        <ul className="drop-back">
                                            <li><a href="series">سینما</a></li>
                                            <li><a href="series">سینما</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">تبلیغات</a>

                                        <ul className="drop-back">
                                            <li><a href="series">تبلیغات</a></li>
                                            <li><a href="series">تبلیغات</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">ورزشی</a>

                                        <ul className="drop-back">
                                            <li><a href="series">ورزشی</a></li>
                                            <li><a href="series">ورزشی</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">تکنولوژی</a>

                                        <ul className="drop-back">
                                            <li><a href="series">تکنولوژی</a></li>
                                            <li><a href="series">تکنولوژی</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">سیاست</a>

                                        <ul className="drop-back">
                                            <li><a href="series">سیاست</a></li>
                                            <li><a href="series">سیاست</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">اقتصاد</a>

                                        <ul className="drop-back">
                                            <li><a href="series">اقتصاد</a></li>
                                            <li><a href="series">اقتصاد</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">بیزینس</a>

                                        <ul className="drop-back">
                                            <li><a href="series">بیزینس</a></li>
                                            <li><a href="series">بیزینس</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">حوادث</a>

                                        <ul className="drop-back">
                                            <li><a href="series">حوادث</a></li>
                                            <li><a href="series">حوادث</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">گردشگری</a>

                                        <ul className="drop-back">
                                            <li><a href="series">گردشگری</a></li>
                                            <li><a href="series">گردشگری</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="series" className="sf-with-ul">شهربازی </a>

                                        <ul className="drop-back">
                                            <li><a href="series">شهربازی</a></li>
                                            <li><a href="series">شهربازی</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <a href="contact">
                                    تماس با ما
                                </a>
                            </li>
                            <li>
                                <a href="about">
                                    درباره ما
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>


        </>
    )
}