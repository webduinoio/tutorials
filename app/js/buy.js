$(function(){
	var file = location.href.split('/').pop(),
			$window = $(window),
			$content = $('.content'),
			$youtubeIframe = $('.youtube'),
			$airpaySelect = $('.airpay select'),
			$airpayBtn = $('.airpay button'),
			linkToAirpay;

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

	var youtubeWidth = $youtubeIframe.width();
	$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});

	$window.resize(function(){
			youtubeWidth = $youtubeIframe.width();
			$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});
	});

	
	linkToAirpay = $airpaySelect.find('option:selected').attr('val');
	$airpaySelect.on('change',function(){
		linkToAirpay = $airpaySelect.find('option:selected').attr('val');
	});
	$airpayBtn.on('click',function(){
		window.open(linkToAirpay,'_blank');
		ga('send', 'event', 'AirPay Btn', 'Button Click', linkToAirpay, 4);
	});


});