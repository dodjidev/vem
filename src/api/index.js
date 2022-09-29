import { _axios } from './axios.js'

export default async function request(url , params = {}){
    try {
        params = (Object.keys(params) || []).length > 0 ? params : {};
        params.method = params.method || 'get'
        params.data = params.data || {}
        params.params = params.params || {}
        params.headers = params.headers || {}
        let res = await _axios(url , params);
        return res.data
    }catch(e){
        return { error: true , result: e.message }
    }
       
}

export const Data = {
    async fetchServices(){
        return await request('services')
    },
    async fetchOnService(id){
        return await request('services/'+id)
    },
    async login(data){
        return await request('users/login', {method: 'post' , data})
    },
    async signIn(data){
        return await request('users/signin', {method: 'post' , data})
    },
    async fetchMessages(){
        return await request('messages')
    },
    async sendMessage(data){
        return await request('messages', {method: 'post' , data})
    }
    // async fetchSites(){
    //     return await request('sites')
    // },
    // async fetchSites(){
    //     return await request('sites')
    // },
    // async fetchSites(){
    //     return await request('sites')
    // },
}