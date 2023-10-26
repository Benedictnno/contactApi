const express = require("express");
const errorHandler = require("./middleware/ErrorHandler");
const app = express();
require("dotenv").config();

const Port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)
app.listen(Port, () => {
  console.log(`Port ${Port} is active`);
});
