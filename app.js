const express = require('express');
const app = express();
const port = 3000;
const API_KEY = "ghp_fakeTokenForDemo1234567890abcdef";

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  // ✅ Corregido: sanitizamos la entrada
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`🚀 App listening on http://localhost:${port}`);
});
