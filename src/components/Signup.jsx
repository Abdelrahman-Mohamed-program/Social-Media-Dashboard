import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { add_users, get_users } from "../../service/users.service";

function Singup() {

  
 const[user,set_user]=useState({
    user_name:"",
    email: "",
    password: "",
    logged_in: false
  }
 )
 const [users,set_users]=useState([])
 const [check_user,set_check_user]=useState(false)
 const[confirmPassword,set_cofirm_password]=useState("")
 const [check_passowrd,set_check_password]=useState(true)
 const [check_empty,set_check_empty]=useState(false)
 const input_ref=useRef();


 

 useEffect(()=>{//gets users from the end point and focuses on the first input when rendering
  get_users().then(res=>set_users(res.data))
  input_ref.current.focus()
  },[])
 
 useEffect(()=>{//remove the already regestered alert when typing the email again
  set_check_user(false)
 },[user.email])

 
 useEffect(()=>{//remove the effect of empty alert when typing again
  if (user.password!=""||confirmPassword!=""||user.email!=""||user.user_name!="") {
    set_check_empty(false)
  }
 },[user,confirmPassword])



 useEffect(()=>{//remove the effect of comfirmed password alert when typing password again
  set_check_password(true)
 },[user.password,confirmPassword])


 async function  sign_up(event){
  event.preventDefault()
  if (user.password==""||confirmPassword==""||user.email===""||user.user_name=="") {
    set_check_empty(true)
  }else {
    if ((user.password!=""&&confirmPassword=="")||(confirmPassword!=""&&user.password!==confirmPassword)) {
      set_check_password(false)
    }else{
     if (users.filter(u=>u.email===user.email).length==1){//check if user is aleardy in the data base
        set_check_user(true)}
     else{//will add user if first time signing up with email
      const updatedUser = { ...user, logged_in: true };
      set_user(updatedUser);
      await add_users(updatedUser);
      get_users().then(res=>set_users(res.data))
     }
      }
  }
 }

 
    return (<>
  <div className="container mx-auto m-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm p-4">
          
          {/* sign up page Header Section */}
          <div className="text-center mb-2">
            <h1 className="fs-3 fw-bold">Sign Up</h1>
            <p className="fs-6 text-muted">
              Already have an account?  
              <Link to="/login" className="text-primary text-decoration-none fw-semibold"> Log in</Link>.
            </p>
          </div>

    {/*sign up Form*/}
          <form onSubmit={sign_up} >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" className="form-control" onChange={e=>set_user({...user,user_name:e.target.value})} 
              ref={input_ref} 
              placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" autoComplete="off" id="email" className="form-control" onChange={(e)=>{set_user({...user,email:e.target.value})}}
              placeholder="Enter your email" />
                {(check_user)&&<div className="alert alert-danger" role="alert">
                this email is already Registered please  <Link to="/login" className="text-primary text-decoration-none fw-semibold"> Log in</Link>.
                or use another email
              </div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" onChange={e=>set_user({...user,password:e.target.value})}
               placeholder="Enter your password" />
            </div>

            <div className="mb-5">
              <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
              <input type="text" id="confirmPassword" className="form-control" onChange={e=>set_cofirm_password(e.target.value)} placeholder="Confirm your password" />
              {(!check_passowrd)&&<div className="alert alert-danger" role="alert">
                please re-enter the password correctly
              </div>}
            </div>
          
              {(check_empty)&&<div className="alert alert-danger" role="alert">
                please Fill all the fields before submit
              </div>}
            <div className="container d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>

    </>  );
}

export default Singup;