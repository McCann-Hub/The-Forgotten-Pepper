/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "86e8e15662dc7d083512d030d9ad0d56"
  },
  {
    "url": "about-us.html",
    "revision": "9ea82e76e0db2c648fd3428b1812eef5"
  },
  {
    "url": "android-chrome-144x144.png",
    "revision": "505b66f58338dd9c7aec91540fa17591"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b799496bc3c319524be16f3f93c83f9"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "0c236ae033f30f6778861eabb32af8b0"
  },
  {
    "url": "android-chrome-36x36.png",
    "revision": "5017012831ebd062d4662495505cda1e"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "8b0e835e3410bcda764f784028b88817"
  },
  {
    "url": "android-chrome-48x48.png",
    "revision": "3c161b8ea28cb4c1643399e5ada35bda"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "da80b98ad8afb90d22047e6134ac11ea"
  },
  {
    "url": "android-chrome-72x72.png",
    "revision": "1b010f5fd59c26bd20fb286d51239ed8"
  },
  {
    "url": "android-chrome-96x96.png",
    "revision": "9f52da0f8aad5599ace6cf0da60016f0"
  },
  {
    "url": "apple-touch-icon-1024x1024.png",
    "revision": "7a2dce23bdae35f53755f9947c5f2f54"
  },
  {
    "url": "apple-touch-icon-114x114.png",
    "revision": "b0199a464a4098c4b7a2928ac27ce18b"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "cb38f5ec1520b2a0cd16423750000ddb"
  },
  {
    "url": "apple-touch-icon-144x144.png",
    "revision": "0c2150e773bb629f335c5b363d645374"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "506cbff42008fcb30cf66c9c5a8450ac"
  },
  {
    "url": "apple-touch-icon-167x167.png",
    "revision": "e4a9860881b800e7479511e7d304af55"
  },
  {
    "url": "apple-touch-icon-180x180.png",
    "revision": "b70ca64b9f4cf3c69ef8529c5aa27e52"
  },
  {
    "url": "apple-touch-icon-57x57.png",
    "revision": "34ad659203e4514d80dbb526a0018285"
  },
  {
    "url": "apple-touch-icon-60x60.png",
    "revision": "f72d9fab8a8d1108d5d822d374eda3e2"
  },
  {
    "url": "apple-touch-icon-72x72.png",
    "revision": "24331cb6dc1abe6309643e7adace8211"
  },
  {
    "url": "apple-touch-icon-76x76.png",
    "revision": "fbfbe373b0bf9cb4d441c4a43059d4ee"
  },
  {
    "url": "apple-touch-icon-precomposed.png",
    "revision": "b70ca64b9f4cf3c69ef8529c5aa27e52"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b70ca64b9f4cf3c69ef8529c5aa27e52"
  },
  {
    "url": "apple-touch-startup-image-1125x2436.png",
    "revision": "39b1841939db64f064aa844317ecc949"
  },
  {
    "url": "apple-touch-startup-image-1136x640.png",
    "revision": "668bccb6c5b078188d2c5fa350c1d45f"
  },
  {
    "url": "apple-touch-startup-image-1242x2208.png",
    "revision": "e92f70d113256dcf1d4cb02fd92567c1"
  },
  {
    "url": "apple-touch-startup-image-1242x2688.png",
    "revision": "8c633824851fb5629544be15e4292efd"
  },
  {
    "url": "apple-touch-startup-image-1334x750.png",
    "revision": "51393fd7a2851d525b252b28d12c34a6"
  },
  {
    "url": "apple-touch-startup-image-1536x2048.png",
    "revision": "7b62720e256249cfbf0b65aa6daf7ac7"
  },
  {
    "url": "apple-touch-startup-image-1620x2160.png",
    "revision": "dd6977da4b72fd1d8af8be57a53ab069"
  },
  {
    "url": "apple-touch-startup-image-1668x2224.png",
    "revision": "6fcd8dcc491c9430a798d6ec8cfb12aa"
  },
  {
    "url": "apple-touch-startup-image-1668x2388.png",
    "revision": "7a64d5ea14e4de2c5bbc67275ef0a790"
  },
  {
    "url": "apple-touch-startup-image-1792x828.png",
    "revision": "abd3973b6d8c2729c7bc86a12b612f7a"
  },
  {
    "url": "apple-touch-startup-image-2048x1536.png",
    "revision": "4bc43d4cb54dabe435ed101b7fc9a78f"
  },
  {
    "url": "apple-touch-startup-image-2048x2732.png",
    "revision": "a893ff26231ed269c2f09ed7880fe786"
  },
  {
    "url": "apple-touch-startup-image-2160x1620.png",
    "revision": "0a93349b263f57f480dc5b9bdbf915df"
  },
  {
    "url": "apple-touch-startup-image-2208x1242.png",
    "revision": "df6e39b5bf67b82174f3a443ebd20f5c"
  },
  {
    "url": "apple-touch-startup-image-2224x1668.png",
    "revision": "3e902246f8721c8602e40f046f9e24de"
  },
  {
    "url": "apple-touch-startup-image-2388x1668.png",
    "revision": "8e34ca8c31d27504bc6c6161f694cdf9"
  },
  {
    "url": "apple-touch-startup-image-2436x1125.png",
    "revision": "f41e234c4afe2d4f9886eb13e842877c"
  },
  {
    "url": "apple-touch-startup-image-2688x1242.png",
    "revision": "81570c743a426b4377f6f5ee87782645"
  },
  {
    "url": "apple-touch-startup-image-2732x2048.png",
    "revision": "3d12c2f5bb92c1f72df130185156fdba"
  },
  {
    "url": "apple-touch-startup-image-640x1136.png",
    "revision": "ce297b489b2b9d610e95272ef5cabac7"
  },
  {
    "url": "apple-touch-startup-image-750x1334.png",
    "revision": "6d2bcd71679b4f6926aa68263666cbad"
  },
  {
    "url": "apple-touch-startup-image-828x1792.png",
    "revision": "e57c186cd5e8446e43048d287524162e"
  },
  {
    "url": "assets/css/0.styles.b1f6566d.css",
    "revision": "00dc699257075ffcb85e087b16d09468"
  },
  {
    "url": "assets/fonts/42.27f2b667.ttf",
    "revision": "27f2b6672b22df348351f1f2cd3fc19d"
  },
  {
    "url": "assets/fonts/LifeSavers-Bold.37c8d101.ttf",
    "revision": "37c8d1016afd261cbd594d2b71775630"
  },
  {
    "url": "assets/fonts/LifeSavers-ExtraBold.dac76ed6.ttf",
    "revision": "dac76ed64e1b68cf810b6238f152adc6"
  },
  {
    "url": "assets/fonts/LifeSavers-Regular.a0dca3ed.ttf",
    "revision": "a0dca3ed6f9e5098522a6bab3efbce65"
  },
  {
    "url": "assets/fonts/Pompiere-Regular.fd4f7a6c.ttf",
    "revision": "fd4f7a6c707089988f46815c42c5fc8d"
  },
  {
    "url": "assets/img/deconstructed-chicken-dumpling-casserole/image.jpg",
    "revision": "8cfbe910f8d35a2ad85de15e639fd94b"
  },
  {
    "url": "assets/img/deconstructed-chicken-dumpling-casserole/image2.jpg",
    "revision": "41c9ab9b3404fac9d0408be775bceda7"
  },
  {
    "url": "assets/img/deconstructed-chicken-dumpling-casserole/nutrition.gif",
    "revision": "de1deffa7421805024ea12b7fa1750b9"
  },
  {
    "url": "assets/img/gyro-lasagna/image.jpg",
    "revision": "8149ea0b3c6818bebfd32883cf0bc452"
  },
  {
    "url": "assets/img/gyro-lasagna/image2.jpg",
    "revision": "f59aa58dbcf00ef1807127c4602f1f4a"
  },
  {
    "url": "assets/img/gyro-lasagna/image3.jpg",
    "revision": "1ddfbe783d92ba42120859b16ed80815"
  },
  {
    "url": "assets/img/gyro-lasagna/nutrition.gif",
    "revision": "bc74d423eca84ad1c92ebbb2a4613f17"
  },
  {
    "url": "assets/img/image1.d4302891.jpg",
    "revision": "706ca334ed2fad3b0fb80dc0a26ae56e"
  },
  {
    "url": "assets/img/image2.d92764c8.jpg",
    "revision": "afd22360b3bfc3b741fa4e74f28607a6"
  },
  {
    "url": "assets/img/image3.01537c69.jpg",
    "revision": "c7de4ae39f1dd88ddc522f4dc1efd66b"
  },
  {
    "url": "assets/img/image4.811fb1c1.jpg",
    "revision": "bd8343b5bfa39f65729e76403ca5dd3c"
  },
  {
    "url": "assets/img/image5.fb111e04.jpg",
    "revision": "db3d97ca9e2895b93a6f2f130ca320a7"
  },
  {
    "url": "assets/img/image6.de603f35.jpg",
    "revision": "c9f56b12ace5adfcea8d8104ba2d46ec"
  },
  {
    "url": "assets/img/image7.7ba291c0.jpg",
    "revision": "64127c9cf173985963ac1ab19c7beb93"
  },
  {
    "url": "assets/img/image8.4562922d.jpg",
    "revision": "bb26af9c55521d5db51d05421fc6c856"
  },
  {
    "url": "assets/img/one-pot-tuna-casserole/image.jpg",
    "revision": "9622703effe3cddb31e18cc5756eb62c"
  },
  {
    "url": "assets/img/one-pot-tuna-casserole/image2.jpg",
    "revision": "ef34fd6fd98cca665e1b41b20d63886e"
  },
  {
    "url": "assets/img/one-pot-tuna-casserole/nutrition.gif",
    "revision": "788252be636e4fcf66c7e76b2eb5dd61"
  },
  {
    "url": "assets/img/philly-cheesesteak-casserole/image.jpg",
    "revision": "d1d345efd3c5683a48dced6df18d17e3"
  },
  {
    "url": "assets/img/philly-cheesesteak-casserole/image2.jpg",
    "revision": "03361a51afffcce09bfc7f178e8bed31"
  },
  {
    "url": "assets/img/philly-cheesesteak-casserole/nutrition.gif",
    "revision": "daab29dfed9165fc76caae73102e0af2"
  },
  {
    "url": "assets/img/spicy-lady-glaze/image.jpg",
    "revision": "74043cc281462393c897fdfd33f6a089"
  },
  {
    "url": "assets/img/spicy-lady-glaze/image2.jpg",
    "revision": "802389d5896608cec8a2136d815e6f08"
  },
  {
    "url": "assets/img/spicy-lady-glaze/nutrition.gif",
    "revision": "8982fc5eccd4709aca7617416b35a007"
  },
  {
    "url": "assets/js/1.77deaab1.js",
    "revision": "eec322cf812453a674ff6a25f1d672e5"
  },
  {
    "url": "assets/js/10.463ab89c.js",
    "revision": "a4f102cc1437d431d68aa531430f4410"
  },
  {
    "url": "assets/js/11.74511c1b.js",
    "revision": "19f99103d362c05c1940294881aee0c1"
  },
  {
    "url": "assets/js/12.e18af948.js",
    "revision": "aaac1192ba7930357b5c8f3c4f10b593"
  },
  {
    "url": "assets/js/13.998e858c.js",
    "revision": "58bed95d77de4f61d856b544059fcfb6"
  },
  {
    "url": "assets/js/14.409face7.js",
    "revision": "16f2cc116219c6c533c4f0ecba132d96"
  },
  {
    "url": "assets/js/15.87ce86ba.js",
    "revision": "1fd1d3493c2fc2b0d713b5f95416df4c"
  },
  {
    "url": "assets/js/16.1eca684f.js",
    "revision": "d558a3f0c20b798f8f657e4f5b9e5eda"
  },
  {
    "url": "assets/js/17.bf14f89a.js",
    "revision": "1913915538d7b37ef9ebe7630419449a"
  },
  {
    "url": "assets/js/18.cbc4b7cf.js",
    "revision": "808eaf8709113aa4e4cdf65905d8b3fb"
  },
  {
    "url": "assets/js/19.b844e826.js",
    "revision": "e33543e2b197ec07f5bf27ad912f8366"
  },
  {
    "url": "assets/js/20.2c438883.js",
    "revision": "22526a4312560d1560847534201c6463"
  },
  {
    "url": "assets/js/21.3981ea18.js",
    "revision": "ce22cb4043753ca7ddfa00e2b7154409"
  },
  {
    "url": "assets/js/22.a1449262.js",
    "revision": "4d11e5dfb923d6b9de2d92c09be2e7c9"
  },
  {
    "url": "assets/js/23.3493cc04.js",
    "revision": "abef30f427321e72aca9c3cf6717c992"
  },
  {
    "url": "assets/js/24.4faaa7f2.js",
    "revision": "bfe2384c118eae25e581c367930f23d3"
  },
  {
    "url": "assets/js/25.2a9058d7.js",
    "revision": "7993ccad22ffb7cd1833389fc04f3c0f"
  },
  {
    "url": "assets/js/26.23b9266d.js",
    "revision": "000aa1ce594bd18f3ab23dd5d3b447de"
  },
  {
    "url": "assets/js/27.f395f1b5.js",
    "revision": "b2f691039ee14d147794715d0309a0ba"
  },
  {
    "url": "assets/js/28.289040a0.js",
    "revision": "f1b0e7f37e2562cb3c356dc3ce8e4aea"
  },
  {
    "url": "assets/js/29.62560307.js",
    "revision": "f38a244a717bf4aa66731e6243915d44"
  },
  {
    "url": "assets/js/30.2b5e1dfd.js",
    "revision": "6d3095190e5433623bca33b20dccc03c"
  },
  {
    "url": "assets/js/31.465f3872.js",
    "revision": "0ae3e0619a39a406ff59b56ff4d0c95d"
  },
  {
    "url": "assets/js/32.0f872b80.js",
    "revision": "96dede6bcd4b02ce5f7c4c3dfc62fa6c"
  },
  {
    "url": "assets/js/33.b760047e.js",
    "revision": "b7fff5216c5fca0ff7fa2f384da195cf"
  },
  {
    "url": "assets/js/34.1531ae32.js",
    "revision": "82e6951df93e79802d52c7e83b9a350d"
  },
  {
    "url": "assets/js/35.f03ffd2d.js",
    "revision": "d60f02596031a5989fd70821ffbdec84"
  },
  {
    "url": "assets/js/36.672fca4f.js",
    "revision": "a843e982e940822de62140a6e912fcdc"
  },
  {
    "url": "assets/js/37.dfdd9533.js",
    "revision": "3a940130a867641d82a26439da85faa2"
  },
  {
    "url": "assets/js/38.b70c9cd3.js",
    "revision": "d1b89ef7d0d979e091cc990b36be92e2"
  },
  {
    "url": "assets/js/39.6e31d1b4.js",
    "revision": "9e825d048c883a71c5137dd9a4514aeb"
  },
  {
    "url": "assets/js/4.ed78bfb6.js",
    "revision": "74d7f3e2ba2195e591dff31355ff147e"
  },
  {
    "url": "assets/js/40.29ddf7b0.js",
    "revision": "a56be52883e259abbf6a6f5c0cd0f49b"
  },
  {
    "url": "assets/js/41.49d8f975.js",
    "revision": "a629634871ab1757753bea3d0064bbeb"
  },
  {
    "url": "assets/js/42.39435422.js",
    "revision": "abb7bd4b47331fc413614b9eae5478bc"
  },
  {
    "url": "assets/js/43.affb1333.js",
    "revision": "3b912a7dea82c58ed5874f4c04b82cd8"
  },
  {
    "url": "assets/js/44.3159ec45.js",
    "revision": "36c83148b7719766f627a3854318cd79"
  },
  {
    "url": "assets/js/45.52122857.js",
    "revision": "592a12995b1b7bc573cd820f4bf20eec"
  },
  {
    "url": "assets/js/46.9c76885d.js",
    "revision": "6562ff3258d66a7f23641220fb5fd3e5"
  },
  {
    "url": "assets/js/47.0c94dd2e.js",
    "revision": "71aa8b47d7c2d103cdaa3062cd9940cb"
  },
  {
    "url": "assets/js/5.46806d4a.js",
    "revision": "5b70e7aec627eb282bd85942407405cf"
  },
  {
    "url": "assets/js/6.150ed9f8.js",
    "revision": "1560fc7b9b4113141e1bd917ea8c24cc"
  },
  {
    "url": "assets/js/7.0fc111aa.js",
    "revision": "7139e179d55ea1b485d0fc1a9d84261d"
  },
  {
    "url": "assets/js/8.55077df2.js",
    "revision": "e6b987a39ce3621e64a6dd8dd2de62aa"
  },
  {
    "url": "assets/js/9.7c11618f.js",
    "revision": "bbee896789c94705e7060800c9400f0b"
  },
  {
    "url": "assets/js/app.2aee92bf.js",
    "revision": "413622017e056e2fdcb7a7de6361d1ce"
  },
  {
    "url": "assets/js/vuejs-paginate.dd620caf.js",
    "revision": "0efc7d4bb4bd55a09d5d77a5ff28bf98"
  },
  {
    "url": "coast-228x228.png",
    "revision": "d2fe2a21377b1af24616dcf3d09d3a00"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "70a9a6a97cec3818145da6befcc8d703"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "9ff4213f4c5f9f00dbe42886036bd78d"
  },
  {
    "url": "favicon-48x48.png",
    "revision": "3c161b8ea28cb4c1643399e5ada35bda"
  },
  {
    "url": "firefox_app_128x128.png",
    "revision": "1bc6be8e5a51390ad13da6a5ad5112a9"
  },
  {
    "url": "firefox_app_512x512.png",
    "revision": "9364886785a3ccdad7f7a89b682222ab"
  },
  {
    "url": "firefox_app_60x60.png",
    "revision": "b67671e5d61568ce16970ba1ca810861"
  },
  {
    "url": "index.html",
    "revision": "c6b1af3925a1fdd793b42a9a293d19ae"
  },
  {
    "url": "ingredient/beef/index.html",
    "revision": "f0056cc26ac1669527e8f65bebfbf608"
  },
  {
    "url": "ingredient/biscuits/index.html",
    "revision": "d0df981c30690957edc46851c33440b0"
  },
  {
    "url": "ingredient/cheese/index.html",
    "revision": "8b91a2bcca9a0894150f7771d24408ab"
  },
  {
    "url": "ingredient/chicken/index.html",
    "revision": "fe3d24c034544dffb077e74417fe800c"
  },
  {
    "url": "ingredient/elbow-macaroni/index.html",
    "revision": "347015d6d2eb73363af914acae7f2d2e"
  },
  {
    "url": "ingredient/greek-yogurt/index.html",
    "revision": "ca70ccb0d3b4a35b9c04806b0a8b97f8"
  },
  {
    "url": "ingredient/index.html",
    "revision": "02041997559254339007bf5ee7539435"
  },
  {
    "url": "ingredient/jalapenos/index.html",
    "revision": "3a7e222db6aec896e07f5f928cfd7571"
  },
  {
    "url": "ingredient/serrano-peppers/index.html",
    "revision": "94f6bf9c712a3475cc0077622320dcb0"
  },
  {
    "url": "ingredient/strawberries/index.html",
    "revision": "924d6d9dd0cfb79f4f71b2af10a4217b"
  },
  {
    "url": "ingredient/tuna/index.html",
    "revision": "1372b3419efe3f7f23f6a6555e81f891"
  },
  {
    "url": "logo.png",
    "revision": "6f6ef2871bd9acc76fcc1b17847b4e24"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "505b66f58338dd9c7aec91540fa17591"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "a0eafae7adc8ecf6c572bdbf37596ca3"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "82ce6b341a38490634ce1d2b9207047b"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "87e261b1b099a5f823cf8665b6b4018f"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "ae118382236d2e1ec93c2126ec1c821a"
  },
  {
    "url": "post/2021/03/31/deconstructed-chicken-dumpling-casserole/index.html",
    "revision": "930a04304ef6c733b493e542e9f5323c"
  },
  {
    "url": "post/2021/03/31/gyro-lasagna/index.html",
    "revision": "f4b1d919ebda45f528dc14cc3b9f22c2"
  },
  {
    "url": "post/2021/03/31/one-pot-tuna-casserole/index.html",
    "revision": "24c358738cb50d67028cfbfe309d0e28"
  },
  {
    "url": "post/2021/03/31/philly-cheesesteak-casserole/index.html",
    "revision": "e93ceffeb2cecd9e3fa267e0478ae471"
  },
  {
    "url": "post/2021/03/31/spicy-lady-glaze/index.html",
    "revision": "b7447cc4a697c72bcca97cb899a68e4b"
  },
  {
    "url": "post/index.html",
    "revision": "73b61d89f1ed320f666e67be7a54c6d8"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "2b166aa60296266ae0af72637f0f2825"
  },
  {
    "url": "privacy.html",
    "revision": "5eddb07a8c2cbadc560bac366a676b10"
  },
  {
    "url": "recipe/dinner/index.html",
    "revision": "6b6bd4221ddcee1c65cf1b046ada1b7c"
  },
  {
    "url": "recipe/dinner/page/2/index.html",
    "revision": "7ced200027ec985b08850890f4e72126"
  },
  {
    "url": "recipe/index.html",
    "revision": "07ed6bec2ea082596794c7bdc46ee41b"
  },
  {
    "url": "recipe/jam/index.html",
    "revision": "1b00352db23a9786f789ee5b813fb19d"
  },
  {
    "url": "recipe/lunch/index.html",
    "revision": "2ce0236073e4060a9fb804eb86617d93"
  },
  {
    "url": "recipe/lunch/page/2/index.html",
    "revision": "9e914331f704d371800a46e6264f7415"
  },
  {
    "url": "recipe/supper/index.html",
    "revision": "5b77748a7766cf3250421d68a3fdb79b"
  },
  {
    "url": "recipe/supper/page/2/index.html",
    "revision": "abc5790d098fb071d6b09c98f07e6bfc"
  },
  {
    "url": "subscribe.html",
    "revision": "d07071e1d570402ec02076fa9acd71a7"
  },
  {
    "url": "toc.html",
    "revision": "7db4df33a42bb527c0a12193278199f8"
  },
  {
    "url": "yandex-browser-50x50.png",
    "revision": "e7c6103779dee545377d3855c2f5e020"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
