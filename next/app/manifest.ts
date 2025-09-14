import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "立麥餐飲設備有限公司",
    short_name: "Leadmaster Kitchen",
    description:
      "立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#DA1B0A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/leadmaster_logo2.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
