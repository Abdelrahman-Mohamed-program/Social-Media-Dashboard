import axios from "axios";

let url= "http://localhost:3000/users";

//getting all users
export async function GetUsers(){
    return await axios.get(url)
}



//adding user to the end point
export async function AddUser(user){
   return await axios.post(url,user)
}
