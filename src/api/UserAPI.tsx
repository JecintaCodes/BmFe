import axios from "axios"


const URL:string = "http://localhost:2003/api/v1"

export const createUser = async (data:any)=>{
    try {
        return await axios.post(`${URL}/:adminID/register-user`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readUser = async () =>{
    try {
        return await axios.get(`${URL}/get-all-user`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signInUser = async (data:any) =>{
    try {
       return await axios.post(`${URL}/sign-in-user`,data).then((res:any)=>{
        return res.data.data
       }) 
    } catch (error) {
        console.log(error)
    }
} 

export const getOneUser = async(userID:any)=>{
    try {
        return await axios.get(`${URL}/:userID/get-one-user`,userID).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}