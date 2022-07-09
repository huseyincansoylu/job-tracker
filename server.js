import express from "express"
const app = express()

import dotenv from "dotenv"
dotenv.config()

//db and authenticateUser
import connectDB from "./db/connect.js"


//routers
import authRouter from "./routes/authRoutes.js"
import jobRouter from "./routes/jobsRoutes.js"

const port = process.env.PORT || 5000

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js"
import notFoundMiddleware from "./middleware/not-found.js"

app.use(express.json())

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobRouter)

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