$(function(){
	var $box = $('.tutorials-menu .content div'),
			$window = $(window);

	$box.css({
		'height':$box.width()/1.5+'px'
	});

	$window.resize(function(){
		$box.css({
			'height':$box.width()/1.5+'px'
		});
	});

});