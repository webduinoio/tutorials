---
tag: smart
src: smart-06-button.html
title: Smart 的按鈕開關 
banner: smart-06-button.jpg
img: smart-06-button-s.jpg
date: 20161120
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Smart 的按鈕開關 :::: Webduino = Web × Arduino</title>

<meta name="description" content="Webduino Smart 開發板的 USB 電源接孔附近有一個微型按鈕開關 ( 腳位為 4 )，我們可以透過這個按鈕開關，執行「按下」、「放開」或「長按」等動作，進一步操控網頁元素或電子零件。">

<meta itemprop="description" content="Webduino Smart 開發板的 USB 電源接孔附近有一個微型按鈕開關 ( 腳位為 4 )，我們可以透過這個按鈕開關，執行「按下」、「放開」或「長按」等動作，進一步操控網頁元素或電子零件。">

<meta property="og:description" content="Webduino Smart 開發板的 USB 電源接孔附近有一個微型按鈕開關 ( 腳位為 4 )，我們可以透過這個按鈕開關，執行「按下」、「放開」或「長按」等動作，進一步操控網頁元素或電子零件。">

<meta property="og:title" content="Smart 的按鈕開關" >

<meta property="og:url" content="https://webduino.io/tutorials/smart-06-button.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/smart-06-button-s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/smart-06-button-s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
# Smart 的按鈕開關

Webduino Smart 開發板的 USB 電源接孔附近有一個微型按鈕開關 ( 腳位為 4 )，我們可以透過這個按鈕開關，執行「按下」、「放開」或「長按」等動作，進一步操控網頁元素或電子零件。

雖然按鈕開關使用了 4 號腳位，但如果不使用按鈕開關的時候，我們仍然可以透過 4 號腳作為訊號的輸出 ( 不過要注意如果同時又使用了按鈕開關，就也會觸發開關的行為 )。

![](../img/tutorials/smart-06-02.jpg)

<div class="buy-this">
	<span>按鈕開關相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-smart.html" target="_blank">Webduino Smart</a>、<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a></span>
</div>

## Webduino Blockly 操作解析

打開 Webduino Blockly 編輯器 ( [http://blockly.webduino.io/?tags=smart](http://blockly.webduino.io/?tags=smart) )，首先我們放入開發板的積木，下拉選單選擇 WebSocket ( **注意，使用 WebSocket 的工具網址必須是 http 開頭** )，填入開發板的 ip 位址，接著放入按鈕開關的積木，腳位預設為 4 ( 因為 Smart 的按鈕開關為「上拉按鈕」，所以要使用「上拉按鈕開關」 )。 

![](../img/tutorials/smart-06-03.jpg)

分別放入按鈕開關「按下」、「放開」與「長按」的積木，並讓執行這些動作時候時，網頁互動區裡頭的「顯示文字」也會同時顯示對應的文字。   

![](../img/tutorials/smart-06-04.jpg)

點選右上方紅色按鈕執行，用手指按壓按鈕開關，就會發現網頁的顯示文字也會跟著變化囉。( 記得要填入 WebSocket 的 ip )
( 解答：[http://blockly.webduino.io/#-KapC5MJLQ3bsD3HDlee](http://blockly.webduino.io/#-KapC5MJLQ3bsD3HDlee) )

<br/>

## 範例解析

HTML 的 header 引入 `webduino-all.min.js`，目的在讓瀏覽器可以支援 WebComponents 以及 Webduino 所有的元件，如果是用 Blockly 編輯工具產生的程式碼，則要額外引入 `webduino-blockly.js`。

	<script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
	<script src="https://webduinoio.github.io/webduino-blockly/webduino-blockly.js"></script>

程式碼的部分可以看到是走 WebSocket 的模式：`{board: 'Smart', url: '192.168.0.230'}`，接著看到按鈕開關的程式碼，透過`.on`來操控，設定值如果是`pressed`表示按下，`released`表示放開，`longPress`則表示長按，後面接續的 function 就是要執行的動作。

	var button;

	boardReady({board: 'Smart', url: '192.168.0.230'}, function (board) {
	  board.systemReset();
	  board.samplingInterval = 50;
	  button = getPullupButton(board, 4);
	  button.on("pressed", function(){
	    console.log("pressed");
	      document.getElementById("demo-area-01-show").innerHTML = '按下';

	  });
	  button.on("released", function(){
	    console.log("released");
	      document.getElementById("demo-area-01-show").innerHTML = '放開';

	  });
	  button.on("longPress", function(){
	    console.log("longPress");
	      document.getElementById("demo-area-01-show").innerHTML = '長按';

	  });
	});

以上就是 Smart 的按鈕開關操作介紹。
完整程式碼：[http://bin.webduino.io/yeyez/edit?html,js,output](http://bin.webduino.io/yeyez/edit?html,js,output)
解答：[http://blockly.webduino.io/#-KapC5MJLQ3bsD3HDlee](http://blockly.webduino.io/#-KapC5MJLQ3bsD3HDlee)

<div class="buy-this">
	<span>按鈕開關相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-smart.html" target="_blank">Webduino Smart</a>、<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a></span>
</div>



<!-- @@close-->