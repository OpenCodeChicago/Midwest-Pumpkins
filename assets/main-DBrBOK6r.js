(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.getElementById("first-featured-item").addEventListener("mouseover",i);document.getElementById("first-featured-item").addEventListener("mouseout",u);function i(){document.getElementById("first-featured-item").style.display="none",document.getElementById("first-featured-item-details").style.display="block"}function u(){document.getElementById("first-featured-item").style.display="block",document.getElementById("first-featured-item-details").style.display="none"}document.getElementById("second-featured-item").addEventListener("mouseover",l);document.getElementById("second-featured-item").addEventListener("mouseout",m);function l(){document.getElementById("second-featured-item").style.display="none",document.getElementById("second-featured-item-details").style.display="block"}function m(){document.getElementById("second-featured-item").style.display="block",document.getElementById("second-featured-item-details").style.display="none"}document.getElementById("third-featured-item").addEventListener("mouseover",c);document.getElementById("third-featured-item").addEventListener("mouseout",a);function c(){document.getElementById("third-featured-item").style.display="none",document.getElementById("third-featured-item-details").style.display="block"}function a(){document.getElementById("third-featured-item").style.display="block",document.getElementById("third-featured-item-details").style.display="none"}document.getElementById("fourth-featured-item").addEventListener("mouseover",f);document.getElementById("fourth-featured-item").addEventListener("mouseout",y);function f(){document.getElementById("fourth-featured-item").style.display="none",document.getElementById("fourth-featured-item-details").style.display="block"}function y(){document.getElementById("fourth-featured-item").style.display="block",document.getElementById("fourth-featured-item-details").style.display="none"}const n=document.getElementById("scrollUpBtn");window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?n.style.display="block":n.style.display="none"};n.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};
