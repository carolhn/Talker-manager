// Criando um ednpoint do tipo GET com a rota /talker
const express = require('express');
const { read } = require('../util/read');

const talker = express();

talker.get('/talker', async (req, res) => {
    const data = await read();
    return res.status(200).json(data);
});

module.exports = talker;