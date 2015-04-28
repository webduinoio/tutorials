$(function(){
	var $window = $(window),
			$pre = $('pre'),
			$youtubeIframe = $('.youtube');

	$pre.addClass('prettyprint');
	
	var youtubeWidth = $youtubeIframe.width();
	$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});

	$window.resize(function(){
			youtubeWidth = $youtubeIframe.width();
			$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});
	});

});