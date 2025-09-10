// index.js
const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome - Amitav</title>
      <style>
        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }
        .card {
          background: rgba(0, 0, 0, 0.3);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          max-width: 500px;
          backdrop-filter: blur(10px);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        a {
          display: inline-block;
          text-decoration: none;
          color: #fff;
          background: #ff7eb3;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: bold;
          transition: 0.3s;
        }
        a:hover {
          background: #ff5277;
          transform: scale(1.05);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>👋 Welcome!</h1>
        <p>To know more about <strong>Amitav</strong>, visit my site below:</p>
        <a href="https://amitavpusty.site" target="_blank">Explore My Website 🚀</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
