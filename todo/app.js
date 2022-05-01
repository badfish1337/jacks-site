/**
 * Node Modules
 * Prebuilt: Express, BodyParser
 * Custom: Date
 */
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const {getDate} = require("./date");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



// Global variables
// Note: Constant allows pushing additional elements. Does not allow reassignment.
const items = ["Buy Food", "Eat Food", "Cook Food"];
const workItems = [];


/**
 * Root Routes
 */
app.get("/", (req, res) => {

    res.render("list", {
        listTitle: date.getDate(),
        newListItems: items
    });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

/**
 * Work Routes
 */
app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems});
});

// Post Work Route
app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});


/**
 * About Routes
 */
app.get("/about", (req, res) => {
    res.render("about");
});





// Start listening
app.listen(3000,() => console.log("[+] Server listening on port 3000..."));