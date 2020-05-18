const express = require('express')
const app = express()
const catsRoutes = require('./routes/cats')

require('./connection/mongoConnection')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/cats', catsRoutes)

app.listen(5001, () => console.log('Server running'))
