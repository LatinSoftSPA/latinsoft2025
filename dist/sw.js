if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),a={module:{uri:o},exports:t,require:c};s[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-74f2ef77"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bad0yi56.css",revision:null},{url:"assets/index-TbT7NFHR.js",revision:null},{url:"index.html",revision:"12c0fe65fed36f74de144facf9988114"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/192x192.png",revision:"f087dbe78064954241ee7f4d62339c46"},{url:"icons/512x512.png",revision:"d304acdeaa952ba683ffb9bcbeabf933"},{url:"icons/96x96.png",revision:"28898af788127e6330478a600a0145e6"},{url:"icons/maskable-512x512.png",revision:"d304acdeaa952ba683ffb9bcbeabf933"},{url:"manifest.webmanifest",revision:"c0e2b7f51ef1ea6a4efaadfec05ebd5d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/assets\//,new e.CacheFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
