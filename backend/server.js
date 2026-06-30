const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change to your DB username
    password: 'password', // Change to your DB password
    database: 'zipzy_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.listen(5000, () => console.log('Server running on port 5000'));