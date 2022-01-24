import express from 'express'
import Comment from '../models/Comments.js';
import { v4 as uuidv4 } from 'uuid'

uuidv4()

const router = express.Router()

router.get('/', (req, res) => {
    
    Comment.find()
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res) => {
    
    Comment.find()
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(400).json({ error }));
});


router.post('/', (req, res) => {
    
    delete req.body.__v;
    const newComment = req.body.comment
    const idCocktail = req.body.idCocktail
   
    const comment = new Comment({'commentaire':newComment, 'idCocktail':idCocktail})
    
    comment.save()
    
    .then(comment => res.status(200).json({ comment, mess:'ok' }))
    .catch(error => res.status(400).json({ error }));
})

export default router