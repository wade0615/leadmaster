// 案場照片牆：載入 assets/image/大*、小* 資料夾內的所有圖片
// 第一階段先全數原檔載入，待照片篩選確定後再統一轉 webp
const modules = import.meta.glob(
  [
    "../image/大*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
    "../image/小*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
  ],
  { eager: true, import: "default" }
);

const galleries = {};
for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\.\.\/image\/([^/]+)\//);
  if (!match) continue;
  (galleries[match[1]] ||= []).push({ path, url });
}
for (const list of Object.values(galleries)) {
  list.sort((a, b) => a.path.localeCompare(b.path));
}

export const getGalleryImages = (folder) =>
  (galleries[folder] || []).map((item) => item.url);
