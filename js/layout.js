$(function(){function e(){i.hasClass("menuopen")?(d.removeClass("menuopen"),i.removeClass("menuopen")):(d.addClass("menuopen"),i.addClass("menuopen"))}{var o,a=location.href.split("/"),n=a[a.length-1].split("."),s=$(window),l=$("header"),d=$("header .menu"),i=$("header .mobile-menu");$("body"),$("div,footer").not(".mobile-menu,.slide-menu div,header .menu"),$(".slide-menu")}$a=$("a"),console.log("%c【 歡迎加入 Webduino Facebook 粉絲團，獲得更多精彩資訊與限時優惠！ 】\n【 粉絲團：https://www.facebook.com/webduino/ 】","color:#f00; font-size:20px;"),$("header .menu a").removeClass("actived"),$("img.lazy")&&$("img.lazy").lazyload(),"index"==n[0]||""==n[0]?(o="json/tutorials.json",$("a.index").addClass("actived")):(o="../json/tutorials.json",$("a."+n[0]).addClass("actived")),s.scroll(function(){s.scrollTop()>0?l.addClass("scroll"):l.removeClass("scroll")}),i.on("click",e)});