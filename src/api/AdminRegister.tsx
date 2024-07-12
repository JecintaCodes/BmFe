import axios from "axios";


const URL:string = "http://localhost:2003/api/v1"


export const createAdmin = async(data:any)=>{
    try {
       return await axios.post(`${URL}/register-admin`,data).then((res:any)=>{
        return res.data.data
       })
    } catch (error) {
        console.log(error)
    }
}

export const signINAdmin = async (data:string)=>{
    try {
        return await axios.post(`${URL}/sign-in-admin`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllAdmin = async()=>{
    try {
       return await axios.post(`${URL}/get-all-admin`).then((res:any)=>{
        return res.data.data
       })
    } catch (error) {
        console.log(error)
    }
}

export const getOneAdmin = async(adminID:any)=>{
    try {
        return await axios.get(`${URL}/:adminID/get-one-admin`,adminID).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}