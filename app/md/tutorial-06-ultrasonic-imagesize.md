---
tag: tutorial
src: tutorial-06-ultrasonic-imagesize.html
title: 超音波傳感器改變圖片大小
banner: tutorial-06-01.jpg
date: 20150425
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>範例教學 6：超音波傳感器改變圖片大小 :::: Webduino = Web + Arduino</title>

<meta property="og:description" content="我們了解了超音波傳感器的運作原理，在這個範例就來做點應用，藉由超音波傳感器回傳的公分數值，對應到網頁裡頭圖片的寬度，就可以非常輕鬆地做出一個利用超音波傳感器控制圖片大小的實例囉。">

<!-- @@close-->



<!-- @@block  =  tutorials-->
#範例教學 6：超音波傳感器改變圖片大小

在 [上一個範例](tutorial-05-ultrasonic.html) 我們了解了超音波傳感器的運作原理，在這個範例就來做點應用，藉由超音波傳感器回傳的公分數值，對應到網頁裡頭圖片的寬度，就可以非常輕鬆地做出一個利用超音波傳感器控制圖片大小的實例囉。

##範例影片展示

<iframe class="youtube" src="https://www.youtube.com/embed/7ED9YSy7EjA" frameborder="0" allowfullscreen></iframe>

##接線與實作

- ###1. 接上超音波傳感器

	和上一個範例完全一樣，只要把超音波傳感器的 VCC 接在 3.3v，Trig 接在 11，Echo 接在 10，GND 就接在 GND 的腳位，你可以用麵包板接出來，也可以直接就把超音波傳感器跟 Webduino 開發板組合即可。

	![](../img/tutorials/tutorial-05-02.jpg)

- ###2. 完成後的實際長相

	![](../img/tutorials/tutorial-05-03.jpg)


##範例解析 ([快速體驗](http://webduinoio.github.io/samples/content/ultrasonic-picture/index.html)、[jsbin 範例](http://jsbin.com/nafeyo/5/edit?html,css,js,output)、[檢查連線狀態](http://webduino.io/device.html))

一開始要先引入相關的 js 與 WebComponents。

	<script src="//webduino.io/components/webcomponentsjs/webcomponents.js"></script>
	<link rel='import' href='//webduino.io/components/webduino/web-arduino.html' />
	<link rel='import' href='//webduino.io/components/webduino/wa-ultrasonic.html' />

和上個範例不同的地方，在於這個範例我們將 show 換成了一張圖，並給這張圖一個 id 方便我們去控制。

	<img id='img' src='//www.hua.com/flower_picture/meiguihua/images/r17.jpg'></img>

	<web-arduino id='board' device="你的 device 名稱">
	  <wa-ultrasonic id='ultrasonic' trig='11' echo='10'></wa-ultrasonic>
	</web-arduino>

CSS 的地方給予這張圖片一個最大的寬度 ( 不給也可以，不過應該會超出畫面很多 )，然後加上 `transition` 的漸變時間單位，讓圖片的尺寸變化有更滑順的感覺。

	#img {
	  width: 100%;
	  max-width: 1024px;
	  transition:.3s;
	  }

javascript 寫起來還滿容易的，就只是把 `ping` 所回傳的公分數，轉換為圖片的大小，比較特別是的要稍微轉換一下 ( 乘以 20 )，避免距離只有一公分的時候，圖片變成了 1 像素，當乘以 20 之後，就可以比較明顯的觀察到圖片的變化。

	window.addEventListener('WebComponentsReady', function () {
	  var board = document.getElementById('board');

	  board.on('ready',function() {
	    var ultrasonic = document.getElementById('ultrasonic'),
	      img = document.getElementById('img');

	    ultrasonic.ping(function(cm) {
	      img.style.width = cm*20 + 'px';
	      img.style.height = cm*20 + 'px';
	    }, 1000);
	  });

	}, false);

如果還有不清楚的，不妨利用這個 [快速體驗範例](http://webduinoio.github.io/samples/content/ultrasonic-picture/index.html)，填入自己 Webduino 開發板的 device 名稱，按下設定，訊息處出現 ready 的話，就可以開始看到圖片大小不斷在變動，亦或是也可以參考這個 [jsbin 範例](http://jsbin.com/nafeyo/5/edit?html,css,js,output)，實際在上面填入 device 名稱並且修改體驗相關效果。







<!-- @@close-->