const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect("mongodb+srv://Prithvi-Pratap:4BSujKxangVtm4iW@cluster0.ewwdqzf.mongodb.net/")

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
})

app.post('/signup', async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await User.findOne({ email: username })
    if (!existingUser) {
        const user1 = new User({
            name: name,
            email: username,
            password: password
        })
        user1.save();
        res.json({
            msg: 'User saved successfully'
        })
    }
    else {
        res.status(400).send({
            msg: 'username already in exist',
        })
    }


})
app.listen(port);