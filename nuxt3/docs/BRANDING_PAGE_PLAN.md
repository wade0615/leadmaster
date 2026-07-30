# 全站頁面分工與敘事設計建議（scroll-world × cobe）

> 撰寫日期：2026-07-30。承接 `BRANDING_3D_RESOURCES.md` 的資源評估結論，進一步定義各 route 的分工與整合方式。
> 本文件為設計建議，尚未動工。

## 設計原則：敘事頁與功能頁二分

全站五個 route 依性質分成兩組，各用一種設計語言：

| 分組 | Route | 定位 | 3D 主角 |
| ---- | ---- | ---- | ---- |
| 敘事頁 | `/` | 體驗與能力展示 | scroll-world 滾動動線之旅 |
| 敘事頁 | `/about` | 信任與底蘊 | cobe 地球儀 |
| 功能頁 | `/projects` | 實績查閱 | 無（照片為主角） |
| 功能頁 | `/agent` | 代理品牌查閱 | 無（預留未來 3D 設備展示） |
| 功能頁 | `/recruitment` | 招募資訊 | 無 |

核心規則：**敘事頁每頁只放一個 3D 主秀，route 不合併。**

## 關鍵前提：/about 是服務關鍵字著陸頁

`/about` 的 SEO meta 為「關於我們**與服務項目**｜廚房設計・HACCP・酒吧顧問」，八個內容段落有一半承載服務關鍵字（規劃提案、空間設計／HACCP、維修維護、食品加工廠設計）。它是刻意經營的**服務關鍵字著陸頁**，不是普通的公司沿革頁。

因此不採「/ 與 /about 合併為單一長捲軸頁」：

- 合併會犧牲「廚房設計」「HACCP 顧問」「酒吧顧問」等搜尋字的獨立著陸面，SEO 成本高。
- scroll-world 影片鏈本身很重，同頁再疊地球儀＋八段內容，載入量與滾動長度會失控。
- scroll-world 影片鏈為按次付費產製，只產一條、只放首頁；兩個 route 各跑一條則成本翻倍。

## 敘事頁架構

### `/`（首頁）— scroll-world 的舞台

```
├─ ScrollJourney：滾動穿越飯店動線（大門 → 宴會廳 → 開放式廚房 → 後場）
│    收尾場景：鏡頭從廚房後退、拉出建築、升上城市上空
├─ 「認識立麥 →」CTA（連 /about，承接收尾的宏觀視角）
├─ 實績精選（連 /projects）
├─ 代理品牌精選（連 /agent）
└─ Contact CTA
```

- 契合點：立麥核心賣點是「廚房**動線**規劃」，滾動運鏡正是「沿動線穿越空間」，把專業本身做成體驗。
- 滾動距離約 300–500vh，之後接一般區塊。

### `/about` — cobe 地球儀的舞台

```
├─ GlobeSection 開場：國際品牌與酒店集團弧線收斂到台灣
│    （正好呼應「多元代理」段落的內容）
├─ 現有八段內容改版：統一敘事版式＋scroll-triggered 淡入
└─ Contact CTA
```

- 地球儀鎖定台灣：`phi`／`theta` 對準（約東經 121°、北緯 23.5°），`scale`／`offset` 調整構圖；自轉改為以台灣為中心的小幅擺盪。
- 弧線敘事：「全世界的設備與標準，匯聚到台灣的案場」——德國（MKN、Rational、Winterhalter）、芬蘭（HALTON）、美國（Hobart、Hatco、Cambro）、義大利（Angelo Po、Dalla Corte）、日本（Hoshizaki）、西班牙（Zumex），加上 Marriott、Hyatt（美國）、IHG（英國）集團總部 → 台灣。
- 城市層級的案場分布不在地球儀上呈現（尺度太小會擠成一團），留給 `/projects` 的真實照片。

### 跨頁敘事銜接：微觀 → 宏觀

首頁旅程收尾「鏡頭拉遠、升上城市上空」→ CTA「認識立麥 →」→ 進入 `/about` 由地球儀承接宏觀視角。微觀到宏觀的敘事跨頁完成，中間隔一次點擊，換來兩頁 SEO 完整保留、每頁載重合理、兩個 3D 主秀不互搶。

## 功能頁風格對齊

三個功能頁維持獨立 route，靠統一的設計語言與敘事頁連成一體：

- **共用設計語言**：統一標題系統（沿用 Vollkorn 英文標題）、間距與版面節奏；Nav 與 Footer 全站統一，是黏合兩種頁面型態的膠水。
- **統一動效語言**：全站同一套 scroll-triggered 淡入／視差微動效（IntersectionObserver 即可實作），讓功能頁與敘事頁有同一種「呼吸」，但不搶戲，照片仍是主角。
- **各頁改動量**：
  - `/projects`：最小。照片牆與互動樣式已就位，套統一版面框架與標題節奏即可。
  - `/agent`：將現有 Features 列表改為更精緻的展架式網格，並為 `BRANDING_3D_RESOURCES.md` 第三優先的 3D 設備展示預留位置。
  - `/recruitment`：最輕，套用標題系統與動效即可。

## 共通技術注意事項

- 全站為 SSG：scroll-world scrub engine 與 cobe 均須走 `<ClientOnly>` 或 client-only plugin。
- 首頁 hero 改造須顧 LCP 與既有 SEO 優勢；影片鏈 lazy-load。
- `prefers-reduced-motion` 降級；行動裝置 fallback 為靜態圖（scroll-world 另有 9:16 直式鏈可選，屬加購項）。
- 其餘資源層面的評估（工具性質、成本、優先順序）見 `BRANDING_3D_RESOURCES.md`。
