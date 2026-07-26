# 版型優化計劃書

> 基於 2026-07-20 對 `nuxt3/` 新站的實測分析（外部連結逐一檢測、本地資源盤點、版型程式碼審查）。
> 依「訪客體感影響 × 施工成本」排出優先順序。

## 施工順序總覽

| 優先 | 項目 | 影響 | 預估工作量 |
| ---- | ------------------------------- | ------------------ | ---------- |
| P0 | 外部圖片本地化＋失效連結更新 | 版面破圖、死連結 | 半天～1 天 |
| P0 | 本地圖片壓縮＋導入 @nuxt/image | 載入速度（LCP） | 半天 |
| P0 | SEO 關鍵修正（空 title、lang、og:image、各頁 description） | 搜尋結果與社群分享 | 1～2 小時 |
| P1 | 載入 Noto Serif TC 字型 | 中文觀感 | 1 小時 |
| P2 | 版型小 bug 修正 | 局部間距／對齊 | 1 小時 |
| P2 | 無障礙與互動細節 | a11y、行動端 UX | 2～3 小時 |
| P2 | FB 客服替換、PWA icon 補齊或移除 | 死功能清理 | 1～2 小時 |
| P2 | SEO 結構強化（h1、canonical、JSON-LD、robots.txt） | 搜尋排名長期基礎 | 2～3 小時 |

---

## P0-1 外部圖片本地化＋失效連結更新

mockdata 中 38 個外部網址實測 **17 個已失效**（2026-07-20）。

### 失效清單

**圖片（載入即破圖）：**

| 狀態 | 網址 | 使用處 |
| ---- | ---------------------------------------------- | ---------------------- |
| 404 | tnimage.s3.hicloud.net.tw（君悅酒店圖） | projects |
| 404 | fullon-hotels.com.tw/upload/...（福容飯店圖） | projects |
| 404 | cache.marriott.com（W Taipei、萬豪台中 兩張） | projects |
| 404 | cdnimg.webstaurantstore.com（Hobart 圖） | agents |
| 404 | i.ytimg.com（YouTube 縮圖） | agents |
| 404 | monolithe.it（義式爐具圖) | agents |
| 404 | robot-coupe.com（產品圖） | agents |
| 404 | welbilt.com（Cleveland 品牌圖） | agents |

**外部連結（「了解更多」點擊後 404）：**

| 狀態 | 網址 | 使用處 |
| ---- | ------------------------------------ | -------- |
| 403 | hyatt.com 君悅酒店頁 | projects |
| 403 | marriott.com 萬豪台中頁 | projects |
| 404 | marriott.com W Taipei 頁 | projects |
| 404 | rational-online.com | agents |
| 404 | robot-coupe.com/france | agents |
| 404 | grillworksusa.com | agents |
| 404 | manitowocice.com/products | agents |
| 410 | angelopo.com | agents |

另：footer 的 104 人力銀行連結對 curl 回 403（疑似擋爬蟲），需人工用瀏覽器確認。

### 做法

1. 仍存活的圖片下載到 `assets/image/`（分 `projects/`、`agents/` 子資料夾），mockdata 改用 `import` 本地檔
2. 失效圖片找替代素材（見下方版權注意）
3. 失效連結逐一更新為品牌／飯店現行官網網址
4. mockdata 保持現有資料結構不變，只動 `img` 與 `link` 欄位值

### ⚠️ 版權注意

這些是飯店與設備品牌的官方照片，熱連結本來就有版權疑慮，**下載進專案並沒有解決問題**。長期方向：

- 優先換成自家工程實照（最有說服力，也最安全）
- 品牌區可改用官方 logo（商標合理使用範圍較明確）

## P0-2 本地圖片壓縮＋導入 @nuxt/image

### 現況

- `observe.jpg` 3.8MB、`maintenance.jpg` 3.7MB、`notJustKitchen.jpg` 3.3MB —— About 頁一次載十幾 MB
- 首頁輪播四張各約 400KB，無 preload、無 lazy loading，直接拖慢 LCP
- `og_img.png` 536KB
- **`assets/image/images/` 內 14MB 的 pexels 示意圖完全沒被引用 → 直接刪除**

### 做法

1. 刪除 `assets/image/images/`
2. 安裝 `@nuxt/image`，圖片改用 `<NuxtImg>`／`<NuxtPicture>`：自動 WebP、responsive `sizes`、內建 lazy loading
3. 輪播第一張加 `preload`，其餘 lazy
4. 來源大圖用 sharp／squoosh 壓到合理尺寸（頁面顯示寬度的 2x 即可）
5. `og_img.png` 壓縮並轉換為 1200×630 標準尺寸

## P0-3 SEO 關鍵修正

> 基於 2026-07-20 的 SEO 稽核（檢查 `nuxt generate` 產物、dev server、正式站 leadmaster.tw）。
>
> 現況好的基本盤：全站 SSG 預渲染（內容爬蟲可直接讀）、內頁 title 各自獨立、
> sitemap.xml 自動產生、google-site-verification 已保留。以下為需修正項目。

### 1. 首頁 `<title>` 在靜態產出中是空的（遷移引入的 bug，必修）

dev server 正常，但 `nuxt generate` 產出的 `index.html` title 是空的——首頁是權重最高的頁面。
原因：首頁沒有自己的 `useHead` title，只靠全域 `app.head`，預渲染時未正確落地。

修法：`pages/index.vue` 補明確的 `useHead({ title: '立麥餐飲設備有限公司' })`。
驗證：`npm run generate` 後檢查 `.output/public/index.html` 的 `<title>`。

### 2. `<html>` 缺少 `lang` 屬性

新站產出的 `<html>` 無 lang；**正式站現況更糟：`lang="en"` 配中文內容**，誤導搜尋引擎語言判定。

修法：`nuxt.config.ts` 的 `app.head` 加 `htmlAttrs: { lang: 'zh-Hant-TW' }`。

### 3. `og:image` 相對路徑

FB/LINE 爬蟲需要絕對網址，現在 `/og_img.png` 分享出去大概率無預覽圖。
改為 `https://leadmaster.tw/og_img.png`，並補 `og:image:width`/`height`（建議同時把圖轉 1200×630 標準尺寸，見 P0-2）。

### 4. 五頁共用同一份 description

內頁沒有各自的 description 與 og 標籤，搜尋結果中每頁摘要都相同，浪費內頁排名機會。
各頁 `useHead` 補頁面專屬的 `description`、`og:title`、`og:description`。

## P1-1 載入 Noto Serif TC

CSS 宣告了 `'Noto Serif TC'` 但**從未載入**（舊站起就是如此），中文一直由系統字型墊檔。

1. `nuxt.config.ts` 的 `googleFonts.families` 加入 `'Noto Serif TC': [400, 700]`
2. 檢查 `global.sass`：Vollkorn 目前只套 `h1-h5,p,span`，`li`、`a` 沒吃到（footer 字型不一致）——調整選擇器涵蓋範圍或改在 `body` 統一設定
3. 中文字型檔大，確認 google-fonts 模組的 subset／`font-display: swap` 設定

## P2-1 版型小 bug（自舊站繼承）

| 位置 | 問題 | 修正 |
| ------------------------- | ------------------------------------------------ | ------------------------ |
| `pages/index.vue` | `mb-18` 不存在於 Tailwind spacing，間距從未生效 | 改 `mb-16` 或 `mb-20` |
| `BigThreePhotoFrame.vue` | `items-top` 不是合法 class | 改 `items-start` |
| `pages/index.vue` 輪播 | `calc(100vh - 80px)` 在手機被網址列吃高度 | 改 `100dvh` |
| `Footer.vue` | 版權年份停在 2020-2021 | 動態年份或更新 |

## P2-2 無障礙與互動

- 漢堡按鈕補 `aria-label="開啟選單"`、`aria-expanded`
- 抽屜選單支援 Esc 關閉；開啟時鎖 body scroll
- 圖文元件 alt 全是 "Feature image"——mockdata 已有 `img_alt` 欄位的就用它，沒有的補上
- 輪播考慮 `prefers-reduced-motion` 時停止自動輪播

## P2-3 死功能清理

- **FB 客服聊天**：Meta 已於 2024 年停用網站版 Messenger 聊天外掛，現在的 plugin 是靜默失效。改為右下角固定的 m.me 連結按鈕（`https://m.me/268696576492951`），或移除
- **PWA**：manifest 沒有 icons，無法安裝。二選一：補 192/512 icon（可由 logo 產生），或移除 `@vite-pwa/nuxt` 模組
- footer 的 `goo.gl/maps` 短網址目前仍可用，但 Google 已逐步淘汰 goo.gl，建議換成 `maps.app.goo.gl` 或完整 Google Maps 網址
- 聯絡信箱為個人 gmail（`bryanwu088@gmail.com`），若有公司網域信箱建議替換（順帶更新 mailto 與 footer）

## P2-4 SEO 結構強化

- **h1 結構**：首頁唯一的 h1 是 `class="hidden"`（`display:none` 隱藏文字，Google 不採計且屬高風險老 hack）；四個內頁完全沒有 h1（Banner 標題是 h2）。建議 Banner 的標題升為 h1，首頁改為可見的品牌標題或移除隱藏 h1
- **canonical**：各頁補 `<link rel="canonical">`（配合 site.url 組絕對網址）
- **結構化資料**：footer 已有完整公司資訊（地址、電話、營業項目），加一段 `LocalBusiness` JSON-LD，成本低、對在地搜尋（如「新店 廚房設備」）有實際幫助
- **robots.txt**：目前不存在（正式站也 404）。加 `@nuxtjs/robots` 模組或手放 `public/robots.txt`，內含 `Sitemap: https://leadmaster.tw/sitemap.xml` 指向
- **效能即 SEO**：P0-2 的圖片優化同時服務 Core Web Vitals（Google 排名訊號），兩者一起驗收

---

## 驗收標準

- [ ] 全站無破圖（所有 `img` 來源皆為本地資源）
- [ ] 所有外部連結人工點擊確認可達
- [ ] Lighthouse Performance ≥ 90（行動裝置）、LCP < 2.5s
- [ ] 中文以 Noto Serif TC 渲染
- [ ] FB/LINE 分享出現正確預覽圖（用各平台的 sharing debugger 驗證）
- [ ] 鍵盤可完整操作導覽（Tab／Esc）
- [ ] `nuxt generate` 產物中每頁 `<title>` 皆非空、description 各自獨立
- [ ] `<html lang="zh-Hant-TW">`、canonical、robots.txt、LocalBusiness JSON-LD 皆到位
- [ ] 每頁恰有一個可見的 h1
