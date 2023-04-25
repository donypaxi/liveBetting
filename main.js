const express = require('express')
const { apuestasGet } = require('./controllers/apuestas')
const app = express()


apuestasGet()

app.listen(3000)