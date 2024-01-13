const PostModel = require('../models/post');
const { createDocument } = require("../../service/common.services")
const constants = require("../../utils/constants")
//service for add post
const addPost = async (data) => {
    return createDocument(PostModel, data)
};
//service for get single post by id
const getPostById = async (postId, userId, roleType) => {
    const condition = { _id: postId }
    if (roleType !== constants.ADMIN) {
        condition.userId = userId
    }
    const post = await PostModel.findOne(condition).lean();
    return post;
};
//service for get single post
const getPost = async (condition) => {
    const post = await PostModel.findOne(condition).lean();
    return post;
};

//service for get all post
const getAllPost = async (id, roleType, userId, pageNo, limit) => {
    const condition = { isActive: true };
    if (roleType !== constants.ADMIN && !id) {
        condition.userId = userId
    }
    if (id) {
        condition.userId = id
    }
    const Posts = await PostModel.find(condition).skip(pageNo).limit(limit).lean();
    return Posts;
};
//service for update Post
const updatePost = async (postId, userId, roleType, updateData) => {
    const condition = { _id: postId }
    if (roleType !== constants.ADMIN) {
        condition.userId = userId
    }
    const endUse = await PostModel.updateOne(condition, updateData);
    return endUse;
};
//service for delete Post
const deletePost = async (id) => {
    const post = await PostModel.findByIdAndDelete(id);
    return endUse;
};
module.exports = { addPost, getPostById, getPost, getAllPost, updatePost, deletePost };
