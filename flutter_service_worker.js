'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "b3f0ce0b15637b13233569538ac187b4",
"/assets\assets\icons\Menu.png": "01519b1bb398987e4b5b2eb368694ecf",
"/assets\assets\icons\music.png": "98661954c9cd1021e6cacff979d2639c",
"/assets\assets\icons\Pause.png": "2d805d90e58b28bfcb753a673aa13755",
"/assets\assets\icons\Skip%20next.png": "f1c9b37388666da60564ed8eb21c69a1",
"/assets\assets\icons\Skip%20previous.png": "fcfcb14c9d2181e85c31cd3f10c71b06",
"/assets\assets\images\back.png": "85f5b442b45a4a51b97edb8a3390fbbc",
"/assets\assets\images\humidity.png": "31b96f319f52135af7882e6d63372eef",
"/assets\assets\images\idea.png": "7f74e4a648c36a41bca2c983ba721947",
"/assets\assets\images\logo.png": "89e71c9a98c40000815e87ab4622c4ee",
"/assets\assets\images\logScreen.png": "bc5eeb814197f78054036b38689b3bd2",
"/assets\assets\images\plug.png": "e10a0a458d2c25dda4a53e27e416705b",
"/assets\assets\images\room1.jpg": "60fba2f6f769cc9687bc9e2332c0d088",
"/assets\assets\images\thermometer.png": "4df4f0c692195c5106eb929033ed67b4",
"/assets\assets\images\weather1.png": "b5ca2be922cf594dfbccbfcd418de352",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "09773a814143116bb5c8970612fed3e3",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/index.html": "70dbbd8926958210ef96b08fe4363d00",
"/main.dart.js": "7e798d30a53f371f20ace0965203a527"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
