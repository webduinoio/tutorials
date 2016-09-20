---
tag: info
src: info-04-uno-setup.html
title: Webduino Fly Initialization Setup
banner: info-04-01.jpg
img: info-04-01s.jpg
date: 20160918
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Webduino Fly Initialization Setup :::: Webduino = Web × Arduino</title>

<meta name="description" content="Before you start using Webduino Fly(Uno Extension Board), the most critical step is the initialization setup. Uno Extension Board equips your Arduino UNO with wifi, facilitating the complete Webduino functions. This initialization setup is the same logic as mobile wifi settings. Every device requires a setup process before connecting to the wifi, so do Webduino boards.
">

<meta itemprop="description" content="Before you start using Webduino Fly(Uno Extension Board), the most critical step is the initialization setup. Uno Extension Board equips your Arduino UNO with wifi, facilitating the complete Webduino functions. This initialization setup is the same logic as mobile wifi settings. Every device requires a setup process before connecting to the wifi, so do Webduino boards.
">

<meta property="og:description" content="Before you start using Webduino Fly(Uno Extension Board), the most critical step is the initialization setup. Uno Extension Board equips your Arduino UNO with wifi, facilitating the complete Webduino functions. This initialization setup is the same logic as mobile wifi settings. Every device requires a setup process before connecting to the wifi, so do Webduino boards.
">

<meta property="og:title" content="Webduino Fly Initialization Setup" >

<meta property="og:url" content="https://webduino.io/tutorials/info-04-uno-setup.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/info-04-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/info-04-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->


<!-- @@block  =  tutorials-->
# Webduino Fly Initialization Setup

Before you start using Webduino Fly(Uno Extension Board), the most critical step is the initialization setup. Uno Extension Board equips your Arduino UNO with wifi, facilitating the complete Webduino functions. This initialization setup is the same logic as mobile wifi settings. Every device requires a setup process before connecting to the wifi, so do Webduino boards.

## Webduino Fly Initialization Step by step 

- ### 1. Assemble two boards, “Wedduino Fly” and “Arduino UNO”

	Assemble two boards, “Wedduino Fly” and “Arduino UNO”, creating your “Webduino UNO”.

	![Webduino Fly Initialization Setup](../../img/tutorials/info-04-02.jpg)

	![Webduino Fly Initialization Setup](../../img/tutorials/info-04-03.jpg)

- ### 2. Start Initialization

	There is a switch on Webduino Fly board. Switch to STA pattern, Turn the power on and start initialization set-up.

	![Webduino Fly Initialization Setup](../../img/tutorials/info-04-04.jpg)

- ### 3. Search for Webduino Board by Using wifi

	Search the SSID name of Webduino board on a computer or mobile device by using wifi network. After key-in the password ( default is 12345678 ), this computer or mobile device can connect to Webduino board. **The SSID of Webduino board is used to be [wa...].** ( such as wa101 )

	![Webduino Fly Initialization Setup](../../img/tutorials/info-04-05.jpg)


- ### 4. Connect to Webduino board to setup

	Open a window of Google Chrome or Safari and type-in web address "<b>http://192.168.4.1</b>" Then you will be directed to the set-up page. Type-in the SSID and PASSWORD of Wi-Fi at home, in office, or shared by a mobile device. ( Note that, SSID here is referring to the SSID of wifi **not the SSID name of Webduino board**. The maximum SSID and PASSWORD length is 14 characters, this one allows letters and numbers only. )

	![Webduino Fly Initialization Setup](../../img/tutorials/info-04-06.jpg)

- ### 5. Reboot Webduino UNO board

	After type-in SSID and PASSWORD, press “send”. Webduino is initialized and can be connected to the Wi-Fi at home, in office or on portable device if  “OK” shows on screen. (If no “OK” shows on screen, please go back to Step 2 and start over the setup.)

	![Webduino - Reboot Webduino board](../../img/tutorials/info-04-07.jpg)

	When “OK” shows on screen, **remove power on Webdiono board and switch to AP.** Then connect power and reboot.

	![Webduino - Reboot Webduino board](../../img/tutorials/info-04-08.jpg)

- ### 6. Confirm the connection

	Reboot Webduino board, then, switch to normal Internet connection on a computer or mobile device. Open the page of [https://webduino.io/device.html](https://webduino.io/device.html) and then type-in the name of device to check the connection. **When seeing “OK” on the screen, you can start using Webduino.** ( If there is no response from Webduino board, you need to reboot Webduino board or set up from step2. )

	![Webduino - Confirm the connection](../../img/tutorials/info-04-09.jpg)

	Check LED red light on the board is easier to determine whether the initialization is successful or not. **The light will be off when connecting successfully.** However, the light will keep blinking when connecting unsuccessfully. In this case, please reboot Webduino board or reconnect power and start setting up from step2.

	![Webduino - Confirm the connection](../../img/tutorials/info-04-10.jpg)

- ### 7. Connect Webduino Board to Wi-Fi Successfully

	Webduino can connect to Wi-Fi at home, in office or on a mobile device, and also connect to cloud server automatically. Now, let's start to try Webduino via Wi-Fi.  ( Check our [first Tutorial](tutorial-01-led.html) )

- ### 8. Announcement

	Webduino follows the protocol of Arduino Firmata, meaning that Ariduino itself **has to burn Firmata firmwares**. We recommend you to check the lists from Arduino Official Website. (Arduino IDE > File >Examples > Firmata>StandardFirmata) 

	![Webduino Fly Initialization Setup](../../img/tutorials/info-05-08.jpg)

## Compiling errors of Arduino IDE 1.6.7 

Some users met compiling errors when using Arduino IDE 1.6.7, because of incompatibilities between different versions. In this case, there are incompatibilities between Firmata 2.4.4 and 2.5.1. You can reinstall the version 1.6.6 or 1.6.5, ( Download here: [https://www.arduino.cc/en/Main/OldSoftwareReleases#previous](https://www.arduino.cc/en/Main/OldSoftwareReleases#previous) ) or **reinstall Firmata 2.4.4 or 2.4.3 though the following steps**.

Step 1: Open Library Manager (Sketch>Include Library>Manage Libraries)

![Webduino UNO Extension Board Initialization Setup](../../img/tutorials/info-07-10.jpg)

Step 2: Search ”Firmata”, check if your version is 2.5.1.

![Webduino UNO Extension Board Initialization Setup](../../img/tutorials/info-07-12.jpg)

Step 3: Choose Firmata version 2.4.4 or 2.4.3, and the press “Install”. Now you reinstall the older version, and can process burning firmwares!

![Webduino UNO Extension Board Initialization Setup](../../img/tutorials/info-07-13.jpg)


<!-- @@close-->