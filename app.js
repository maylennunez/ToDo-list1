const express = require("express");
const bodyParser = require("body-parser");

let items = [];
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
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
    kindOfDay: day, newListItems: items
  });

});

app.post("/", function(req, res){
  let item = req.body.newItems;
  //console.log(item);
  items.push(item);
res.redirect("/");

});





app.listen(3000, function() {
  console.log("Server started on port 3000")
});
