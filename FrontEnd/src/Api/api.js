const baseurl = 'http://localhost:3000'

export const Loginuser = async (postdata) => {
    const res = await fetch(`${baseurl}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials:"include",
        body:JSON.stringify(postdata)
    })
    return res.json()
}
export const Signupuser = async (postdata) => {
    const res = await fetch(`${baseurl}/users/createuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials:"include",
        body: JSON.stringify(postdata)
    })
    return res.json()
}



// admin section


// 1. CREATE CAKE
export const CreateCake = async (postdata) => {
    try {
        const response = await fetch(`${baseurl}/cake/createcake`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
             credentials:"include",
            body: JSON.stringify(postdata), // Converting JS object to JSON string
        });
        return await response.json();
    } catch (error) {
        console.error("Fetch Create Error:", error);
       
    }
};

// 2. VIEW ALL CAKES
export const ViewCakes = async () => {
    try {
        const response = await fetch(`${baseurl}/cake/viewcakes`, {
            method: "GET", // GET is default, but explicitly writing it keeps it clean
        });
        return await response.json(); // Returns { success: true, data: [...] }
    } catch (error) {
        console.error("Fetch View Error:", error);
       
    }
};

// 3. UPDATE CAKE
export const UpdateCake = async (id, updatedData) => {
    try {
        const response = await fetch(`${baseurl}/cake/updatecake/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });
        return await response.json();
    } catch (error) {
        console.error("Fetch Update Error:", error);
        
    }
};

// 4. DELETE CAKE
export const DeleteCake = async (id) => {
    try {
        const response = await fetch(`${baseurl}/cake/deletecake/${id}`, {
            method: "DELETE",
        });
        return await response.json();
    } catch (error) {
        console.error("Fetch Delete Error:", error);
    
    }
};
