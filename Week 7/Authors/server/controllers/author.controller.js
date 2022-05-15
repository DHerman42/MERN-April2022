const Author = require('../models/author.model')

const createAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {res.json(newAuthor);})
        .catch((err) => {res.status(400).json({err});});
};

const findAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {res.json(allAuthors);})
    .catch((err) => {res.status(400).json({err});});
};

const findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then((oneAuthor) => {res.json(oneAuthor);})
        .catch((err) => {res.status(400).json({err});});
};

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true, 
        runValidators: true,
    })
        .then((updatedAuthor) => {res.json(updatedAuthor);})
        .catch((err) => {res.status(400).json({err});});
};

const deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then((deletedResponse) => {res.json(deletedResponse);})
        .catch((err) => {res.status(400).json({err});});
};

module.exports = {
    createAuthor,
    findAllAuthors,
    findOneAuthor,
    updateAuthor,
    deleteAuthor
};