$(function(){var e=$(".content div>div").toArray();$.getJSON("config/config-pricing.json",function(r){r.forEach(function(r){e.forEach(function(e){console.log(e);var n=e.querySelector("a"),i=e.querySelector("i");n.getAttribute("href")=="buy/"+r.url&&(r.pricing!=r.onSale?(n.querySelector(".price").innerText="NT$ "+r.pricing,n.querySelector(".onsale").innerText="NT$ "+r.onSale):(n.querySelector(".price").innerText="NT$ "+r.pricing,n.querySelector(".price").style.textDecoration="none",n.querySelector(".price").style.fontSize="18px"),r["new"]&&(i.style.display="inline-block"))})})})});