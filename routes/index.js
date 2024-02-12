const express = require('express')
// set varible to obtain express router
const router = express.Router()

// get the router root (localhost:3000) 
router.get('/', (req, res) => {
    //render the index.ejs view
  res.render('index')
})

// export router infromation to indexRouter(in server.js)
module.exports = router


