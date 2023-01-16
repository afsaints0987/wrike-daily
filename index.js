const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const cookieParser = require('cookie-parser')

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Authorization Successful')
})

app.use('/', require('./routes/LoginRoute'))

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

module.exports = app
