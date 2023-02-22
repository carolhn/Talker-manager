const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const { read } = require('../util/read');

// middlewares
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAGe = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validatewatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

const talkerPut = express();
const talkerPath = path.resolve(__dirname, '../talker.json');

talkerPut.put('/talker/:id',
validateToken,
validateName,
validateAGe,
validateTalk,
validatewatchedAt,
validateRate,
async (req, res) => {
const { id } = req.params;
const { name, age, talk } = req.body;

const data = await read();
const index = data.findIndex((element) => element.id === Number(id));
data[index] = { id: Number(id), name, age, talk };

await fs.writeFile(talkerPath, JSON.stringify(data, null, 2));

res.status(200).json(data[index]);
});

module.exports = talkerPut;