const express = require('express');
const path = require('path');
const app = express();
process.env.PORT = 5000;
app.use(express.static(__dirname + '/dist/sprint-pay'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/sprint-pay/index.html'));
});
app.listen(process.env.PORT || 8080);