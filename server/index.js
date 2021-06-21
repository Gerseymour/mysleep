const express = require('express')
const cors = require('cors')()
const router = require('./router')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3006
const client_id = process.env.GOOGLE_CLIENT_ID // Gets the ID for Google OAuth
const client_secret = process.env.GOOGLE_SECRET // Gets the secret for Google OAuth

app.use(cors)

app.use(express.json())

app.use(router)

// DB connection
mongoose.connect('mongodb://localhost:27017/MySleep', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Connected to database mongodb at 27017')
})
mongoose.connection.on('error', (err) => {
  if (err) {
    console.log('Error in Database connection')
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`)
// })

module.exports = app