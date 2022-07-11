import axios from "axios";

const api = axios.create({
    baseURL: "https://grupo2-kenzie-api-quiz.herokuapp.com",
});

export default api;