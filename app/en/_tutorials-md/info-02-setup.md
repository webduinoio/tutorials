	---
tag: info
src: info-02-setup.html
title: Webduino Initialization Setup
banner: info-02-01.jpg
img: info-02-01s.jpg
date: 20150420
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Webduino Initialization Setup :::: Webduino = Web × Arduino</title>

<meta name="description" content="The most important thing before you begin using the Webduino is doing an initialization setup. The purpose of the initialization is to make the Webduino Development Kit connect to the internet automatically. It's the same thing we do for a new mobile phone, the phone needs to be set up to browse the internet via Wi-Fi.">

<meta itemprop="description" content="The most important thing before you begin using the Webduino is doing an initialization setup. The purpose of the initialization is to make the Webduino Development Kit connect to the internet automatically. It's the same thing we do for a new mobile phone, the phone needs to be set up to browse the internet via Wi-Fi.">

<meta property="og:description" content="The most important thing before you begin using the Webduino is doing an initialization setup. The purpose of the initialization is to make the Webduino Development Kit connect to the internet automatically. It's the same thing we do for a new mobile phone, the phone needs to be set up to browse the internet via Wi-Fi.">

<meta property="og:title" content="Webduino Initialization Setup" >

<meta property="og:url" content="https://webduino.io/tutorials/info-02-setup.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/info-02-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/info-02-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
#Webduino Initialization Setup

The most important thing before you begin using the Webduino is doing an initialization setup. The purpose of the initialization is to make the Webduino Development Kit connect to the internet automatically. It's the same thing we do for a new mobile phone, the phone needs to be set up to browse the internet via Wi-Fi. 

##Webduino Initialization Step by Step

- ###1. Start Initialization

	There is a switch on the Webduino development board. Switch it to STA pattern, Turn the power on and start the initialization setup.

	![Webduino - Start Initialization](../../img/tutorials/en/info-02-09.jpg)

- ###2. Search Webduino Development Kit

	Use Wi-Fi on your computer or portable device search for the Webduino Development Kit's SSID and key in the password (the default is 12345678). The SSID of Webduino Development Kit will start with "wa…" (such as wa101). Then, your computer or portable device will be able to connect to the Webduino.

	![Webduino -  Search Webduino Development Kit](../../img/tutorials/en/info-02-04.jpg)

- ###3. Connect and Set Up the Webduino Development Kit

	Use Chrome or Safari internet browsers to type in the web address http://192.168.4.1. there you will see the setup page for the Webduino Development Kit. Type in the SSID and PASSWORD of your Wi-Fi router or portable device. (the SSID for the Wi-Fi router has a max length of 14 characters, letters and numbers)

	![Webduino - Connect and Set Up the Webduino Development Kit](../../img/tutorials/info-02-07.jpg)


- ###4. Reboot the Webduino Development Kit

	After type-in SSID and PASSWORD, press "sending". When "OK" shows, Webduino is initialized and can be connect to the Wi-Fi based station shared at home, in office or on portable device. Remove power on the Development Kit and switch to AP pattern. Then connect power and reboot. If no "OK" shows, remove power and set up again from step2.  

	![Webduino - Reboot the Webduino Development Kit](../../img/tutorials/en/info-02-10.jpg)

- ###5. Confirm the Connection 

	Once you reboot the Webduino Development Kit and your screen shows "OK", switch your computer or portable device to your regular internet connection. Connect to the page https://webduino.io/device.html and type in the name of your Webduino to check the connection. If the connection is successful, it'll show "OK".  If "OK" shows, you can start working with the Webduino. If no "OK" shows, you need to reboot the Webduino Development Kit again or   restart the setup from Step 2.

	![Webduino - Confirm the Connection](../../img/tutorials/info-02-06.jpg)

	Another way to know if your connection is successful is the small red LED on the  Webduino will not be lit up. However, if the LED is blinking, the connection failed. Reboot the Webduino and/or start the setup again from Step 2.
	
	![Webduino - Confirm the Connection](../../img/tutorials/en/info-02-11.jpg)


- ###6. Connect the Webduino Development Kit  to Wi-Fi Router

	Webduino can connect to a shared Wi-Fi router or on a portable device. It will connect to cloud servers automatically. Now, let's try to control the Webduino via Wi-Fi.

<!-- @@close-->