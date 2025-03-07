import axios from "axios";

let url;

//getting all users
export async function get_users(){
    return await axios.get(url)
}



//adding user to the end point
export async function get_users(user){
   await axios.post(url,user)
}
