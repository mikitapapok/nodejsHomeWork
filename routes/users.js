const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/users", (req, res) => {
  res.sendFile(path.join(rootDir, "view", "user.html"));
});

module.exports = router;
