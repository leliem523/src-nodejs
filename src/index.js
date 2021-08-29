const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const hbs  = require('express-handlebars');
const path = require("path");

app.use(morgan('combined'));
app.engine('hbs', hbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources/views"));


app.get("/", (req, res) => {
    res.render("home");
})

app.listen(port, () => {
    console.log("Listened port 3000")
});