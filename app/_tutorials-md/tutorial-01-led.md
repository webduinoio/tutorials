---
tag: tutorial
src: tutorial-01-led.html
title: 控制單顆 LED 燈
banner: tutorial-01-01.jpg
img: tutorial-01-01s.jpg
date: 20150425
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>範例教學 1：控制單顆 LED 燈 :::: Webduino = Web × Arduino</title>

<meta name="description" content="在基本的 Arduino 傳感器控制範例裡頭，控制單顆 LED 燈通常都是作為第一個範例使用，為什麼呢？因為這個範例最容易上手，也最容易藉由 LED 的明暗來測試程式是否有寫錯，因此進入了 Webduino 的世界之後，同樣也使用 LED 來作為第一個範例，而撰寫的程式也更為簡單，就像控制一張網頁圖片切換一樣的容易。">
<meta itemprop="description" content="在基本的 Arduino 傳感器控制範例裡頭，控制單顆 LED 燈通常都是作為第一個範例使用，為什麼呢？因為這個範例最容易上手，也最容易藉由 LED 的明暗來測試程式是否有寫錯，因此進入了 Webduino 的世界之後，同樣也使用 LED 來作為第一個範例，而撰寫的程式也更為簡單，就像控制一張網頁圖片切換一樣的容易。">
<meta property="og:description" content="在基本的 Arduino 傳感器控制範例裡頭，控制單顆 LED 燈通常都是作為第一個範例使用，為什麼呢？因為這個範例最容易上手，也最容易藉由 LED 的明暗來測試程式是否有寫錯，因此進入了 Webduino 的世界之後，同樣也使用 LED 來作為第一個範例，而撰寫的程式也更為簡單，就像控制一張網頁圖片切換一樣的容易。">


<meta property="og:title" content="範例教學 1：控制單顆 LED 燈" >
<meta property="og:url" content="http://webduino.io/tutorials/tutorial-01-led.html">

<meta property="og:image" content="http://webduino.io/img/tutorials/tutorial-01-01s.jpg">
<meta itemprop="image" content="http://webduino.io/img/tutorials/tutorial-01-01s.jpg">

<!-- @@close-->




<!-- @@block  =  tutorials-->
#範例教學 1：控制單顆 LED 燈

在基本的 Arduino 傳感器控制範例裡頭，控制單顆 LED 燈通常都是作為第一個範例使用，為什麼呢？因為這個範例最容易上手，也最容易藉由 LED 的明暗來測試程式是否有寫錯，因此進入了 Webduino 的世界之後，同樣也使用 LED 來作為第一個範例，而撰寫的程式也更為簡單，就像控制一張網頁圖片切換一樣的容易。

##範例影片展示

<iframe class="youtube" src="https://www.youtube.com/embed/AIGx_sUx1IU" frameborder="0" allowfullscreen></iframe>

##接線與實作

- ###1. 接上 LED

	將 LED 的長腳接在 10 的位置，短腳接在 GND 的位置，接完 LED 之後接上電源。

	![](../img/tutorials/tutorial-01-02.jpg)

- ###2. 完成後的實際長相

	![](../img/tutorials/tutorial-01-03.jpg)

##範例解析 ([快速體驗](http://webduinoio.github.io/samples/content/led/)、[jsbin 範例](http://jsbin.com/raniwi/5/edit?html,output)、[檢查連線狀態](http://webduino.io/device.html))

一開始先在 HTML 的 header 引入四個項目，第一個 webcomponents.js 的目的在讓瀏覽器可以支援 WebComponents (因為不是所有的瀏覽器都支援 )，web-arduino.html 是 Webduino 的 WebComponent，wa-led.html 則是這個範例會用到的 LED 元件的 WebComponent。


	<script src="//webduino.io/components/webcomponentsjs/webcomponents.js"></script>
	<link rel='import' href='//webduino.io/components/webduino/web-arduino.html' />
	<link rel='import' href='//webduino.io/components/webduino/wa-led.html' />

接著看到 HTML 的 body 裡頭，放入一個 id 為 light 的圖片區域，裡面含有兩張分別是亮起的燈泡與不亮的燈泡圖片，目的在於點選的時候，圖片也會從不亮的燈泡轉變為亮起的燈泡，再來最重要的是 web-arduino，這表示我們要在裡面使用 Webduino 的 WebComponent ( 可以把這個 tag 想像成實體的 Webduino 開發板 )，然後在裡面放入 web-led 這個 LED 的 WebComponent ( 在 Webduino 開發板上頭插上 LED 燈 )，web-arduino 的 device 填入您的開發板 device 名稱 ( 大小寫英文字母與數字組合 )，並在 web-led 填入對應的 pin 腳 ( LED 長腳接在哪邊，就填哪個數字 )。

	<div id='light' class="off">
	  <img src='http://i.imgur.com/T5H4MHE.png'></img>
	  <img src='http://i.imgur.com/8qFj2Ou.png'></img>
	</div>
	<web-arduino id="board" device='你的 device 名稱'>
	  <wa-led id='led' pin='10'></wa-led>
	</web-arduino>

看完 HTML，要來稍微寫一點 CSS，目的在於要讓圖片能有亮暗的顯示。

	#light img{
	  width:100%;
	  display:none;
	}
	#light.off img:first-child{
	  display:inline-block;
	}
	#light.on img:last-child{
	  display:inline-block;
	}

再來就是最重點的 javascript 部分，下面的範例程式開始先要確認「WebComponentsReady」，確定 WebComponents 都 ready 之後就可以開始進行動作，執行的方式也簡單，利用點選圖片，配合 LED 燈的 api：`led.on();` 、 `led.off();`，就可以輕鬆做出讓 LED 燈亮滅的效果。

	window.addEventListener('WebComponentsReady', function () {
	  var board = document.getElementById('board'),
	      light = document.getElementById('light');

	  board.on('ready',function ready() {
	    var led = document.getElementById('led');

	    light.addEventListener('click', function() {
	      if(light.className == 'on'){
	        led.off();     // 讓 LED 熄滅
	        light.className = 'off';
	      }else{
	        led.on();     // 讓 LED 亮起
	        light.className = 'on';
	      }
	    }, false);
	  });

	}, false);

如果還有不清楚的，不妨利用這個 快速體驗範例，填入自己 Webduino 開發板的 device 名稱，按下設定，訊息處出現 ready 的話 LED 燈就會亮起，如果要讓點選會有亮滅的效果，可以參考這個 jsbin 範例，實際在上面填入 device 名稱並且修改體驗相關效果。




<!-- @@close-->