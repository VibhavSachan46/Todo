import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = () => {

    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-app.psuz6l3.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log("db connection successfully connected")
    })

    mongoose.connection.on('disconnected', () => {
        console.log("db connection not success")
    })

    mongoose.connection.on('error', () => {
        console.log('db connection error', error.message)
    })
}   

export default Connection
