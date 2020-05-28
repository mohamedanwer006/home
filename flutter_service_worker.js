'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c0fb62f463e19d07c5a42730b7735b07",
"assets/assets/icons/Menu.png": "01519b1bb398987e4b5b2eb368694ecf",
"assets/assets/icons/music.png": "98661954c9cd1021e6cacff979d2639c",
"assets/assets/icons/Pause.png": "2d805d90e58b28bfcb753a673aa13755",
"assets/assets/icons/Skip%2520next.png": "f1c9b37388666da60564ed8eb21c69a1",
"assets/assets/icons/Skip%2520previous.png": "fcfcb14c9d2181e85c31cd3f10c71b06",
"assets/assets/images/ap.jpg": "c27c7edb60cdb4f207fe82ec45e516f6",
"assets/assets/images/avatar.png": "fc047347b17f7df7ff288d78c8c281cf",
"assets/assets/images/back.png": "85f5b442b45a4a51b97edb8a3390fbbc",
"assets/assets/images/dark_icon.png": "49922b14f49d3c9ed479c535c0f782cd",
"assets/assets/images/exit_icon.png": "4d7a71a79b69120bd013cf91d8935768",
"assets/assets/images/humidity.png": "31b96f319f52135af7882e6d63372eef",
"assets/assets/images/idea.png": "7f74e4a648c36a41bca2c983ba721947",
"assets/assets/images/logo.png": "89e71c9a98c40000815e87ab4622c4ee",
"assets/assets/images/logScreen.png": "bc5eeb814197f78054036b38689b3bd2",
"assets/assets/images/Notifications.png": "63d8f4fe94a31bb0cff45680525ec62a",
"assets/assets/images/plug.png": "e10a0a458d2c25dda4a53e27e416705b",
"assets/assets/images/room1.jpg": "60fba2f6f769cc9687bc9e2332c0d088",
"assets/assets/images/thermometer.png": "4df4f0c692195c5106eb929033ed67b4",
"assets/assets/images/weather1.png": "b5ca2be922cf594dfbccbfcd418de352",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "115acf0179de6f192985c250bb6e24c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "70dbbd8926958210ef96b08fe4363d00",
"/": "70dbbd8926958210ef96b08fe4363d00",
"main.dart.js": "609570256f70631a450c53df02f403ea",
"manifest.json": "60e9552339f50ceb402be10aa6383def"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
