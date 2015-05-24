$(function(){
	var file = location.href.split('/').pop(),
			$window = $(window),
			$content = $('.content');

	$('a.buy').addClass('actived');

	$content.append('<div class="need-more">'+
		'<h4>瞭解更多產品方案：</h4>'+
		'<div><a href="package-webduino-basic.html">Webduino 開發包 ( 基本款 )</a></div>'+
		'<div><a href="package-webduino-plus.html">Webduino 開發包 ( 威力加強版 )</a></div>'+
		'<div><a href="component-webduino-v1.html">Webduino 開發板 ( 馬克 1 號 )</a></div>'+
		'</div>');

});