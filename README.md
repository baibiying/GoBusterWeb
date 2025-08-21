# MiniMax Agent 网站克隆

这是一个与 https://oxbd5am4ngpo.space.minimax.io/ 一模一样的网站克隆。

## 功能特性

- 简洁的设计，显示 "Created by MiniMax Agent" 文本
- 右上角有关闭按钮 (×)
- 响应式设计，适配不同屏幕尺寸
- 支持键盘快捷键 (ESC 键关闭)

## 运行方式

### 方法1: 使用Python服务器 (推荐)

```bash
python3 server.py
```

服务器将在 http://localhost:8000 启动，并自动打开浏览器。

### 方法2: 直接打开HTML文件

直接双击 `index.html` 文件在浏览器中打开。

### 方法3: 使用其他HTTP服务器

如果你有其他HTTP服务器工具，也可以使用：

```bash
# 使用Python内置服务器
python3 -m http.server 8000

# 使用Node.js的http-server (需要先安装)
npx http-server -p 8000

# 使用PHP内置服务器
php -S localhost:8000
```

## 文件结构

```
.
├── index.html      # 主页面文件
├── styles.css      # CSS样式文件
├── script.js       # JavaScript交互文件
├── server.py       # Python HTTP服务器
└── README.md       # 说明文档
```

## 技术栈

- HTML5
- CSS3 (外部样式文件)
- JavaScript (外部脚本文件，原生，无依赖)

## 浏览器兼容性

支持所有现代浏览器：
- Chrome
- Firefox
- Safari
- Edge 