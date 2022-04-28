import  express  from 'express'
import  bodyParser  from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import nodemailer from "nodemailer";



import dotenv from 'dotenv'
dotenv.config()

const DB_CONNECT = process.env.DB_CONNECT
console.log(DB_CONNECT);

mongoose.connect(DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


import commentairesRoutes from './routes/commentaires.js'
import userComment from './routes/userComment.js'



const app = express()
const PORT = 4001

app.use(cors())
app.use(bodyParser.json())

app.use('/api/commentaires', commentairesRoutes)
app.use('/api/userComment', userComment)


app.get('/', (req, res) => {

    res.send('GET')
})

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/public", express.static("/public"));

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,

    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

transporter.verify(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is ready to take our message");
    }
});

app.post("/api/send", (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let firstname = req.body.firstname;
    let subject = req.body.subject;
    let message = req.body.message;


    const mail = {
        from: name + " " + email,
        to: process.env.EMAIL,
        subject: subject,
        html:
            '<p style="font-size:20px; padding:2%">' +
            message +
            "</p><br>" +
            '<span style="display:flex; justify-content:flex-end; font-size:18px; padding-right:3%">' +
            firstname +
            " " +
            name +
            "</span>",
    };

    transporter.sendMail(mail, (err) => {
        if (err) {
            console.log(err);
            
            res.status(200).json({
                msg: "Une erreur est survenue, merci de rééssayer plus tard.",
            });
        } else {
            res.status(200).json({
                msg: "OK",
            });
        }
    });
});



app.listen(PORT, () => console.log(`Serveur activé sur le port http://localhost:${PORT}`))