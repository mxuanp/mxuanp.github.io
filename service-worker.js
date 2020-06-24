/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/12/09/go-basic-入门/go-format.png","acbf5d16610b7e5158945dc67b1e49a6"],["2019/12/09/go-basic-入门/index.html","21506c1bbc76dcfc0c8a247f3cff2a45"],["2019/12/09/go-basic-程序结构/go-keyword1.png","e80665e5df9f47212b020430bbf00389"],["2019/12/09/go-basic-程序结构/go-keyword2.png","d0022825e7a6b7f9a8e1d60c58462c94"],["2019/12/09/go-basic-程序结构/index.html","98ac31bdfbd670051804acee3377de1c"],["2019/12/10/go-basic-json的使用/go-result.png","df1a91492ab274b3cb4b54035aeb054a"],["2019/12/10/go-basic-json的使用/index.html","ddb5b95b9ca1ee7f87a24ce9bc5ca2ca"],["2019/12/10/go-basic-函数/index.html","175d48f93c69ef4aef76f9727790aed5"],["2019/12/10/go-basic-数据类型/index.html","4f35a05db26ca9aa4ebcfd4144a9fea5"],["2019/12/12/go-basic-接口/go-interface-change.png","64e920ac4288c111d9f58502d8f521e0"],["2019/12/12/go-basic-接口/go-interface-func.png","9b1a31f9778e31b30d61fd6f39a3108a"],["2019/12/12/go-basic-接口/go-interface-nil.png","afb9eb231d4eabd2f1468258697b60c4"],["2019/12/12/go-basic-接口/go-interface-non.png","70f2e14258a8aa0b6f843146151978d1"],["2019/12/12/go-basic-接口/index.html","90b4e56bc21571b71eb79e8167cd7db4"],["2019/12/12/go-basic-方法/index.html","f6ee3334c71208267adf726c7a146c1e"],["2019/12/13/go-error/index.html","e621316997380a3ddb6414baf3e1c52e"],["2019/12/16/回锅香辣猪蹄/index.html","1b37b58df559421a5cb9ebf5b5a63274"],["2019/12/16/番茄牛尾火锅/index.html","f03b3065019a21e24b3719979415effa"],["2019/12/16/红烧羊肉煨面/index.html","778836c81404ccdc2b371337232d7f8b"],["2019/12/17/go-basic-goroutine-channel/go-pipe.png","b2e6b7e9374713af68990028cd644b01"],["2019/12/17/go-basic-goroutine-channel/index.html","cf1bcfcf30046299e395238c18f3c1bb"],["2020/01/23/go-并发编程/index.html","c8637dc8d400a5e2ef8babcd5f6790ef"],["2020/01/24/go-test/index.html","e41bf4535b8af6067f5dbaa879034516"],["2020/01/26/go-反射/index.html","c8099868a8d3692b530ea7c50e12670b"],["2020/01/27/go-底层编程/gosize.png","588eb94c50d4e0e9741d2a97fa4722e2"],["2020/01/27/go-底层编程/index.html","1c9f384e48ff888ed37f1e6381f730fd"],["2020/01/28/Go-Review/index.html","7836cd46956f3ae2369f0fab836d716d"],["2020/01/28/Go-Review/pro_order.png","291b84c3f37f17d5a94dce61c7d61939"],["2020/01/29/RPC入门/index.html","9354844f38bdd3cace44038219859358"],["2020/02/03/Docker学习-使用/index.html","255d23706d68483d4da11963a1356fc9"],["2020/02/22/go-websocket/index.html","446c6f02c23c8cd524ea32d48a2489c8"],["2020/03/04/排序算法/index.html","b64974b74d6adee742303df79c71b6cf"],["2020/03/15/go-工具/index.html","3f201aa07da832336165242377f1f20c"],["2020/03/20/go-slice/index.html","5fc9311fb3b2aa845f4afa3be963762b"],["2020/03/20/go-slice/slice.png","f5efa78e7746dcde274b81c8492f70f6"],["2020/03/20/go-slice/slice2.png","c654ee0c5c9608f6252debe6d7be0003"],["2020/03/20/go-slice/slice3.png","e161e42db2f256367c1b99a5987016e0"],["2020/04/07/回顾-Go类型系统/index.html","f3b96aaa6d6f9e551facf62159049810"],["2020/04/15/Go语言标准库-读书笔记-1/index.html","106a3a6049517f75203096abebe8d57b"],["2020/06/21/Go语言高级编程学习笔记-01/Actor-model.png","50de9d8b988243201f73e922b985539c"],["2020/06/21/Go语言高级编程学习笔记-01/Go-csp.png","c881e9d0e36b297af49a0d39954a0260"],["2020/06/21/Go语言高级编程学习笔记-01/Go-genemap.png","603ae2166de17292af89709abecd220a"],["2020/06/21/Go语言高级编程学习笔记-01/index.html","f91c526cf0f17ba200c3d28455f6c0a6"],["2020/06/23/hello-world/gopher-power.png","b870dfb1f53c8e93b8f8bff185a26094"],["2020/06/23/hello-world/index.html","cb215fdd86f12811774c576dae6559a3"],["404.html","3a544b37629366b727968232155f74ab"],["about/index.html","d324fde2743185cea93b2b8c2474ce57"],["archives/2019/12/index.html","0ecbc8f689d3edb0f13d9c4ca706b41d"],["archives/2019/12/page/2/index.html","829170fa152270bcfc2315bf24a8fd21"],["archives/2019/index.html","490b76c6308ea4912b25a2843f2edaf9"],["archives/2019/page/2/index.html","665d9711681f03290d8e1e0fa64ac661"],["archives/2020/01/index.html","44cdd00b7b0bf6fc7125170c996245f8"],["archives/2020/02/index.html","9d2cf0ecc60a9a9678b4bdeb785517ce"],["archives/2020/03/index.html","d61eda9d1955e60e9c8a9e5f266bc402"],["archives/2020/04/index.html","e32f90b6c15921e5e1f28703f31c73e2"],["archives/2020/06/index.html","af24a06ab72178485b10a07b6e041f61"],["archives/2020/index.html","25c09e25335730ae4d960ea15565bef9"],["archives/2020/page/2/index.html","4f2af3870a9e65d5af703939c0b9c8dc"],["archives/index.html","aaa8ec2d27d52e1781c2ad2a6e274a68"],["archives/page/2/index.html","1ab3cb0168e357174100288f54dae25b"],["archives/page/3/index.html","14794d7cfe7fb4dc677e7fbe018be3c3"],["categories/chef/index.html","004b1d07cbc27182850c9bf0ad050427"],["categories/docker/index.html","517e535a6b9a723155b1fcf5e4276f3d"],["categories/go/index.html","2ce24985e9f1c75669ab004c939b4d9c"],["categories/go/page/2/index.html","bfaa04e7be7cf74967d644feb2e766f8"],["categories/go/page/3/index.html","8ba83cb3a60b2f2105cc552099223100"],["categories/hello/index.html","4470de933fbdc46d56fb1781d01a6cdc"],["categories/index.html","87321c36bc3894ea30de723764625e98"],["css/index.css","edf9387164f7717236b11eef648f1dea"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e1afc18cce81c0859a86768b36fe7ff8"],["gallery/wallpaper/index.html","f6b8b132338bb1707e45883d5764517e"],["images/404.jpg","2b41c2ed6daf4a0c200e825e774f79b0"],["images/avatar.jpg","807596987d89ca95a49cf77080024d07"],["images/background.jpg","52108f413d6c0a90a417c53f42254a21"],["images/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["images/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["images/gopher.png","cc13b308f0ffa05b9e8374133a214a9f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","bc6a1d442d126674cf0c672718ffb48c"],["js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["js/utils.js","f2f712d5d52625b377855945420eea15"],["link/index.html","ecd9a2a21471d45fd7ba53655bac7015"],["music/index.html","cfee4a44a25dcedbade131e4b6f23e0d"],["page/2/index.html","3b31b20c15b98f807f08e1f7c7c913c0"],["page/3/index.html","9801cfd43798765ae28ac3f278e5985f"],["tags/RPC/index.html","0a0b19e91bae8e1d5422f03e88b126f9"],["tags/algorithm/index.html","0f34df7efcd568ea77fea4aa0b2090c6"],["tags/cgo/index.html","7749c955e2ba21f394564bd4d26746d4"],["tags/docker/index.html","617040964dbf163413745c95fe61a29e"],["tags/gRPC/index.html","2f89c495fb5d38171206356bc4e785ac"],["tags/go-baisc-入门/index.html","aabb3dfcab39c22550dc9a1a13696b38"],["tags/go-basic-函数/index.html","238c6f7af4de06001887be512243c5d5"],["tags/go-basic-接口/index.html","8fd51332d5bf6951ba6808981199f2b0"],["tags/go-basic-数据类型/index.html","2ca5d144e129f80b459ffd5f7e7e9ee5"],["tags/go-basic-方法/index.html","73592316f9e3a742d8c8e4c3990a53bd"],["tags/go-basic-程序结构/index.html","07b5bff9d3a444ca673a1d3377e2aed8"],["tags/go-basic/index.html","b4a07a288f381657e656d9c3b82a0153"],["tags/go-channel/index.html","c33112504f88fb4c62e4ca88edc2d10b"],["tags/go-error/index.html","112d2efe2430d426075b8b179dd03289"],["tags/go-tool/index.html","dff16fd5cdfdbf7d40c2d0869472341a"],["tags/go/index.html","66ae1224bdf310516bb1584f0e0333ae"],["tags/go/page/2/index.html","a167ae9f131c2149178c5803310912f7"],["tags/go/page/3/index.html","92af71a7ff07561fa363bfa21c89d218"],["tags/golamg/index.html","e2d6b974fd7bd0503cecc30031f4985e"],["tags/golang/index.html","5d923a58f24262c696812c4891d0854b"],["tags/golang/page/2/index.html","c60ce66be8367e9414f2cecbb63bf266"],["tags/golang/page/3/index.html","5800b12113a4e8bfe95b3e001824766f"],["tags/goroutine/index.html","da74ed74786b84339b7adb2bf48fd13e"],["tags/index.html","e44a7a0caf7cc6469e4cda42a04c5947"],["tags/json/index.html","8285b37e2f60192c2d3beea29528ef3a"],["tags/life/index.html","eea14b3fe0cfc78a87cc638771a3f707"],["tags/reflect/index.html","61ec640fba0a497d98721d66c1e24ec4"],["tags/review/index.html","fbf2ed399fcd0bb8f1192c813c165b2b"],["tags/slice/index.html","490ecb446289442aebe4588d406622c3"],["tags/sort/index.html","af4a3d18818d88963183769dd824ca1c"],["tags/start/index.html","106abfca6e93bd1fef88e726f6a328ef"],["tags/strings/index.html","105b489f7f267e695b04e2fdfcefb428"],["tags/test/index.html","5accb66b28ac0bbd1a26da188bab0286"],["tags/vim/index.html","4e30fc26a450a626edd5ee5e3bc23819"],["tags/websocket/index.html","437bd48b606a334cc240131e2a587755"],["tags/并发编程/index.html","00162540752558f4a34c0a301802139a"],["tags/火锅/index.html","bb5319055057e3fa174b7907cb54d6ab"],["tags/猪蹄/index.html","6203f8b83a880a8db88e6dd0a32f75b0"],["tags/算法/index.html","600da97d988a7d018d0a2eb7d4cdec44"],["tags/面/index.html","64508823cf17980e5c9e312ce456deb5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







