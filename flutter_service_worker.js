'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6403bbcf2e7c826cb615d3b22b39e918",
".git/config": "656b283e91bc3961fdf6fbe3ba191120",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4e151a800011edb88d3c4061fe466433",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78a4c38777ed21065c5b6ebab912c98d",
".git/logs/refs/heads/main": "78a4c38777ed21065c5b6ebab912c98d",
".git/logs/refs/remotes/origin/main": "90c3a6290456604d81d0ba092e94375f",
".git/objects/03/85fdd906cdabcd3b34bc4dcffadfc02c594507": "a2a6bf700862b35e471c6c7430d87c69",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/976105162e6c0e188b67cb635871c5ba9b2f7f": "a45374f4a14ab2babd0891409cf15dc8",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/1a/97a2a2e5810918ae11491bb81892b5a1161372": "da36171ff4ba307dcff1b394984b8b28",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/b0d76ed266f53871eeda855fa78f003be73b21": "9f895a6e2dbeb5da7d2a51beb8b7e29b",
".git/objects/2a/aff90f29153b8cd58ef8efec5ef30a1563fa79": "801a10a3c8e5c4c43a738b8558b3d1e0",
".git/objects/2e/15eb047abec5e00c94444ecaf1d3d8b4fb9fdc": "177e97868233b229d88955a9f59ab00b",
".git/objects/2f/3e96e1fbfe5922baf688fae05851b033a61396": "37084fe34bd562b83980064aaff647dd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3e/ba889dc92b3461e05c49646a239503710e5c60": "2f0c388bd52f6d1ef73661d50bffb739",
".git/objects/3f/fff102d2191409e0af54c594a4adebecb37c78": "f9034cf87d4eabc2aa1508ba0afdda64",
".git/objects/49/ba9427179e0201815595aa1813ea68e97b9717": "dcd78daf31489ed237e9cb586f80bd93",
".git/objects/4d/07a92cd3125171a7e479aefbd1d204bb7fd6d5": "ea889d3d004d4b46e27966cc63e0e994",
".git/objects/4e/7c9ddf4cc42aff2717507644decef38f7c1a0e": "9f3f991df7c58743ee5229fafccf6d36",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/421b44be5f6ddb2f68739df1dd3f31421f0160": "07ff29b721286dd13273e24c491d2717",
".git/objects/5f/3903c853c4ec26c46e6f24dca46915e5304e36": "32194fa0e45fcf453d2a2995c8f80053",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7f/0d33faa2a1d184569297cbb21774b67e10844b": "4af0187360b7e145fa4bb3703211f12c",
".git/objects/80/3045a55b5650ec68a71392c92ee239628bd9ff": "8bcc816a1a41303be9e16b72ab689894",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fa40f744051f2961883814f714d531496efc29": "808221edb0b2398a0534c875d7aec5fe",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/6883bfdf4067f6fe82a8ea545ecaf2b78bcb0c": "096effb49ff125178430f06565a113f5",
".git/objects/96/7968a3ea336a35fc684509d82d6cece5f6f28e": "ca7737dfdf21095521762e9082572e34",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/9a/cb9313155e84ab1ceaa1230a5f8b3e7adb15d8": "7a80549c1b56f4d202de61884336d2cf",
".git/objects/9b/e60d36c34d70eb97282a8d299f6ec58a5f2507": "7759b1fdd9a78ddc077510394e91825b",
".git/objects/9e/d9e4a5cd1cf0715d5001dcc81b75095b11ded5": "b98bb0c5216ae7ae264c8b53aa789fa0",
".git/objects/a5/064df9d86de1d28d50c8bdfe6fdd07c61b8cbf": "2e116620fc072b07cb7b08bf8407f3d5",
".git/objects/a7/5fe60aa56ae28abe62d7139cf0174e3f390a8b": "f7e28100944458c0a4f8ced4a454c9fc",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/4ff473b6a58029f32e12f9133f33593659673b": "172cd81efcf2d99aafe92ad73b894ed0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2ed26f1a1ca49cf819564e8c460bcdb9f236f3": "5994d6269f9e9e6e1382811d8841e4c0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/9822e54e59e654d0725d7527314d417645c8a2": "7a52bf8be2f978e211402873313277dc",
".git/objects/d0/ee45fef6a1325d597d4e88821d039636d971f6": "11778c453afcab6e52c19b63b7e7d186",
".git/objects/d2/497cdd44f1d8b6919d9763d0b7cc41ecb70ec1": "63661d272204cb44ce7e17e5bca94be9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/64d0bc3dd917926892c55e3706cc116d5b165e": "ab5f20dcd5b558888db7d80b0f979f8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/8ca7f587ad147ad70fa817c85d0c8ac5e1b001": "529f4af4e3605d277a1dd04ba0e733c0",
".git/objects/db/6a73dd24bf172cf25d9394737d5941c18386e7": "a2a54607aa55508d98b9d1972e64e34f",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/aebf3449f2a851378295bdffd2f8576e5c0fb3": "41d4b1e4bdcca7b687033da2a0dba655",
".git/objects/e0/957f2894d363301e1c2d4567cdafeb18bfb998": "7a9b9033df7b60b8500cc0b3c9cca34d",
".git/objects/e4/79a8cfe839b2352c226b321646b2ac9d9bf9cf": "e2b4e1a9aa902538cf3e148e0c65f1ac",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/refs/heads/main": "a203b2760d7b1181b433c04378e0dd47",
".git/refs/remotes/origin/main": "a203b2760d7b1181b433c04378e0dd47",
"assets/AssetManifest.bin": "6a5238283d482defb9a7245c10dad8ea",
"assets/AssetManifest.json": "7ed8ee07091f69038110150311f371d2",
"assets/assets/images/banner.JPG": "6650d5615ed5e0869b5608ac29ed8247",
"assets/assets/images/user.png": "7a2d61a9d819ca5eb3f7679d7c8fce56",
"assets/FontManifest.json": "38d8686268e56f92aa7db130b039bfc6",
"assets/fonts/MaterialIcons-Regular.otf": "793719d482426558ff6665148f4a6a38",
"assets/NOTICES": "c793efa53cca2b959487bf755a21df77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "7f5bb9bcf83d9205c150c5f67a35c6b6",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "6650d5615ed5e0869b5608ac29ed8247",
"icons/Icon-512.png": "6650d5615ed5e0869b5608ac29ed8247",
"icons/Icon-maskable-192.png": "6650d5615ed5e0869b5608ac29ed8247",
"icons/Icon-maskable-512.png": "6650d5615ed5e0869b5608ac29ed8247",
"index.html": "498b7ca7402f4007f76cee4990c80ea3",
"/": "498b7ca7402f4007f76cee4990c80ea3",
"main.dart.js": "f483a236f5ff9141553b07549d23c103",
"manifest.json": "5adadd0ad64d842e34a03cd1f6c3cbd5",
"version.json": "834f15529614ac283029bd8b68655c4e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
