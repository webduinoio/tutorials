$(function(){var n=location.href.split("/").pop(),t=$(window),i=($(".content"),$(".youtube")),e=$(".pricing"),o=$(".pricing-note"),c=$(".banner img"),r=$(".ruten a"),s=n.split(".html")[0]+".html";$.getJSON("../config/config-pricing.json",function(n){n.forEach(function(n){n.url==s&&(o.html(n.pricingNote),c.attr("src",n.banner),r.attr("href",n.rutenUrl),e.html(n.pricing),n.pricing!=n.onSale&&o.html("，價值 "+n.pricing+" 元，優惠只到 2018/4/22 (日) 止，要買要快唷！"))})}),$("a.buy").addClass("actived"),$(".readmore").on("click",function(){$(this).hasClass("open")?$(this).text("閱讀相關內容 ( 點選展開 )").removeClass("open").next("ul").slideUp(300):$(this).text("閱讀相關內容 ( 點選關閉 )").addClass("open").next("ul").slideDown(300)}),$(".btn-know").on("click",function(){$("html,body").not(":animated").animate({scrollTop:$("#need-know").offset().top-60},900)});var a=i.width();i.css({height:9*a/16+"px"}),t.resize(function(){a=i.width(),i.css({height:9*a/16+"px"})})});