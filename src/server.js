require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(__dirname + '/dist/sprint-pay'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/sprint-pay/index.html'));
});
app.listen('PORT', PORT);