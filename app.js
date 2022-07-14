const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./api/users/userRoute')

const app = express()
dotenv.config()
app.use(express.json())

// testing the link

app.use('/api/users', userRouter)

app.listen(process.env.APP_PORT, () => {
  console.log('The server is up and runing on PORT: ', process.env.APP_PORT)
})
