window.location.href = 'https://webduino.io';
$(function(){var t=location.href.split("/").pop(),n=$(window),i=($(".content"),$(".youtube")),e=$(".pricing"),o=$(".pricing-note"),r=$(".banner img"),c=$(".ruten-buy"),s=$(".store-buy"),l=t.split(".html")[0]+".html";$.getJSON("../config/config-pricing.json",function(t){t.forEach(function(t){t.url==l&&(o.html(t.pricingNote),r.attr("src",t.banner),c.attr("href",t.rutenUrl),s.attr("href",t.storeUrl),e.html(t.pricing),t.pricing!=t.onSale&&o.html("，價值 "+t.pricing+" 元，優惠只到 2018/4/22 (日) 止，要買要快唷！"))})}),$("a.buy").addClass("actived"),$(".readmore").on("click",function(){$(this).hasClass("open")?$(this).text("閱讀相關內容 ( 點選展開 )").removeClass("open").next("ul").slideUp(300):$(this).text("閱讀相關內容 ( 點選關閉 )").addClass("open").next("ul").slideDown(300)}),$(".btn-know").on("click",function(){$("html,body").not(":animated").animate({scrollTop:$("#need-know").offset().top-60},900)});var a=i.width();i.css({height:9*a/16+"px"}),n.resize(function(){a=i.width(),i.css({height:9*a/16+"px"})})});