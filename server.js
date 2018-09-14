const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');

const port = 5555;

app.use(cors());
app.use(express.static(path.join(__dirname + '/client')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));