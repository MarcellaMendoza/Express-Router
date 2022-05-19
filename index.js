const express = require('express')
const app = express()
const port = 3000;

const doors = require('./routes.js')

// Add one line of code below that will serve any file
// in the 'public' directory on request
app.use(express.static('public'))

// Add your routes below


app.use('/doors', doors)


app.listen(port)