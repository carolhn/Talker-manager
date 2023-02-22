const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const validateToken = require('../middlewares/validateToken');
const { read } = require('../util/read');

const talkerDel = express();
const talkerPath = path.resolve(__dirname, '../talker.json');

talkerDel.delete('/talker/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    
    const data = await read();
    const filterId = data.filter((element) => element.id !== Number(id));

    const updated = JSON.stringify(filterId, null, 2);
     await fs.writeFile(talkerPath, updated);

    res.status(204).json();
});

module.exports = talkerDel;