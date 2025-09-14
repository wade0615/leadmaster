# Leadmaster Kitchen - Next.js 版本

這是立麥餐飲設備有限公司官網的 Next.js 重構版本。

## 技術棧

- **Next.js 14** - React 全端框架
- **TypeScript** - 類型安全
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Framer Motion** - 動畫庫
- **Lucide React** - 圖標庫

## 功能特色

- 響應式設計
- SEO 優化
- 靜態網站生成
- 現代化 UI/UX
- 多頁面架構

## 開發指令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置生產版本
npm run build

# 啟動生產服務器
npm start

# 代碼檢查
npm run lint

# 類型檢查
npm run type-check
```

## 專案結構

```
next/
├── app/                 # App Router 頁面
├── components/          # React 組件
├── data/               # 數據文件
├── public/             # 靜態資源
└── styles/             # 樣式文件
```

## 頁面結構

- `/` - 首頁
- `/about` - 關於我們
- `/projects` - 專案案例
- `/agent` - 代理商
- `/recruitment` - 人才招募

## 部署

此專案配置為靜態網站生成，可以部署到任何靜態網站託管服務。
