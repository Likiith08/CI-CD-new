const express = require("express");
 
const app = express();
 
app.get("/hello", (req, res) => {
    res.json({
        message: "Hello PYTHON"
    });
});
 
module.exports = app;