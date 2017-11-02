$(function() {

  $('a.activity').addClass('actived');

  $('a').on('click',function(){
  	var url = $(this).attr('href');
  	ga('send', 'event', 'Btn20170320', 'Click');
  });

});
