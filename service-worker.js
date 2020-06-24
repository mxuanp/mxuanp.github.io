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

var precacheConfig = [["2019/12/09/go-basic-入门/go-format.png","acbf5d16610b7e5158945dc67b1e49a6"],["2019/12/09/go-basic-入门/index.html","c4a63e35f03d49d340af801e9468990a"],["2019/12/09/go-basic-程序结构/go-keyword1.png","e80665e5df9f47212b020430bbf00389"],["2019/12/09/go-basic-程序结构/go-keyword2.png","d0022825e7a6b7f9a8e1d60c58462c94"],["2019/12/09/go-basic-程序结构/index.html","35212ce8066a6c9c2eac14c93040c047"],["2019/12/10/go-basic-json的使用/go-result.png","df1a91492ab274b3cb4b54035aeb054a"],["2019/12/10/go-basic-json的使用/index.html","472bf0e5dce9d0b388870e050e748183"],["2019/12/10/go-basic-函数/index.html","e4dd2cf2412707cc554d62fedc63c073"],["2019/12/10/go-basic-数据类型/index.html","7ded04766985f23991596faa226f6bbf"],["2019/12/12/go-basic-接口/go-interface-change.png","64e920ac4288c111d9f58502d8f521e0"],["2019/12/12/go-basic-接口/go-interface-func.png","9b1a31f9778e31b30d61fd6f39a3108a"],["2019/12/12/go-basic-接口/go-interface-nil.png","afb9eb231d4eabd2f1468258697b60c4"],["2019/12/12/go-basic-接口/go-interface-non.png","70f2e14258a8aa0b6f843146151978d1"],["2019/12/12/go-basic-接口/index.html","91905c8ff04e3d9bfaab2d31a7df4908"],["2019/12/12/go-basic-方法/index.html","b1364e681beddb17051c63e1b620ff85"],["2019/12/13/go-error/index.html","fd8fcb96801c10b9f2e01c991ff627f9"],["2019/12/16/回锅香辣猪蹄/index.html","294b9cddb545efd748fab09c65083dcb"],["2019/12/16/番茄牛尾火锅/index.html","bef56e909c56560168a3a2cdc01bd072"],["2019/12/16/红烧羊肉煨面/index.html","45cca549139a0e1a7d0f3345372409ee"],["2019/12/17/go-basic-goroutine-channel/go-pipe.png","b2e6b7e9374713af68990028cd644b01"],["2019/12/17/go-basic-goroutine-channel/index.html","1eef02fb5166d258b021bc8319d122c6"],["2020/01/23/go-并发编程/index.html","6215c994ed6b98773bc60026c9116f36"],["2020/01/24/go-test/index.html","acdec2b53d06293525496a8964e3bd26"],["2020/01/26/go-反射/index.html","7d6b1f5af4e7530b60ab2943894a23aa"],["2020/01/27/go-底层编程/gosize.png","588eb94c50d4e0e9741d2a97fa4722e2"],["2020/01/27/go-底层编程/index.html","b5b505642b1cb423a3a475b12b7871c7"],["2020/01/28/Go-Review/index.html","0e3d8396b1524d718ac22dbf3d14ed49"],["2020/01/28/Go-Review/pro_order.png","291b84c3f37f17d5a94dce61c7d61939"],["2020/01/29/RPC入门/index.html","d241c0681aab61ce831902dbd57795a7"],["2020/02/03/Docker学习-使用/index.html","5970a495ac1e32a4f92fda0f1a3e0695"],["2020/02/22/go-websocket/index.html","0fd7879b7535892e8df1720f92effc67"],["2020/03/04/排序算法/index.html","488ca77159abae6eb1f8b566bafcb959"],["2020/03/15/go-工具/index.html","407c1462675757be7b0e5e471276b7ea"],["2020/03/20/go-slice/index.html","4b1fff576c9d6486bf3041cf6e08750d"],["2020/03/20/go-slice/slice.png","f5efa78e7746dcde274b81c8492f70f6"],["2020/03/20/go-slice/slice2.png","c654ee0c5c9608f6252debe6d7be0003"],["2020/03/20/go-slice/slice3.png","e161e42db2f256367c1b99a5987016e0"],["2020/04/07/回顾-Go类型系统/index.html","5edad2755db1d02fe83a5b9bda394d25"],["2020/04/15/Go语言标准库-读书笔记-1/index.html","b6013684a4ecacab5fa5e193b5cb3e57"],["2020/06/21/Go语言高级编程学习笔记-01/Actor-model.png","50de9d8b988243201f73e922b985539c"],["2020/06/21/Go语言高级编程学习笔记-01/Go-csp.png","c881e9d0e36b297af49a0d39954a0260"],["2020/06/21/Go语言高级编程学习笔记-01/Go-genemap.png","603ae2166de17292af89709abecd220a"],["2020/06/21/Go语言高级编程学习笔记-01/index.html","c62327af698a8eb95b24c05b1b26f50f"],["2020/06/23/hello-world/gopher-power.png","b870dfb1f53c8e93b8f8bff185a26094"],["2020/06/23/hello-world/index.html","c835b5514fac264d1fb1a140725572ae"],["404.html","52ce1969b283588120a13bd61a6fcab8"],["about/index.html","1566ea7f0e9cc395f8c3802090b3ade3"],["archives/2019/12/index.html","521cff636bfbe90c39e8af46c4206904"],["archives/2019/12/page/2/index.html","25d9d48a8b657d712a5bfa86353ed13a"],["archives/2019/index.html","31414283fd378208863542b208ebba2f"],["archives/2019/page/2/index.html","8063fb3b186634a157823c777bd1468a"],["archives/2020/01/index.html","6bcdc0966048a6ddf64c3d22745ab9ce"],["archives/2020/02/index.html","66ff3b399122c458f2f5edc934ca9e8e"],["archives/2020/03/index.html","499d2ef06a1bd33f9918d14d6c62ef30"],["archives/2020/04/index.html","602143a4888ed85f3bf41540ac6a8b98"],["archives/2020/06/index.html","a1cc8dcb0ee9a5ec853526be7d786747"],["archives/2020/index.html","af1fd4838778fff7d5dd2b39ce693450"],["archives/2020/page/2/index.html","154da777ee1efa73bb0a64fdc55d106e"],["archives/index.html","2a90df09d2c319c6d27072743c21c22b"],["archives/page/2/index.html","6ed53d387ecf028e2f6eb7642f4d15bb"],["archives/page/3/index.html","2c818a0a93ef2096d4fdb031c28d399b"],["categories/chef/index.html","8f13b6a953a27abceece2f0ff22f52ce"],["categories/docker/index.html","d8bf96833ee9306751cc88ede436ab40"],["categories/go/index.html","e0cd3d5a9b4d735b2d93196da7eae12f"],["categories/go/page/2/index.html","2ec0515812262bd58fd09de2fdc3c13a"],["categories/go/page/3/index.html","e351b232c667e580f32b351f0b67fbf4"],["categories/hello/index.html","c99b59952888fe808c0082ca6a14d729"],["categories/index.html","10a4120cf465a6977b9263add188c181"],["css/index.css","c319a198152dfefbc67a99e980417c30"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/404.jpg","2b41c2ed6daf4a0c200e825e774f79b0"],["images/avatar.jpg","807596987d89ca95a49cf77080024d07"],["images/background.jpg","52108f413d6c0a90a417c53f42254a21"],["images/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["images/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["images/gopher.png","cc13b308f0ffa05b9e8374133a214a9f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","8c9b90bd26b2f558e20f1cc8303caa06"],["js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["js/utils.js","f2f712d5d52625b377855945420eea15"],["link/index.html","62d2dac222bc3f29dc3379cb3f61dc32"],["page/2/index.html","b7fbd3b32d8e29959263518e853d6b4c"],["page/3/index.html","96ae66aea815dba257a99a24a2c99e64"],["tags/RPC/index.html","8fd0480d67ff9dd216f50cd1e74d03a2"],["tags/algorithm/index.html","2847e27cbc835977432adcade2622334"],["tags/cgo/index.html","e37c7d8da48bb112136435ba8e8a3de6"],["tags/docker/index.html","285c8cc5ad4d2e21d36837e3ed89553c"],["tags/gRPC/index.html","ecba5b5094b4787c521723fe82c7a51d"],["tags/go-baisc-入门/index.html","528ddd173bbd69921c7c90e22aaecb0a"],["tags/go-basic-函数/index.html","7b0b2608464746fca68cd5e189c78b13"],["tags/go-basic-接口/index.html","d50499f01848f3a8f01dd97def11b7cf"],["tags/go-basic-数据类型/index.html","4019d6caf777e0709c2069901fa629db"],["tags/go-basic-方法/index.html","7b9713b9630d5cfe3901761d106881b5"],["tags/go-basic-程序结构/index.html","5683f3c01d92d26deb010668e5ea13a1"],["tags/go-basic/index.html","26e43a5b7e166e9b38911979354e5e9f"],["tags/go-channel/index.html","371c67a761003ec51e67d4f9c1112158"],["tags/go-error/index.html","600f945f30fca731b570d1317766e50f"],["tags/go-tool/index.html","0287b4709eb2b18a30ebdf282553083a"],["tags/go/index.html","18589c85a0db8e0b2e2802e40f6138bd"],["tags/go/page/2/index.html","0dd937111a47bf4e359b1248caa3c8c5"],["tags/go/page/3/index.html","4c126903533d0c8797d2c5d4d21686fd"],["tags/golamg/index.html","c921a7e26e3c616b0d90786d00b1b130"],["tags/golang/index.html","3919bbbb91813a7fe5077b59c6c1f9f0"],["tags/golang/page/2/index.html","6ca5170c895c5391915a414188c2560c"],["tags/golang/page/3/index.html","c304d9d2fb0172006a9063dad1696382"],["tags/goroutine/index.html","88b4b13d9b5469438b1d91073cbbc2c0"],["tags/index.html","a5f92f16fa21066e441e2f11ebcf69df"],["tags/json/index.html","9534508061a4a53c96b9377cc0a965c9"],["tags/life/index.html","ad3e53fc7cb275c02da52bce5696b0c6"],["tags/reflect/index.html","9d2b9d1b660b23e01555c44fda45bfb6"],["tags/review/index.html","70be6b9650fb127bbf9a70fd3b15d3e2"],["tags/slice/index.html","a489a9ade54c5c7d89f41741de9d3177"],["tags/sort/index.html","daea39fd272e32d0ee500e8f1f5ef881"],["tags/start/index.html","63f42df0740d93ffbed50899dbf9faf5"],["tags/strings/index.html","0cfa7ae55edfa5aba86b91844404080f"],["tags/test/index.html","fb53a0fdfa374317ad59a4347566c912"],["tags/vim/index.html","b27b1621a52386d1dee32a0f2a335806"],["tags/websocket/index.html","23f7d5a1fe9f50147dc61fd21180ca94"],["tags/并发编程/index.html","9ae34b3d58dd5f024d533e30dc9f74b9"],["tags/火锅/index.html","13fc8e19b0c0140d5d75eb27c6e22c1b"],["tags/猪蹄/index.html","317000987594458fa112025cf2334a5e"],["tags/算法/index.html","a1ce4502cfe0e523c7985de8f37a6298"],["tags/面/index.html","5e7b9c13b4bf1ff754391bfabfa3e27a"]];
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







