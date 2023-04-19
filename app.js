require('dotenv').config()
const express = require('express')
const app = express()
const pug = require('pug')
const path = require('path')
const PORT = process.env.PORT || 4444

const routes = require('./router/index')






app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', routes)






