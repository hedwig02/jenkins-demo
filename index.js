const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function add(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('DevSecOps App running on AKS 🚀');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = { add };
