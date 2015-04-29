$(function(){
	var file = location.href.split('/').pop(),
			$window = $(window),
			$pre = $('pre'),
			$youtubeIframe = $('.youtube'),
			$a = $('.tutorials a');
			$banner = $('.tutorials .banner');

	$.getJSON('../json/tutorials.json',function(data){
		var array = $.map(data, function(value, index) {
    	return [value];
		});
		var l = array.length;
		for(var i=0; i<l; i++){
			if(array[i].src==file){
				$banner.append('<img src="../img/tutorials/'+array[i].banner+'">');
			}
		}
	});

	$pre.addClass('prettyprint');
	
	$a.attr('target','_blank');

	var youtubeWidth = $youtubeIframe.width();
	$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});

	$window.resize(function(){
			youtubeWidth = $youtubeIframe.width();
			$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});
	});

});