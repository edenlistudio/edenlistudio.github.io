# EDENLISTUDIO 靜態網站備份

這是從原 Weebly 網站重建的可獨立上架版本，包含 6 個頁面、原始圖片、作品文字與 YouTube 嵌入影片。

## 頁面

- `index.html`：ABOUT ME
- `video-works.html`：VIDEO WORKS
- `documentary.html`：Documentary
- `marketing-project.html`：MARKETING PROJECT
- `photo-portfolio.html`：Photo portfolio
- `contact-me.html`：CONTACT ME

## 本機預覽

請在此資料夾中執行：

```bash
python3 -m http.server 8000
```

再開啟 `http://localhost:8000/`。不建議直接雙擊 HTML，部分瀏覽器會限制嵌入內容。

## 上架

可將整個資料夾原封不動上傳到 GitHub Pages、Netlify、Cloudflare Pages 或一般虛擬主機。YouTube 影片仍需連網播放。

## 注意

原 Weebly 聯絡表單依賴 Weebly 後端；網站搬遷後應改用 Formspree、Google Forms 或自有表單服務。其餘內容已可作為一般靜態網站運作。
