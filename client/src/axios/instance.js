import axios from "axios";

const instance = axios.create({baseURL:"/api"})

// instance.interceptors.request.use();

// instance.interceptors.response.use();

export default instance
