'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "53fb59e54fb87bb44dba7c2200e1dead",
"index.html": "1bbaafe901a75fc6b3c51e52600d0aab",
"/": "1bbaafe901a75fc6b3c51e52600d0aab",
"main.dart.js": "bba086a16086fa63c99a7446e987c658",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ace26d0c71a6ddf01f5f72671a426a89",
".git/config": "06c899afe9e4270457387770252d6f3a",
".git/objects/0e/890f2059e13f127270d385532bdf49b668896c": "7b21a90cfb1d4bc9221000207fe96e72",
".git/objects/e2/e021fa4fe65adc05420e60cbf87d36e11bde49": "75a900cda8bf77a2c1a0ae4733875583",
".git/objects/c1/97db7eeba24f81e828e23329e3527696a35d2b": "dec3541714e161c9e1d1b80fa1406057",
".git/objects/ec/ffe3110cafc42b9e3d0a790e3e1a56a2d06ec9": "7a8c9c7b67214741554ba355fd0c9a11",
".git/objects/pack/pack-6cbdddf3da8580a5f30efd89b12462b1c980b1fa.pack": "5de2242ea729108fd6cee6ad465c73a7",
".git/objects/pack/pack-6cbdddf3da8580a5f30efd89b12462b1c980b1fa.idx": "1351c38f10d20136318badabe54ea64f",
".git/objects/d3/aa0a857ff859a029ead3ceaa11deb410bf8258": "795508a259a50de4b651ff986c03a9a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c965481586ced29712a9783f7224dfee",
".git/logs/refs/heads/main": "c965481586ced29712a9783f7224dfee",
".git/logs/refs/remotes/origin/HEAD": "0c9a91950c50da2c405285f2261fefa4",
".git/logs/refs/remotes/origin/main": "20e09d3080555cf298ff57c0ceaba0f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f220ed43acf0cab3ec743c8ead687eea",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f220ed43acf0cab3ec743c8ead687eea",
".git/index": "56102a2722934d05295ca059875f62ef",
".git/packed-refs": "27dbaabbb50325a71e20d822345c1f3c",
".git/COMMIT_EDITMSG": "e6bfc1729e8b4fe91a8e245afffd72f6",
".git/FETCH_HEAD": "3620ed9c9e524e513f0054b03165e9b8",
".git/sourcetreeconfig": "5c406cb75ec4b109bda597dec25fe599",
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
