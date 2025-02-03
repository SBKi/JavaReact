import axios from "axios";

const instance = axios.create({baseURL:"/api"})

    instance.interceptors.request.use(function (config) {
        config.headers.Authorization = localStorage.getItem("loginToken");
        return config;
    });

// instance.interceptors.response.use();

export default instance
