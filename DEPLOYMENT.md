# GitHub Pages 部署指南

## 部署步驟

### 1. 推送代碼到 GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. 配置 GitHub Pages

1. 前往你的 GitHub 倉庫
2. 點擊 "Settings" 標籤
3. 在左側菜單中找到 "Pages"
4. 在 "Source" 部分選擇 "GitHub Actions"
5. 保存設置

### 3. 配置自定義域名

1. 在 GitHub Pages 設置頁面
2. 在 "Custom domain" 欄位輸入：`claire-ciao.com`
3. 勾選 "Enforce HTTPS"
4. 保存設置

### 4. DNS 配置

在你的域名提供商處添加以下 DNS 記錄：

**A 記錄：**
- 名稱：`@`
- 值：`185.199.108.153`
- 值：`185.199.109.153`
- 值：`185.199.110.153`
- 值：`185.199.111.153`

**CNAME 記錄：**
- 名稱：`www`
- 值：`your-username.github.io`

### 5. 驗證部署

部署完成後，你的網站將在以下地址可用：
- https://claire-ciao.com
- https://your-username.github.io

## 自動部署

每次推送到 `main` 分支時，GitHub Actions 會自動：
1. 構建 Next.js 應用
2. 生成靜態文件
3. 部署到 GitHub Pages

## 故障排除

如果遇到問題：
1. 檢查 GitHub Actions 日誌
2. 確認 DNS 設置正確
3. 等待 DNS 傳播（可能需要 24-48 小時） 