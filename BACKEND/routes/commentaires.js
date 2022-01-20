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


router.post('/', (req) => {
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

    // const commentaireId = uuidv4() // => '72cf5dd7-2c86-4914-9072-b2204a779233'
    // //reprend les paramètres définis dans l'objet commentaire et vient ajouter le param id
    // const commentaireWithId = { ...commentaire, id: commentaireId}
    // commentaires.push(commentaireWithId)

    //méthode simplifiée 
    // commentaires.push({ ...commentaire, id: uuidv4() })

    // res.send(`Commentaire ${commentaire.comment} ajouté à la DB`)
})

export default router