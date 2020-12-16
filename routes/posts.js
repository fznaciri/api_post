const express = require("express");
const router = express.Router();
const Posts = require("../modal/Posts");

// Get all posts
router.get("/", (req, res) => {
    Posts.find()
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"));
});

// Get a specific post
router.get("/:id", (req, res) => {
    Posts.findById(req.params.id)
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"));
});

// Create new post
router.post("/", (req, res) => {
    const {title, description} = req.body;
    console.log(req.body);
    const post = new Posts({
            title,
            description,
    });
    post
        .save()
        .then((resp) => res.status(201).json(resp))
        .catch((err) => res.status(400).json("Request Failed"));
});

// Delete a specific post
router.delete("/:id", (req, res) => {
    Posts.remove({ _id: req.params.id })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"));
});

// Update specific post
router.patch("/:id", (req, res) => {
    Posts.updateOne( { _id: req.params.id}, { $set: req.body })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});
module.exports = router;