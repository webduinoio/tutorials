$(function(){function t(){o.scrollTop()>n-o.height()-300&&($(".others, .note-chicken").hasClass("note-open")||($(".others, .note-chicken").addClass("note-open"),a("show note","show",r)),$(".note-close-btn").on("click",function(){$(".others, .note-chicken").hasClass("note-close")||(a("show note","close",r),$(".others, .note-chicken").addClass("note-close"))}))}function e(){o.scrollTop()>h.height()&&o.scrollTop()<n-o.height()+200?d.show():d.hide()}function a(t,e,a){ga("send","event",t,e,a)}var n,r=location.href.split("/").pop(),o=$(window),i=($(document),$("pre")),s=$(".youtube"),l=($(".tutorials-content"),$(".tutorials-content h1")),c=$(".tutorials-content a").not(".pre-next a, .arrow"),h=$(".tutorials-content .banner");l.prepend('<div>Webduino 教學網站即將上線，本篇文章也有新的版本供您參考，趕快點選「<a class="new-article" target="_blank"></a>」閱讀吧！如果您想知道我們還提供了哪些新教材，可以前往：<a href="http://tutorials.webduino.io" target="_blank">Webduino 學習手冊</a> 了解更多資訊。</div>'),$(".pre-next").prepend('<div>Webduino 教學網站即將上線，本篇文章也有新的版本供您參考，趕快點選「<a class="new-article" target="_blank"></a>」閱讀吧！如果您想知道我們還提供了哪些新教材，可以前往：<a href="http://tutorials.webduino.io" target="_blank">Webduino 學習手冊</a> 了解更多資訊。</div>'),$.getJSON("../config/new-articles.json",function(t){t.forEach(function(t){t.old==r&&$(".new-article").text(t.name).attr("href","http://tutorials.webduino.io/zh-tw/docs/"+t["new"])})}),$("a.tutorials").addClass("actived");var d=$(".arrow"),p=$(".arrow-r"),u=$(".arrow-l");$.getJSON("../json/tutorials.json",function(i){for(var s=$.map(i,function(t,e){return[t]}),l=s.length,c=0;l>c;c++)s[c].src==r&&(h.append('<img src="../img/tutorials/'+s[c].banner+'">'),c>0&&l-1>c?($(".pre").append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a class="pre-next-button" data-name="pre-next-button" href="'+s[c-1].src+'">'+s[c-1].title+"</a>"),$(".next").append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="'+s[c+1].src+'">'+s[c+1].title+"</a>"),p.attr("href",s[c+1].src).attr("title","下一篇："+s[c+1].title),u.attr("href",s[c-1].src).attr("title","上一篇："+s[c-1].title)):0==c?($(".next").append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="'+s[1].src+'">'+s[1].title+"</a>"),u.css({left:"-100px"}),p.attr("href",s[1].src).attr("title","下一篇："+s[c+1].title)):($(".pre").append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a class="pre-next-button" data-name="pre-next-button" href="'+s[c-1].src+'">'+s[c-1].title+"</a>"),u.attr("href",s[c-1].src).attr("title","上一篇："+s[c-1].title),p.css({right:"-100px"})));var f=$(".tutorials-content .banner img");f.load(function(){n=$(".pre-next").offset().top,o.width()>800?(e(),t(),o.scroll(e),o.scroll(t)):d.hide()});var b=$(".pre-next-button");b.on("click",function(){var t=$(this).attr("href"),e=$(this).attr("data-name");""!=e&&e||(e=r[r.length-1]),a(e,"a click",t)}),b.on("mouseenter",function(){var t=$(this).attr("href"),e=$(this).attr("data-name");""!=e&&e||(e=r[r.length-1]),a(e,"a hover",t)})}),i.addClass("prettyprint"),c.attr("target","_blank");var f=s.width();s.css({height:9*f/16+"px"}),o.resize(function(){f=s.width(),s.css({height:9*f/16+"px"}),o.width()>800?e():d.hide()})});