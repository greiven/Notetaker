
const path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3030;
let noteCount = 1;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});
