const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const templatePath = path.join(__dirname, "../templates/views");
const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set("views", templatePath)
hbs.registerPartials(partialPath)
app.use(express.static(staticPath))

app.get("", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("*", (req, res) => {
    res.render("404");
})

app.listen(8000, () => {
    console.log("Server has started Go an check at port 8000");
})