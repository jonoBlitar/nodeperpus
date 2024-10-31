// app.js
import express from "express";
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

// Koneksi ke MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web_lanjut',
});

app.use(express.json());

// Route sederhana
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route untuk mendapatkan data dari MySQL
app.get('/buku', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM bukus');
  res.json(rows);
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
