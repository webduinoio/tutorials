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

<br/>

## 預設元件和腳位介紹

Webduino Smart 是一塊長 3 公分寬 2.5 公分的開發板，重量約 85 公克，腳位有數位腳 0、2、4、5、14、16，PWM 腳位 12、13、15，類比腳 AD ( A0 )，其他腳位 TX、RX、3.3V、VCC、RST 和 GND 各 1 個。

開發板內建一個光敏電阻、一個三色燈和一個微型按鈕開關，其中 AD 腳位預設供給光敏電阻使用，三色 LED 燈的紅色使用 15 號腳、綠色使用 12 號腳、藍色使用 13 號腳 ( **三色 LED 燈為「共陰」，在官網其他範例外接的三色 LED 為「共陽」** )，而一個微型按鈕開關則使用了 4 號腳位，使用的時候要特別注意。

![](../img/tutorials/smart-01-05.jpg)

## 外觀介紹

大小對照 ( 左邊是四號電池和三號電池 )：

![](../img/tutorials/smart-01-04.jpg)

360 度照片：

![](../img/tutorials/smart-01-03.gif)

<br/>

## 更換 Smart 腳位貼紙

若覺得原本貼在 Smart 開發板上的貼紙比較不好看，可更換包裝內的腳位貼紙，腳位貼紙分為**「左邊外側 L in」、「左邊內側 L out」、「右邊內側 R in」和「右邊外側 R out」**，左右邊的識別**以 Smart 的 Webduino Logo 朝上做左右邊區分**，使用者可自行用剪刀剪開後黏貼。

![](../img/tutorials/smart-01-09.jpg)

若要更換貼紙，只需撕下原本的白色腳位貼紙，再將新的黑色貼紙貼上即可，**數字與英文字對齊的邊緣朝上貼**，可參考上方 360 度照片，千萬要注意左右邊、內外側不要貼錯了！

![](../img/tutorials/smart-01-10.jpg)


<br/>

## Webdino 開發板差異對照表

<style>
.tutorials-content table.chart{
  border-collapse:collapse;
  border:5px solid #000;
  font-size:16px;
}
.tutorials-content table.chart tr th{
  padding:20px 10px;
  margin:0;
  max-width:200px;
  border-width:0 1px 1px;
  border-style:solid;
  border-color:#666;
  font-weight:bold;
  background:#333;
  color:#fff;
}
.tutorials-content table.chart tr td{
  padding:15px 10px;
  margin:0;
  max-width:200px;
  border-width:1px;
  border-style:solid;
  border-color:#ccc;
  line-height:22px;
  text-align:center;
  background:#fff;
  color:#000;
}
.tutorials-content table.chart tr td img{
  width:100%;
}
@media (max-width: 400px) {
  
  .tutorials-content table.chart tr th{
    padding:4px 1px;
    font-size:12px;
  }
  .tutorials-content table.chart tr td{
    font-size:12px;
    padding:4px 1px;
  line-height:18px;
  }
}
</style>

<table class="chart">
    <tr>
      <th></th>
      <th>Smart</th>
      <th>馬克 1</th>
      <th>Fly</th>
  </tr>
    <tr>
      <td>照片</td>
      <td><img src="../img/tutorials/smart-01-07-smart.jpg"></td>
      <td><img src="../img/tutorials/smart-01-07-mark1.jpg"></td>
      <td><img src="../img/tutorials/smart-01-07-fly.jpg"></td>
  </tr>
    <tr>
      <td>體積</td>
      <td>小</td>
      <td>略小</td>
      <td>中</td>
  </tr>
    <tr>
      <td>尺寸</td>
      <td>3cm x 2.5cm x 1cm</td>
      <td>4.5cm x 4cm x 2cm</td>
      <td>6.5cm x 5cm x 2cm</td>
  </tr>
    <tr>
      <td>價格</td>
      <td>預計小於 NT$ 300</td>
      <td>NT$ 840</td>
      <td>NT$ 840</td>
  </tr>
    <tr>
      <td>獨立運行</td>
      <td>O</td>
      <td>O</td>
      <td>需搭配<br/>
Arduino UNO</td>
  </tr>
    <tr>
      <td>Webduino Blockly</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>雲端 ( 遠端 ) 更新</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>Internet</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>WebSocket</td>
      <td>O</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
  </tr>
    <tr>
      <td>藍芽</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>序列埠</td>
      <td>X</td>
      <td>X</td>
      <td>O</td>
  </tr>
    <tr>
      <td>韌體 OpenSource</td>
      <td>X</td>
      <td>Arduino 端</td>
      <td>Arduino 端</td>
  </tr>
    <tr>
      <td>內建元件</td>
      <td>三色 LED ( 共陰 )<br/>
光敏電阻<br/>
微型按鈕開關</td>
      <td>蜂鳴器</td>
      <td>X</td>
  </tr>
    <tr>
      <td>LED<br/>
三色 LED<br/>
繼電器<br/>
光敏電阻<br/>
按鈕開關<br/>
震動開關</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>溫濕度<br/>
LED 點矩陣<br/>
伺服馬達<br/>
人體紅外線偵測<br/>
聲音偵測<br/>
超音波距離偵測<br/>
蜂鳴器</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>紅外線發射接收</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
  </tr>
    <tr>
      <td>RFID<br/>
三軸加速度計</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
      <td>X</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
  </tr>
    <tr>
      <td>土壤偵測<br/>
可變電阻</td>
      <td>X</td>
      <td>O</td>
      <td>O</td>
  </tr>
    <tr>
      <td>搖桿</td>
      <td>X</td>
      <td>X</td>
      <td>遠端更新後支援<br/>( 需註冊雲端平台帳號 )</td>
  </tr>
  </table>



<!-- @@close-->