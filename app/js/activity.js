$(function(){

	var $list = $('.list');

	var time  = new Date(),
		  year  = time.getFullYear(),
		  month = time.getMonth()+1,
		  date  = time.getDate(),
		  hour  = time.getHours()+1;

	var now   = Date.UTC(year,month,date,hour);

	$list.each(function(){

		var t = $(this).find('.time').text().split(' ');
		var d = t[0].split('.');
		var h = t[1].split(':');

		var activitytime = Date.UTC(d[0],d[1],d[2],h[0]);

		if(activitytime<now){
			$(this).detach().appendTo('.old');
		}
		
	});

});