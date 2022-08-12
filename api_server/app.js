require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ROUTERS-----------------------------------------
const index_router = require('./routes/index_routes')
// const console = require('console')

//ROUTES-----------------------------------------
app.use('/', index_router)

//EXPRESS APP-----------------------------------------
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true}, (err) => {
    if(err) throw err

    console.log('Connected to MongoDB')

    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`)
    })
})

