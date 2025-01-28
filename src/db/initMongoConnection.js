import mongoose from "mongoose"
import { getEnvVar } from "../utils/getEnvVar.js"



export const initMongoConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://alexander:82NXfZsmMD6yL5Ms@cluster0.46t38.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0`)

        console.log('Mongo connection successfully established')   
    }
    catch (e) {
        console.log('Error while setting up mongo connection', e)
        throw e
    }
}
