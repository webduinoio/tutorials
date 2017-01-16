$(function() {
  var $a = $('.content div div a').toArray();
  $.getJSON('js/config-pricing.json', function(c) {
    c.forEach(function(d) {
      $a.forEach(function(e) {
        if (e.getAttribute('href') == 'buy/' + d.url) {
          if (d.pricing != d.onSale) {
            e.querySelector('.price').innerText = 'NT$ '+d.pricing;
            e.querySelector('.onsale').innerText = 'NT$ '+d.onSale;
          } else {
            e.querySelector('.price').innerText = 'NT$ '+d.pricing;
            e.querySelector('.price').style.textDecoration = 'none';
            e.querySelector('.price').style.fontSize = '18px';
          }
        }
      });
    });
  });
});
