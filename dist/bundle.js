(()=>{var e={267:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=[lottie.loadAnimation({container:document.getElementById("lottie-animation-1"),renderer:"svg",loop:!1,autoplay:!1,path:"lottie/sourcing.json"}),lottie.loadAnimation({container:document.getElementById("lottie-animation-2"),renderer:"svg",loop:!1,autoplay:!1,path:"lottie/communication.json"}),lottie.loadAnimation({container:document.getElementById("lottie-animation-3"),renderer:"svg",loop:!1,autoplay:!1,path:"lottie/growth.json"}),lottie.loadAnimation({container:document.getElementById("lottie-animation-4"),renderer:"svg",loop:!1,autoplay:!1,path:"lottie/presence.json"})];let t=0;function o(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){if(t<e.length){const o=e[t];o.play(),o.addEventListener("complete",(()=>{t++,2===t?setTimeout((()=>{t<e.length&&n()}),0):t<e.length&&n()}),{once:!0})}}!function(){const e=document.getElementById("strengths");o(e)?n():window.addEventListener("scroll",(function r(){o(e)&&0===t&&(n(),window.removeEventListener("scroll",r))}))}(),e.forEach(((o,n)=>{let r=!0;const i=document.querySelector(`.strengths-${n+1}`);i&&(i.addEventListener("mouseover",(()=>{r&&t>=e.length&&(o.goToAndPlay(0,!0),r=!1)})),i.addEventListener("mouseleave",(()=>{r=!0})))}))}))},788:()=>{document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector("nav .material-symbols-outlined:first-of-type"),t=document.querySelector("nav .material-symbols-outlined:nth-of-type(2)"),o=document.querySelector("nav ul");function n(){o.classList.toggle("show"),e.style.display=o.classList.contains("show")?"none":"block",t.style.display=o.classList.contains("show")?"block":"none"}e.addEventListener("click",n),t.addEventListener("click",n),window.addEventListener("scroll",(function(){o.classList.contains("show")&&n()}))}))},120:()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll('[role="tab"]'),t=document.querySelectorAll('[role="tabpanel"]');t.forEach(((e,t)=>{0!==t&&e.classList.add("hidden")})),e.forEach((o=>{o.addEventListener("click",(()=>{t.forEach((e=>e.classList.add("hidden"))),e.forEach((e=>e.classList.remove("border-red-900","text-red-900"))),e.forEach((e=>e.classList.add("border-transparent","text-gray-500","hover:border-gray-300","hover:text-gray-700"))),o.classList.add("border-red-900","text-red-900"),o.classList.remove("border-transparent","text-gray-500","hover:border-gray-300","hover:text-gray-700"),document.getElementById(o.getAttribute("aria-controls")).classList.remove("hidden")}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".scroll-snap"),t=document.querySelectorAll('[role="tab"]');t.forEach((o=>{o.addEventListener("click",(()=>{const n=e.offsetWidth;o.getBoundingClientRect(),e.getBoundingClientRect(),o===t[t.length-1]?e.scrollTo({left:e.scrollWidth-n,behavior:"smooth"}):o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}))}))}))},520:()=>{document.addEventListener("DOMContentLoaded",(function(){if(!document.getElementById("mapid"))return void console.error("Map container not found");let e=L.map("mapid",{minZoom:15,maxZoom:19}).setView([51.51219917380306,-.08475550242526746],15);L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors, © CARTO",errorTileUrl:"path/to/error-tile.png"}).addTo(e),L.marker([51.51219917380306,-.08475550242526746]).addTo(e).bindPopup("MARCOSO London"),e.on("zoom",(function(){e.getZoom()<15&&e.setZoom(15)})),e.on("load",(function(){console.log("Map fully loaded")})),setTimeout((function(){e.invalidateSize()}),500)}))},476:()=>{const e=document.querySelector("header");window.addEventListener("scroll",(function(){window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")}))},80:()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector(this.getAttribute("href"));t&&("#contact-us"===this.getAttribute("href")?document.querySelector(".contact-us-content").scrollIntoView({behavior:"smooth",block:"start"}):"#our-locations"===this.getAttribute("href")?document.querySelector(".our-locations").scrollIntoView({behavior:"smooth",block:"start"}):"#hero"===this.getAttribute("href")?document.querySelector(".hero").scrollIntoView({behavior:"smooth",block:"start"}):"#about-us"===this.getAttribute("href")?document.querySelector(".about-us-content").scrollIntoView({behavior:"smooth",block:"start"}):t.scrollIntoView({behavior:"smooth",block:"start"}))}))}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(267),o(788),o(120),o(520),o(476),o(80)})()})();