$(function() {
  var $document = $(document),
    $window = $(window);

  if ($('.info-area div div') && $('.tutorials-area div div')) {

    var $infoImg = $('.info-area div div'),
      $tutorialsImg = $('.tutorials-area div div');

    $infoImg.each(function() {
      $(this).css({
        'height': $(this).width() * 2 / 3 + 'px'
      });
      var imgLoad = $(this).attr('data-src');
      var imgSrc = $(this).find('img').attr('src');
      $(this).find('img').attr('src', 'img/tutorials/' + imgLoad);
      $(this).css({
        'height': 'auto'
      });
      $(this).find('img').load(function() {
        $(this).css({
          'opacity': '1'
        });
      });
    });

    $tutorialsImg.each(function() {
      $(this).css({
        'height': $(this).width() * 2 / 3 + 'px'
      });
    });


    $window.scroll(function() {

      $tutorialsImg.each(function() {
        $(this).css({
          'height': $(this).width() * 2 / 3 + 'px'
        });
        var imgLoad = $(this).attr('data-src');
        var imgSrc = $(this).find('img').attr('src');
        if ($(this).offset().top < ($window.height() - 150 + $window.scrollTop()) && !imgSrc) {
          $(this).find('img').attr('src', 'img/tutorials/' + imgLoad);
          $(this).find('img').load(function() {
            $(this).css({
              'opacity': '1'
            });
            $(this).parent('div').css({
            	'height': 'auto'
          	});
          });
        }
      });

    });

  }

  if($('.list')){

    var $list = $('.list div');

    $list.each(function() {
    	console.log($(this).width());
      $(this).css({
        'height': $(this).width() * 2 / 3 + 'px'
      });
      var imgLoad = $(this).attr('data-src');
      var imgSrc = $(this).find('img').attr('src');
      if ($(this).offset().top < ($window.height() - $(this).offset().top + 150) && !imgSrc) {
        $(this).find('img').attr('src', 'img/activity/' + imgLoad);
        $(this).css({
          'height': 'auto'
        });
        $(this).find('img').load(function() {
          $(this).css({
            'opacity': '1'
          });
        });
      }
    });

    $window.scroll(function() {

      $list.each(function() {
        var imgLoad = $(this).attr('data-src');
        var imgSrc = $(this).find('img').attr('src');
        if ($(this).offset().top < ($window.height() - 250 + $window.scrollTop()) && !imgSrc) {
          $(this).find('img').attr('src', 'img/activity/' + imgLoad);
          $(this).css({
            'height': 'auto'
          });
          $(this).find('img').load(function() {
            $(this).css({
              'opacity': '1'
            });
          });
        }
      });
    });
  }

});
