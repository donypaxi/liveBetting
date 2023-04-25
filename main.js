
const express = require('express')
const app = express()
const { todasLasApuestas } = require('./controllers/todasLasApuestasId')
// const { codigosPartidos } = require('./controllers/partidosEnVivos')

// const { apuestas2Get } = require('./controllers/apuestas2')
// const { apuestasGet } = require('./controllers/apuestas')
// todasLasApuestas()
app.get('/',todasLasApuestas)
// codigosPartidos()
// apuestas2Get()
// apuestasGet()

app.listen(3000)