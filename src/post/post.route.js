const express = require('express');
const { validate } = require('../../middleware/validation');
const PostController = require('./post.controller');
const PostSchema = require('./post.validation');
const router = express.Router();
const { authentication } = require('../../middleware/authentication.middleware');
const { authorization } = require('../../middleware/authorization.middleware');
//route for add Post
router.post('/addPost', authentication, authorization('user'), validate(PostSchema.addPostSchema), PostController.addPost);
//route for Get the Post
router.get(
    '/getPost/:PostId', authentication,
    validate(PostSchema.getPostSchema),
    PostController.getPost,
);
//route for get all Posts
router.get('/getAllPost', authentication, validate(PostSchema.getAllPostSchema), PostController.getAllPost);
// route for update Post
router.put(
    '/updatePost/:PostId', authentication,
    validate(PostSchema.updatePostSchema),
    PostController.updatePost,
);
// route for delete Post
router.delete(
    '/deletePost/:PostId', authentication,
    validate(PostSchema.deletePostSchema),
    PostController.deletePost,
);
module.exports = router;
