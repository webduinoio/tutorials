$(function(){
	var file = location.href.split('/').pop(),
			$window = $(window),
			$content = $('.content');

	$('a.buy').addClass('actived');

	$('.readmore').on('click',function(){
		if($(this).hasClass('open')){
			$(this).text('閱讀相關內容 ( 點選展開 )').removeClass('open').next('ul').slideUp(300);
		}
		else{
			$(this).text('閱讀相關內容 ( 點選關閉 )').addClass('open').next('ul').slideDown(300);
		}
	});

	$('.btn-know').on('click',function(){
		console.log('a');
		$('html,body').not(':animated').animate({
      'scrollTop': $('#need-know').offset().top - 60
    }, 900);
	});

});