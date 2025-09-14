# Nuxt.js 到 Next.js 遷移指南

## 遷移完成摘要

✅ **已完成的重構項目：**

### 1. 基礎架構

- [x] Next.js 14 + TypeScript 專案設置
- [x] Tailwind CSS 配置
- [x] 專案結構重組

### 2. 頁面轉換

- [x] 首頁 (`/`) - 輪播圖、公司介紹、服務特色
- [x] 關於我們 (`/about`) - 公司歷史、團隊介紹、工作流程
- [x] 專案案例 (`/projects`) - 客戶案例展示
- [x] 代理商 (`/agent`) - 代理商資訊
- [x] 人才招募 (`/recruitment`) - 職缺資訊

### 3. 組件轉換

- [x] Nav - 響應式導航列
- [x] Footer - 頁腳資訊
- [x] Carousel - 輪播圖組件
- [x] Banner - 頁面標題橫幅
- [x] ImgText/TextImg - 圖文排版組件
- [x] Featuretag - 服務特色展示
- [x] BigThreePhotoFrame - 團隊展示
- [x] Slogan - 工作流程展示
- [x] RightJumbotron/LeftJumbotron - 專案展示
- [x] FourBoxes - 更多專案展示

### 4. 功能整合

- [x] SEO 優化 (meta tags, sitemap, robots.txt)
- [x] PWA 支援 (manifest)
- [x] Facebook Customer Chat
- [x] Cloudinary 圖片管理
- [x] 響應式設計
- [x] 靜態網站生成

### 5. 樣式系統

- [x] Tailwind CSS 完全替代 Sass
- [x] 自定義顏色配置 (leadmaster-red: #DA1B0A)
- [x] 字體配置 (Vollkorn, Noto Serif TC)
- [x] 漢堡選單樣式
- [x] 響應式斷點

## 技術對應表

| Nuxt.js          | Next.js                 | 說明            |
| ---------------- | ----------------------- | --------------- |
| `pages/`         | `app/`                  | App Router 結構 |
| `components/`    | `components/`           | React 組件      |
| `assets/`        | `public/`               | 靜態資源        |
| `layouts/`       | `components/Layout.tsx` | 布局組件        |
| `nuxt.config.js` | `next.config.js`        | 專案配置        |
| `package.json`   | `package.json`          | 依賴管理        |
| Vue SFC          | React TSX               | 組件語法        |
| Vuetify          | Tailwind + 自定義       | UI 框架         |
| Sass             | Tailwind CSS            | 樣式系統        |

## 主要改進

### 1. 性能優化

- 使用 Next.js 13+ App Router
- 靜態網站生成 (SSG)
- 圖片優化 (Next.js Image)
- 代碼分割

### 2. 開發體驗

- TypeScript 類型安全
- 更好的 IDE 支援
- 現代化開發工具
- 熱重載

### 3. SEO 優化

- 自動 sitemap 生成
- 結構化 meta 標籤
- Open Graph 支援
- robots.txt 配置

### 4. 維護性

- 組件化架構
- 類型安全
- 清晰的專案結構
- 現代化工具鏈

## 部署說明

### 1. 本地開發

```bash
cd next/
npm install
npm run dev
```

### 2. 生產建置

```bash
npm run build
npm start
```

### 3. 靜態部署

```bash
npm run build
# 部署 'out' 目錄到靜態託管服務
```

## 環境變數

需要設置以下環境變數：

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_FACEBOOK_PAGE_ID`
- `NEXT_PUBLIC_SITE_URL`

## 注意事項

1. **圖片路徑**: 所有圖片已從 `assets/image/` 移動到 `public/images/`
2. **數據結構**: 保持與原 Nuxt.js 版本相同的數據結構
3. **樣式**: 完全使用 Tailwind CSS，移除了所有 Sass 文件
4. **功能**: 所有原有功能都已實現，包括輪播圖、響應式導航等

## 後續建議

1. 設置 CI/CD 流程
2. 添加單元測試
3. 優化圖片加載
4. 添加錯誤邊界
5. 實現國際化 (i18n)
