import axios from "axios"

// configuring axios
// creating an instance
const axiosClient =  axios.create({
    // which api you want to hit
    baseURL: 'http://localhost:3000',
    // attach the cookie when i make the requests
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

