import { configDotenv } from 'dotenv'
import connectDB from './db/index.mjs'
import { app } from './app.mjs'

configDotenv();

//connection to Eat N Play Database
connectDB()
.then(() => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at PORT: ${process.env.PORT}`);
        })
    } catch (error) {
        app.on('error', (err) => {
            console.log(`Express failed!! ${err}`);
            throw err;
        })
    }
})
.catch((err) => {
    console.log(`MongoDB connection failed!! ${err}`);
})