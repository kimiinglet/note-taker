///Dependencies
const express = require("express");
const apiR = require("./routes/apiR.js");
const htmlR = require("./routes/htmlR.js");


const app = express();

// State of system envirnment
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("db"));

app.use("/api", apiR);
// what youre seeing in the browser
app.use("/", htmlR);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

