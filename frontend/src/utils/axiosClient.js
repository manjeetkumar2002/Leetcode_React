import axios from "axios"
require("dotenv").config()
const axiosClient =  axios.create({
    baseURL: process.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

