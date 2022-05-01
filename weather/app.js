const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

    const query = req.body.cityName;
    // reno lat/long lat=39.635784&lon=-119.911346 can be used instead of "q="
    const apikey = "89b1017138d8e3b6adb4487281f603ad";
    const unit = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apikey +"&q=" + query + "&units=" + unit;

https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write("<h1>The temperature in " + query + " is " + temp + " degrees Fahrenheit.</h1>");
        res.write("<p>The weather is " + description + "</p>");
        res.write("<img src=" + imageURL + ">");
        res.send();
    });
});
});









app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

