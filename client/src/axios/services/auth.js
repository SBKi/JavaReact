import instance from "../instance";

export class AuthApi {

    async signup(param){
        const {data} =    await  instance.post("auth/signup",{params:param})
        return data
    }
}
const authApi = new AuthApi()
export default authApi
