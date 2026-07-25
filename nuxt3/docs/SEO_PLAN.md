# SEO 關鍵字強化執行計劃書

> 撰於 2026-07-25，基於站內現況盤點與 `OPTIMIZATION_PLAN.md` 的 SEO 稽核。
> 目標關鍵字（8 組）：**廚房顧問、餐飲顧問、廚房設計、HACCP顧問、酒吧顧問、酒櫃設計顧問、食品加工廠設計、國際酒店餐飲設備顧問**
>
> **執行狀態：階段一～三已於 2026-07-25 全數完成並通過驗收（詳見文末執行紀錄）；階段四為長期項目。**

## 現況診斷

- 全站文案僅出現過「廚房工程顧問」與一次小寫「Haccp」，**其餘目標關鍵字（餐飲顧問、酒吧顧問、酒櫃設計顧問、食品加工廠設計）站內從未出現**——沒有內容著陸點就沒有排名機會。
- 各頁 title 皆為「頁名｜公司名」格式，未攜帶任何服務關鍵字。
- 五頁共用同一份 description；首頁 title 在靜態產出中是空的；h1 結構失效（首頁 h1 隱藏、內頁無 h1）——技術基礎會抵消文案調整的效果，需一併修正。

## 施工順序總覽

| 階段 | 項目 | 主要關鍵字受益 | 狀態 |
| ---- | ---- | ---- | ---- |
| 1 | 技術基礎修正（title bug、lang、h1、description、canonical、robots、JSON-LD） | 全部 | ✅ 完成 |
| 2 | 現有四頁 title／description／h1／文案帶入關鍵字 | 廚房顧問、餐飲顧問、廚房設計、HACCP顧問、國際酒店餐飲設備顧問 | ✅ 完成 |
| 3 | 服務內容佈局（原規劃獨立 /services 頁，改併入 /about、/projects） | 酒吧顧問、酒櫃設計顧問、食品加工廠設計（＋全部） | ✅ 完成 |
| 4 | （長期）案場實績內頁化、內容累積 | 長尾字 | ⬜ 未排程 |

## 階段一：技術基礎修正

承接 `OPTIMIZATION_PLAN.md` P0-3 與 P2-4，與關鍵字工作直接相關者：

1. **首頁空 title bug（必修）**：`pages/index.vue` 補明確 `useHead` title；驗證 `nuxt generate` 產出。
2. **`htmlAttrs: { lang: 'zh-Hant-TW' }`**：修正語言判定（正式站現為 `lang="en"`）。
3. **h1 結構**：`Banner.vue` 標題由 h2 升為 h1（各內頁唯一 h1，關鍵字放這裡）；首頁移除 `display:none` 的隱藏 h1，改為可見品牌標題。
4. **各頁獨立 description／og:title／og:description**：內容依階段二的關鍵字配對表撰寫。
5. **canonical**：各頁補 `<link rel="canonical">`（以 `site.url` 組絕對網址）。
6. **robots.txt**：`public/robots.txt`，含 `Sitemap: https://leadmaster.tw/sitemap.xml`。
7. **LocalBusiness JSON-LD**：以 footer 既有公司資訊（地址、電話）為基礎，`hasOfferCatalog` 列入 8 項服務名稱——對「地區＋服務」在地搜尋（如「新店 廚房顧問」）有直接幫助。
8. **og:image 絕對路徑**＋標準 1200×630 尺寸。

## 階段二：關鍵字 → 頁面配對與文案調整

原則：**一頁主攻 1–3 個關鍵字**，在 title、h1、內文、圖片 alt 各自然出現 1 次（單頁 2–4 次為度，嚴禁堆砌）。

| 頁面 | 主攻關鍵字 | 調整內容 |
| ---- | ---- | ---- |
| 首頁 `/` | 廚房顧問、餐飲顧問 | title：「立麥餐飲設備｜廚房顧問・餐飲顧問・國際酒店廚房設備規劃」；副標維持「最專業的酒店廚房規劃顧問」語感微調；description 重寫（見下） |
| `/projects` | 國際酒店餐飲設備顧問、HACCP顧問 | title：「國際酒店餐飲設備顧問實績｜立麥餐飲設備」；banner 文案「Haccp」→「HACCP」並帶入「國際酒店餐飲設備顧問」；**同步改寫舊客戶名單段落**（移除已歇業的西華，換上現行案場） |
| `/about` | 廚房設計、HACCP顧問 | 服務說明明確寫出「廚房設計」「HACCP 顧問輔導」字樣；title 帶「廚房設計」 |
| `/agent` | （品牌長尾） | 補獨立 description 即可，不硬塞關鍵字 |

**全站 description 改寫範例**（覆蓋多數關鍵字且語句自然）：

> 立麥餐飲設備有限公司——專業廚房顧問與餐飲顧問公司，提供國際酒店廚房設計、HACCP 顧問輔導、酒吧與酒櫃設計、食品加工廠設計規劃，從動線規劃、設備選型到施工維保一站式服務。

## 階段三：服務內容佈局（已依業主決策調整）

原方案為獨立 `/services` 頁；**業主決策改為將服務文案併入既有頁面、不增加分頁**（此頁從未上線，無轉址負債）。取捨：孤兒關鍵字失去 title 層級曝光、改以 h2＋內文承載，因該三字競爭度低仍有排名機會，效果約打八折，換取更簡潔的網站結構。

實際佈局：

- **/about 承載 4 組服務**（織入既有段落，非另貼章節）：
  - 「規劃提案」段 → 酒吧顧問與酒櫃設計顧問（出杯動線、恆溫酒櫃選型）
  - 「空間設計」段 → 廚房設計＋HACCP 顧問（生熟食分區、冷熱鏈動線、稽核驗收）
  - 「不只是廚房」段 → 廚房顧問＋中央廚房與食品加工廠設計
  - title 調整為「關於我們與服務項目｜廚房設計・HACCP・酒吧顧問｜立麥餐飲設備」
- **/projects 承載「國際酒店餐飲設備顧問」**：Banner 下新增 h2 引言段（國際連鎖集團標準與驗收經驗），與實績內容相互印證。

## 階段四（長期）：內容累積

- 各案場獨立實績內頁（吃「飯店廚房工程」「××酒店 廚房設備」長尾字），照片牆素材可直接沿用。
- 站外：Google 商家檔案（Google Business Profile）建立／完善，與 JSON-LD 相互印證。

## 預期管理

- 「廚房設計」「餐飲顧問」屬競爭字，本計劃讓 Google 正確理解服務定位，進前排仍需內容與時間累積。
- 「酒櫃設計顧問」「食品加工廠設計」競爭低，服務頁上線後最可能先見成效。
- 效能即排名訊號：圖片已全量 webp 化（見 `PROJECTS_PAGE_UPDATE.md`），Core Web Vitals 基礎已備。

## 驗收標準

- `nuxt generate` 產出中：各頁 title／description 各自獨立且攜帶配對關鍵字、`<html lang="zh-Hant-TW">`、每頁恰一個可見 h1。
- `robots.txt` 200 且指向 sitemap；JSON-LD 通過 Google Rich Results Test。
- 站內搜尋驗證：8 組關鍵字每組至少有一個明確著陸頁。

---

## 執行紀錄（2026-07-25）

### 階段一：技術基礎修正（全數完成）

| 項目 | 實作內容 |
| ---- | ---- |
| 首頁空 title bug | `pages/index.vue` 補明確 `useSeoMeta` title，generate 產出驗證通過 |
| html lang | `nuxt.config.ts` 加 `htmlAttrs: { lang: 'zh-Hant-TW' }` |
| h1 結構 | `Banner.vue` 標題 h2→h1（內頁各得唯一 h1）；`Carousel.vue` 主標題 h2→h1（首頁）；移除首頁 `display:none` 隱藏 h1 |
| h1 關鍵字（審查修正） | 原英文標題（About Us 等）降為 eyebrow 副標，h1 改為中文關鍵字標題與 title 對齊：/about「廚房設計與 HACCP 顧問服務」、/projects「國際酒店餐飲設備顧問實績」、/agent「國際廚房設備代理品牌」、/recruitment「職缺招募」——避免 Google 因 h1/title 落差改寫搜尋結果標題 |
| 各頁獨立 meta | 五頁（後含 /projects 共六組）各自 `useSeoMeta`：title、description、og:title、og:description |
| canonical | `app.vue` 依 route 動態產生絕對網址 canonical |
| robots.txt | 新增 `public/robots.txt`，指向 `https://leadmaster.tw/sitemap.xml` |
| LocalBusiness JSON-LD | `app.vue` 注入：公司名、地址電話（同 footer）、Facebook sameAs、8 項服務 `hasOfferCatalog` |
| og:image | 改絕對網址並以 sharp 重製為標準 1200×630（原 830×450），補 width/height meta |

### 階段二：關鍵字文案（全數完成）

| 頁面 | title | 文案調整 |
| ---- | ---- | ---- |
| `/` | 立麥餐飲設備｜廚房顧問・餐飲顧問・國際酒店廚房設備規劃 | description 採計劃書範例句 |
| `/projects` | 國際酒店餐飲設備顧問實績｜立麥餐飲設備 | banner「Haccp」→「HACCP」、帶入「國際酒店餐飲設備顧問」；舊客戶名單（含歇業之西華）改寫為現行八案場 |
| `/about` | 關於我們與服務項目｜廚房設計・HACCP・酒吧顧問｜立麥餐飲設備 | banner 帶入「廚房設計」「HACCP 顧問輔導」 |
| `/agent`、`/recruitment` | 原 title 保留 | 各補獨立 description（品牌清單／招募文案），未硬塞關鍵字 |

### 階段三：服務內容佈局（全數完成，採併入方案）

- `/about` 三段既有敘述改寫（`assets/mockdata/about.js`），織入服務關鍵字：
  - 「規劃提案」→ 酒吧顧問與酒櫃設計顧問（出杯動線、製冰冷藏配置、恆溫酒櫃選型）
  - 「空間設計」→ 廚房設計＋HACCP 顧問（生熟食分區、冷熱鏈動線、衛生稽核與連鎖品牌驗收）
  - 「不只是廚房」→ 廚房顧問＋中央廚房與食品加工廠設計（產線動線、溫控分區、食品工廠登記）
- `/projects` 新增「國際酒店餐飲設備顧問」h2 段落（業主調整版位至大圖區之後、More Projects 之前——SEO 訊號不受頁內位置影響，動線更佳）
- `/services` 頁與 Nav 連結已移除（從未上線，無轉址負債）

### 驗收結果（`nuxt generate` 實測）

- 六頁 title／description 各自獨立且攜帶配對關鍵字 ✅
- `<html lang="zh-Hant-TW">` ✅、每頁恰一個可見 h1 ✅
- canonical 絕對網址 ✅、robots.txt 指向 sitemap ✅、JSON-LD 注入 ✅
- 8 組關鍵字皆有可見內文著陸點（/about 四組、/projects 兩組、首頁兩組），JSON-LD 服務清單全站覆蓋 ✅
- sitemap 無 /services 殘留 ✅

### 尚未執行（階段四，長期）

- 各案場實績內頁化（吃「××酒店 廚房工程」長尾字），照片牆素材可沿用
- Google 商家檔案（Google Business Profile）建立／完善
