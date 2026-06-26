# 结婚照展示网站

这是一个纯静态结婚照展示网站，适合后续发布到 GitHub Pages、Netlify、Vercel 或任意静态网站空间。

## 照片

当前网站已根据 `/Users/enhengii/Desktop/照片/` 的 50 张照片生成了网页用图片：

- `images/thumbs/photo-01.jpg` 到 `images/thumbs/photo-50.jpg`：页面高清缩略图
- `images/preview/photo-01.jpg` 到 `images/preview/photo-50.jpg`：移动端和列表优先加载的轻量预览图
- `images/full/photo-01.jpg` 到 `images/full/photo-50.jpg`：点击预览使用的高清展示图

缩略图按照片宽高比例排版，尽量减少留白，也避免强制裁切人物。列表优先加载 `images/preview` 里的轻量图，点击照片后会打开 `images/full` 里的高清展示图，并在 PC 和移动端都按正常比例完整适配到一屏内。

页面按照片风格分成四章：

- 宫廷白纱
- 夜色庆祝
- 红色庭院
- 时装亲密

## 本地预览

在当前目录运行：

```bash
python3 -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## 后续发布

照片和页面确认后，可以提交到 GitHub，然后开启 GitHub Pages。
