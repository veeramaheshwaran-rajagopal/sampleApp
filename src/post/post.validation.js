const joi = require('joi');
//add end use schema
const addPostSchema = joi
    .object({
        body: joi.object({
            title: joi.string().strict().trim().required(),
            description: joi.string().strict().trim().required(),
            isPrivate: joi.boolean(),
            postedDate: joi.string().strict().trim().required(),
            image: joi.string().strict().trim().required(),
        }),
    })
    .unknown(true);
// Get the end - use schema.
const getPostSchema = joi
    .object({
        params: joi.object({
            PostId: joi.string().strict().trim().required(),
        }),
    })
    .unknown(true);
// Get the end - use schema.
const getAllPostSchema = joi
    .object({
        query: joi.object({
            id: joi.string().strict().trim().optional(),
            pageNo: joi.number().optional(),
            limit: joi.number().optional(),
        }),
    })
    .unknown(true);

// Update Post id
const updatePostSchema = joi
    .object({
        body: joi.object({
            title: joi.string().strict().trim().optional(),
            isPrivate: joi.string().strict().trim().optional(),
            description: joi.string().strict().trim().optional(),
            image: joi.string().strict().trim().optional(),
        }),
        params: joi.object({
            PostId: joi.string().strict().trim().required(),
        }),
    })
    .unknown(true);
// Get the end - use schema.
const deletePostSchema = joi
    .object({
        params: joi.object({
            PostId: joi.string().strict().trim().required(),
        }),
    })
    .unknown(true);
module.exports = { addPostSchema, getPostSchema, updatePostSchema, deletePostSchema, getAllPostSchema, getAllPostSchema };
