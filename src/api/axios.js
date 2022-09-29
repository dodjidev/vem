import axios from "axios";

export const serverUrl = process.env.NODE_ENV == 'production' ? "https://vem-back.herokuapp.com" : http://localhost:3200'

export const _axios = axios.create({
    baseURL: serverUrl
})