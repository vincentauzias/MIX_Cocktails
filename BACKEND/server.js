import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.use("/public", express.static("/public"));

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,

    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

transporter.verify(function (err, success) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is ready to take our message");
    }
});

app.post("/api/send", (req, res) => {
    console.log("hi");

    let name = req.body.name;
    let email = req.body.email;
    let firstname = req.body.firstname;
    let birthDate = req.body.birthDate;
    let subject = req.body.subject;
    let message = req.body.message;

    console.log(name);

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

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            // res.status(500).send("Something went wrong."); éviter le status 500, peut faire cracher la page
            res.status(200).json({
                msg: "Une erreur est survenue, merci de rééssayer plus tard.",
            });
        } else {
            // console.log("hilo");
            res.status(200).json({
                msg: "OK",
            });
        }
    });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
