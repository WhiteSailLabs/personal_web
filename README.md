# 个人网站

一个风格独特的个人网站，包含三个板块：
- 🏠 **首页** - 极简风格个人介绍与摄影影集
- 💻 **技术博客** - 极简赛博朋克工业风
- 🌱 **生活感悟** - 星露谷物语像素风格

## 技术栈

纯 HTML + CSS + JavaScript 原生开发，零依赖，加载速度快。

## 本地运行

直接用浏览器打开 `index.html` 即可运行，或者使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve .
```

然后访问 `http://localhost:8000`

## GitHub 版本控制

1. 初始化仓库：

```bash
git init
git add .
git commit -m "Initial commit: 完成个人网站基础框架"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Vercel 部署

### 一键部署

1. 在 [Vercel](https://vercel.com/new) 点击 "Import Project"
2. 导入你的 GitHub 仓库
3. Vercel 会自动检测，这是静态项目，无需构建配置
4. 点击 "Deploy" 完成部署

### 自动部署特性

- 连接 GitHub 仓库后，每次推送到 main 分支自动部署
- 自动配置 SSL 证书（HTTPS）
- 全球 CDN 加速，访问速度快
- 自定义域名支持

## 项目结构

```
.
├── index.html          # 首页 - 个人介绍
├── blog.html           # 技术博客 - 赛博朋克风
├── life.html           # 生活感悟 - 星露谷像素风
├── css/
│   ├── main.css        # 首页样式
│   ├── blog.css        # 博客样式
│   └── life.css        # 生活样式
├── js/
│   └── main.js         # 交互逻辑
├── images/             # 图片文件夹
├── .github/
│   └── workflows/
│       └── ci.yml      # 自动化CI检查
└── .gitignore
```

## 特色设计

- **三种不同风格**：每个页面都有独特的设计语言
- **完全响应式**：适配桌面和移动设备
- **零依赖**：不需要 npm install，直接运行
- **快速加载**：代码精简，资源轻量化

## 许可

MIT © 张三
