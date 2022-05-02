const express = require("express");

const router = express.Router();

const app = express();

app.get('/', (req, res) => {
  res.send('From Home server');
})

app.listen(8080, () => {
  console.log(`API REST running in http://localhost:8080 from home server`);
});