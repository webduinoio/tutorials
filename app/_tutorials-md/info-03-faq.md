---
tag: info
src: info-03-faq.html
title: 常見問題與處理
banner: info-03-01.jpg
img: info-03-01s.jpg
date: 20150425
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>常見問題與處理 :::: Webduino = Web × Arduino</title>

<meta name="description" content="在接觸 Webduino 的初期，每個人都會遭遇到大大小小不同的問題，這個頁面裡頭會列出許多常見的問題，以及各種問題對應的解決方法，如果有其他的問題，也可以直接 email 給我們。">

<meta itemprop="description" content="在接觸 Webduino 的初期，每個人都會遭遇到大大小小不同的問題，這個頁面裡頭會列出許多常見的問題，以及各種問題對應的解決方法，如果有其他的問題，也可以直接 email 給我們。">

<meta property="og:description" content="在接觸 Webduino 的初期，每個人都會遭遇到大大小小不同的問題，這個頁面裡頭會列出許多常見的問題，以及各種問題對應的解決方法，如果有其他的問題，也可以直接 email 給我們。">

<link rel="canonical" href="https://tutorials.webduino.io/zh-tw/docs/faq/index.html">

<meta property="og:title" content="Webduino 常見問題與處理" >

<meta property="og:url" content="https://webduino.io/tutorials/info-03-faq.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/info-03-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/info-03-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  preAndNext-->

<include src="../_include-tutorials-content.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->

#常見問題與處理

在接觸 Webduino 的初期，每個人都會遭遇到大大小小不同的問題，這個頁面裡頭會列出許多常見的問題，以及各種問題對應的解決方法，如果有其他的問題，也可以直接 [email](mailto:service@webduino.io) 給我們，或是在最下面留言也可以。

<br/>

##關於 Webduino

- ###1. Webduino 和 Webduino 開發板有差別嗎？

	> Webduino 是我們正進行的服務，字面意思即是 Web x Arduino，而 Webduino 開發板是服務內的硬體產品，目前有 Webduino 馬克 1 號、Webduino Fly 以及 Webduino Smart 三種型號。

- ###2. 馬克 1 號和 Fly 的差別在哪裡？

	>馬克 1 號是 Arduino Pro mini + Wifi 模組，**可以獨立運作**，而 Fly 是 Arduino UNO 的 Wifi 擴充板，**必須搭配 Arduino UNO 才可運作**。( 馬克 1 號引出來的腳位比較少，而 Fly 具備完整的 UNO 腳位 )

- ###3. Webduino 要撰寫哪種程式來控制？

	>Webduino 顧名思義只要撰寫網頁語法 ( JavaScript ) 就可以控制，所以除了可以跑在網頁前端 ( 瀏覽器端 )，亦可運作於後端 ( NodeJS )。

- ###4. 既然是用網頁語法控制，還需要燒錄 Arduino 韌體嗎？

	>在 Arduino 端**必須**燒錄 Firmata 相關韌體，如果是使用 Webduino 馬克 1 號，已經內建對應的韌體，如果是 Webduino Fly，可以參考：[Arduino 韌體下載與燒錄](https://webduino.io/tutorials/info-07-arduino-ino.html)，有詳細的燒錄介紹。( 未來雲端燒錄服務推出後，就可以直接線上更新韌體 )

- ###5. Webduino 可否在瀏覽器關掉的狀態下運行？

	>不行，如果要在瀏覽器關掉的狀態下運行，例如 24 小時監控...等，**必須要讓程式跑在後端** ( NodeJS )，但如果是單純操控電燈、門鎖...等必須有畫面的程式則不用擔心 ( 因為一定會打開瀏覽器或是 APP 畫面 )。

- ###6. 我用了 Webduino 有什麼好處？

	>- (1) 不需要學習艱難的 C 或 C++。
	>- (2) 由於網頁可直接由瀏覽器呈現，進一步更能轉換成 APP，輕鬆實現跨平台功能！
	>- (3) 更容易的跨足物聯網體驗開發，滿足各種天馬行空創意的發想。
	>- (4) 輕鬆結合網路上各種服務 ( Youtube、氣象、股票、匯率...等 )。
	>- (5) 無痛實現遠端控制，就算人在國外也可以遙控家裡的電器用品。

<br/>

##購買 Webduino

- ###1. 如何購買 Webduino？

	>- (1) 報名 Webduino 課程，部分課程會附贈有基本的開發材料包。
	>- (2) 我們使用露天購物平台，可以直接在 [https://webduino.io/buy.html](https://webduino.io/buy.html) 找到我們所有的商品。
	>- (3)  Webduino 海外通路即將在 2017 推出了，海外的朋友敬請期待喔～

- ###2. Webduino 教育暨企業合作方案

	>Webduino 提供教育與企業的合作方案，會包含更豐富的教材與內容，以專題和解決方案的實際課程，提供教師、學生或企業用戶最完整的學習體驗，若您有相關的需求，可直接來信 [service@webduino.io](mailto:service@webduino.io) 洽詢相關合作方式。

<br/>

##Webduino 初始化設定

- ###1. 為什麼要初始化？

	>因為 Webduino 開發板是透過網路連線控制，因此必須要透過初始化設定，讓 Webduino 可以自動連上網路。

- ###2. 我的網路需要認證，可以使用 Webduino 嗎？

	>Webduino 開發板目前僅支援 WPA/WPA2 認證 ( 只需 SSID 與 Password )，不支援其他認證模式 ( 身分證、教職員證...等 )。

- ###3. Webduino 的 SSID 與家裡 Wi-Fi 的 SSID 差異？

	>- (1) 通常在初始化設定的時候，很容易把 Webduino 的 SSID 與家裡 Wi-Fi 的 SSID 搞混，**Webduino 的 SSID 是這塊開發板的名稱。** ( 通常是 wa + 數字，例如 wa101、wa999，並且會寫在裝置說明卡裡頭。 )
	>- (2) 當你連結 Webduino 開發板的 SSID，表示我們可以透過「192.168.4.1」連結上 Webduino 開發板，**連結上開發板之後，所看到的 SSID 與 PASSWORD，指的就是家裡、公司環境或行動裝置分享的 Wi-Fi SSID 與密碼**，千萬不要搞錯了。

- ###4. 為什麼在 Wi-Fi 搜尋看不到 Webduino 開發板的 SSID？

	>- (1) 可能開關處在 AP 模式，將開關扳至 STA 模式再試一次，馬克 1 號可以參考「[Webduino 初始化設定](info-02-setup.html)」，Webduino Fly 可以參考「[Webduino Fly 初始化設定](info-04-uno-setup.html)」。
	>- (2) 可能是電池沒電了，建議更換電池或改用 usb 供電。

- ###5. 為什麼 Wi-Fi 看到 Webduino 開發板，但連線卻出現錯誤

	>因為部分 Android 行動裝置或 Windows 電腦，認為 Webduino 開發板不具備無線網路基地台的功能 ( Webduino 開發板原本就不是網路基地台 )，所以會強制進行斷線的指令，此時的處理方法如下：

	>- (1) Step.1：**忘記**原本已連線的網路設定 ( 公司、環境或家用 Wi-Fi )
	>- (2) Step.2：**忘記** Webduino 的連線設定 ( 如果你已經有嘗試連線過但出現錯誤 )
	>- (3) Step.3：重新用 Wi-Fi 搜尋並連結 Webduino 開發板

- ###6. 初始化之後，在 device 的網頁看不到對應的 Webduino 開發板名稱？

	>- (1) 可能是您沒有輸入正確的 Wi-Fi SSID 與 PASSWORD。
	>- (2) 可能是 Wi-Fi 的 SSID 與 PASSWORD 內含特殊字元或長度太長。 ( **只接受大小寫 14 個字元的英文字母與數字的組合** )
	>- (3) Webduino 不支援 5G 網路連線，可以先換另外一個無線網路嘗試連線 ( 可先使用手機熱點、另外一台無線網路...等進行確認 )。
	>- (4) 可能是防火牆問題，請確認防火牆是否阻擋 port 1883，如果有，請開啟 port 1883。

<br/>

##Webduino 操作相關

- ###1. 為什麼 Webduino 開發板已經確認上線，但卻不能控制？

	>- (1) 可能腳位接錯，請重新確認腳位。
	>- (2) 可能是程式碼寫錯，請確認程式碼是否報錯。
	>- (3) **可能沒有燒錄對應的韌體**，請參考 [Arduino 韌體下載與燒錄](info-07-arduino-ino.html)。

- ###2. 為什麼在 Blockly 的教學範例，有些積木在編輯工具看不到？

	>在 Blockly 的一步步教學範例裡頭 ( [連結](https://blockly.webduino.io/index-tutorials.html) )，使用的積木較單純，目的是讓新手或學生，可以熟悉每個程式積木的用法，部分「教學積木」已經經過封裝，較為單純，然而在 Blockly 編輯工具的程式積木是實際會用到的積木，所以會有一些差別。

- ###3. Webduino 可以使用藍芽或序列埠控制嗎？

	>可以！在 Webduino Blockly 的開發板積木也可以選擇「Wi-Fi」、「藍芽」或「序列埠」，但 Chrome 必須先安裝兩隻 APP，請參考 [Chrome API Proxy 使用說明](info-05-chrome-api-proxy.html)，有完整教學。

<br/>

##Webduino 服務相關

- ###1. 可以請 Webduino 來授課或教育訓練嗎？

	>我們北中南已經辦過超過一百場的課程、進行過五六十場研習活動，**若公司行號、政府機關或教育單位有教育訓練或教育研習的需求，都可以委請我們進行授課**，相關合作方式，可直接來信 [service@webduino.io](mailto:service@webduino.io) 洽詢相關合作方式。。

- ###2. 如果使用上有問題要怎麼辦？

	>- (1) 從 Webduino 粉絲團發訊息詢問 ( [前往粉絲團](https://www.facebook.com/webduino/) )。
	>- (2) 加入 Webduino 技術討論社團進行討論 ( [前往技術討論社團](https://www.facebook.com/groups/797598203642584) )。
	>- (3) 寫信給我們 ( [service@webduino.io](mailto:service@webduino.io) )。
	>- (4) 打電話給我們 ( 07-3388511 )。

- ###3. Webduino 的程式碼是否有 Open Source？

	>Webduino 有全面 Open Source 的規劃，目前分為三個階段執行，**第一階段是 Open 網頁前端所有 Source Code 並放到 Github**，第二階段將 Open 後端 Server 程式碼，第三階段才是 Arduino上韌體程式的 Open Source。目前是第一階段，第二階段與第三階段尚未開始，目前已經 Open Source 的檔案均放在 Github 裡 ( 網址：[https://github.com/webduinoio](https://github.com/webduinoio) )。

- ###4. 是否可以架設自己的伺服器？

	>Webduino 的伺服器方案，目前僅提供大量購買、學校或企業使用，若您有架設後端伺服器的需求，請來信 [service@webduino.io](mailto:service@webduino.io) 洽詢相關合作方式。

- ###5. 範例裡頭沒有我想要的傳感器或元件怎麼辦？

	>- (1) 我們正在努力趕工相關電子零件與傳感器的程式元件，有最新的消息都會在粉絲團與網站上公告。
	>- (2) 您可以由我們的 Github 閱讀相關傳感器或元件的 Source Code，您也可以自行開發相關傳感器或元件的 WebComponent ( 網址：[https://github.com/webduinoio](https://github.com/webduinoio) )。
	>- (3) 到[粉絲團](https://www.facebook.com/webduino/)發訊息，或[技術討論社團](https://www.facebook.com/groups/797598203642584)討論，如果有很多人跟你有一樣的需求，我們可能就會立即排入工作項。



<!-- @@close-->