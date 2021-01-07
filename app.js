const express = require("express");
const bodyParser = require("body-parser");

let items = [];
let workItems = [];
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  let day = today.toLocaleDateString("en-US", options)

  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {

  let item = req.body.newItems;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "work list",
    newListItems: workItems
  })
});




app.listen(3000, function() {
  console.log("Server started on port 3000")
});
