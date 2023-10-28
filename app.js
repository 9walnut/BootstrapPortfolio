const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

const Router = require("./routes");
const vendorsRouter = require("./routes/vendors");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", Router);

app.use("/vendors", vendorsRouter);

app.use(express.static("static"));
app.use("/vendors/static", express.static(path.join(__dirname, "./static")));
app.use(
  "/vendors/bootstrap",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist"))
);

app.get("*", (req, res) => {
  res.send("페이지를 찾을 수 없습니다");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
