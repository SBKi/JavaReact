import instance from '../instance'

export class BoardApi{

    async retrieveBoard(){
        const {data} = await instance.get("board")
        return data
    }

    async getBoard(id){
        const {data} = await instance.get(`board/${id}`)
        return data
    }

    async saveBoard(param){
        const {data} = await instance.post("board",param)
        return data
    }

    async updateBoard(id,param){
        const {data} = await instance.put(`board/${id}`,param)
        return data
    }
    async deleteBoard(id){
        const {data} = await instance.delete(`board/${id}`)
        return data
    }
}

const boardApi = new BoardApi()
export default boardApi
