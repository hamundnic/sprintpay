require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.static(__dirname + '/dist/SprintPay'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist//SprintPay/index.html'));
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
