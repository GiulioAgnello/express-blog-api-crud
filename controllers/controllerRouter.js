// import
let { posts } = require("../db");

// controller delle routers
const index = (req, res) => {
  const filterTag = req.query.tags;
  let filteredPost = [...posts];
  if (filterTag) {
    filteredPost = filteredPost.filter((post) => post.tags.includes(filterTag));
  }
  res.json({
    description: `lista dei post`,
    data: filteredPost,
  });
};
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    res.status(404);
    return res.json({
      error: "not found",
      message: "post not found",
    });
  }
  res.json({
    description: `post selezionato`,
    data: post,
  });
};
const store = (req, res) => {
  res.json(`crea nuovo post`);
};
const update = (req, res) => {
  const id = req.params.id;
  res.json(`modifica completa post n ${post}`);
};
const modify = (req, res) => {
  const id = req.params.id;
  res.json(`modifica parziale post n ${post}`);
};
const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);
    return res.json({
      error: "not found",
      message: "post not found",
    });
  }
  posts.splice(posts.indexOf(post), 1);
  res.json({
    description: `lista dei post`,
    data: posts,
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
