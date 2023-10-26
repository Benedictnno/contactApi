const express = require("express");
const app = express();
require("dotenv").config();

const Port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(Port, () => {
  console.log(`Port ${Port} is active`);
});
