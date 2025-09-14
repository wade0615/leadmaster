import type { Metadata } from "next";
import { Noto_Serif_TC, Vollkorn } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-tc",
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-vollkorn",
});

export const metadata: Metadata = {
  title: "立麥餐飲設備有限公司",
  description:
    "立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作",
  keywords: "餐飲設備,廚房規劃,廚房設計,廚房施工,飯店廚房,餐廳廚房,廚房顧問",
  authors: [{ name: "立麥餐飲設備有限公司" }],
  openGraph: {
    title: "Leadmaster 立麥餐飲設備有限公司",
    description:
      "立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作",
    siteName: "餐飲設備規劃公司",
    locale: "zh_TW",
    images: [
      {
        url: "/og_img.png",
        width: 1200,
        height: 630,
        alt: "立麥餐飲設備有限公司",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadmaster 立麥餐飲設備有限公司",
    description:
      "立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工",
    images: ["/og_img.png"],
  },
  verification: {
    google: [
      "x1KDy2SSiRcOMjKFhI-ng2n7X_HosHVl8Wygn_ptFHg",
      "bwRWjYXKfqqFwRx-6dhFK3u1gYLu0Qdex0AeriE1Msk",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSerifTC.variable} ${vollkorn.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        <div id="london">
          {children}
          <div id="fb-root"></div>
        </div>
      </body>
    </html>
  );
}
