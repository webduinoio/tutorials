window.location.href = 'https://webduino.io';
$(function(){function e(){d=c.find("a"),c.append('<div class="bannerMenu"></div>'),s=$(".bannerMenu"),a=l<0?Math.floor(Math.random()*d.length):1*l;for(var e=0;e<d.length;e++)s.append("<i></i>");r=$(".bannerMenu i"),d.eq(a).fadeIn(u),r.eq(a).addClass("bannerSelect"),t=setTimeout(n,f),r.on("click",function(){var e=$(this).index();a!=e&&(clearTimeout(t),a=e,r.removeClass("bannerSelect"),d.not(":eq(b)").fadeOut(u),d.eq(a).fadeIn(u),r.eq(a).addClass("bannerSelect"),t=setTimeout(n,f))})}function n(){r.removeClass("bannerSelect"),a+=1,a>d.length-1&&(a=0),d.not(":eq(b)").fadeOut(u),d.eq(a).fadeIn(u),r.eq(a).addClass("bannerSelect"),t=setTimeout(n,f)}var a,t,d,r,s,i=$(".tutorials-menu .menu-content div"),o=$(window),c=$(".banner").eq(0),f=c.attr("data-speed"),u=c.attr("data-fade-speed"),l=c.attr("data-start"),p={name:"banner"};$.post("https://script.google.com/macros/s/AKfycbyy_tefIpuFp2JTpnCdBAaSHD32J3MdNXNaS2fgDgjyG088kvk/exec",p,function(n){n.forEach(function(e){c.append('<a href="'+e[1]+'" target="'+e[2]+'"><img src="'+e[0]+'"></a>')}),e()}),i.css({height:i.width()/1.5+"px"}),o.resize(function(){i.css({height:i.width()/1.5+"px"})})});