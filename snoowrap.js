const useragent = require('useragent');
useragent(true);

const snoowrap = require('snoowrap');
const requester = new snoowrap({
    userAgent: 'useragent',
    clientId: 'g4V-83epZb-z5A',
    clientSecret: '3BoGtRiFlzIja1yvc9hLHiaigiI',
    refreshToken: '135583368629-XRHYm1gV5OoXbz6hdga372AUPyk'
});

module.exports = requester;
// client_ID - g4V-83epZb-z5A
// https://www.reddit.com/api/v1/authorize?client_id=g4V-83epZb-z5A&response_type=code&state=RANDOM_STRING&redirect_uri=http://127.0.0.1:8081&duration=permanent&scope= *


/*
const requester = require('./snoowrap');

getHotPosts = async () => {
    let res = await requester.getHot().map(post => post)
    .then(response => response)
    .catch(error => console.log(`Error in getHotPosts - ${error.message}`));
    
    return res;
}

// getTrendingSubreddits = async () => {
//     let res = await requester.getHot()
//     .catch(error => console.log(`Error in getHotPosts - ${error.message}`));
    
//     return res;
// }

app.get('/posts/hot', (req, res) => {
    const hotPosts = getHotPosts();
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(hotPosts);
});

// app.get('/trending_subreddits', (req, res) => {
//     const hotPosts = getTrendingSubreddits();
    
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.send(hotPosts);
// });
*/