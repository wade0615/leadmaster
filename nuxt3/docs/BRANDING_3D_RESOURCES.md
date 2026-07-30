# 3D／互動資源評估與 Branding 提升建議

> 評估日期：2026-07-30。針對五項外部資源進行研究，評估應用於官網全面性 branding 提升的可行性與搭配方式。
> 本文件為評估紀錄，尚未動工；實作優先順序見文末。

## 專案現況摘要

- Nuxt 3 + Tailwind + Sass，靜態生成（`nuxt generate`），含 PWA 與 sitemap，SEO 為現有優勢。
- 五個頁面：首頁（全螢幕照片輪播）、實績 `/projects`（五星飯店案場＋照片牆）、代理品牌 `/agent`（13+ 國際品牌圖文列表）、關於、招募。
- 目前**零 3D／WebGL 依賴**，屬輕量照片型形象站。
- 受眾為飯店採購與 F&B 決策者（B2B），「專業與實在感」優先於視覺炫技；真實案場照片是最強資產。**3D 應為強化敘事的點綴，而非取代照片的主體。**

## 資源評估總覽

| 資源 | 性質 | 可直接使用 | 建議優先度 |
| ---- | ---- | ---- | ---- |
| [cobe](https://github.com/shuding/cobe) | WebGL 地球儀函式庫 | ✅ 裝了就能用 | ⭐ 第一優先 |
| [scroll-world](https://github.com/oso95/scroll-world) | AI 影片產製 pipeline（Claude Code plugin） | 開發期工具 | 第二優先 |
| [complete-shelf](https://github.com/mintdotgg/mint-playground/tree/main/experiences/complete-shelf) | 3D 展示架參考範例（React 生態） | ❌ 僅概念可移植 | 第三優先（搭配 img2threejs） |
| [img2threejs](https://github.com/img2threejs/img2threejs) | 照片→Three.js 程序化模型（Claude Code skill） | 開發期工具 | 第三優先 |
| [threejsassets.com](https://threejsassets.com/assets?tier=free) | GLB 素材庫 | ✅ 但風格不合 | 暫不建議 |

## 各資源詳細說明

### 1. cobe — 可直接使用的函式庫

- 約 5KB、零依賴的 WebGL 互動地球儀，framework-agnostic：`createGlobe(canvas, config)` 一行初始化，Vue 中包成 client-only 元件即可。
- 支援在經緯度座標放 marker、畫城市間連線弧線；marker 可綁 DOM 做 CSS 動畫與互動。
- 五項資源中唯一「安裝即可上線」者，對現有輕量架構幾乎零負擔。

### 2. scroll-world — AI 影片產製 pipeline

- 產出「滾動驅動的無縫運鏡落地頁」：AI 生成等距場景圖 → 生成鏡頭從場景外飛入內部的影片與轉場片段 → 前端 scrub engine 將滾動位置映射到影片時間軸。
- Framework-agnostic（支援 Vue）；為**付費按次產製**，產出是影片而非即時 3D，風格為 AI 等距 diorama。
- 屬開發期工具，不會成為網站執行期依賴。

#### 計費方式與費用估算（調查日期：2026-07-30）

Skill 本身免費（MIT）、scrub engine 免費可自由嵌入；**費用全在 AI 產製環節，屬一次性成本、無月費**（Monid 為 pay-as-you-go，無訂閱、額度不歸零）。

錢花在三個地方（資料來源：repo `SKILL.md`）：

| 項目 | 服務 | 單價 |
| ---- | ---- | ---- |
| 場景靜圖 | Higgsfield（GPT Image 2）約 15 credits/張（≈US$0.8）；**有 ChatGPT 訂閱可走 Codex CLI = 免費** | 每場景 1 張 |
| 主影片（dive） | Monid（Seedance 2.0）按 token 計價 | 1080p 8 秒 ≈ US$2.99；720p ≈ US$1.21 |
| 轉場片（connector） | 同上 | 1080p 5 秒 ≈ US$1.87；720p ≈ US$0.76 |

產量公式：N 個場景 = **N 張靜圖 ＋ (2N−1) 支影片**（N 支 dive ＋ N−1 支轉場）。Skill 規定產前必須先報價、超過餘額 70% 不得自動開跑。

**套用到本站首頁動線之旅的估算（1080p 桌機版）：**

| 方案 | 影片數 | 影片費 | 靜圖 | 小計 |
| ---- | ---- | ---- | ---- | ---- |
| 4 場景（大門→宴會廳→廚房→後場） | 7 支 | ~US$17.6 | ~US$3 | **~US$21** |
| 5 場景（＋「拉遠升空」收尾，銜接 /about 敘事） | 9 支 | ~US$22.4 | ~US$4 | **~US$26** |
| 6 場景（再加酒吧或宴會細節） | 11 支 | ~US$27.3 | ~US$5 | **~US$32** |

**加項與風險：**

1. **重跑預算**：`SKILL.md` 明載室內場景易觸發 NSFW 誤判、需預算 2–5 支重跑——本站場景幾乎全是飯店室內，此項必然發生，抓 +US$5–15。
2. **手機直式版（9:16）為選配**：另產一條直式鏈，影片數翻倍 ≈ 影片費 ×2。
3. **美術方向不滿意的整鏈重做**是最大成本風險，以 draft 流程規避（見下）。

**省錢流程**：skill 內建 draft 層（480p ≈ US$0.3/支，或 seedance mini ≈ ¼ 價）。先用 draft 跑整鏈（約 US$3–5）確認運鏡與美術方向，滿意後才升 1080p 出正式版，把迭代成本鎖在 draft 層。

**總預算建議：**

- 桌機版：draft 驗證 ~US$5 ＋ 正式 5 場景 ~US$26 ＋ 重跑緩衝 ~US$8 ≈ **US$40（約 NT$1,300）以內**
- 桌機＋手機直式：≈ **US$65–70（約 NT$2,100–2,200）**
- 上線後無持續費用，僅剩自家影片流量；有 ChatGPT 訂閱則靜圖費歸零。

參考來源：[scroll-world SKILL.md](https://github.com/oso95/scroll-world/blob/main/skills/scroll-world/SKILL.md)、[Monid — Seedance 2.0 API](https://monid.ai/blog/seedance-2)、[Segmind — Seedance 2.0 Pricing](https://www.segmind.com/models/seedance-2.0/pricing)

### 3. mint-playground / complete-shelf — 參考範例

- Mint 官方示範專案：3D 書架上 19 本程序化生成的精裝書，點選可拿起旋轉、縮放、近看細節。
- 技術為 Next.js + React + Three.js + Mint MCP，**程式碼無法直接搬進 Nuxt**；價值在「展示架互動模式」（架上選取 → 拿近端詳）這個概念可移植。

### 4. img2threejs — 照片轉 3D 模型工具

- 將單張產品照重建為「純程式碼」的 Three.js 程序化模型（不需 mesh 檔、不用攝影測量），多階段 pipeline 含視覺比對迭代。
- 展示案例多為硬表面物件（耳機、刀具等）——廚房設備（蒸烤箱、咖啡機）同為硬表面物件，適性不錯。
- 屬開發期工具；實際進 bundle 的是 Three.js 與生成的模型程式碼。

### 5. threejsassets.com — GLB 素材庫

- 全 GLB + Draco 壓縮、可商用授權，免費層 112 個模型，單檔 2–17KB。
- 內容為 low-poly 卡通風（樹、車、農舍、路口），**與五星酒店的質感定位相斥**，僅適合未來搭 3D 場景時當背景配件。

## 建議搭配方案（依投報率排序）

### 第一優先：cobe 地球儀 →「國際客戶」區塊（首頁或 About）

- 將合作的國際連鎖集團（Marriott、IHG、凱悅）與案場城市（台北、板橋、嘉義、台中、台南）標成 marker，把「國際酒店餐飲設備顧問」的定位視覺化。
- 一個 `<ClientOnly>` 元件約半天可完成，成本最低、效果最穩。**最該先做。**

### 第二優先：scroll-world 概念 → 首頁 hero 滾動敘事

- 契合點：立麥核心賣點是「廚房**動線**規劃」，scroll-world 的效果正是「鏡頭沿動線穿越空間」——滾動帶觀眾從飯店大門 → 宴會廳 → 開放式廚房 → 後場動線，等於把專業本身做成體驗。取代現有照片輪播會是全站最大的視覺升級。
- 代價與對策：產製費用；影片載入量（需 lazy-load 與行動版 fallback）；AI 風格與真實案場照的落差——建議 hero 用它講故事，往下捲立刻接真實實績照片「兌現」。

### 第三優先（長期）：img2threejs ＋ complete-shelf 概念 → `/agent` 3D 設備展示

- 挑 2–3 件明星設備（如 Rational 蒸烤箱、Dalla Corte 咖啡機）用 img2threejs 從產品照重建為可旋轉檢視的 3D 模型，互動模式借鏡 complete-shelf。
- 對「設備代理商」的說服力直接，但工程量最大（引入 Three.js、逐台跑 pipeline、品質需迭代）。先做單一設備驗證效果即可。

### 暫不採用：threejsassets

- 風格與品牌定位相斥；僅在未來需要 3D 廚房 diorama 的便宜配角素材時再回頭考慮。

## 整合設計：scroll-world × cobe 如何共存

### scroll-world 不整站單頁化，只佔首頁開頭區段

scroll-world 的「多場景無縫串接」指的是**影片內的場景**（大門 → 宴會廳 → 廚房 → 後場），不是網站 route；它產出的本質是一段滾動控制進度的影片＋scrub engine，套用範圍可自由決定。

**不建議**把 `/about`、`/projects` 等子頁併成單頁滾動網站：

- 各頁獨立的 SEO meta（title／description／og）是既有刻意經營的資產，單頁化會全部失去。
- B2B 訪客常被業務直接給連結、直奔實績或代理品牌頁，敘事式長捲軸反而擋路。

**建議的首頁結構**（其他 route 維持獨立頁面不動）：

```
/（首頁）
├─ ScrollJourney  ← scroll-world：滾動穿越「一間飯店」的動線（約 300–500vh 滾動距離）
├─ GlobeSection   ← cobe：從「一間廚房」拉遠到「所有案場與國際品牌」
├─ 實績精選（現有 Featuretag，連 /projects）
├─ 代理品牌精選（連 /agent）
└─ Contact
```

### 銜接敘事：微觀 → 宏觀

scroll-world 的最後一個場景設計為「鏡頭從廚房後退、拉出建築、升到城市上空」的收尾；影片停在最後一格後，往下捲淡入 cobe 地球儀區塊。敘事上從「一個案場的動線」拉遠成「我們在哪些城市、與哪些國際集團合作」，兩者串接比各自單獨存在更有說服力。

### cobe 鎖定台灣的做法與敘事設計

技術上可行：

- `phi`／`theta` 初始值對準台灣（約東經 121°、北緯 23.5°），`scale` 放大、`offset` 偏移構圖，讓台灣正對觀眾且夠大。
- 自轉改為**以台灣為中心小幅度左右擺盪**（`onRender` 內以 sin 波動 phi），而非整顆持續旋轉。

限制：地球儀尺度下台灣很小，台北／板橋／台中／嘉義／台南五個 marker 會擠成一團——呈現「案場城市分布」是 2D 台灣地圖的工作，不是地球儀的。

因此敘事反轉——**不是「案子遍布全球」，而是「全世界的設備與標準，匯聚到台灣的案場」**：

- 用 cobe 的弧線（arc）從代理品牌原產國收斂到台灣：德國（MKN、Rational、Winterhalter）、芬蘭（HALTON）、美國（Hobart、Hatco、Cambro）、義大利（Angelo Po、Dalla Corte）、日本（Hoshizaki）、西班牙（Zumex）。
- 加上國際酒店集團總部弧線：Marriott、Hyatt（美國）、IHG（英國）→ 台灣。
- 台灣放明顯的金色 marker（沿用 `$leadmaster-gold`），球面配深色底呼應品牌色調。

如此「案例集中在台灣」從弱點變成論點：台灣是所有弧線的終點與視覺重心，呼應「國際酒店餐飲設備顧問」——國際的是標準與設備，落地的是台灣案場；城市層級分布留給 `/projects` 的真實照片。

## 共通技術注意事項

- 全站為 SSG：所有 WebGL／影片互動須走 `<ClientOnly>` 或 client-only plugin。
- 顧及 LCP 與現有 SEO 優勢（hero 改造尤其注意）；`prefers-reduced-motion` 需降級；行動裝置 fallback 為靜態圖。
- img2threejs 與 scroll-world 均為開發期產製工具，不進 bundle；實際執行期新增依賴僅 cobe（約 5KB）與（若做第三項）Three.js。
