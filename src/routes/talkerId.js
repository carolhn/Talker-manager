const express = require('express');
const { read } = require('../util/read');

const talkerId = express();

talkerId.get('/talker/:id', async (req, res) => {
    try {
    const data = await read();

    const list = data.find(({ id }) => id === Number(req.params.id));

    return res.status(200).json(list);
    } catch (error) {
        res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    }
});

module.exports = talkerId;