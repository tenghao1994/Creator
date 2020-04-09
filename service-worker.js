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
    "url": "about/index.html",
    "revision": "c701dd5f3ff24463c5d3b88247ab4e69"
  },
  {
    "url": "article/index.html",
    "revision": "5dff136725d5ee23646847fd76fda48b"
  },
  {
    "url": "article/koa.html",
    "revision": "91f02b3e90050f8cd872867232aed498"
  },
  {
    "url": "article/mongdb.html",
    "revision": "de35b9dda19783f4e49c45933917d1c7"
  },
  {
    "url": "article/two.html",
    "revision": "be4f5ee25590924b13e8e67912ed11f2"
  },
  {
    "url": "article/vue.html",
    "revision": "54e4e366e09cbc7785b030b3366a0f56"
  },
  {
    "url": "assets/about/me.jpg",
    "revision": "cd695ca5709e0184481b6c6c02d015bb"
  },
  {
    "url": "assets/css/0.styles.4929bbb2.css",
    "revision": "62d68487c7b391bb4b0d49c1d9223d31"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/logo.gif",
    "revision": "73f31f742ab2412d123971b4b32727cb"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "df3492deb41a44528ee55bed1aa50e2b"
  },
  {
    "url": "assets/img/music.5ab1ca93.jpg",
    "revision": "5ab1ca93c131ef6b7ff8e0a437dea37e"
  },
  {
    "url": "assets/img/timg_1.gif",
    "revision": "7d4758040249db95d7158b08102f27e2"
  },
  {
    "url": "assets/img/timg.gif",
    "revision": "e41cbb2ae7ca4015bfe39bd3afce3e3a"
  },
  {
    "url": "assets/js/1.4e23977e.js",
    "revision": "f78c4bc3bc6695f779c4f71bfa39b443"
  },
  {
    "url": "assets/js/10.9e34202f.js",
    "revision": "b2fb7897d1dfed6951ddd7c88cc40245"
  },
  {
    "url": "assets/js/11.b590cef2.js",
    "revision": "d282bbca6c4435d7d959deaf00a58270"
  },
  {
    "url": "assets/js/12.bd9bc6ac.js",
    "revision": "9fcd7984b41e75dd7f78b04f2b5db6f6"
  },
  {
    "url": "assets/js/13.c2109b0c.js",
    "revision": "f3bc2b244d5185c7ddbf78a2b4b3d0d1"
  },
  {
    "url": "assets/js/14.19d659a2.js",
    "revision": "fe33dbbd32598a3de8c7acb2ac82c2aa"
  },
  {
    "url": "assets/js/15.80b95ad0.js",
    "revision": "feb5ee01f3612a664c08cfd784583675"
  },
  {
    "url": "assets/js/16.165ecfbc.js",
    "revision": "d6e78d8fc92605780159c33c2a3563cb"
  },
  {
    "url": "assets/js/17.62f1835c.js",
    "revision": "4002f5659aed93691af473366183ae7d"
  },
  {
    "url": "assets/js/18.aa7d9918.js",
    "revision": "b16fc5cdf8b8d383be9a0b74c54be2bd"
  },
  {
    "url": "assets/js/19.43b7b180.js",
    "revision": "b861f963e3ff22887f5ee00779c8a34d"
  },
  {
    "url": "assets/js/20.75a6b07c.js",
    "revision": "f2067fb06d1a7636e83ad530ac781ec8"
  },
  {
    "url": "assets/js/21.7db4214d.js",
    "revision": "814d0ac9e500b3afb02731ce04a190b1"
  },
  {
    "url": "assets/js/22.df6b89fa.js",
    "revision": "7672e61aef1e1cfbef391c9d3c8b0264"
  },
  {
    "url": "assets/js/23.a9a9bc44.js",
    "revision": "0658942862c6f52a2700b7f2209bd557"
  },
  {
    "url": "assets/js/24.4cc7f82d.js",
    "revision": "e6155e2976dcb7375ec6d57f9e43c2df"
  },
  {
    "url": "assets/js/25.a3c1a9b8.js",
    "revision": "d3d3e0fe1c8c29fcd84c6f885f45b7db"
  },
  {
    "url": "assets/js/26.dd2b5ada.js",
    "revision": "8c8a82ed304e3185803b644557c7b94d"
  },
  {
    "url": "assets/js/27.93b6aea1.js",
    "revision": "36195b9e16e198276603e110148f6747"
  },
  {
    "url": "assets/js/28.e8b7a5da.js",
    "revision": "2a1e4cdeb604d87059e0c559a793f231"
  },
  {
    "url": "assets/js/29.c455a9be.js",
    "revision": "c64a3cd07313d86c6c9469552ad5f332"
  },
  {
    "url": "assets/js/3.b18b8820.js",
    "revision": "c898eccf82ff6c0fca4412f8a3d90774"
  },
  {
    "url": "assets/js/30.f5b89b53.js",
    "revision": "3de8ba64db5f494d94105b6df7ccd60b"
  },
  {
    "url": "assets/js/31.7d0336d0.js",
    "revision": "806bda76284de6ab0781126085535543"
  },
  {
    "url": "assets/js/4.c464611d.js",
    "revision": "d40d76bf20c6077d2d990f95e59502df"
  },
  {
    "url": "assets/js/5.e971907a.js",
    "revision": "7552f35f983d44fd443d380eb5a419b9"
  },
  {
    "url": "assets/js/6.fac592e1.js",
    "revision": "eccdcc61a8968c40ffa9f3cd864c06fe"
  },
  {
    "url": "assets/js/7.7a8d5e2c.js",
    "revision": "2fb13310a9009084d36caf8d53bed3ad"
  },
  {
    "url": "assets/js/8.fd5baec6.js",
    "revision": "7ea63e0e2a4229769e1652785b831b11"
  },
  {
    "url": "assets/js/9.43ca08f9.js",
    "revision": "7e0f7ad9167981df4a930e227aa8d221"
  },
  {
    "url": "assets/js/app.69ee84ac.js",
    "revision": "e47bc1cab7f5a23d15b6b632ce5436f3"
  },
  {
    "url": "categories/index.html",
    "revision": "86fa6b182b9c1abd795a286a572fd636"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "64fb333adb197b7c5189f39b186cb531"
  },
  {
    "url": "example/index.html",
    "revision": "39e5b9805d511e2cfc098e457dfddd07"
  },
  {
    "url": "index.html",
    "revision": "102aaccd47a9f499e4a406bf78e276b8"
  },
  {
    "url": "js/mouseClickEffect.js",
    "revision": "a0c9ae8ed3a9cb6a60ca05f7ef8df9f3"
  },
  {
    "url": "learn/index.html",
    "revision": "3753c601c9f374505f59525a06c7b732"
  },
  {
    "url": "learn/javascript.html",
    "revision": "64129b897f235afd5fb96731783c5fe0"
  },
  {
    "url": "learn/koa.html",
    "revision": "23c9995afc1a40d50c67a6957a380bc9"
  },
  {
    "url": "learn/mongodb.html",
    "revision": "91b7c8c9e44f8218ee265e35b390bcb8"
  },
  {
    "url": "learn/vue.html",
    "revision": "9f9d34d632054b436e7e970a46de2b9f"
  },
  {
    "url": "node/index.html",
    "revision": "0080c1090d83f5e141bd11ff3b569806"
  },
  {
    "url": "node/one.html",
    "revision": "1976e4d896ea6045b797a862c42351d3"
  },
  {
    "url": "tag/index.html",
    "revision": "6cfcad40a5cacc95c95ef22d6cc75abd"
  },
  {
    "url": "tags/mongodb, 数据库/index.html",
    "revision": "70c72699728905ec8b6bc0a8687b4172"
  },
  {
    "url": "tags/vuepress, 前端/index.html",
    "revision": "d017d36df584b9fec52409e97454b049"
  },
  {
    "url": "timeline/index.html",
    "revision": "1cb64ef274d8961e7a33ec35db2d2be0"
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
