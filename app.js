const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const service = require('./js/service');
const models = require('./data/models');
const constants = require('./data/constants');
const logger = require('./js/logger');

const app = express();
app.use(bodyParser.json());
const port = 5000;

app.use(cors());

app.get('/', (req, res) => res.send('API Ok'));

//Retrieve a user's profile
app.post('/user', function (req, res) {
    if (!req.body.username) return res.send('No username provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.user;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

//Retrieve an amount of posts from a user
app.post('/post/all', function (req, res) {
    if (!req.body.username) return res.send('No username was provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.posts;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

app.post('/post/all2', function (req, res) {
    if (!req.body.username) return res.send('No username was provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.posts2;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

app.post('/post/all3', function (req, res) {
    if (!req.body.username) return res.send('No username was provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.posts3;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

//Retrieve a single post from the given url
app.post('/post', function (req, res) {
    if (!req.body.post_url) return res.send('No url was provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.posts_single;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

//Retrieve a random post from a user
app.post('/post/random', function (req, res) {
    if (!req.body.username) return res.send('No username was provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.posts_random;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

//Retrieve comments from a post
app.post('/post/comments', function (req, res) {
    if (!req.body.post_url) return res.send('No url was provided');

    const settings = Object.assign(models.scrape_settings, req.body);
    settings.scrape_type = constants.types.comments;

    service.scrape(settings).then(data => {
        return res.send(data)
    });
});

//Retrieve logs
app.get('/logs', function (req, res) {
    return res.send(logger.read_logs());
});

app.listen(port, () => console.log('igscraper listening on :5000\nCORS is enabled'));