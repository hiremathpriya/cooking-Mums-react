const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const registrations = require('./routes/registrations.js')

const server = express()

const corsOptions = {
    origin: 'http://localhost:8080',

}

server.use(bodyParser.json())

server.use(cors({origin: 'http://localhost:3000', credentials: "true", methods: ['GET', 'POST', 'OPTIONS']}))
server.use(express.static(path.join(__dirname, '../public')))

server.use(function(req,res,next){

    //res.header("Access-Control-Allow-Credentials", true);
    next()
}) 
//server.use('/api/v1/registrations', registrations)

server.options('/api/v1/registrations', cors(corsOptions));

server.get('/api/v1/registrations', (req, res) => {
    console.log('he');

    res.send('hello');
})

module.exports = server