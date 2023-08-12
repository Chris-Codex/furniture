const express = require('express')
const app = express()
const port = 3000
const productRouter = require('./routes/ProductsRoute')
const authRouter = require("./routes/AuthRoute")

const dotenv = require("dotenv")
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGOOSE_DB_URL).then(() => {
    console.log("Connected to MongoDB")
})
    .catch((err) => console.log(err, "An error has occured"))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/api/product', productRouter)
app.use('/api/', authRouter)

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`)) 