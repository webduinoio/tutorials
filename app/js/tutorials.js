$(function(){
	var file = location.href.split('/').pop(),
			$window = $(window),
			$document = $(document),
			$pre = $('pre'),
			$youtubeIframe = $('.youtube'),
			$tutorials = $('.tutorials-content'),
			$a = $('.tutorials-content a').not('.pre-next a'),
			$banner = $('.tutorials-content .banner');

	$('a.tutorials').addClass('actived');

	$tutorials.append(
			'<a class="arrow arrow-r"></a>'+
			'<a class="arrow arrow-l"></a>'+
			'<div class="pre-next"><div>'+
			'<div class="pre"></div>'+
			'<div class="next"></div>'+
		'</div></div>'+
		'<div class="others">'+
		'</div>');

	var $arrow = $('.arrow'),
			$ar = $('.arrow-r'),
			$al = $('.arrow-l');

	if($window.width()>800){
		_arrow_appear();
		$window.scroll(_arrow_appear);
	}else{
		$arrow.hide();
	}

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
					$ar.attr('href',array[i+1].src).attr('title','下一篇：'+array[i+1].title);
					$al.attr('href',array[i-1].src).attr('title','上一篇：'+array[i-1].title);
				}
				else if(i==0){
					$('.next').append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a href="'+array[1].src+'">'+array[1].title+'</a>');
					$al.css({'left':'-100px'});
					$ar.attr('href',array[1].src).attr('title','下一篇：'+array[i+1].title);
				}
				else{
					$('.pre').append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a href="'+array[i-1].src+'">'+array[i-1].title+'</a>');
					$al.attr('href',array[i-1].src).attr('title','上一篇：'+array[i-1].title);
					$ar.css({'right':'-100px'});
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
		if($window.width()>800){
			_arrow_appear();
		}else{
			$arrow.hide();
		}
	});

	$('.tutorials-content a').on('click',function(){
		var linkurl = $(this).attr('href');
		ga('send', 'event', 'tutorials', 'a click', linkurl, 4);
	});

	function _arrow_appear(){
		if($window.scrollTop() > $banner.height() && $window.scrollTop() < ($document.height()-$window.height()-600)){
			$arrow.show();
		}else{
			$arrow.hide();
		}
	}

});