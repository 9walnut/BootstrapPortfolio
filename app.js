const express = require("express");
const path = require("path");
const vendorsRouter = require("./routes/vendors");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/vendors/bootstrap",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist"))
);
app.use("/vendors", vendorsRouter);

const Router = require("./routes");
app.use("/", Router);

app.get("*", (req, res) => {
  res.send("페이지를 찾을 수 없습니다");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
