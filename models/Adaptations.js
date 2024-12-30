import mongoose from "mongoose";

const adaptationSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    ratings:{type:Number, min:1, max:5},
    Gamebasedon:{type:String,},
    genre:{type:String, type:String, type:String},
    age:{type:Number}
})
const adapModules = mongoose.model("adaptations", adaptationSchema)

const createDoc = async() =>{
       try {
        const m1 = new adapModules ({
            name: "terra2",
            ratings: 4.5,
            Gamebasedon:"terraform",
            genre: "adventure",
            age: "13"
        })
        const result = await m1.save()
        console.log(result)
       } catch (error) {
        console.log(error)
       }
}
export { createDoc }