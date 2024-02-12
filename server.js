  // set up Node.js server to run with express framework

  // check if running in production envirment
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  //set up varibles
  // import express from the express library (installed earlier w npm)
  const express = require('express')
  // get app portion by calling express function
  const app = express()
  // import express layouts from the express-ejs-layouts library (installed earlier w npm)
  // app layouts is needed for all files to be put into it so dont have to duplicate header and footer HTML 
  const expressLayouts = require('express-ejs-layouts')
  //impot index router  called index.js from router folder (controller)
  const indexRouter = require('./routes/index')
  
  //set up express app
  // set up app view engine as ejs
  app.set('view engine', 'ejs')
  // set up app veiws to come from current dirctory within the veiws folder - includes server veiws
  app.set('views', __dirname + '/views')
  // set up app layouts to come from layouts folder in file layout.ejs 
  app.set('layout', 'layouts/layout')
  // set up app to use express layouts library
  app.use(expressLayouts)
  // set up app to use public folder files - includes public veiws such as stylsheets , images, javascript etc.
  app.use(express.static('public'))
  
  // set up mongodb library (dependencie)
  const mongoose = require('mongoose')
  // set up connection to our database
  mongoose.connect(process.env.DATABASE_URL)
  // varible for mongoose connection
  const db = mongoose.connection
  // log error if not connected
  db.on('error', error => console.error(error))
  // log sucsessful connection to mongoose once
  db.once('open', () => console.log('Connected to Mongoose'))
  

  //final steps
  // set up app to use index router from root path 
  app.use('/', indexRouter)
  
  // set up app to be  listen to process on port envirment deafult 3000
  app.listen(process.env.PORT || 3000)



