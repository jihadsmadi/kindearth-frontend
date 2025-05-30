import api from "../api"


export const GetCSRF = async()=>{
    return await api.get("csrf-token").then((r)=>r).catch((error)=> {
        throw new Error(error);
    } )
}