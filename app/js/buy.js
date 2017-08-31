$(function() {
  var file = location.href.split('/').pop(),
    $window = $(window),
    $content = $('.content'),
    $youtubeIframe = $('.youtube'),
    $airpaySelect = $('.airpay select'),
    $airpayBtn = $('.airpay button'),
    linkToAirpay;

  var $pricing = $('.pricing'),
    $pricingNote = $('.pricing-note'),
    $banner = $('.banner img'),
    $ruten = $('.ruten a');

  $.getJSON('../config/config-pricing.json', function(c) {
    c.forEach(function(e) {
      if (e.url == file) {
        $pricingNote.html(e.pricingNote);
        $banner.attr('src', e.banner);
        $banner.attr('src', '../img/buy/webduino-promote-201709.jpg');
        //$banner.wrap('<a href="../activity/promote-20170320-20170421.html" title="立馬參加 Webduino 公仔自走車設計大賞"></a>');
        $ruten.attr('href', e.rutenUrl);
        //$pricing.html(e.pricing);
        $pricing.html(e.onSale);
        if (e.pricing != e.onSale) {
          $pricingNote.html('，原價 ' + e.pricing + ' 元，即日起至 9/30 限時優惠');
        }
      }
    });
  });

  $('a.buy').addClass('actived');

  $('.readmore').on('click', function() {
    if ($(this).hasClass('open')) {
      $(this).text('閱讀相關內容 ( 點選展開 )').removeClass('open').next('ul').slideUp(300);
    } else {
      $(this).text('閱讀相關內容 ( 點選關閉 )').addClass('open').next('ul').slideDown(300);
    }
  });

  $('.btn-know').on('click', function() {
    $('html,body').not(':animated').animate({
      'scrollTop': $('#need-know').offset().top - 60
    }, 900);
  });

  var youtubeWidth = $youtubeIframe.width();
  $youtubeIframe.css({
    'height': (youtubeWidth * 9 / 16) + 'px'
  });

  $window.resize(function() {
    youtubeWidth = $youtubeIframe.width();
    $youtubeIframe.css({
      'height': (youtubeWidth * 9 / 16) + 'px'
    });
  });


  linkToAirpay = $airpaySelect.find('option:selected').attr('val');
  $airpaySelect.on('change', function() {
    linkToAirpay = $airpaySelect.find('option:selected').attr('val');
  });
  $airpayBtn.on('click', function() {
    window.open(linkToAirpay, '_blank');
    ga('send', 'event', 'AirPay Btn', 'Button Click', linkToAirpay, 4);
  });

  $('.buy-fun').on('click',function(){
    ga('send','event','2017fun','click');
  });


});
