$(function(){var n,t=location.href.split("/").pop(),i=$(window),e=($(".content"),$(".youtube")),o=$(".airpay select"),a=$(".airpay button"),c=$(".pricing"),r=$(".pricing-note"),l=$(".banner img"),s=$(".ruten a");$.getJSON("../config/config-pricing.json",function(n){n.forEach(function(n){n.url==t&&(r.html(n.pricingNote),l.attr("src",n.banner),s.attr("href",n.rutenUrl),c.html(n.onSale),""==n.pricingNote&&r.html("，原價 "+n.pricing+" 元，即日起至 4/30 限時優惠"))})}),$("a.buy").addClass("actived"),$(".readmore").on("click",function(){$(this).hasClass("open")?$(this).text("閱讀相關內容 ( 點選展開 )").removeClass("open").next("ul").slideUp(300):$(this).text("閱讀相關內容 ( 點選關閉 )").addClass("open").next("ul").slideDown(300)}),$(".btn-know").on("click",function(){$("html,body").not(":animated").animate({scrollTop:$("#need-know").offset().top-60},900)});var p=e.width();e.css({height:9*p/16+"px"}),i.resize(function(){p=e.width(),e.css({height:9*p/16+"px"})}),n=o.find("option:selected").attr("val"),o.on("change",function(){n=o.find("option:selected").attr("val")}),a.on("click",function(){window.open(n,"_blank"),ga("send","event","AirPay Btn","Button Click",n,4)})});