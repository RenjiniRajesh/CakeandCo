const baseurl = 'http://localhost:3000'

export const books = async()=>{
    const api = await fetch(`${baseurl}/books/viewbooks`);
    return api.json();
}

export const members = async()=>{
    const membersApi = await fetch(`${baseurl}/users/viewusers`);
    return membersApi.json();
}

export const Loginuser=async(postdata)=>{
    const res=await fetch(`${baseurl}/users/login`,{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(postdata)
    })
    return res.json()
}