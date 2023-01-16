import axios from 'axios'

const http = axios.create({
    baseURL: "https://wrike-daily.vercel.app/",
})


export default http