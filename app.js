const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World! This is the Homepage "/" ')
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/IT', function(req, res) {
    res.sendFile(path.join(__dirname, '/IT.html'));
});

app.post('/', (req, res) => {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    

    console.log(firstName, lastName, email)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })