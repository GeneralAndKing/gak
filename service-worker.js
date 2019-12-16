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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c4f15b35cf0c322a7ce77637970c836e"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "3ce44be4ee16cedc6719ae84a802f55f"
  },
  {
    "url": "architecture/back.html",
    "revision": "94569e9666abf3d3f68272f110592744"
  },
  {
    "url": "architecture/index.html",
    "revision": "47a3ceb14e85a2685183a1e5be869095"
  },
  {
    "url": "architecture/maintain.html",
    "revision": "35edd526035f287998b82f3c4fe73b68"
  },
  {
    "url": "architecture/other.html",
    "revision": "96c5490ec4c549b50ade4e6160630f8d"
  },
  {
    "url": "architecture/summary.html",
    "revision": "2cb4f559fbd9ec18bb5c3d27a75fdb4c"
  },
  {
    "url": "architecture/web.html",
    "revision": "0ba5d4bf33abedaae8889a60d663500e"
  },
  {
    "url": "assets/css/0.styles.5cb16db4.css",
    "revision": "0b45786db625774298487c2fe9cac642"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8d46dfc.js",
    "revision": "4a5ce9efbd9f6e71c0a5cd0bd23587ab"
  },
  {
    "url": "assets/js/11.bdc3c390.js",
    "revision": "17db26fbc74562eb1ed721f434992474"
  },
  {
    "url": "assets/js/12.bedea048.js",
    "revision": "f6f51e9d8c285d85c9b5532aab88576f"
  },
  {
    "url": "assets/js/13.0aa78ebe.js",
    "revision": "7b1de551ad5120b0a30179cf75e7278d"
  },
  {
    "url": "assets/js/14.9c21283d.js",
    "revision": "6e9dcf014be78a5cd71e098a9a562745"
  },
  {
    "url": "assets/js/15.aef1f37f.js",
    "revision": "0ea233773a6e9fa30c2b73bd4e897728"
  },
  {
    "url": "assets/js/16.0b53dac7.js",
    "revision": "82bae86823a2446c082d6a95ef1b8ba7"
  },
  {
    "url": "assets/js/17.2afb900e.js",
    "revision": "264d20d3a88adc25564da6b13d77d45d"
  },
  {
    "url": "assets/js/18.9ddb41a6.js",
    "revision": "2989dfaedd88da4c19dae5b035fc896c"
  },
  {
    "url": "assets/js/19.66d23c63.js",
    "revision": "d2c8e391cd07086af1974ddfc24c2675"
  },
  {
    "url": "assets/js/2.04738c42.js",
    "revision": "a94468c154bb804dfc68991fb9f17d7e"
  },
  {
    "url": "assets/js/20.4eea7b7b.js",
    "revision": "bd983aed5165b76e0e62a3add2c53fe5"
  },
  {
    "url": "assets/js/21.093b88ea.js",
    "revision": "5316a3db8a59cbffa05482c1c096f8f9"
  },
  {
    "url": "assets/js/22.644f3eba.js",
    "revision": "043f2730849b6632664c8985385f707a"
  },
  {
    "url": "assets/js/3.1b52fbe7.js",
    "revision": "b19f85876962c20a0b5f0cbd3d6dc9eb"
  },
  {
    "url": "assets/js/4.139c2291.js",
    "revision": "4070d20668df1697c6ba51d74b69d9e4"
  },
  {
    "url": "assets/js/5.faf28de6.js",
    "revision": "ceb729b920d6264da48ecfbfdb46a86e"
  },
  {
    "url": "assets/js/6.85ee2228.js",
    "revision": "cff06e1a5f400ca057c284326c4ef8ff"
  },
  {
    "url": "assets/js/7.d0cd05bd.js",
    "revision": "8b02b7b83773db0b2c079418ece2b8b3"
  },
  {
    "url": "assets/js/8.745aa995.js",
    "revision": "d9a1399468fca830e187deac58ebb4bc"
  },
  {
    "url": "assets/js/9.7d9df22c.js",
    "revision": "4a49d06cfe5fe4c70ab79be1266a66d0"
  },
  {
    "url": "assets/js/app.63aa9f7b.js",
    "revision": "aec39cce0de8e3071288323d69bde85d"
  },
  {
    "url": "demand/action/adaptation.html",
    "revision": "b185fa2cbfcf7da9ba5be0b9ad105c04"
  },
  {
    "url": "demand/action/next.html",
    "revision": "1213dc3b1f936465b6fc092e3dbd9cfb"
  },
  {
    "url": "demand/action/start.html",
    "revision": "9246b620922a9695eeb3b29ff0fbc173"
  },
  {
    "url": "demand/index.html",
    "revision": "9232edaf4a681380d4dd993fc6c171da"
  },
  {
    "url": "demand/system/admin.html",
    "revision": "dcbe6dde55e0489560f2f6ef589cf2e6"
  },
  {
    "url": "demand/system/base.html",
    "revision": "bcc88ddfd80150715a4569e2e19f23fe"
  },
  {
    "url": "demand/system/ready.html",
    "revision": "0dd2bbc6ef9998297fb852dfc41885f2"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c1442bac245f31cc0b8eae046359244b"
  },
  {
    "url": "gak.png",
    "revision": "3b24a09072ebaca96ba706cf35c058f8"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "eade36696ed175a2c24f33b764adc140"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "921ecd9886c847ac40a9ddb99c14f320"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "dbb4e9a8dccfc97cf5c0e243cbad3acf"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "6d124d59b7fe91b0afb7a149f6fab01e"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "864ad75704e67ee2ba6287f9b3bb98d8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "864ad75704e67ee2ba6287f9b3bb98d8"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "ccb5ca78e5567c22d47e29b8b1c0743b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "13449f4cfc4e84bc433ec6a1994e7977"
  },
  {
    "url": "index.html",
    "revision": "f5c94c45fcc8973afe9e65883e29c43a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
