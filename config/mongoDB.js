import mongoose from "mongoose"

const dbConnect = async () =>{
    try {
        mongoose.connection.on('connected', ()=>{
            console.log( 'first connect')
        })
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log('mongo Connection error', error)
    }
}
export default dbConnect