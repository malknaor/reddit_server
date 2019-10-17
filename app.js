const express = require('express');
const app = express();
const port = 8081;

const redditApi = require('./redditApi');

app.get('/me', async (req, res) => {
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

app.get('/hot', async (req, res) => {
    const response = await redditApi.get('/hot.json')
    .catch(error => console.log(error.message));
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(response.data);
});

app.get('/new', async (req, res) => {
    const response = await redditApi.get('/new.json')
    .catch(error => console.log(error.message));
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(response.data);
});

app.get('/top', async (req, res) => {
    const response = await redditApi.get('/top.json')
    .catch(error => console.log(error.message));
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(response.data);
});

// app.get('/random', async (req, res) => {
//     const response = await redditApi.get('/random.json')
//     .catch(error => console.log(error.message));
    
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send(response.data);
// });

// app.get('/rising', async (req, res) => {
//     const response = await redditApi.get('/rising.json')
//     .catch(error => console.log(error.message));
    
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send(response.data);
// });

// app.get('/trending', async (req, res) => {
//     const response = await redditApi.get('/api/trending_subreddits.json')
//     .catch(error => console.log(error.message));
    
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send(response.data);
// });


app.listen(port, () => console.log(`App listening on port ${port}!`));
