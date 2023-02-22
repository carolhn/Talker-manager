const express = require('express');
const validEmail = require('../middlewares/validateEmail');
const validPassword = require('../middlewares/validatePassword');

const login = express();
const generateToken = require('../util/token');

login.use(express.json());

login.post('/login', validEmail, validPassword, (req, res) => {
    const { email, password } = req.body;
    console.log(`email: ${email}, senha: ${password}`);
  
    const tokenG = generateToken();

    return res.status(200).json({ token: tokenG });  
    });

module.exports = login;