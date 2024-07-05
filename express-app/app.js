const express = require('express');
const path = require('path');
const app = express();

// 設置模板引擎為 EJS
app.set('view engine', 'ejs');

// 設置靜態文件目錄
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.get('/', (req, res) => {
    res.render('index');
});

// 啟動伺服器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

