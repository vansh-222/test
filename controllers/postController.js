const Post = require('../models/postSchema')

// exports.createPost = async (req, res, next) => {
//     try {
//         const post = new Post({
//             title: req.body.title,
//             author: req.body.author,
//             email: req.body.email
//         })
//         const savePost = await post.save()
//         res.status(201).json({
//             success: true,
//             data: savePost
//         })
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }

// }

exports.createPost = async (req, res, next) => {
    try {
        const body = req.body
        
        if (req.file){
            body.thumbnail = req.file.filename;
        }

        const post = await Post.create(body)

        res.json({
            success: true,
            data: post
        })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.pagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const skip = (page - 1) * limit;

        const total = await Post.countDocuments();
        const data = await Post.find().skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: total,
            limit: limit,
            data: data
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.filterUsers = async (req, res, next) => {
    try {
        let query = {};

        if (req.query.title) {
            query.title = req.query.title;
        }

        if (req.query.author) {
            query.author = req.query.author;
        }

        const data = await Post.find(query);

        res.status(200).json({
            success: true,
            total: data.length,
            data
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.sortUser = async (req, res, next) => {
 try {
    const sortPost = req.query.sort;
    const post = await Post.find().sort(sortPost)

    res.status(200).json({
        success: true,
        count: post.length,
        data: post

    });
 } catch (err) {
        res.status(500).json({ message: err.message });
    }
} 

