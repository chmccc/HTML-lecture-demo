/** @name server.js
 * @description HTML/CSS Demo Application server
 * Suggest use of 'Live Server' VSCode extension for easy reloading of Chrome,
 * but this was created also, for use with nodemon run npm start
 * @author chmccc
 * @date 9/14/18
 * {@link http://localhost:5555/}
 */

const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');

const port = 5555;

app.use(cors());
app.use(express.static(path.join(__dirname + '/client')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/client/vanilla.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));