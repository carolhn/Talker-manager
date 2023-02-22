const express = require('express');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAGe = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validatewatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const { write } = require('../util/write');
const { read } = require('../util/read');

const talkerPost = express();

talkerPost.post('/talker',
validateToken,
validateName,
validateAGe,
validateTalk,
validatewatchedAt,
validateRate,
async (req, res) => {
    const { name, age, talk } = req.body;

    const talks = await read();

    const newFile = {
      id: talks.length + 1,
      name,
      age,
      talk,
    };

    await write(newFile);
    return res.status(201).json(newFile);
  });

module.exports = talkerPost;