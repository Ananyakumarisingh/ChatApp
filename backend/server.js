const express = require("express");
// const connectMongo = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const {chats} = require("./data/data")


const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome !");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(PORT, async () => {
  try {
    // await connectMongo();
    console.log(`Running at PORT: ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
