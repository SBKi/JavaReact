import instance from "../instance";

export class AuthApi {

    async signup(param){
        const {data} =    await  instance.post("auth/signup",param)
        return data
    }

    async login(param){
        const {data} = await  instance.post("auth/login",param)
        localStorage.setItem("loginToken",data)
        return data
    }
}
const authApi = new AuthApi()
export default authApi
