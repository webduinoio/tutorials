$(function(){
	var file = location.href.split('/'),
			jsonURL,
			$window = $(window),
			$header = $('header'),
			$menu = $('header .menu'),
			$mobileMenu = $('header .mobile-menu'),
			$body = $('body'),
			$closeArea = $('div,footer').not('.mobile-menu,.slide-menu div,header .menu'),
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

	$mobileMenu.on('click',_menuToggle);

	function _menuToggle(){
		if(!$mobileMenu.hasClass('menuopen')){
			$menu.addClass('menuopen');
			$mobileMenu.addClass('menuopen');

		}
		else{
			$menu.removeClass('menuopen');
			$mobileMenu.removeClass('menuopen');
		}
	}

});