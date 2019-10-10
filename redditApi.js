const axios = require('axios');
const { clientID, secret } = require('./hide');

const api = axios.create({
    baseURL: 'http://www.reddit.com',
    headers: {
        "Authorization": `Basic ${clientID}:${secret}`,
    }
});

module.exports = api;
