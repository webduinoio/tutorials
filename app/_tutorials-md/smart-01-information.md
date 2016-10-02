---
tag: smart
src: smart-01-information.html
title: 認識 Webduino Smart
banner: smart-01-information.jpg
img: smart-01-information-s.jpg
date: 20161001
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>認識 Webduino Smart :::: Webduino = Web × Arduino</title>

<meta name="description" content="Webduino Smart 是 2016 年推出的物聯網開發板，有別於過去馬克 1 號和 Fly 需要搭配 Arduino 才能運作，Smart 可以自行獨立運作，同時也具備連上網際網路 (Internet) 和透過區域網路 ( WebSocket ) 操控的能力，相信更能有效地應用在物聯網的開發和各種創意上！">

<meta itemprop="description" content="Webduino Smart 是 2016 年推出的物聯網開發板，有別於過去馬克 1 號和 Fly 需要搭配 Arduino 才能運作，Smart 可以自行獨立運作，同時也具備連上網際網路 (Internet) 和透過區域網路 ( WebSocket ) 操控的能力，相信更能有效地應用在物聯網的開發和各種創意上！">

<meta property="og:description" content="Webduino Smart 是 2016 年推出的物聯網開發板，有別於過去馬克 1 號和 Fly 需要搭配 Arduino 才能運作，Smart 可以自行獨立運作，同時也具備連上網際網路 (Internet) 和透過區域網路 ( WebSocket ) 操控的能力，相信更能有效地應用在物聯網的開發和各種創意上！">

<meta property="og:title" content="認識 Webduino Smart" >

<meta property="og:url" content="https://webduino.io/tutorials/smart-01-information.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/smart-01-information-s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/smart-01-information-s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
# 認識 Webduino Smart

Webduino Smart 是 2016 年推出的物聯網開發板，有別於過去馬克 1 號和 Fly 需要搭配 Arduino 才能運作，Smart 可以自行獨立運作，同時也具備連上網際網路 ( Internet ) 和透過區域網路 ( WebSocket ) 操控的能力，相信更能有效地應用在物聯網的開發和各種創意上！

## 外觀介紹

Webduino Smart 是一塊長 3 公分寬 2.5 公分的開發板，重量約 85 公克，腳位有數位腳 0、2、4、5、14、16，PWM 腳位 12、13、15，類比腳 AD ( A0 )，其他腳位 TX、RX、3.3V、VCC、RST 和 GND 各 1 個。

正面與背面：

![](../img/tutorials/smart-01-02.jpg)

360 度照片：

![](../img/tutorials/smart-01-03.gif)

大小對照 ( 左邊是四號電池和三號電池 )：

![](../img/tutorials/smart-01-04.jpg)

<br/>

## 預設元件和腳位介紹

開發板內建一個光敏電阻、一個三色燈和一個微型按鈕開關，其中 AD 腳位預設供給光敏電阻使用，三色 LED 燈的紅色使用 15 號腳、綠色使用 12 號腳、藍色使用 13 號腳 ( **三色 LED 燈為「共陰」，在官網其他範例外接的三色 LED 為「共陽」** )，而一個微型按鈕開關則使用了 4 號腳位，使用的時候要特別注意。

![](../img/tutorials/smart-01-05.jpg)

<br/>

## Webdino 系列產品照片

從左邊數來分別是 Webduino Smart、Webduino 馬克 1 號、Webduino Fly。

![](../img/tutorials/smart-01-06.jpg)



<!-- @@close-->