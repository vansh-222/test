const express = require('express');
const routes = express.Router();

const Post = require('../models/postSchema')
const { createPost, pagination, filterUsers, sortUser} = require('../controllers/postController')
const { getPost } = require('../controllers/getController')
const { validate } = require('../middleware/dataValidator')
const { createPostValidator } = require('../validators/postValidator')
const upload = require('../middleware/upload')


routes.use(express.json());

routes.get('/getAll', getPost)

routes.get('/pagination', pagination);
routes.get('/filterUser', filterUsers);
routes.get('/sortUser', sortUser);
routes.post('/upload', upload.single('thumbnail'), createPostValidator, validate, createPost)


routes.get('/getPostById/:id', async(req, res)=>{
    try{
        const result =await Post.findById(req.params.id);
        if(!result) return res.status(404).json({message: "invalid id"})
            res.status(200).json(result);
    } catch(err){
        res.status(400).json({message: err.message})
    }
})


routes.patch('/update/:id', async(req, res)=>{
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id);
        if(!updatedPost) return res.status(404).json({message: "post does not updated"})
            res.status(200).json(updatedPost)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

routes.delete('/delete/:id', async(req, res)=>{
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if(!deletedPost) return res.status(404).json({message: "post does not deleted"})
            res.status(200).json(deletedPost)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = routes;
