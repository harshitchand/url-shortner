const express = require('express');
const router = express.Router();
const {generateShortUrl} = require('../controllers/controller');

router.post('/',generateShortUrl);

module.exports = router;