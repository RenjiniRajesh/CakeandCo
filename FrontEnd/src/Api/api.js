const baseurl = 'http://localhost:3000'

export const books = async()=>{
    const api = await fetch(`${baseurl}/books/viewbooks`);
    return api.json();
}

export const members = async()=>{
    const membersApi = await fetch(`${baseurl}/users/viewusers`);
    return membersApi.json();
}