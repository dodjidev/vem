import axios from "axios";

export const serverUrl = "https://vem-back.herokuapp.com"   // process.env.NODE_ENV == 'production' ?  : 'http://localhost:3200'

export const _axios = axios.create({
    baseURL: serverUrl
})