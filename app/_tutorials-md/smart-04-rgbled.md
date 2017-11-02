---
tag: smart
src: smart-04-rgbled.html
title: 躍動的 Smart 三色燈
banner: smart-04-rgbled.jpg
img: smart-04-rgbled-s.jpg
date: 20161005
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>躍動的 Smart 三色燈 :::: Webduino = Web × Arduino</title>

<meta name="description" content="在 Smart 三色燈初體驗 裡我們已經對操控 Smart 的三色燈有了基本的認識，這篇將透過「等待」與「迴圈」積木，實作出一個躍動的三色燈。">

<meta itemprop="description" content="在 Smart 三色燈初體驗 裡我們已經對操控 Smart 的三色燈有了基本的認識，這篇將透過「等待」與「迴圈」積木，實作出一個躍動的三色燈。">

<meta property="og:description" content="在 Smart 三色燈初體驗 裡我們已經對操控 Smart 的三色燈有了基本的認識，這篇將透過「等待」與「迴圈」積木，實作出一個躍動的三色燈。">

<link rel="canonical" href="https://tutorials.webduino.io/zh-tw/docs/smart/basic/rgbled-colorful.html">

<meta property="og:title" content="躍動的 Smart 三色燈" >

<meta property="og:url" content="https://webduino.io/tutorials/smart-04-rgbled.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/smart-04-rgbled-s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/smart-04-rgbled-s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
# 躍動的 Smart 三色燈

在 [Smart 三色燈初體驗](smart-03-rgbled.html) 裡我們已經對操控 Smart 的三色燈有了基本的認識，這篇將透過「等待」與「迴圈」積木，實作出一個躍動的三色燈。

<div class="buy-this">
	<span>三色 LED 燈相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-smart.html" target="_blank">Webduino Smart</a>、<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a></span>
</div>

## Webduino Blockly 操作解析

首先我們放入開發板的積木，下拉選單選擇 WebSocket ( **注意，使用 WebSocket 的工具網址必須是 http 開頭** )，填入開發板的 ip 位址，放入三色共陰 LED 燈的積木，紅 15，綠 12，藍 13。 

![](../img/tutorials/smart-04-02.jpg)

放入「重複」的積木，設定為重複十次。 

![](../img/tutorials/smart-04-03.jpg)

在迴圈裡放入「等待」的積木，設定等待時間為 0.5 秒，就可以每 0.5 秒切換顏色，因為是放在重複的積木內，所以當動作執行十次之後，就會把三色燈關起來 ( 設定為黑色 )。

![](../img/tutorials/smart-04-04.jpg) 

點選右上方紅色按鈕執行，如此一來我們的三色LED燈就會不停地切換顏色，如躍動一般。
( 解答：[http://blockly.webduino.io/#-KbJVKgji5-EvGxORPDs](http://blockly.webduino.io/#-KbJVKgji5-EvGxORPDs) )

![](../img/tutorials/smart-03-05.gif)

<br/>

## 範例解析

HTML 的 header 引入 `webduino-all.min.js`，目的在讓瀏覽器可以支援 WebComponents 以及 Webduino 所有的元件，如果是用 Blockly 編輯工具產生的程式碼，則要額外引入 `webduino-blockly.js`。

	<script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
	<script src="https://webduinoio.github.io/webduino-blockly/webduino-blockly.js"></script>

程式碼的部分可以看到是走 WebSocket 的模式：`{board: 'Smart', url: '192.168.0.230'}`，等待的部分我們使用了`awit`來實作。

	(async function () {

	var rgbled;

	boardReady({board: 'Smart', url: '192.168.0.230'}, async function (board) {
	  board.systemReset();
	  board.samplingInterval = 50;
	  rgbled = getRGBLedCathode(board, 15, 12, 13);
	  for (var count = 0; count < 10; count++) {
	    rgbled.setColor('#ff0000');
	    await delay(0.5);
	    rgbled.setColor('#3366ff');
	    await delay(0.5);
	    rgbled.setColor('#009900');
	    await delay(0.5);
	    rgbled.setColor('#ffcc33');
	    await delay(0.5);
	  }
	  rgbled.setColor('#000000');
	});

	}());

以上就是躍動的 Smart 三色燈 ( 顏色輪播切換 )。
完整程式碼：[http://bin.webduino.io/zudar/1/edit?html,js,output](http://bin.webduino.io/zudar/1/edit?html,js,output)
解答：[http://blockly.webduino.io/#-KbJVKgji5-EvGxORPDs](http://blockly.webduino.io/#-KbJVKgji5-EvGxORPDs)

<div class="buy-this">
	<span>三色 LED 燈相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-smart.html" target="_blank">Webduino Smart</a>、<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a></span>
</div>



<!-- @@close-->