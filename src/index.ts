import mysql from 'mysql2';

const express = require('express');
const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'userpassword',
  database: 'testdb',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Successfully connected to MySQL');
  }
  connection.end();
});

// JSONを扱うためのミドルウェアを追加
app.use(express.json());

// シンプルなGETエンドポイント
app.get('/', (req:any, res:any) => {
  res.json({ title: "Hello world" })
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
