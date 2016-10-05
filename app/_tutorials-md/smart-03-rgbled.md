---
tag: smart
src: smart-03-rgbled.html
title: Smart 三色燈初體驗
banner: smart-03-rgbled.jpg
img: smart-03-rgbled-s.jpg
date: 20161005
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Smart 三色燈初體驗 :::: Webduino = Web × Arduino</title>

<meta name="description" content="Webduino Smart 開發板有內建了一個微型三色 LED 燈 ( 共陰 )，預設的接腳為紅 15，綠 12，藍 13，這表示我們可以直接透過 Smart 發出各種顏色。">

<meta itemprop="description" content="Webduino Smart 開發板有內建了一個微型三色 LED 燈 ( 共陰 )，預設的接腳為紅 15，綠 12，藍 13，這表示我們可以直接透過 Smart 發出各種顏色。">

<meta property="og:description" content="Webduino Smart 開發板有內建了一個微型三色 LED 燈 ( 共陰 )，預設的接腳為紅 15，綠 12，藍 13，這表示我們可以直接透過 Smart 發出各種顏色。">

<meta property="og:title" content="Smart 三色燈初體驗" >

<meta property="og:url" content="https://webduino.io/tutorials/smart-03-rgbled.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/smart-03-rgbled-s">

<meta itemprop="image" content="https://webduino.io/img/tutorials/smart-03-rgbled-s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
# Smart 三色燈初體驗

Webduino Smart 開發板有內建了一個微型三色 LED 燈 ( 共陰 )，預設的接腳為紅 15，綠 12，藍 13，這表示我們可以直接透過 Smart 發出各種顏色。

<div class="buy-this">
	<span>三色 LED 燈相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a>、<a href="https://webduino.io/buy/component-webduino-uno-fly.html" target="_blank">Webduino Fly + Arduino UNO</a></span>
</div>

## Webduino Blockly 操作解析

首先我們放入開發板的積木，下拉選單選擇 WebSocket ( **注意，使用 WebSocket 的工具網址必須是 http 開頭** )，填入開發板的 ip 位址 ( 如果不清楚 ip 位址是什麼，請看 [Webduino Smart 初始化設定](smart-02-setup.html) ) 

![](../img/tutorials/smart-03-02.jpg)

放入三色共陰 LED 燈的積木，紅 15，綠 12，藍 13。 

![](../img/tutorials/smart-03-03.jpg)

打開網頁互動的積木清單，使用按鈕 1 ~ 5 的積木，裏頭擺入不同的顏色。 

![](../img/tutorials/smart-03-04.jpg)

點選右上方紅色按鈕執行，如此一來我們在網頁互動測試區裡點選不同的按鈕，就會出現不同的顏色。
( 解答：[http://blockly.webduino.io/#-KTIefMEx09ltd5y1xkr](http://blockly.webduino.io/#-KTIefMEx09ltd5y1xkr) )

![](../img/tutorials/smart-03-05.gif)

<br/>

## 範例解析

HTML 的 header 引入 `webduino-all.min.js`，目的在讓瀏覽器可以支援 WebComponents 以及 Webduino 所有的元件，如果是用 Blockly 編輯工具產生的程式碼，則要額外引入 `webduino-blockly.js`。

	<script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
	<script src="https://webduinoio.github.io/webduino-blockly/webduino-blockly.js"></script>

程式碼的部分可以看到是走 WebSocket 的模式：`{transport: 'websocket', url: '192.168.8.115'}`，其他的程式碼就只是純粹點選按鈕控制顏色的程式碼而已。

	var rgbled;

	boardReady({transport: 'websocket', url: '192.168.8.115'}, function (board) {
	  board.systemReset();
	  board.samplingInterval = 250;
	  rgbled = getRGBLedCathode(board, 15, 12, 13);
	  document.getElementById("demo-area-05-btn1").addEventListener("click",function(){
	    rgbled.setColor('#ff0000');
	  });
	  document.getElementById("demo-area-05-btn2").addEventListener("click",function(){
	    rgbled.setColor('#009900');
	  });
	  document.getElementById("demo-area-05-btn3").addEventListener("click",function(){
	    rgbled.setColor('#3333ff');
	  });
	  document.getElementById("demo-area-05-btn4").addEventListener("click",function(){
	    rgbled.setColor('#ffcc33');
	  });
	  document.getElementById("demo-area-05-btn5").addEventListener("click",function(){
	    rgbled.setColor('#000000');
	  });
	});

以上就是 Smart 三色燈初體驗。
完整程式碼：[http://bin.webduino.io/nibux/edit?html,css,js,output](http://bin.webduino.io/nibux/edit?html,css,js,output)
解答：[http://blockly.webduino.io/#-KTIefMEx09ltd5y1xkr](http://blockly.webduino.io/#-KTIefMEx09ltd5y1xkr)

<div class="buy-this">
	<span>三色 LED 燈相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a>、<a href="https://webduino.io/buy/component-webduino-uno-fly.html" target="_blank">Webduino Fly + Arduino UNO</a></span>
</div>



<!-- @@close-->