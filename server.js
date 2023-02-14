const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.SECRET;
console.log(`THIS IS THE SECRET: ${SECRET}`);

const { engine } = require("express-handlebars");

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index", SECRET: SECRET });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
