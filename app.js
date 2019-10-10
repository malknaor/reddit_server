const express = require('express');
const app = express();
const port = 8081;

const redditApi = require('./redditApi');

app.get('/api/v1/me', async (req, res) => {
    const response = await redditApi.get('/api/v1/me.json')
    .catch(error => console.log(error.message));
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(response.data);
});

app.get('/best', async (req, res) => {
    const response = await redditApi.get('/best.json')
    .catch(error => console.log(error.message));
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(response.data);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
