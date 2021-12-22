const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const DB_CONNECT = process.env.DB_CONNECT
console.log(DB_CONNECT);

mongoose.connect(DB_CONNECT ,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



const Comment = require('./models/Comments')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json())

app.post('/api/Comments', (req, res, next) =>{
    delete req.body.__v;
    const comment = new Comment({
  
      name: 'connard',
      commentaire: 'vas te faire cuire le cul !'
  
    });
    comment.save()
    .then(comment => res.status(201).json({ comment }))
    .catch(error => res.status(400).json({ error }));
    next()
  });

app.put('/api/Comments/:id', (req, res, next) => {
    Comment.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})

    app.put('/api/products/:id', (req, res, next) => {
        Comment.updateOne({ _id: req.params.id }, {    
          name: 'glandu',
          commentaire: 'NaN',
          _id: req.params.id })

        .then(() => res.status(200).json({ message: 'commentaire modifié' }))
        .catch(error => res.status(400).json({ error }));
    next()

    })
  next()
})
  
  app.delete('/api/Comments/:id', (req, res, next) => {
      Comment.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'suppression réussie'}))
          .catch(error => res.status(400).json({ error }));
        next()
  })
  
  app.get('/api/Comments', (req, res, next) => {
    Comment.find()
        .then(Comments => res.status(200).json({ Comments }))
        .catch(error => res.status(400).json({ error }));
        next()
  });
  
  app.get('/api/Comments/:id', (req, res) => {
      Comment.findOne({ _id: req.params.id })
      .then(comment => res.status(200).json({ comment }))
      .catch(error => res.status(400).json({ error }));
  });



  module.exports = app;