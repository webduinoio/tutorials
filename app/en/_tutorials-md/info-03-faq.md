---
tag: info
src: info-03-faq.html
title: Webduino Support Q&A
banner: info-03-01.jpg
img: info-03-01s.jpg
date: 20150425
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Webduino Support Q&A :::: Webduino = Web × Arduino</title>

<meta name="description" content="You might face some problems while using Webduino, so here are answers to some of the most common questions. You can also leave a comment below or send us an email.">

<meta itemprop="description" content="You might face some problems while using Webduino, so here are answers to some of the most common questions. You can also leave a comment below or send us an email.">

<meta property="og:description" content="You might face some problems while using Webduino, so here are answers to some of the most common questions. You can also leave a comment below or send us an email.">

<meta property="og:title" content="Webduino Support Q&A" >

<meta property="og:url" content="https://webduino.io/tutorials/info-03-faq.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/info-03-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/info-03-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->

#Support Q&A

You might face some problems while using Webduino, so here are answers to some of the most common questions. You can also leave a comment below or send us an [email](mailto:service@webduino.io) .

<br/>

##About Webduino

- ###1. What is the difference between Webduino and the Webduino Development Board?

	> Webduino is the name of our service, it means Web + Arduino. When speaking about the Webduino Development Board, we refer to the name of the development board, e.g., Webduino Mark 1, Webduino Fly, and Webduino Smart.

- ###2. What are the difference between the Webduino Mark 1 and the Webduino Fly?

	>The Webduino Mark 1 is a combination of the Arduino Pro mini plus a Wi-Fi module, **that can function independently**. However, the Webduino Fly itself is a Wi-Fi extension board, **which works along with the Arduino UNO**. For convenience, we call the Webduino Fly + Arduino UNO board the "Webduino Fly (Extended)" or just "Fly". Additionally, the Fly is equiped with the more pins than the Mark 1.

- ###3. What programming language is adopted in Webduino?

	>Only JavaScript! You only need to use JavaScript. You can run the codes in both front-end (browser side) and back-end (NodeJS).

- ###4. Is it still necessary to burn Arduino firmware?

	>Since the Webduino Fly is based on the Arduino UNO, it is **necessary** to follow  Firmata Protocol to burn firmware to your Webduino Fly (In the tutorial [Arduino firmware download and buning](info-07-arduino-ino.html), we give you detailed instructions on how to do this). However, it is not necessary to burn the firmware to the Webduino Mark 1 because the default firmware has already been implemented.

- ###5. Can Webduino run while my browser is closed?

	>No. If you wish to control your development boards or devices via Webduino Blockly, you have to keep the browser open. **The operation will only run constantly if you call a Node.js backend function with JavaScript.**

- ###6. What are the benefits of using Webduino?

	>- (1) Painless Learning: Webduino uses JavaScript, which is much easier to use than C/C++.
	>- (2) Web browser convetibility: You can convert the website into a mobile application, so you can operate seamlessly across platforms.
	>- (3) Idea realization: You can easily make a prototype by using Webduino, which speeds up your development.
	>- (4) Integration with other services: Webduino can be smoothly integrated with other web-based services, e.g., Youtube, Weather Forecast, Stocks, Currency Exchange Rate...etc.
	>- (5) Remote Control:  Webduino is a web-based service, so it can be operated whenever and wherever web browsers are accessible.

<br/>

##Purchase Webduino

- ###1. Where can buy Webduino?

	>- (1) Sign up for our Webduino courses! We offer a Webduino Development Kit for each participant.
	>- (2) If you are in Taiwan, you can find all of our products on Ruten. [https://webduino.io/buy.html](https://webduino.io/buy.html) 
	>- (3) We are also about to launch our products overseas! This is great news for everyone outside of the Taiwan!

- ###2. Webduino Education Program

	>We offer an Education Program to companies, schools, and institutions interested in the IOT. This program is customized to your needs and interests. We offerteaching materials and equipment, instruction support, and rich content to make all  learning experience enjoyable. For any enquiries, please email us at [service@webduino.io](mailto:service@webduino.io).

<br/>

##Wi-Fi Setup of Webduino developmet board 

- ###1. Why is the setup of the development board necessary?

	>All of the Webduino development boards are controlled by Wi-Fi connections, so they can not function without Wi-Fi configuration.

- ###2. Security certification

	>Webduino development boards only work with WPA/WPA2, which requires a SSID and Password to log in. Other types of networks, like networks with "Captive Portal" security, enterprise networks, etc. are not supported.

- ###3. Why there are two SSIDs?

	>- (1) **The SSID of the Webduino is the serial number written on the manual.** It normally starts with "wa". E.g., wa101, wa999, etc. On the other hand, the SSID of the Wi-Fi is the unique name of your network. Therefore, you have to pay attention to which is which and not confuse them.
	>- (2) For the detailed instructions, please check the tutorials: [Webduino Board Wi-Fi Setup](info-02-setup.html) and [Webduino Fly Wi-Fi Setup](info-04-uno-setup.html)

- ###4. Why does the SSID of my development board not appear in the Wi-Fi list?

	>- (1) Your development board might be in AP mode, please switch it to the STA mode and check the list again. For detailed instructions, please check the tutorials: [Webduino Board Wi-Fi Setup](info-02-setup.html) and [Webduino Fly Wi-Fi Setup](info-04-uno-setup.html)
	>- (2) Another possibilty could be that the battery is running out of power. In this case, please change the battery or apply power through the USB port.

- ###5. The SSID of the development board shows up on the Wi-Fi list, but my device still fails to connect to the development board.

	>Webduino development boards are not recognized as access points on some Android devices and Windows PCs, so the connections will not work. Follow these steps to fix the issue:

	>- (1) Step 1: On your computer, **forget** the setting of your networks
	>- (2) Step 2: Also **forget** the settings of your Webduino board
	>- (3) Step 3: Search Webduino board on your network list again

- ###6. Why does the SSID of the development board not come up on the page: "device.html" after the Wi-Fi is set up?

	>- (1) You might have typed in the incorrect SSID and Password of your Wi-Fi.
	>- (2) The SSID and Password of the Wi-Fi should **not include special characters or exceed 14 characters**.
	>- (3) Webduino does not support a 5G Wi-Fi connection, please use networks that are 4G and lower.
	>- (4) A firewall might be blocking port 1883. If so, please unblock port 1883.

<br/>

##About the Practice of Webduino 

- ###1. The Webduino development board is connected to Wi-Fi, but there is no response from the board.

	>- (1) Please check the I/O pins, they might be mis-connected.
	>- (2) Please check the console, there might be errors.
	>- (3) **Please burn the correct firmware**, check the tutorial: [Arduino Firmware Download/Burn for further instructions](info-07-arduino-ino.html)。

- ###2. Can the Webduino developmet board be controlled by bluetooth or serial port?

	>Yes! You can choose "Wi-Fi", "Bluetooth", or "Serial Port" on the Board block in Webduino Blockly. You just need to install 1 app and 1 extension on Google Chrome. Check the tutorial: [Instructions for Chrome API Proxy Settings for further instructions.](info-05-chrome-api-proxy.html)

<br/>

##About Webduino Service

- ###1. Is it possible to invite the Webduino development team for lectures or training?

	>Of course! We have organized over one hundred lectures and workshops all around Taiwan. For any enquiries, please contact us at service [service@webduino.io](mailto:service@webduino.io)

- ###2. Where to search for answers?

	>- (1) Post your questions on the [Webduino Facebook Page](https://www.facebook.com/webduino/) 
	>- (2) Email to us at [service@webduino.io](mailto:service@webduino.io) 
	>- (3) Contact us via phone at +886-7-3388511

- ###3. Are all the codes open source?

	>Webduino has a comprehensive open source plan that is currently implemented in three phases. **The first phase is to open the front-end code and put it on Github.** The second phase is to open the back-end code, and last the third phase, is to open the firmware code of the development board. We are  on stage 1 and working toward stage 2. All of our open source codes are on the Github repo. ([https://github.com/webduinoio](https://github.com/webduinoio))

- ###4. Is it possible to purchase the private cloud from Webduino?

	>Yes. For any enquiry, please email us at [service@webduino.io](mailto:service@webduino.io)

- ###5. Are there more Project Examples for other sensors and components in the future?

	>- (1) We are always working on new tutorials for you! Please follow our Facebook Page and Official Website for updates.
	>- (2) Check our Source Code on Github. Or develop your own WebComponent at [https://github.com/webduinoio](https://github.com/webduinoio) 
	>- (3) Post your requests on our [Facebook Page](https://www.facebook.com/webduino/)



<!-- @@close-->