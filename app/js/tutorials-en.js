$(function() {
  var file = location.href.split('/').pop(),
    $window = $(window),
    $document = $(document),
    $pre = $('pre'),
    $youtubeIframe = $('.youtube'),
    $tutorials = $('.tutorials-content'),
    $a = $('.tutorials-content a').not('.pre-next a, .arrow'),
    $banner = $('.tutorials-content .banner'),
    sh;

  $('a.tutorials').addClass('actived');

  var $arrow = $('.arrow'),
    $ar = $('.arrow-r'),
    $al = $('.arrow-l');

  $.getJSON('../json/tutorials-en.json', function(data) {
    var array = $.map(data, function(value, index) {
      return [value];
    });
    var l = array.length;
    for (var i = 0; i < l; i++) {
      if (array[i].src == file) {
        $banner.append('<img src="../../img/tutorials/' + array[i].banner + '">');
        if (i > 0 && i < (l - 1)) {
          $('.pre').append('<i class="fa fa-hand-o-left"></i> Previous<br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[i - 1].src + '">' + array[i - 1].title + '</a>');
          $('.next').append('Next <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[i + 1].src + '">' + array[i + 1].title + '</a>');
          $ar.attr('href', array[i + 1].src).attr('title', 'Next: ' + array[i + 1].title);
          $al.attr('href', array[i - 1].src).attr('title', 'Previous: ' + array[i - 1].title);
        } else if (i == 0) {
          $('.next').append('Next <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[1].src + '">' + array[1].title + '</a>');
          $al.css({
            'left': '-100px'
          });
          $ar.attr('href', array[1].src).attr('title', 'Next: ' + array[i + 1].title);
        } else {
          $('.pre').append('<i class="fa fa-hand-o-left"></i> Previous<br/><a class="pre-next-button" data-name="pre-next-button" href="' + array[i - 1].src + '">' + array[i - 1].title + '</a>');
          $al.attr('href', array[i - 1].src).attr('title', 'Previous: ' + array[i - 1].title);
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
  	if($window.scrollTop()>(sh-$window.height()-300)){
  		if($('.others, .note-chicken').hasClass('note-open')){

  		}else{
  			$('.others, .note-chicken').addClass('note-open');
  			_gaTrack('show note','show',file);
  		}
			$('.note-close-btn').on('click',function(){
	  		if($('.others, .note-chicken').hasClass('note-close')){

	  		}else{
	  			_gaTrack('show note','close',file);
					$('.others, .note-chicken').addClass('note-close');
				}
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
