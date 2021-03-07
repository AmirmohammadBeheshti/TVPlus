import Head from "next/head";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                {/*css*/}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap-reboot.min.css" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap-grid.min.css" crossorigin="anonymous"/>
                <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css"/>
                {/*js*/}
                <script src="/js/jquery-3.5.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"></script>
                <script src="/js/wNumb.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.1/js/swiper.min.js"></script>
                <script src="/js/main.js"></script>
                {/*Header Script*/}
                <script src="/HeaderJs/jquery.waypoints.min.js"></script>
                <script src="/HeaderJs/superfish.min.js"></script>
                <script src="/HeaderJs/main.js"></script>
                <link rel="icon" type="image/png" href="/icon/fave.png" sizes="32x32"/>
                <link rel="apple-touch-icon" href="/icon/fave.png"/>

                <title>مجله ویدئویی تی وی پلاس</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}