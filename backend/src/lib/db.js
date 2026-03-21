import mongoose from "mongoose"
import {ENV} from "./env.js";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log("MONGODB CONNCETED:",conn.connection.host)
    }
    catch(error){
         
            console.error( "ERROR CONNECTION",error)
            process.exit(1);
        }
    }
