---
tag: tutorial
src: tutorial-05-ultrasonic.html
title: 控制超音波傳感器
banner: tutorial-05-01.jpg
img: tutorial-05-01s.jpg
date: 20150425
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Project Example 5: Use An Ultrasonic Sensor :::: Webduino = Web × Arduino</title>

<meta name="description" content="In this example, we will use a HC-SR04 ultrasonic sensor. A HC-SR04 sensor emits an ultrasonic sound that travels through the air and  will bounce off the nearest object and travel back to the module. If you calculate the travel time and the speed of the sound you can calculate the distance of the object. HC-SR04 has 4 pins, GND, VCC, Trig, and Echo. Using the Tirg pin will send out a sonic burst which will then be received by the Echo pin. The Echo pin will output a value in centimeters for the distance of the object.">

<meta itemprop="description" content="In this example, we will use a HC-SR04 ultrasonic sensor. A HC-SR04 sensor emits an ultrasonic sound that travels through the air and  will bounce off the nearest object and travel back to the module. If you calculate the travel time and the speed of the sound you can calculate the distance of the object. HC-SR04 has 4 pins, GND, VCC, Trig, and Echo. Using the Tirg pin will send out a sonic burst which will then be received by the Echo pin. The Echo pin will output a value in centimeters for the distance of the object.">

<meta property="og:description" content="In this example, we will use a HC-SR04 ultrasonic sensor. A HC-SR04 sensor emits an ultrasonic sound that travels through the air and  will bounce off the nearest object and travel back to the module. If you calculate the travel time and the speed of the sound you can calculate the distance of the object. HC-SR04 has 4 pins, GND, VCC, Trig, and Echo. Using the Tirg pin will send out a sonic burst which will then be received by the Echo pin. The Echo pin will output a value in centimeters for the distance of the object.">

<meta property="og:title" content="Project Example 5: Use An Ultrasonic Sensor" >

<meta property="og:url" content="https://webduino.io/tutorials/tutorial-05-ultrasonic.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/tutorial-05-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/tutorial-05-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
# Project Example 5: Use An Ultrasonic Sensor

In this example, we will use a HC-SR04 ultrasonic sensor. A HC-SR04 sensor emits an ultrasonic sound that travels through the air and  will bounce off the nearest object and travel back to the module. If you calculate the travel time and the speed of the sound you can calculate the distance of the object. HC-SR04 has 4 pins, GND, VCC, Trig, and Echo. Using the Tirg pin will send out a sonic burst which will then be received by the Echo pin. The Echo pin will output a value in centimeters for the distance of the object. There is a possibility of some inaccuracy, which occurs if the  sound is bounced in other directions or it is partially absorbed by the object. 

<div class="buy-this">
	<span>超音波傳感器相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a>、<a href="https://webduino.io/buy/component-webduino-uno-fly.html" target="_blank">Webduino Fly + Arduino UNO</a></span>
</div>

## Video Tutorial

You can watch the video tutorial for more information. Next will give you step by step instructions for setting up and using the HC-SR04.
Watch the video tutorial here: [https://blockly.webduino.io/?page=tutorials/ultrasonic-1](https://blockly.webduino.io/?page=tutorials/ultrasonic-1)  

<iframe class="youtube" src="https://www.youtube.com/embed/e6gbwMUzSZ8" frameborder="0" allowfullscreen></iframe>

## The Circuit 

The HC-SR04 Ultrasonic Module has 4 pins, GND, VCC, Trig and Echo. The VCC pin needs to be connected to the 3.3v or VCC pins on the Webduino board.The GND pin needs to be connected to its corresponding postition. The Tri and Echo pins can be connected to any I/O on the Webduino board. (Here we connect Trig and Echo pins to 11 and 10 respectively.)

Schematic circuit wiring diagram:

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-02.jpg)

Reference image:

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-03.jpg)

<div class="buy-this">
	<span>超音波傳感器相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a>、<a href="https://webduino.io/buy/component-webduino-uno-fly.html" target="_blank">Webduino Fly + Arduino UNO</a></span>
</div>

## Instructions for using the Webduino Blockly

Open the Webduino Blockly page by typing the address: [https://blockly.webduino.io](https://blockly.webduino.io) into your web browser. First, you will need to use the "Web Demo Area" to show the distance of the object. So click "Web Demo Area" and choose "Show Text" in the drop-down list.

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-04.jpg)

You can also drag the blocks from the side menu, to adjust the text size, line height, and color in the web demo area.

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-05.jpg)

Next, drag a "Board" block to the workspace and type in the name of your Webduino board. Click "Sensors" and combine the first two blocks from the Ultrasonic list. Make sure it is set to "ultrasonic", Trig to "11", Echo to "10", and get distance every "500" ms (1/1000s). We suggest you set detect distance at least over 200 ms (1/1000s).

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-06.jpg)

Finally, add the last block by connecting the "Show" block from the "Web Demo" drop-down menu and the distance mesurment block from "Ultra Sonic" menu. Once you run the clocks, you will see the value of result show on web demo area.

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-07.jpg)

Of course you can make the setup more complex. Using the "If/Do" logic block you can make the results to show in red if the ultra sonic burst bounces off and object from a distance further than 30 centimeters away. To do this, you can create the stack as seen below.

![Project Example 5: Use An Ultrasonic Sensor](../../img/tutorials/tutorial-05-08.jpg)

After you finish creating the block stack, check your "[device's status](https://webduino.io/device.html)" before you "Run" all the blocks. Then you can start checking the results of your ultrasonic sensor on web demo area!
(If you have more questions, visit answer page here: [https://blockly.webduino.io/#-K4x-T2x2FErHgjUUTem](https://blockly.webduino.io/#-K4x-T2x2FErHgjUUTem) )


## Code Explanation ([Check Webduino Bin](http://bin.webduino.io/sane/edit?html,css,js,output), [Check Device Status](https://webduino.io/device.html))

Include `webduino-all.min.js` in the header ofyour html files in order to support all of the Webduino's components. If the codes are generated by Webduino Blockly, you also have to include `webduino-blockly.js`。

	<script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
	<script src="https://webduinoio.github.io/webduino-blockly/webduino-blockly.js"></script>

We simply use a span tag to display the sensing result in text.

	<span id="demo-area-01-show">distance to display</span>

Here we use the JavaScript method `ping()`. Ping() takes one parameter, which points to the callback function that will be called when sensing the distance. (The result will also be stored in the `.distance` property.) Then we use a **if else** statement to display text in different colors, at different levels of distance.

	var ultrasonic;

	boardReady('Webduino Board Name', function (board) {
	  board.samplingInterval = 20;
	  ultrasonic = getUltrasonic(board, 11, 10);
	  ultrasonic.ping(function(cm){
	    console.log(ultrasonic.distance);
	    document.getElementById("demo-area-01-show").innerHTML = ultrasonic.distance;
	    if (ultrasonic.distance > 30) {
	      document.getElementById("demo-area-01-show").style.color = '#ff0000';
	    } else {
	      document.getElementById("demo-area-01-show").style.color = '#000000';
	    }
	  }, 500);
	});

There are some codes that overlap Google Blockly. Therefore, we could use variables to do code cleanups. Check the following figure:

	var ultrasonic;
	var show;

	boardReady('Webduino Board Name', function (board) {
	  board.samplingInterval = 20;
	  ultrasonic = getUltrasonic(board, 11, 10);
	  show = document.getElementById("demo-area-01-show");
	  ultrasonic.ping(function(cm){
	    console.log(ultrasonic.distance);
	    show.innerHTML = ultrasonic.distance;
	    if (ultrasonic.distance > 30) {
	      show.style.color = '#ff0000';
	    } else {
	      show.style.color = '#000000';
	    }
	  }, 500);
	});

So this is the example of how to use an ultrasonic sensor to detect the distance of objects, we hope you enjoy it!  
Webduino Bin: [http://bin.webduino.io/sane/edit?html,css,js,output](http://bin.webduino.io/sane/edit?html,css,js,output)  
Answer Page: [https://blockly.webduino.io/#-K4x-T2x2FErHgjUUTem](https://blockly.webduino.io/#-K4x-T2x2FErHgjUUTem)

## 超音波傳感器的延伸教學：

[Webduino Blockly 課程 3-1：超音波傳感器](https://blockly.webduino.io/?lang=zh-hant&page=tutorials/ultrasonic-1#-JvS-HS4kdS5Mn9tlXmD) 

<div class="buy-this">
	<span>超音波傳感器相關套件：<a href="https://webduino.io/buy/webduino-package-plus.html" target="_blank">Webduino 基本套件 Plus ( 支援馬克 1 號、Fly )</a></span>
	<span>Webduino 開發板：<a href="https://webduino.io/buy/component-webduino-v1.html" target="_blank">Webduino 馬克一號</a>、<a href="https://webduino.io/buy/component-webduino-fly.html" target="_blank">Webduino Fly</a>、<a href="https://webduino.io/buy/component-webduino-uno-fly.html" target="_blank">Webduino Fly + Arduino UNO</a></span>
</div>


<!-- @@close-->