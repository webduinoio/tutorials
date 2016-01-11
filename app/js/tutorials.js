$(function() {
  var file = location.href.split('/').pop(),
    $window = $(window),
    $document = $(document),
    $pre = $('pre'),
    $youtubeIframe = $('.youtube'),
    $tutorials = $('.tutorials-content'),
    $a = $('.tutorials-content a').not('.pre-next a'),
    $banner = $('.tutorials-content .banner'),
    sh;

  $('a.tutorials').addClass('actived');

  $tutorials.append(
    '<a class="arrow arrow-r pre-next-button" data-name="pre-next-arrow"></a>' +
    '<a class="arrow arrow-l pre-next-button" data-name="pre-next-arrow"></a>' +
    '<div class="pre-next"><div>' +
    '		<div class="pre"></div>' +
    '		<div class="next"></div>' +
    '</div></div>'+
    '<div class="note-chicken"></div>'+
    '<div class="others">' +
    '		<i class="fa fa-times note-close-btn"></i>'+
    '		<div class="others-link-div">'+
    '			<h5>如果您想了解更多，可以參考：</h5>'+
    '			<div class="others-link otehrs-read">'+
    '				1. 完整教學範例：<a href="https://webduino.io/tutorials.html" data-name="noteLink">webduino.io/tutorials.html</a><br/>'+
    '				2. Blockly 教學：<a href="https://goo.gl/Y8sRkl" data-name="noteLink">https://goo.gl/Y8sRkl</a>'+
    '			</div>'+
    '			<h5>如果您想認識 Webduino 產品，可以參考：</h5>'+
    '			<div class="others-link otehrs-buy">'+
    '				1. 產品總覽：<a href="https://webduino.io/buy.html" target="_blank" data-name="noteLink">webduino.io/buy.html <i class="fa fa-share-square-o"></i></a><br/>'+
    '				2. 露天賣場：<a href="http://goo.gl/0Dj9ip" target="_blank" data-name="noteLink">http://goo.gl/0Dj9ip <i class="fa fa-share-square-o"></i></a>'+
    '			</div>'+
    '		</div>'+
    '</div>');

  var $arrow = $('.arrow'),
    $ar = $('.arrow-r'),
    $al = $('.arrow-l');

  $.getJSON('../json/tutorials.json', function(data) {
    var array = $.map(data, function(value, index) {
      return [value];
    });
    var l = array.length;
    for (var i = 0; i < l; i++) {
      if (array[i].src == file) {
        $banner.append('<img src="../img/tutorials/' + array[i].banner + '">');
        if (i > 0 && i < (l - 1)) {
          $('.pre').append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[i - 1].src + '">' + array[i - 1].title + '</a>');
          $('.next').append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[i + 1].src + '">' + array[i + 1].title + '</a>');
          $ar.attr('href', array[i + 1].src).attr('title', '下一篇：' + array[i + 1].title);
          $al.attr('href', array[i - 1].src).attr('title', '上一篇：' + array[i - 1].title);
        } else if (i == 0) {
          $('.next').append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[1].src + '">' + array[1].title + '</a>');
          $al.css({
            'left': '-100px'
          });
          $ar.attr('href', array[1].src).attr('title', '下一篇：' + array[i + 1].title);
        } else {
          $('.pre').append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[i - 1].src + '">' + array[i - 1].title + '</a>');
          $al.attr('href', array[i - 1].src).attr('title', '上一篇：' + array[i - 1].title);
          $ar.css({
            'right': '-100px'
          });
        }
      }
    }

    var $bannerImg = $('.tutorials-content .banner img');

		$bannerImg.load(function(){
			sh =  $('.pre-next').offset().top;
		  if ($window.width() > 800) {
		    _arrow_appear();
		    _showNote();
		    $window.scroll(_arrow_appear);
		    $window.scroll(_showNote);
		  } else {
		    $arrow.hide();
		  }
		});

    var $pnBtn = $('.pre-next-button');
    $pnBtn.on('click', function() {
      var linkUrl = $(this).attr('href');
      var name = $(this).attr('data-name');
      if (name == '' || !name) {
        name = file[file.length - 1];
      }
      _gaTrack(name, 'a click', linkUrl);
    });

    $pnBtn.on('mouseenter', function() {
      var linkUrl = $(this).attr('href');
      var name = $(this).attr('data-name');
      if (name == '' || !name) {
        name = file[file.length - 1];
      }
      _gaTrack(name, 'a hover', linkUrl);
    });

  });

  $pre.addClass('prettyprint');

  $a.attr('target', '_blank');

  var youtubeWidth = $youtubeIframe.width();
  $youtubeIframe.css({
    'height': (youtubeWidth * 9 / 16) + 'px'
  });

  $window.resize(function() {
    youtubeWidth = $youtubeIframe.width();
    $youtubeIframe.css({
      'height': (youtubeWidth * 9 / 16) + 'px'
    });
    if ($window.width() > 800) {
      _arrow_appear();
    } else {
      $arrow.hide();
    }
  });

  function _showNote(){
  	_gaTrack('show note','show',file);
  	if($window.scrollTop()>(sh-$window.height()-200)){
  		$('.others, .note-chicken').addClass('note-open');
			$('.note-close-btn').on('click',function(){
  			_gaTrack('show note','close',file);
				$('.others, .note-chicken').addClass('note-close');
			});
  	}
  }

  function _arrow_appear() {
    if ($window.scrollTop() > $banner.height() && $window.scrollTop() < (sh - $window.height()+200)) {
      $arrow.show();
    } else {
      $arrow.hide();
    }
  }

  function _gaTrack(e, d, l) {
    ga('send', 'event', e, d, l);
  }

});
