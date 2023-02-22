const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { read } = require('../util/read');

const searchTalker = express();

searchTalker.get('talker/search', validateToken, async (req, res) => {
    const query = req.query.q;
    const search = await read();

    if (query === '') return res.status(200).json(search);

    const searchTerm = await search.filter((talker) => talker.name.includes(query));

    if (query === undefined) return res.status(200).json([]);

    return res.status(200).send(searchTerm);
  });

module.exports = searchTalker;
