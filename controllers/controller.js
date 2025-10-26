const { nanoid } = require('nanoid');
const model = require('../models/url')

async function generateShortUrl(req, res) {
    const body = req.body;
    if (!body) {
        return res.status(400).json({ error: 'URL IS REQUIRED !!' });
    }
    const shortId = nanoid(8);
    await model.create({
        shortId: shortId,
        redirectUrl: '',
        visitHistory: []
    });
    return res.json({ id: shortId })
};

module.exports = {
    generateShortUrl
}