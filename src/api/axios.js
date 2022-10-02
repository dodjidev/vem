import axios from "axios";
console.log('env:', process.env)
export const serverUrl = window.location.origin.includes('localhost') ? 'http://localhost:3200' : "https://vem-back.herokuapp.com"
console.log('serverUrl:', serverUrl)
export const _axios = axios.create({
    baseURL: serverUrl
})