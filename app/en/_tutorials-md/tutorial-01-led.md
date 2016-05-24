---
tag: tutorial
src: tutorial-01-led.html
title: Tutorial Example 1 Control single LED light
banner: tutorial-01-01.jpg
img: tutorial-01-01s.jpg
date: 20150425
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Tutorial Example 1: Control single LED light :::: Webduino = Web × Arduino</title>

<meta name="description" content="Regarding the basic case about Arduino controlled sensor, how to control a single LED light has been used as the first example.  It’s easy for practice and also for observing any programming mistake via LED lighting situation.  Therefore, we take LED as the first Webduino practice case. ">

<meta itemprop="description" content="Regarding the basic case about Arduino controlled sensor, how to control a single LED light has been used as the first example.  It’s easy for practice and also for observing any programming mistake via LED lighting situation.  Therefore, we take LED as the first Webduino practice case. ">

<meta property="og:description" content="Regarding the basic case about Arduino controlled sensor, how to control a single LED light has been used as the first example.  It’s easy for practice and also for observing any programming mistake via LED lighting situation.  Therefore, we take LED as the first Webduino practice case. ">

<meta property="og:title" content="Tutorial Example 1: Control single LED light" >

<meta property="og:url" content="https://webduino.io/tutorials/tutorial-01-led.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/tutorial-01-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/tutorial-01-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->




<!-- @@block  =  tutorials-->
# Tutorial Example 1: Control single LED light

Regarding the basic case about Arduino controlled sensor, how to control a single LED light has been used as the first example.  It’s easy for practice and also for observing any programming mistake via LED lighting situation.  Therefore, we take LED as the first Webduino practice case. 

## Video

Example：[https://blockly.webduino.io/?&page=tutorials/led-2](https://blockly.webduino.io/?&page=tutorials/led-2)  

<iframe class="youtube" src="https://www.youtube.com/embed/8k6Lqu-aqVM" frameborder="0" allowfullscreen></iframe>

## Wiring and Practice

There are long and short legs on an LED.  Long leg should be connect to ‘high potential’ (a position with a number) and short leg should be connect to ‘low potential’ (GND, Ground).  Moreover, we only need to plug LED legs onto its position or wiring legs with breadboard and breadline. Here long leg goes to 10 and short leg goes to GND.

![](../../img/tutorials/tutorial-01-02.jpg)

![](../../img/tutorials/tutorial-01-03.jpg)

## Webduino Blockly Operation Steps

Open Webdunio Blockly Edit Tool ( [https://blockly.webduino.io](https://blockly.webduino.io) ).  In this case, we use a picture of a light bulb to control LED light.  Firstly, click the button of “webpage interaction test” on the upper right side of the webpage.  Then, select “click light bulb” from the drop-down menu.  A webpage with choices of light bulbs will show.

![](../../img/tutorials/tutorial-01-04.jpg)

Select a “development kit” from the brick menu on the left side of edit tool.  Then, drag your  “development kit” to the screen and type-in the correspondent name of Webduino Development Kit  (a Device name, don’t select series).  Afterward, select the brick of “LED Light” and drag the brick into a gap on the brick of “developmet kit”.  Setup position to pin10 (because long leg was connected to pin 10)  

![](../../img/tutorials/tutorial-01-05.jpg)

It has to have interaction with webpage so we have to select “Click Light Bulb” at the bottom of the brick menu. After that, many options of light bulbs will show up.

![](../../img/tutorials/tutorial-01-06.jpg)

Drag the brick named “Click Light Bulb, Execute” to edit screen.  It means to do something when a user click the “Light Bulb”.

![](../../img/tutorials/tutorial-01-07.jpg)

Put a brick of “Logic” into the content of execution to setup a relative response while someone clicks the “Light Bulb”. Meanwhile, developers can edit options of “Logic” by using a blue gear on the brick of “Logic”.

![](../../img/tutorials/tutorial-01-08.jpg)

According to logic, when “Light Bulb” is “on”, “Click Light Bulb” will turn “off”; on the other hand; when “Light Bulb” is off “Click Light Bulb” will be “on”.

![](../../img/tutorials/tutorial-01-09.jpg)

After finishing above procedures, confirm the development kit is on-line (select “[check on-line status]((https://webduino.io/device.html)” to confirm) and then click red button of execution to start it.

![](../../img/tutorials/tutorial-01-10.jpg)

Click pictures of light bulbs on the embedded webpage, developers can easily control the intensity of and LED.  However, developers can select the tab of “JavaScript” to review complete codes.  Developers can copy the code and paste it to their own webpage source code to have exactly the same behavior on their webpage. 
( Answer: [https://blockly.webduino.io/#-K4pR8RaEF6IkiWdAYk7](https://blockly.webduino.io/#-K4pR8RaEF6IkiWdAYk7) )



## Code ( [Code](http://bin.webduino.io/tetig/edit?html,css,js,output)、[Check](https://webduino.io/device.html) )

In the beginning, in traduce webduino­all.min.js to the header on HTML.  It’ll make browser support WebComponents and all components of Webduino.  If code is produced from Blockly edit tool, webduino­blockly.js needs to be introduced.

	<script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
	<script src="https://webduinoio.github.io/webduino-blockly/webduino-blockly.js"></script>

Secondly, in the body of HTML, drag an id for the picture area of demo­area­02­light.  There should be 2 pictures of light bulbs; one is bright and the other is dark.  When someone select, the dark light bulb will turn into bright.

	<div id="demo-area-02-light" class="off">
	  <img src="https://blockly.webduino.io/media/off.png" id="demo-area-02-off">
	  <img src="https://blockly.webduino.io/media/on.png" id="demo-area-02-on">
	</div>

CSS method is applied to control light-on and light-off.  Developers gain different results by switch pictures and display:none.  Below are CSS code.

	#demo-area-02-light img{
	  height:200px;
	  display:none;
	}
	#demo-area-02-light.on #demo-area-02-on{
	  display:inline-block;
	}
	#demo-area-02-light.off #demo-area-02-off{
	  display:inline-block;
	}

The most important part is javascript.  First of all, developers have to confirm the development kit is on-line (after using BoardReady).  Then setup a variable named led and use getLed to set up the position at 10.  Moreover, set up the event of clicking pictures and use API of LED to execute it.

	var led;

	boardReady('', function (board) {
	  board.samplingInterval = 20;
	  led = getLed(board, 10);
	  document.getElementById("demo-area-02-light").addEventListener("click",function(){
	    if (document.getElementById("demo-area-02-light").className == "on") {
	      document.getElementById("demo-area-02-light").className = "off";
	      led.off();
	    } else {
	      document.getElementById("demo-area-02-light").className = "on";
	      led.on();
	    }
	  });
	});

Because code is automatically produced by Blockly, there might be some repeated and superfluous code.  Developers can simplify above code by changing document.getElementById("demo­area­02­light") to be a variable “light”. Just a small change can make it much clear.

	var led;
	var light;

	boardReady('', function (board) {
	  board.samplingInterval = 20;
	  led = getLed(board, 10);
		light = document.getElementById("demo-area-02-light");
	  light.addEventListener("click",function(){
	    if (light.className == "on") {
	      light.className = "off";
	      led.off();
	    } else {
	      light.className = "on";
	      led.on();
	    }
	  });
	});

Code：[http://bin.webduino.io/tetig/edit?html,css,js,output](http://bin.webduino.io/tetig/edit?html,css,js,output)  
Answer：[https://blockly.webduino.io/#-K4pR8RaEF6IkiWdAYk7](https://blockly.webduino.io/#-K4pR8RaEF6IkiWdAYk7)

## More：

[Webduino Blockly 1-1 : LED](https://blockly.webduino.io/?lang=zh-hant&page=tutorials/led-1#-Jvaz_tuEFYtNaVBi0i2)  
[Webduino Blockly 1-2 : LED and Image](https://blockly.webduino.io/?lang=zh-hant&page=tutorials/led-2#-Jvb-r0TiTHKsL-rMGw9)



<!-- @@close-->