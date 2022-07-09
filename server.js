import express from "express"
const app = express()

import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/connect.js"

const port = process.env.PORT || 5000

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js"
import notFoundMiddleware from "./middleware/not-found.js"

app.get("/", (req, res) => {
    res.send("welcome")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)

        app.listen(port, () => {
            console.log(`Server is listening on port:${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}


start()