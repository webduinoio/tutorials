$(function(){
	var file = location.href.split('/').pop(),
			$window = $(window),
			$pre = $('pre'),
			$youtubeIframe = $('.youtube'),
			$tutorials = $('.tutorials-content'),
			$a = $('.tutorials-content a').not('.pre-next a'),
			$banner = $('.tutorials-content .banner');

	$('a.tutorials').addClass('actived');

	$tutorials.append('<div class="pre-next"><div>'+
			'<div class="pre"></div>'+
			'<div class="next"></div>'+
		'</div></div>'+
		'<div class="others">'+
		'</div>');



	$.getJSON('../json/tutorials.json',function(data){
		var array = $.map(data, function(value, index) {
    	return [value];
		});
		var l = array.length;
		for(var i=0; i<l; i++){
			if(array[i].src==file){
				$banner.append('<img src="../img/tutorials/'+array[i].banner+'">');
				if(i>0 && i<(l-1)){
					$('.pre').append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a href="'+array[i-1].src+'">'+array[i-1].title+'</a>');
					$('.next').append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a href="'+array[i+1].src+'">'+array[i+1].title+'</a>');
				}
				else if(i==0){
					$('.next').append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a href="'+array[1].src+'">'+array[1].title+'</a>');
				}
				else{
					$('.pre').append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a href="'+array[i-1].src+'">'+array[i-1].title+'</a>');
				}
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