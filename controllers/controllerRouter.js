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
  // nuovo id
  const newId = posts[posts.length - 1].id + 1;

  // recuperiamo info dal body
  const { title, content, image, tags } = req.body;
  const newPost = {
    id: newId,
    title: title,
    content: content,
    image: image,
    tags: tags,
  };
  // pusho il nuovo post nell'array
  posts.push(newPost);
  // restituisco le informazioni aggionrate
  res.status(201);
  res.json(newPost);
};
const update = (req, res) => {
  // recupero il post da modificare
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    res.status(404);
    return res.json({
      error: "not found",
      message: "post not found",
    });
  }
  // creiamo il nuovo post
  const { title, content, image, tags } = req.body;
  const newPost = {
    id: post.id,
    title: title,
    content: content,
    image: image,
    tags: tags,
  };
  posts.splice(posts.indexOf(post), 1, newPost);
  res.json({
    description: `lista dei post`,
    data: posts,
  });
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
