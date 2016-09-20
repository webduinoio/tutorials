$(function() {
  var $window = $(window),
    $div = $('.content>div'),
    $btn = $('.filter a'),
    $filter = $('.filter'),
    $filterTag;

  hash();

  function hash() {
    $filterTag = location.href.split('#')[1];
    if ($filterTag && $filterTag != '' && $filterTag != 'all') {
      $btn.removeClass('click');
      $('.btn-' + $filterTag).addClass('click');
      $div.hide();
      $('.filter-' + $filterTag).css({
        'display': 'inline-block'
      });
    } else if ($filterTag == 'all') {
      $btn.removeClass('click');
      $('.btn-' + $filterTag).addClass('click');
      $div.css({
        'display': 'inline-block'
      });
    }
    _lazyLoadRefresh();
  }

  $window.on('hashchange', function() {
    hash();
  });

  $window.scroll(function() {
    if ($window.scrollTop() > 0) {
      $filter.addClass('scroll');
    } else {
      $filter.removeClass('scroll');
    }
  });

  $btn.on('click', function() {
    $btn.removeClass('click');
    $(this).addClass('click');
  });

  function _lazyLoadRefresh() {
    $window.scrollTop(1);
    $window.scrollTop(0);
  }

});
