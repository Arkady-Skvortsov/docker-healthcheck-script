const express = require("express");
require("dotenv").config();

const PORT = 5500 ?? process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  try {
    console.log(`Hello ${PORT} port!`);
  } catch (e) {
    console.log(e);
  }
});
