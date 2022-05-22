const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [
            true, 
            "The author's name is required"
        ],
        minlength: [
            3,
            "The author's name must be at least 3 characters long"
        ]
    }
}, {timestamps: true});
module.exports = mongoose.model('Author', AuthorSchema);