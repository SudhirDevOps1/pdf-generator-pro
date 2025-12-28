# 📄 SudhirDevOps1 PDF Generator Pro v2.0

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-purple.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**A powerful, browser-based PDF document generator with rich text editing, 10 themes, templates, tables, and PWA support.**

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](https://github.com/SudhirDevOps1/pdf-generator/issues)

</div>

---

## 🆕 What's New in v2.0

| Feature | Description |
|---------|-------------|
| 📋 **Bullet & Numbered Lists** | Add organized lists to your documents |
| 🔤 **Headings (H1-H4)** | Insert headings with one click |
| ↔️ **Text Alignment** | Left, Center, Right, Justify |
| 📄 **6 Templates** | Resume, Invoice, Report, Letter, Notes, Blank |
| 🔙 **Undo/Redo Buttons** | Visual undo/redo in toolbar |
| 📊 **Tables Support** | Insert custom tables (rows x columns) |
| 🎨 **10 Themes** | Dark Purple, Ocean Blue, Forest Green, and more |
| 📱 **PWA Support** | Install as app on any device |
| ⬆️⬇️ **Subscript/Superscript** | H₂O, x², etc. |
| ⚠️ **Info & Warning Boxes** | Additional callout boxes |

---

## ✨ All Features

### 📝 Text Editing
- **Bold**, *Italic*, <u>Underline</u>, ~~Strikethrough~~
- Subscript & Superscript
- 7 Font sizes (Tiny to Huge)
- Custom text colors (color picker + 9 quick colors)
- Text highlighting (color picker + 8 quick colors)
- Text alignment (Left, Center, Right, Justify)
- Headings (H1, H2, H3, H4)
- Undo/Redo support

### 📋 Lists
- Bullet lists (unordered)
- Numbered lists (ordered)
- Editable list items

### 📊 Tables
- Custom rows and columns
- Editable headers and cells
- Styled with alternating rows

### 🖼️ Images
- Upload images (JPG, PNG, GIF, WebP)
- Resize (25%, 50%, 75%, 100%)
- Align (Left, Center, Right)
- Add captions
- Max 10MB per image

### 💻 Code Blocks
- Syntax highlighting (10+ languages)
- Copy code button
- Tab support
- Proper line breaks

### 📦 Content Blocks
| Block | Description |
|-------|-------------|
| 📝 Text | Rich text content |
| 💻 Code | Syntax-highlighted code |
| 🖼️ Image | Images with controls |
| 📊 Table | Custom tables |
| 📋 Bullets | Unordered lists |
| 🔢 Numbers | Ordered lists |
| 💡 Hint | Yellow hint box |
| ✅ Solution | Green solution box |
| ℹ️ Info | Blue info box |
| ⚠️ Warning | Orange warning box |
| ➖ Divider | Horizontal line |

### 📄 Templates
| Template | Use Case |
|----------|----------|
| Blank | Start from scratch |
| Resume | Professional CV |
| Invoice | Business invoices |
| Report | Project reports |
| Letter | Formal letters |
| Notes | Study notes |

### 🎨 10 Themes
| Theme | Colors |
|-------|--------|
| Dark Purple | Purple & Blue |
| Ocean Blue | Teal & Navy |
| Forest Green | Green & Earth |
| Sunset Orange | Orange & Brown |
| Midnight | Black & Purple |
| Light Mode | White & Purple |
| Cyberpunk | Pink & Neon |
| Rose Gold | Pink & Gold |
| Nord | Arctic Blue |
| Dracula | Purple & Green |

### 📱 PWA Features
- Install as app on phone/desktop
- Works offline (cached resources)
- Fast loading
- App-like experience

### 📤 PDF Export
- 3x resolution (288 DPI)
- A4 size output
- All formatting preserved
- Images included
- Highlights work correctly

---

## 🚀 Quick Start

### Option 1: Direct Use
```bash
# Download files
# Open index.html in browser
```

### Option 2: Clone Repository
```bash
git clone https://github.com/SudhirDevOps1/pdf-generator.git
cd pdf-generator
# Open index.html in browser
```

---

## 🌐 Deployment Guide

### GitHub Pages (Free)

```bash
# 1. Create repository on GitHub
# 2. Push your code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pdf-generator.git
git push -u origin main

# 3. Go to Settings → Pages
# 4. Select "main" branch, root folder
# 5. Save - Your site will be live at:
# https://YOUR_USERNAME.github.io/pdf-generator/
```

### Netlify (Free)

```bash
# Option 1: Drag & Drop
# 1. Go to netlify.com
# 2. Drag your project folder to deploy

# Option 2: Connect GitHub
# 1. Connect your GitHub account
# 2. Select repository
# 3. Deploy automatically
```

### Vercel (Free)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# Or connect GitHub for auto-deploy
```

### Cloudflare Pages (Free)

```bash
# 1. Go to Cloudflare Dashboard
# 2. Pages → Create project
# 3. Connect GitHub repository
# 4. Deploy
```

### Firebase Hosting (Free)

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Initialize
firebase init hosting

# 4. Deploy
firebase deploy
```

---

## 💰 AdSense Integration

### Step 1: Get AdSense Code
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up / Login
3. Add your site
4. Get your ad code

### Step 2: Add to index.html

```html
<!-- In <head> section -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>

<!-- Replace ad placeholder in sidebar with: -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### Step 3: Ad Placement Suggestions
- Sidebar (current placeholder)
- Between pages (interstitial)
- Bottom of page
- After export (success page)

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save document |
| `Ctrl + B` | Bold |
| `Ctrl + I` | Italic |
| `Ctrl + U` | Underline |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Escape` | Close modals |

---

## 📁 File Structure

```
pdf-generator/
├── index.html      # Main application
├── manifest.json   # PWA manifest
├── sw.js          # Service worker
├── README.md      # Documentation
└── LICENSE        # MIT License
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript ES6+ | Functionality |
| Tailwind CSS | Utility styling |
| jsPDF | PDF generation |
| html2canvas | HTML to image |
| Prism.js | Syntax highlighting |
| Font Awesome | Icons |
| Google Fonts | Typography |
| Service Worker | PWA/Offline |

---

## 📊 Scale Comparison

| Scale | Resolution | File Size | Use Case |
|-------|------------|-----------|----------|
| 1x | 96 DPI | ~300KB/page | Draft |
| 2x | 192 DPI | ~1.2MB/page | Normal |
| **3x** | **288 DPI** | **~2.5MB/page** | **Print (Current)** |

---

## 🔧 Customization

### Change Default Theme
```javascript
// In index.html, find:
let currentTheme = 'dark-purple';
// Change to any theme name
```

### Add Custom Theme
```css
/* Add in <style> section */
.theme-custom {
    --bg: #YOUR_BG_COLOR;
    --surface: #YOUR_SURFACE_COLOR;
    --text-color: #YOUR_TEXT_COLOR;
    --accent-purple: #YOUR_ACCENT_COLOR;
}
```

### Change PDF Scale
```javascript
// In renderPDF function, change:
scale: 3,  // 1, 2, or 3
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Highlights not in PDF | Use the highlight tool, not browser |
| Images not loading | Check file size (<10MB) |
| PWA not installing | Use HTTPS |
| Slow export | Reduce image sizes |
| Theme not saving | Clear browser cache |

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

## 👨‍💻 Author

<div align="center">

**Sudhir Singh**

[![GitHub](https://img.shields.io/badge/GitHub-SudhirDevOps1-181717?logo=github)](https://github.com/SudhirDevOps1)

*DevOps Engineer | Full Stack Developer*

</div>

---

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [jsPDF](https://github.com/parallax/jsPDF)
- [html2canvas](https://html2canvas.hertzen.com/)
- [Prism.js](https://prismjs.com/)
- [Font Awesome](https://fontawesome.com/)

---

<div align="center">

**⭐ Star this repo if you find it useful! ⭐**

Made with ❤️ by [SudhirDevOps1](https://github.com/SudhirDevOps1)

</div>
