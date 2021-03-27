const express = require('express');
const path = require('path');
const app = require('express');
app.use(express.static(_dirname + '/dist/sprint-pay'));
app.get('/*', (req, res) => {
            res.sendFile(path.join(_dirname + '/dist/sprint-pay/index.html#));
            });

            app.listen(process.env.PORT || 8080);