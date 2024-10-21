(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".card-container"),s=document.querySelectorAll(".dot");let r=0;const o=s.length;function t(){return window.innerWidth<=767?100/12:window.innerWidth<=1023?100/6:100/4}function n(l){const a=t();e.style.transform=`translateX(-${l*a}%)`,s.forEach(i=>i.classList.remove("active")),s[l].classList.add("active"),r=l}s.forEach((l,a)=>{l.addEventListener("click",()=>{n(a),clearInterval(d),c()})});function c(){return setInterval(()=>{r=(r+1)%o,n(r)},5e3)}let d=c();e.addEventListener("mouseenter",()=>{clearInterval(d)}),e.addEventListener("mouseleave",()=>{d=c()});let f;window.addEventListener("resize",()=>{clearTimeout(f),f=setTimeout(()=>{n(r)},250)})});function B(e){Swal.fire({icon:"success",title:e,showConfirmButton:!1,timer:2e3})}document.getElementById("reviewForm").addEventListener("submit",function(e){e.preventDefault(),B("Thank you for your review!"),document.getElementById("review-modal").classList.add("hidden")});const S=document.getElementById("open-modal"),I=document.getElementById("close-modal"),v=document.getElementById("review-modal");S.addEventListener("click",()=>{v.classList.remove("hidden")});I.addEventListener("click",()=>{v.classList.add("hidden")});window.addEventListener("click",e=>{e.target===v&&v.classList.add("hidden")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".card"),s=document.querySelectorAll(".dot"),r=50;let o=3,t=0,n;function c(){const i=window.innerWidth;i>=1024?o=3:i>=768?o=2:o=1,t=0,d(),a()}e.forEach((i,h)=>{i.querySelector("p").innerText.length<r,i.style.display="none"});function d(){const i=t*o,h=i+o;e.forEach((p,E)=>{E>=i&&E<h?p.style.display="block":p.style.display="none"}),f()}function f(){s.forEach(i=>i.classList.remove("active")),t<s.length&&s[t].classList.add("active")}document.getElementById("prevBtn").addEventListener("click",function(){t>0&&(t--,d(),a())}),document.getElementById("nextBtn").addEventListener("click",function(){(t+1)*o<e.length&&(t++,d(),a())});function l(){n=setInterval(()=>{(t+1)*o<e.length?t++:t=0,d()},4e3)}function a(){clearInterval(n),l()}window.addEventListener("resize",c),c(),l()});document.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("subscribeModal"),s=document.getElementById("myBtn"),r=document.getElementById("close-modal");console.log(r),s.addEventListener("click",()=>{e.classList.add("show"),console.log("Modal opened")}),r.addEventListener("click",()=>{e.classList.remove("show"),console.log("Modal closed via X button")}),window.onclick=function(o){o.target==e&&e.classList.remove("show")},document.getElementById("subscribeForm").addEventListener("submit",function(o){o.preventDefault(),Swal.fire({icon:"success",title:"Thank you for subscribing! Stay tuned for updates!",showConfirmButton:!1,timer:2e3}),e.classList.remove("show")})});const u=document.querySelector(".burger-menu__open"),g=document.querySelector(".burger-menu__close"),y=document.querySelector(".burger-menu"),M=[...document.querySelectorAll(".burger-menu li a")],w=window.matchMedia("(width >= 75rem)");document.querySelector("main");document.querySelector("footer");function k(){u.setAttribute("aria-expanded","true"),y.classList.add("js-mobile-nav-open"),g.focus()}function m(){u.setAttribute("aria-expanded","false"),y.classList.remove("js-mobile-nav-open"),u.focus()}function b(e){e.matches&&m()}M.forEach(e=>{e.addEventListener("click",()=>{m(),e.focus()})});document.addEventListener("click",e=>{y.classList.contains("js-mobile-nav-open")&&!y.contains(e.target)&&!u.contains(e.target)&&m()});document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key===27)&&(u.focus(),m())});b(w);w.addEventListener("change",b);u.addEventListener("click",k);g.addEventListener("click",m);const L=document.getElementById("scrollUpBtn");window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?L.style.display="block":L.style.display="none"};L.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};
