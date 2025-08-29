import axios from "axios";

const port = import.meta.env.VITE_BACKEND_URL

const instance = axios.create({
    baseURL: port,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export default instance;