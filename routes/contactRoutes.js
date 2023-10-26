const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ content: "getting all contacts" });
});

module.exports = router;
