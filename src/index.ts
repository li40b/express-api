import mysql from 'mysql2';

const express = require('express');
const app = express();
const PORT = 3000;
const useRouter = require('./routes/users');

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
app.use('/users', useRouter);
// POSTエンドポイント
app.post('/api/items', (req:any, res:any) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', item: newItem });
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
