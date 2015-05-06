$(function(){
	var file = location.href.split('/'),
			jsonURL,
			$window = $(window),
			$header = $('header'),
			$menu = $('header .menu'),
			$body = $('body'),
			$closeArea = $('div,footer').not('.slide-menu,.slide-menu div,header .menu'),
			$slideMenu = $('.slide-menu');

	if(file[file.length-1]=='index.html'){
		jsonURL='json/tutorials.json'
	}else{
		jsonURL='../json/tutorials.json'
	}

	$window.scroll(function(){
		if($window.scrollTop() > 0){
			$header.addClass('scroll');
		}else{
			$header.removeClass('scroll');
		}
	});

	$slideMenu.append('<div></div><div></div><div></div>');

	var	$slideMenuDiv1 = $('.slide-menu>div').eq(0),
			$slideMenuDiv2 = $('.slide-menu>div').eq(1),
			$slideMenuDiv3 = $('.slide-menu>div').eq(2);

	$.getJSON(jsonURL,function(data){
		var array = $.map(data, function(value, index) {
    	return [value];
		});
		var l = array.length;
		if(file[file.length-1]=='index.html'){
			$slideMenuDiv1.append('<a href="index.html">回首頁</a>');
			for(var i=(l-2); i<l; i++){
				$slideMenuDiv2.append('<div>'+
					'<a href="tutorials/'+array[i].src+'">'+array[i].title+'</a></div>'
					);
			}
			for(var i=0; i<l-2; i++){
				$slideMenuDiv3.append('<div>'+
					'<a href="tutorials/'+array[i].src+'">'+array[i].title+'</a></div>'
					);
			}
		}
		else{
			$slideMenuDiv1.append('<a href="../index.html">回首頁</a>');
			for(var i=(l-2); i<l; i++){
				$slideMenuDiv2.append('<div>'+
					'<a href="'+array[i].src+'">'+array[i].title+'</a></div>'
					);
			}
			for(var i=0; i<l-2; i++){
				$slideMenuDiv3.append('<div>'+
					'<a href="'+array[i].src+'">'+array[i].title+'</a></div>'
					);
			}
		}
	});

	$menu.on('click',_menuToggle);
	$closeArea.on('click',function(){
		//$body.removeClass('menuopen');
		$header.removeClass('menuopen');
		$menu.removeClass('menuopen');
		$slideMenu.removeClass('menuopen');
	});

	function _menuToggle(){
		if(!$menu.hasClass('menuopen')){
			//$body.addClass('menuopen');
			$header.addClass('menuopen');
			$menu.addClass('menuopen');
			$slideMenu.addClass('menuopen');

		}
		else{
			//$body.removeClass('menuopen');
			$header.removeClass('menuopen');
			$menu.removeClass('menuopen');
			$slideMenu.removeClass('menuopen');
		}
	}

});