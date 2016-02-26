$(function(){
  var $window = $(window),
  $div = $('.content>div'),
  $btn = $('.filter div'),
  $filter = $('.filter'),
  $new = $('.filter-new'),
  $info = $('.filter-info'),
  $component = $('.filter-component'),
  $sensor = $('.filter-sensor'),
  $example = $('.filter-example'),
  $btnAll = $('.btn-all'),
  $btnNew = $('.btn-new'),
  $btnInfo = $('.btn-info'),
  $btnComponent = $('.btn-component'),
  $btnSensor = $('.btn-sensor'),
  $btnExample = $('.btn-example');

  $window.scroll(function(){
    if($window.scrollTop() > 0){
      $filter.addClass('scroll'); 
    }else{
      $filter.removeClass('scroll');
    }
  });

  $btn.on('click',function(){
  	$btn.removeClass('click');
  	$(this).addClass('click');
  });

  $btnAll.on('click',function(){
  	$div.show();
  	_lazyLoadRefresh();
  });

  $btnNew.on('click',function(){
  	$div.hide();
  	$new.show();
  	_lazyLoadRefresh();
  });

  $btnInfo.on('click',function(){
  	$div.hide();
  	$info.show();
  	_lazyLoadRefresh();
  });

  $btnComponent.on('click',function(){
  	$div.hide();
  	$component.show();
  	_lazyLoadRefresh();
  });

  $btnSensor.on('click',function(){
  	$div.hide();
  	$sensor.show();
  	_lazyLoadRefresh();
  });

  $btnExample.on('click',function(){
  	$div.hide();
  	$example.show();
  	_lazyLoadRefresh();
  });

  function _lazyLoadRefresh(){
  	$window.scrollTop(1);
  	$window.scrollTop(0);
  }

});