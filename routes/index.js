var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Hello jenkins develop 1 4 dfwqefwef" });
});

module.exports = router;
