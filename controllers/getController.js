const Post = require('../models/postSchema')

exports.getPost = async (req, res, next) =>{
     try{
            const allPost = await Post.find();
            res.status(200).json(allPost);
        }catch(err){
            res.status(400).json({message: err.message})
        }
}
