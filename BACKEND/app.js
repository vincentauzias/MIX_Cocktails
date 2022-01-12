import  express  from 'express'
import  bodyParser  from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'



import dotenv from 'dotenv'
dotenv.config()

const DB_CONNECT = process.env.DB_CONNECT
console.log(DB_CONNECT);

mongoose.connect(DB_CONNECT ,
    { useNewUrlParser: true,
 useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


import commentairesRoutes from './routes/commentaires.js'



const app = express()
const PORT = 4001

app.use(cors())
app.use(bodyParser.json())

app.use('/api/commentaires', commentairesRoutes)

app.get('/', (req, res) => {
    console.log('TEST');

    res.send('Hello ducon')
})

app.listen(PORT, () => console.log(`Serveur activé sur le port http://localhost:${PORT}`))