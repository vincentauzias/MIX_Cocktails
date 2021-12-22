const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    name: {type: String, required: true},
    commentaire: {type: String, required: true},
})

module.exports = mongoose.model('Comment', commentSchema)