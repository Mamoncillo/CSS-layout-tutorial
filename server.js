var express = require('express'),
    app = express();

app.get("/", function (req, res) {
  res.redirect("/index.html");
});

app.use(express.static('public'));

console.log("Server is running on: http://localhost:3000/");
app.listen(3000, 'localhost');
