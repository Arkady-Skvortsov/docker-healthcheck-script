const express = require("express");
require("dotenv").config();

const PORT = 5500 ?? process.env.PORT;

const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  try {
    res.json({ message: "I 🥰 Docker" });
  } catch (e) {
    throw new Error("Connection loose");
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  try {
    console.log(`Hello ${PORT} port!`);
  } catch (e) {
    console.log(e);
  }
});
