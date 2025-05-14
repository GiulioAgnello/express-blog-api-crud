const express = require("express");
const router = express.Router();
let { posts } = require("../db");
const controllerRouter = require("../controllers/controllerRouter");

// index
router.get(`/`, controllerRouter.index);

// show
router.get("/:id", controllerRouter.show);
// store
router.post(`/`, controllerRouter.store);

// update
router.put("/:id", controllerRouter.update);

// modify
router.patch("/:id", controllerRouter.modify);

// destroy
router.delete("/:id", controllerRouter.destroy);

// export
module.exports = router;
