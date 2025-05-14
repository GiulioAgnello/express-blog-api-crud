const express = require("express");
const router = express.Router();
let { posts } = require("../db");

// index
router.get(`/`, (req, res) => {
  res.json({
    description: `lista dei post`,
    data: posts,
  });
});

// show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  res.json({
    description: `post selezionato`,
    data: post,
  });
});
// store
router.post(`/`, (req, res) => {
  res.json(`crea nuovo post`);
});

// update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json(`modifica completa post n ${post}`);
});

// modify
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json(`modifica parziale post n ${post}`);
});

// destroy
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((currentPost) => currentPost.id !== id);
  res.json({
    description: `eliminato post n ${id}`,
    data: posts,
  });
});

// export
module.exports = router;
