import express from 'express'
import 'dotenv/config'
import dbConnect from './config/mongoDB.js'
const app = express()
const port = process.env.PORT || 7000

dbConnect()
 
app.get('/', (req, res) => {
  res.send('Hello Worldsss!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})