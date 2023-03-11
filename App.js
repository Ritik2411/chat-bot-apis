const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const chat = require("./Controller/ChatController");
app.use(bodyParser.json());
dotenv.config();

app.use("/chat", chat);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
