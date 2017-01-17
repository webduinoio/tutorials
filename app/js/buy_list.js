$(function() {
  var $d = $('.content div>div').toArray();
  $.getJSON('config/config-pricing.json', function(c) {
    c.forEach(function(d) {
      $d.forEach(function(e) {
      	var a = e.querySelector('a');
      	var i = e.querySelector('i');
        if (a.getAttribute('href') == 'buy/' + d.url) {
          if (d.pricing != d.onSale) {
            a.querySelector('.price').innerText = 'NT$ '+d.pricing;
            a.querySelector('.onsale').innerText = 'NT$ '+d.onSale;
          } else {
            a.querySelector('.price').innerText = 'NT$ '+d.pricing;
            a.querySelector('.price').style.textDecoration = 'none';
            a.querySelector('.price').style.fontSize = '18px';
          }
	        if(d.new){
	        	i.style.display = 'inline-block';
	        }
        }
      });
    });
  });
});
