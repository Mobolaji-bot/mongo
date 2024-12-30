import mongoose from "mongoose"
const  mongoDB = async(DATA) => {
    try {
        await mongoose.connect(DATA)
        console.log("Working")
    } catch (error) {
        console.log(error)
    }
}
export  default mongoDB