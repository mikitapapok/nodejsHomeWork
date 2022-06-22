const express = require("express");
const path = require("path");
const rootDir = require("./utils/path");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/users");
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(adminRoute);
app.use(userRoute);
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "view", "errorMessage.html"));
});

app.listen(5000);
