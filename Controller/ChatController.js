const express = require("express");
const router = express.Router();
const { getReply } = require("../Repository/ChatRepository");

router.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await getReply(message);
  res.status(200).send(response);
});

module.exports = router;
