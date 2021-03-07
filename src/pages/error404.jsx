import Head from "next/head";


export default function Error404() {
    return (
        <>
            <Head>
                {/*css*/}
                <link rel="stylesheet" href="/css/main.css"/>
                {/*js*/}
                <script src="/js/jquery.morelines.min.js"></script>
            </Head>
            <div className="page-404 section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-404__wrap">
                                <div className="page-404__content">
                                    <h1 className="page-404__title">404</h1>
                                    <p className="page-404__text">متاسفانه صفحه مورد نظر شما یافت نشد!</p>
                                    <a href="index.html" className="page-404__btn">صفحه اصلی</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}