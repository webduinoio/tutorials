$(function(){
	var $menu = $('header .menu'),
			$body = $('body'),
			$closeArea = $('div,footer').not('.slide-menu,.slide-menu div,header .menu'),
			$slideMenu = $('.slide-menu');

	$menu.on('click',_menuToggle);
	$closeArea.on('click',function(){
		$body.removeClass('menuopen');
		$menu.removeClass('menuopen');
		$slideMenu.removeClass('menuopen');
	});

	function _menuToggle(){
		if(!$menu.hasClass('menuopen')){
			$body.addClass('menuopen');
			$menu.addClass('menuopen');
			$slideMenu.addClass('menuopen');

		}
		else{
			$body.removeClass('menuopen');
			$menu.removeClass('menuopen');
			$slideMenu.removeClass('menuopen');
		}
	}

});