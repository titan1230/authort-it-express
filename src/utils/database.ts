//import { createConnection } from "mongoose"
import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    if (isConnected) return

    try {
        // dont use mongo client to connect || use mongoose
        mongoose.createConnection(process.env.MONGODB_URI!, {
            dbName: "Author-It",
            keepAlive: true
        })

        isConnected = true;
        console.log('MongoDB connected 😀')

    } catch (error) {
        console.log(error)
    }
}