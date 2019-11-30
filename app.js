const express = require("express");
const app = express();
const request = require('request');
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: "Jake wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));


app.get("/", (req, res) => {
    request('https://api.exchangeratesapi.io/latest?base=USD', function (error, response, body) {
        if (error) {
            console.log(error.message);
        } else {
            rate = JSON.parse(body).rates.CNY;
            res.render("index", {
                rate: rate
            });
        }
    });
});

app.listen(PORT, () => {
    console.log("price calculator running on Port" + PORT);
});