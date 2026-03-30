import express from 'express'
import 'dotenv/config'
import dbConnect from './config/mongoDB.js'
import userRouter from './routes/userRoutes.js'
const app = express()
const port = process.env.PORT || 7000

dbConnect()
 
app.get('/', (req, res) => {
  res.send('Hello Worldsss!')
})
app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})