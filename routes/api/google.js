const axios = require("axios");
const router = require("express").Router();

router.get("/:title", (req, res) => {
    axios
        .get(
            "https://www.googleapis.com/books/v1/volumes?q=" + req.params.title
        )
        .then((results) => {
            console.log(results);
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
