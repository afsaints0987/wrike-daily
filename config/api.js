const axios = require('axios')
const apiKey = process.env.API_KEY

const http = axios.create({
    baseURL : 'https://www.wrike.com/api/v4',
    headers : {
        Authorization: `Bearer ${apiKey}`
    }
})

module.exports = {
    http
}