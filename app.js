// import
const { posts } = require("./db");
const postsRouter = require("./routers/posts");
const express = require("express");
// install express e port
const app = express();
const port = 3000;
const url = `http://localhost:${port}`;

// cartella public disponibile
app.use(express.static("public"));
app.use(express.json());

// accesso all routers
app.use(postsRouter);

// ascolto
app.listen(port, () => {
  console.log(`server in ascolto su ${url}`);
});
