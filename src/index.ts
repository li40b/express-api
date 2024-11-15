// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// JSONを扱うためのミドルウェアを追加
app.use(express.json());

// シンプルなGETエンドポイント
app.get('/', (req:any, res:any) => {
  res.send('Hello, world!');
});

// サンプルのGETエンドポイント（パラメータ付き）
app.get('/api/items/:id', (req:any, res:any) => {
  const itemId = req.params.id;
  res.json({ id: itemId, name: `Item ${itemId}` });
});

// POSTエンドポイント
app.post('/api/items', (req:any, res:any) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', item: newItem });
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
