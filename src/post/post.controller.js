const PostService = require('./post.service');
const { sendResponse, errorHandler } = require('../../utils/common_functions');
// Add a new Post.
const addPost = async (req, res) => {
    try {
        const { body: data, userId } = req;
        const Post = await PostService.getPost({ title: data.title })
        if (Post)
            return sendResponse(res, true, 200, 'Post already exist.');
        await PostService.addPost({ ...data, userId });
        return sendResponse(res, true, 200, 'Post added successfully.');
    } catch (error) {
        errorHandler(error, res);
    }
};
// Get available Post.
const getPost = async (req, res) => {
    try {
        if (Object.keys(req.query).length !== 0)
            return sendResponse(res, false, 404, 'Url not found.');
        const {
            params: { PostId }, roleType
        } = req;
        const Post = await PostService.getPostById(PostId, roleType);
        if (!Post) return sendResponse(res, true, 200, 'Post not available.');
        return sendResponse(res, true, 200, 'Post available.', Post);
    } catch (error) {
        errorHandler(error, res);
    }
};
// Get a list of available Posts.
const getAllPost = async (req, res) => {
    const {
        query: { id, pageNo, limit }, userId, roleType
    } = req;
    const Posts = await PostService.getAllPost(id, roleType, userId, Number(pageNo), Number(limit));
    if (Posts.length === 0) return sendResponse(res, false, 400, 'Posts not available.', []);
    return sendResponse(res, true, 200, 'Posts available.', Posts);
};
// Updates the Post detail for the given ID.
const updatePost = async (req, res) => {
    try {
        const {
            params: { PostId }, userId, roleType,
            body: data,
        } = req;
        const Post = await PostService.getPostById(PostId, userId, roleType);
        if (!Post) return sendResponse(res, false, 400, 'Post not available.');
        await PostService.updatePost(PostId, userId, roleType, data);
        return sendResponse(res, true, 200, 'Post updated successfully.');
    } catch (error) {
        errorHandler(error, res);
    }
};
// Delete the Post for the given ID.
const deletePost = async (req, res) => {
    try {
        const {
            params: { PostId }, userId, roleType
        } = req;
        const Post = await PostService.getPostById(PostId, userId, roleType);
        if (!Post) return sendResponse(res, false, 400, 'Post not available.');
        await PostService.deletePost(PostId);
        return sendResponse(res, true, 200, 'Post deleted successfully.');
    } catch (error) {
        errorHandler(error, res);
    }
};
module.exports = { addPost, getPost, getAllPost, updatePost, deletePost };
