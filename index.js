const express = require('express')
const path = require('path')
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
app.use(express.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use('/api', require('./routes/LoginRoute'))


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

module.exports = app
