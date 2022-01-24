import express from 'express'
import Comment from '../models/Comments.js';

const router = express.Router()

router.get('/', (req, res) => {
    
    Comment.find({ idCocktail: req.query.idC })
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(400).json({ error }));
});

export default router