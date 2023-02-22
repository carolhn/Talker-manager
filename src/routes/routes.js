const express = require('express');

const router = express.Router();

const routeTalker = require('./talker');
const talkerId = require('./talkerId');
const login = require('./login');
const talkerPost = require('./talker.post');
const talkerPut = require('./talkerId.put');
const talkerDel = require('./talker.del');
const talkerSearch = require('./searchTalker');

router.use(routeTalker);
router.use(talkerId);
router.use(login);
router.use(talkerPost);
router.use(talkerPut);
router.use(talkerDel);
router.use(talkerSearch);

module.exports = router;