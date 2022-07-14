const express = require('express')
const app = express()

// testing the link

app.get('/api', (req, res) => {
  res
    .json({
      success: 1,
      messsage: 'The REST-API is working...'
    })
    .status(200)
})

app.listen(3000, () => {
  console.log('The server is up and runing')
})
