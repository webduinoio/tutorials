$(function(){
	var file = location.href.split('/'),
			$menu = $('header .menu'),
			$body = $('body'),
			$closeArea = $('div,footer').not('.slide-menu,.slide-menu div,header .menu'),
			$slideMenu = $('.slide-menu');

	$slideMenu.append('<div></div><div></div><div></div>');

	var	$slideMenuDiv1 = $('.slide-menu>div').eq(0),
			$slideMenuDiv2 = $('.slide-menu>div').eq(1),
			$slideMenuDiv3 = $('.slide-menu>div').eq(2);

	$.getJSON('../json/tutorials.json',function(data){
		var array = $.map(data, function(value, index) {
    	return [value];
		});
		var l = array.length;
		if(file[file.length-2]!='tutorials'){
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