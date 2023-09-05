const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
const DB_MONGO = require('./config/db.config')
const CONSTANT = require('./config/constant')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const movieRoute = require('./routes/movie')
const categoryRoute = require('./routes/category')
const directorRoute = require('./routes/director')
const countryRoute = require('./routes/country')

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
     next()
})

mongoose.connect(DB_MONGO.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB.');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  })

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/movie', movieRoute)
app.use('/api/category', categoryRoute)
app.use('/api/director', directorRoute)
app.use('/api/country', countryRoute)

const PORT = process.env.PORT || CONSTANT.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})
