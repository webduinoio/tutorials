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