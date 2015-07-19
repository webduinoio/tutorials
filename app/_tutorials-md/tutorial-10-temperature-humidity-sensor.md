---
tag: tutorial
src: tutorial-10-temperature-humidity-sensor.html
title: 溫濕度傳感器
banner: tutorial-10-01.jpg
img: tutorial-10-01s.jpg
date: 20150601
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>範例教學 10：溫濕度傳感器 :::: Webduino = Web × Arduino</title>

<meta name="description" content="溫濕度傳感器是接收外界環境變數最基本的傳感器，透過溫濕度傳感器，可以準確的偵測溫度與溼度的即時變化，若再搭配一些樣式表 ( CSS )、圖表工具 ( D3.js、Google Chart ) 或後端資料庫，就可以整合成為非常有用的數據收集應用。">

<meta itemprop="description" content="溫濕度傳感器是接收外界環境變數最基本的傳感器，透過溫濕度傳感器，可以準確的偵測溫度與溼度的即時變化，若再搭配一些樣式表 ( CSS )、圖表工具 ( D3.js、Google Chart ) 或後端資料庫，就可以整合成為非常有用的數據收集應用。">

<meta property="og:description" content="溫濕度傳感器是接收外界環境變數最基本的傳感器，透過溫濕度傳感器，可以準確的偵測溫度與溼度的即時變化，若再搭配一些樣式表 ( CSS )、圖表工具 ( D3.js、Google Chart ) 或後端資料庫，就可以整合成為非常有用的數據收集應用。">

<meta property="og:title" content="範例教學 10：溫濕度傳感器" >

<meta property="og:url" content="https://webduino.io/tutorials/tutorial-10-temperature-humidity-sensor.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/tutorial-10-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/tutorial-10-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
#範例教學 10：溫濕度傳感器

溫濕度傳感器是接收外界環境變數最基本的傳感器，透過溫濕度傳感器，可以準確的偵測溫度與溼度的即時變化，若再搭配一些樣式表 ( CSS )、圖表工具 ( D3.js、Google Chart ) 或後端資料庫，就可以整合成為非常有用的數據收集應用。

( 溫濕度傳感器並不適合「[基礎教育版的開發板](../buy/component-webduino-o.html)」，必須使用「[馬克一號開發板](../buy/component-webduino-v1.html) 」進行實作 )

##範例影片展示

<iframe class="youtube" src="https://www.youtube.com/embed/k4uvbTb8ih8" frameborder="0" allowfullscreen></iframe>

##接線與實作

- ###1. 接上溫濕度傳感器

	溫濕度傳感器有四隻針腳，第一隻針腳為 v ( 接 3.3V )，第二隻為 data ( 接 10 )，第三隻沒有作用，為 N/C，第四隻為 GND，利用麵包板進行接線。

	![](../img/tutorials/tutorial-10-02.jpg)

- ###2. 完成後的實際長相

	![](../img/tutorials/tutorial-10-03.jpg)

	![](../img/tutorials/tutorial-10-04.jpg)

	![](../img/tutorials/tutorial-10-05.jpg)

##範例解析 ([快速體驗](http://webduinoio.github.io/samples/content/dht/index.html)、[jsbin 範例](http://bin.webduino.io/xaxe/edit?html,js,output)、[檢查連線狀態](https://webduino.io/device.html))

在 head 的地方先引入相關的 js 以及 WebComponent，溫濕度傳感器的 WebComponent 為：`wa-dht.html`。

	<script src="https://webduino.io/components/webcomponentsjs/webcomponents.js"></script>
	<link rel='import' href='https://webduino.io/components/webduino/web-arduino.html' />
	<link rel='import' href='https://webduino.io/components/webduino/wa-dht.html' />

接著在 body 區域裡頭放入一個 id 為 show 的 div 負責顯示溫濕度傳感器的數值，然後也是要放上 board 和溫濕度傳感器的 HTML 程式碼，而溫濕度傳感器的 pin 設定為 10。

	<div id="show"></div>

	<web-arduino id='board' device="你的 device 名稱">
		<wa-dht id='dht' pin='10'></wa-dht>
	</web-arduino>

寫完 HTML 之後就是要來寫 javascript，這邊我們先使用`read`這個 API，這個 API 和`setTimeout`很像，後面會接一個時間的數值，數值為 1000 代表 1 秒，也就是每秒會接收一次數值，接著再用 innerHTML 的方式，把接收到的數值顯示在 show 裡頭，這邊也有用到另外兩個 API，分別是`temperature`和`humidity`，`temperature`回傳的是溫度 ( 攝氏 )，`humidity`回傳的是溼度 ( 百分比 )。  

	window.addEventListener('WebComponentsReady', function () {
	  var board = document.getElementById('board');
	  
	  board.on('ready',function ready() {
	    var dht = document.getElementById('dht'),
	      show = document.getElementById('show');

	    dht.read(function (evt) {
	      show.innerHTML = new Date().toLocaleString() + "<br>溫度:" + evt.temperature + " ℃<br> 溼度:" + evt.humidity + " %";
	    }, 1000);
	    
	    }, false);
	    
	}, false);

如果還有不清楚的，不妨利用這個 [快速體驗](http://webduinoio.github.io/samples/content/dht/index.html) 範例，填入自己 Webduino 開發板的 device 名稱，按下設定，訊息處出現 Complete， 就會看到溫濕度的數值囉！有了這些數值之後，其實可以再加上一些變換，例如增加幾個 div 與 CSS，就可以做出有趣的長條圖，不會只有純粹的數字顯示，也會更有特色。

<!-- @@close-->