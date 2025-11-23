const { body } = require('express-validator')

exports.createPostValidator = [
    body('title').notEmpty().withMessage('it should not be empty').isLength({min:3})
    .withMessage('min 3 letters require')
]