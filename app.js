const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("/public"));

const dataRoute = require("./routes/data");

app.use("/graph", dataRoute);

app.listen(3000, () => console.log("server connected"));
