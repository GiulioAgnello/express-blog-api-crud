// import
let { posts } = require("../db");

// controller delle routers
const index = (req, res) => {
  res.json({
    description: `lista dei post`,
    data: posts,
  });
};
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

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
  posts = posts.filter((currentPost) => currentPost.id !== id);
  res.json({
    description: `eliminato post n ${id}`,
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
