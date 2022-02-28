const Post = require('../schema/post.schema');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.createPost = async (req, res) => {
    try {
        const rBody = req.body;
        const { userId, title, description } = rBody;
        if (ObjectId.isValid(userId) && isValidString(title) && isValidDescription(description)) {
            let resData = await Post.create({
                userId: userId,
                title: title,
                description: description
            });
            res.status(200).json({
                data: resData,
                message: 'Post create successfully'
            })
        } else {
            throw new Error('Invalid userId');
        }
    } catch (error) {
        res.status(501).json({
            error: error.message
        })
    }
}

function isValidString(strData) {
    if (typeof strData === 'string' && strData.split(' ').join('').length >= 10)
        return true;
    else
        throw new Error('Title is not a string or not greater then 10 chracter');
}

function isValidDescription(desData) {
    if (typeof desData === 'string' && desData.split(' ').join('').length >= 50)
        return true;
    else
        throw new Error('Description is not a string or not greater then 50 chracter');
}