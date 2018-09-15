const express = require('express');
const app = express();
app.use(express.json());

// Routes
const indexRouters = require('./routes/index');
const usersRouters = require('./routes/users');
const postsRouters = require('./routes/posts');

// Use Routes
app.use('/', indexRouters);
app.use('/users', usersRouters);
app.use('/posts', postsRouters);

// export module app
module.exports = app;