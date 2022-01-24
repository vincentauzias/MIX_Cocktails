import express from 'express'
import Comment from '../models/Comments.js';
import { v4 as uuidv4 } from 'uuid'

uuidv4() // => '72cf5dd7-2c86-4914-9072-b2204a779233'

const router = express.Router()

router.get('/', (req, res) => {
    console.log('fuck' + req.body)
    Comment.find()
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res) => {
    console.log('fuck' + req.body)
    Comment.find()
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(400).json({ error }));
});


router.post('/', (req, res) => {
    // = __v version en DB
    delete req.body.__v;
    const newComment = req.body.comment
    const idCocktail = req.body.idCocktail
    // console.log(comment);
    // passer 'param' en plus de propriété
    const comment = new Comment({'commentaire':newComment, 'idCocktail':idCocktail})
    // console.log(newComment);
    comment.save()
    //res.send(newComment)
    .then(comment => res.status(200).json({ comment, mess:'ok' }))
    .catch(error => res.status(400).json({ error }));
})

export default router