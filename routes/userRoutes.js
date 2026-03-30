import express from 'express'
const userRouter = express.Router();

userRouter.get('/users',(req,res)=>{
    res.send("all ok fien")
})
export default userRouter