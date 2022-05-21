const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The player's name is required"],
        minlength: [2, "The player's name must be at least 2 characters"]
    },
    position: {
        type: String
    },
    status: {
        gameOne: {
            type: String,
            enum: ['playing', 'not playing', 'undecided'],
            default: 'undecided'
        },

        gameTwo: {
            type: String,
            enum: ['playing', 'not playing', 'undecided'],
            default: 'undecided'
        },

        gameThree: {
            type: String,
            enum: ['playing', 'not playing', 'undecided'],
            default: 'undecided'
        }
    }
}, {timestamps: true});

module.exports = mongoose.model('Player', PlayerSchema);