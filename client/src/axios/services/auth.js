import axios from "axios";

export class AuthApi {

    async signup(param){
        const {data} =    await axios.post("/api/auth/signup",param)
        return data
    }

    async login(param){
        await axios.post("/api/auth/login",param).then((res)=>{
            const token = res.headers.get("Authorization")
            localStorage.setItem("loginToken",token)
            localStorage.setItem("nickName",res.data)
        })
    }
}
const authApi = new AuthApi()
export default authApi
