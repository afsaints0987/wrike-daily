import axios from 'axios'

const http = axios.create({
    baseURL: "https://wrike-daily-api.vercel.app/",
})


export default http