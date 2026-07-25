# /projects 頁改版執行計劃書（已完成）

> 執行日期：2026-07-25。已於 `nuxt3-migration` 分支 commit `2c90e37` 全數入庫。
> 本文件記錄改版內容、素材處理流程與維護方式，供後續更新參照。

## 執行總覽

| 項目 | 狀態 | 說明 |
| ---- | ---- | ---- |
| 案場名單更新 | ✅ 完成 | 大圖區 4 筆＋小圖區 4 筆，全數換新 |
| 卡片圖片本地化＋webp | ✅ 完成 | 8 張，來源逐張目視查證 |
| 官網連結查證與修正 | ✅ 完成 | 修正 Marriott／Hyatt 語系路徑錯誤 |
| 案場照片牆 popup | ✅ 完成 | 瀑布牆＋燈箱放大，131 張照片 |
| 照片全量轉檔 webp | ✅ 完成 | 27.4MB → 18MB |
| 互動連結視覺 | ✅ 完成 | 新增 `$leadmaster-gold` 互動色 |

## 一、案場名單

**大圖 Jumbotron 區**（`projects.js` 前 4 筆，左右交錯排版）：

| 案場 | 英文名 | 照片牆資料夾 |
| ---- | ------ | ------------ |
| 台北萬豪酒店 | Taipei Marriott Hotel | `大1台北萬豪`（11 張） |
| 台北板橋馥華艾美酒店 | Le Méridien Taipei Banqiao | `大2板橋艾美`（52 張） |
| 阿里山英迪格酒店 | Hotel Indigo Alishan | `大3阿里山英迪哥`（6 張） |
| 嘉義福容voco酒店 | voco Chiayi | `大4嘉義voco`（**0 張，待補**） |

**小圖 More Projects 區**（第 5 筆起，四宮格）：

| 案場 | 英文名 | 照片牆資料夾 |
| ---- | ------ | ------------ |
| 台中萬楓酒店 | Fairfield by Marriott Taichung | `小台中萬楓`（21 張） |
| 新莊凱悅嘉軒酒店 | Hyatt Place New Taipei City Xinzhuang | `小新莊嘉軒`（9 張） |
| 台南禧榕軒大飯店 | Grand Banyan Hotel | `小台南禧榕軒`（14 張） |
| 台中沐明鍋物 | Mu Ming Hotpot | `小台中沐明火鍋`（18 張） |

## 二、卡片圖片處理

全部本地化至 `assets/image/projects/*.webp`（q78，寬 1200–1600px），不再外連圖床。
來源逐張目視查證，優先序：**官方網站／官方資產庫 → 媒體公關照 → 不用部落客浮水印照**。

| 圖檔 | 來源 |
| ---- | ---- |
| marriott_taipei | 台北萬豪官網門面夜景照 |
| le_meridien_banqiao | 開幕新聞官方發布照（upmedia） |
| indigo_alishan / voco_chiayi | IHG 官方資產庫（digital.ihg.com） |
| fairfield_taichung | 官方外觀照（Rakuten Travel 所載） |
| hyatt_place_xinzhuang | Hyatt 官方資產庫（assets.hyatt.com） |
| grand_banyan_tainan | 禧榕軒官網門面照 |
| muming_taichung | 店門口招牌牆照（河馬體驗部落格，**建議日後向店家索取官方照替換**） |

⚠️ 圖片為各店家行銷照片，作為配合廠商實績展示屬常見用法，正式上線前建議確認使用權；長期最理想是替換為自有案場實拍。

## 三、官網連結修正紀錄

- **Marriott 兩筆（板橋艾美、台中萬楓）**：原誤用不存在的 `/zh-tw/` 語系路徑，改用官方無語系入口 `https://www.marriott.com/hotels/travel/<代碼>/`（tpemb／rmqfi），會自動 301 至訪客語系。
- **Hyatt（新莊嘉軒）**：`zh-TW` 同屬未驗證語系，改用已確認存在的 `/hyatt-place/en-US/tpezn-...`。
- IHG 兩筆使用官方 `/tw/zh/` 台灣繁中路徑；沐明無官網，連結至官方 Facebook 粉專。
- **教訓：外部連結不自組語系路徑，一律以搜尋結果或官方轉址實證過的網址為準。**

## 四、案場照片牆功能

- **進入點**：大圖區「案場照片 →」「查看官網 →」並排（取代原「了解更多」）；小圖區卡片下方靠右新增「案場照片」「查看官網」文字連結（卡片本身點擊仍連官網）。
- **`GalleryModal.vue`**：近滿版彈窗，CSS multi-column 瀑布牆（1→2→3→4 欄 RWD），照片 `loading="lazy"`。點背景／Esc／✕ 關閉，開啟時鎖定背景捲動。
- **燈箱放大**：點擊照片後置中放大，左右箭頭／鍵盤 ←→／手機滑動切換（循環），底部顯示「x / n」計數；Esc 逐層關閉。
- **`projectGalleries.js`**：以 `import.meta.glob` 掃描 `assets/image/大*`、`小*` 資料夾自動對應各案場（`projects.js` 的 `gallery` 欄位指向資料夾名）。**照片為空的案場，「案場照片」按鈕自動隱藏。**
- **互動色**：`shared.sass` 新增 `$leadmaster-gold: #A16207`（標題金線 yellow-600 加深一階，過 AA 對比），hover 底線。

## 五、照片轉檔規格

131 張案場照片全轉 webp：品質 80、寬度上限 2000px（小圖不放大），jpeg 原檔已刪除。

```sh
npx sharp-cli -i in.jpeg -o out.webp -f webp -q 80 resize 2000 --withoutEnlargement
```

## 六、日常維護指南

- **新增／刪除案場照片**：直接增刪對應資料夾內的 webp 檔，重新 build 即可，程式不用動。
- **新增案場**：`projects.js` 加一筆（含 `gallery` 欄位）＋建立照片資料夾；卡片圖寬**至少 1000px**（`FourBoxes` 的 `md:max-w-max` 會讓窄圖縮卡片）。
- **大圖區固定取前 4 筆**，其餘進小圖區；調整順序即調整版位。

## 七、遺留事項

1. `大4嘉義voco` 照片待補（補進資料夾轉 webp 後按鈕自動出現）。
2. `projects.vue` 的 banner 文案仍為舊客戶名單（含已歇業的西華飯店），待決定是否改寫（SEO 計劃書中一併處理）。
3. 沐明卡片圖建議日後換官方照。
