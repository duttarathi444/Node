const express = require('express');
const { createPost } = require('./controllers/post.controller');
const { getUsersWithPostCount } = require('./controllers/user.controller');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/posts', createPost);
app.get('/users/:limit', getUsersWithPostCount);

module.exports = app;