'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "53fb59e54fb87bb44dba7c2200e1dead",
"index.html": "36dfa25cb1dfa53237dc5a2272a5adc5",
"/": "36dfa25cb1dfa53237dc5a2272a5adc5",
"main.dart.js": "2735923dad585c5a7c3a26996b5f397a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ace26d0c71a6ddf01f5f72671a426a89",
".git/config": "83c9f187e9fff221fd5ae77b878b8b3b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/56/1492e2c59e2d3e1720f0a85bf31c40d29beead": "fc1996c9d0c787c6b2a651f92594e1a6",
".git/objects/05/ba13a046e4290e46b33b2a231a06bdb2ee1e8e": "06d9fd4e6004ed4f71463ba2585239bd",
".git/objects/05/01c76f599bbc3b0fabd205f5cefaf46931e261": "a2127f34265f77f2b2b2ca214ef0c55e",
".git/objects/ad/2b565351820a0a8e899365b31f1f0f275e36a8": "50bcfe01bf3b377902fb4663ee6764cf",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/a2/f384cf059968ecd5117ca1f57dfd14fb6b13d5": "0f66f8e6d200ebdb368cca929fdaa1b5",
".git/objects/a2/41f7a5794b4115022eeeb4f0ff460448368998": "b798855ae499540d27c357b77cd2c6ba",
".git/objects/a2/dc009f691a71b2fb3453f2c31531a1d05e7ad8": "1dc123223af3d97921788efd3d403d46",
".git/objects/a2/f2ea6b5c748c778beb483e4b5a4a6395c17d20": "6fade2ed8cdfceb1f132d6c44b89093d",
".git/objects/a5/2ef3991b285be7312f829d74408983b7aec3d5": "c8545eb9e2ba7ed0d74fe33e5f4b0935",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/3957835b9bb0bf5cb93cdcc49e0f735f022274": "f4cbf316a40fe81de0ff66c598cf0488",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c810c89a4862944b6cabaeb77e2023e83b0ecc": "7e47dda2f9153506f76200b6c9e9668d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/40185aec4dc758286c5c9285d27776f6ac6092": "70b46f461122d7df873011ba2f9af271",
".git/objects/fd/d30242948b9ea4545c98c18f1d7a9bd1a170f4": "bf3a599cc13068a621a12270c37b59b2",
".git/objects/fd/30767d24d3dd7208ee3b2fa91844e519a2e956": "7c714f70f53673f693d82eba9a198ec8",
".git/objects/f5/a9de8f6059264a12d1d6cf05ee530aafdcc641": "b1dbb55b63adaee3e12927832378a064",
".git/objects/f5/dd0ccb1bb7a3e39c51dc4a9d06cd61bb0c1ecc": "887e0584b9b54c4d2fb1f44bc8c323b3",
".git/objects/ca/0ea13277a62a0044e3b20bdf72f0b75a3adb8b": "83c9a6e1381b00d0b77370c28861a327",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/45/a3b26ccd48236ff6381e338b67b1f7d780b203": "33c7d0ffff3fd22d2effd23575073741",
".git/objects/73/43d5386b1ba6fce8c693c769ffb18544ac6de4": "8517379e54bf99e980f04ac13b150a91",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7b/c2d014ae1d9dac69bde487bbabc417aba09b5d": "4962467398dea51e8cab781ece1a4dd1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/a988856a28ed377c564228372b51ba4569376b": "a703224c34bf7583b05f9beef6a57c74",
".git/objects/72/bac5966dbf17b567670a83eafe2597c034c8a3": "ebb511bd7f8341ce1926a6ae165566c0",
".git/objects/88/99d3f8dda8de01df7fef1c41db4a88eb718226": "d6971a11548d83558924da648aef7f10",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/cd2740742a8e035ca688c38e566c19a97f63bb": "df053ea502181204ce891c817d1c7c63",
".git/objects/9a/f4bfde35d436db3b9882431fd178e61ab9e53d": "a01927d5462b6ded9a52011178c707b6",
".git/objects/5d/4703b66bdeaadfea8ff9b1c1b40c4684a217d1": "dcfa3a5470a49ea1088f1bc023c2f828",
".git/objects/54/ce66e6002a45a3991362eec4e6dc6cefa54cd8": "fad718e7c3d33035a55da5cc8d9e396c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/37d056861661517c50c7534241d0ae5dd01ed4": "a018d88e6e6cfc1207591178375fa778",
".git/objects/99/be166d232ad799cf7113a98ed15d48ad6e0895": "9d389b9c78732d058e65c1d99b5811b6",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/d67e92cdbb6b671703136a5731b0b29f7d5fde": "bfb8390e7c65d95c0f0d5af701730a73",
".git/objects/d4/2b0d4af183c3259c699eb1f6390e1ce595c063": "9f8b989e8840dc2e398ac9ed01c4efd9",
".git/objects/ba/19527fc8684ecfe6c44c16f2402b1b7cd4a901": "547f791f55dffbcb2a53f7b3692e3a71",
".git/objects/d2/800c5428c7934d950f874a1db509f499c462de": "b61dfaec17002ddc89d3b3de69fbb161",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/cc1e844c378f53199b199333fb09b74df3c489": "5245020aa0f742ff238cd5008d51ddf6",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/c3/ae89c6c69d545c37e28d3b4bcdeb6a4af6f6cf": "a0e9d9452339c36944c7623ffa5a4edc",
".git/objects/f7/29b95bc41023aadb95ae810bcaaa1fe7433916": "45208899bb7420548c24e880a567055c",
".git/objects/f7/ebbbf48f50fd14550723bf8844b8f0c48dc4fa": "500844711096800e3460af2f0f726ee0",
".git/objects/e0/b2ca1f2f543b0e9164dbc1cbdad4f243a6a703": "282379214868da06d05fdade943bd881",
".git/objects/2c/4c4da19a6e61a3bdabef13672c6d60f56f09d0": "717df98eafd4ced5f0efc0c3d5352f46",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/8feca2ebb232cd3687b5cd512a74d7cb528e76": "e1c181108f41799be9c73b0bf376fb55",
".git/objects/70/192630a885bf203f8ccbd145215ede00d6f4ec": "26a5dac3ae7023826b6742458fa64814",
".git/objects/4f/4f1fe1e1bba5e6e313931a0eaf8b85f7f40eb3": "52a438b836390f8441e2276f296d60a9",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "1778410926fc534301afb5b76696eab7",
".git/logs/refs/heads/main": "1778410926fc534301afb5b76696eab7",
".git/logs/refs/remotes/origin/main": "11b313af4a3fb6eebe4c98c3c269e84e",
".git/refs/heads/main": "07db9053d6817efa16995cc46610c3be",
".git/refs/remotes/origin/main": "07db9053d6817efa16995cc46610c3be",
".git/index": "1ac0c40c689359f2a41f371914e94474",
".git/COMMIT_EDITMSG": "a07ec5932b39d696012f6338023361f7",
".git/FETCH_HEAD": "c8aaf356d99fce7d528569a7e90c3322",
".git/sourcetreeconfig": "7fe1fcd13d6b052ea4b7a508d75a0db6",
"assets/images/main/ulsan.png": "8c1782afee09881db55c559e6f036804",
"assets/images/main/3.0x/ulsan.png": "1bb6b276d5b85a913e5064f2ef9256b4",
"assets/images/main/3.0x/slot_banner2.png": "1f2df4b89de0241b621cc5692dc5ca77",
"assets/images/main/3.0x/slot_banner1.png": "64a097b32a23bdddc8c437b1c1aad2be",
"assets/images/main/3.0x/btn_ulsanpedal.png": "80a819ba25ed7e84480412fed427a482",
"assets/images/main/3.0x/banner_empty.png": "740d93a23121360fca67f0b99d6c8e06",
"assets/images/main/3.0x/btn_ulsanmall.png": "fcc5c3bef5f22cd08ccc5dff2d37690c",
"assets/images/main/3.0x/btn_qr.png": "69ccba5ec7a9ccdc8bf17dee5ac5b65a",
"assets/images/main/3.0x/btn_notice.png": "20705fbe36a1e379be1dd37853f713c0",
"assets/images/main/3.0x/btn_merchant.png": "2d49fec4d7e4930cc0ea328d7cf501c6",
"assets/images/main/slot_banner2.png": "80007677dc542e870cdd583c756d4eed",
"assets/images/main/slot_banner1.png": "9ae10941a6d88240b3f8a72bc3683e76",
"assets/images/main/btn_ulsanpedal.png": "7e56539a2842c6cae927cdd59a74edd5",
"assets/images/main/banner_empty.png": "0ed1431ce70212742b401327a89e4aad",
"assets/images/main/btn_ulsanmall.png": "8bd3e4671dbd08a87c7be93035aa13fd",
"assets/images/main/btn_qr.png": "f41f7c93fd4044ec71eeeb10f3761892",
"assets/images/main/btn_notice.png": "2dbdf096eca8a406d15de69a13326080",
"assets/images/main/btn_merchant.png": "16bb87da67d1313cebfc734a2b5a0362",
"assets/AssetManifest.json": "25e1b6370e8805d1b56e91a9c6a01f72",
"assets/NOTICES": "282dd5706d3e45f2aaba5ccbf1ef2596",
"assets/FontManifest.json": "0534142cfc95d45ae41169fd1db15b9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/fonts/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
