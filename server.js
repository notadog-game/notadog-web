const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, './public')));

app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

server.listen(port);