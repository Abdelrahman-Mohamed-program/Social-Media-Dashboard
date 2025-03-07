import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { get_users } from "../../service/users.service";

function Login() {
    const[user,set_user]=useState({
       email: "",
       password: "",
     }
    )
    const [users,set_users]=useState([])
    const [check_empty,set_check_empty]=useState(false)
    const [check_email,set_check_email]=useState(true)
    const[confirm_password,set_cofirm_password]=useState(false)
    const input_ref=useRef();

   
  
    
   useEffect(()=>{//getting users from the end point and focusing on first input
    get_users().then(res=>set_users(res.data))
    input_ref.current.focus()
   },[])
   


    useEffect(()=>{//remove the effect of empty alert when typing again
      if (user.password!=""||user.email!="") {
        set_check_empty(false)
      }
     },[user])

     useEffect(()=>{//remove the effect of wrong password alert
     set_cofirm_password(false)
     },[user])

     useEffect(()=>{//remove the effect of email Not found alert
      set_check_email(true)
     },[user.email])



   

  
    function log_in(event){
     event.preventDefault()
     if ((user.password==""||user.email==="")&&check_email==true) {
      set_check_empty(true)
    }else{
      if (users.length==0) {
        set_check_email(false)
      }else{
      let email_found = false; 
      for (let index = 0; index < users.length; index++) {
        if (users[index].email==user.email) {
          set_check_email(true)
          email_found=true;
          if (users[index].password==user.password) {
            users[index].logged_in=true
            set_user(users[index])
          }else  set_cofirm_password(true)
          break;
      }
      }
      if (!email_found) {
        set_check_email(false)
      }
    }
    }
    }

    return (<>
  <div className="container m-5 mx-auto">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm p-4">
          
          {/* log in page Header Section */}
          <div className="text-center mb-2">
            <h1 className="fs-3 fw-bold">Log in</h1>
            <p className="fs-6 text-muted">
              Don't have an account?  
              <Link to="/signup" className="text-primary text-decoration-none fw-semibold"> sign up</Link>.
            </p>
          </div>

    {/*log in Form*/}
          <form onSubmit={log_in}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" ref={input_ref} id="email" onChange={e=>set_user({...user,email:e.target.value})} className="form-control" placeholder="Enter your email" />
              {!check_email&&<div className="alert alert-danger" role="alert">
                This email is not Registered please  <Link to="/signup" className="text-primary text-decoration-none fw-semibold"> sign up</Link>.
              </div>}
            
            </div>
           
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control"onChange={e=>set_user({...user,password:e.target.value})}placeholder="Enter your password" />
              {confirm_password&&
              <div className="alert alert-danger" role="alert">
             incorrect password!
            </div>}
          
              
            </div>

            {(check_empty)&&<div className="alert alert-danger" role="alert">
                please Fill all the fields before submit
              </div>}
          

            <div className="container d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>


    </>  );
}

export default Login;