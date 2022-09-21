var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Nhat 2 hello 2 an em oi iiiiiiiiii" });
});

module.exports = router;
