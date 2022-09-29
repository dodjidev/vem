import axios from "axios";

export const serverUrl = 'http://localhost:3200'

export const _axios = axios.create({
    baseURL: serverUrl
})