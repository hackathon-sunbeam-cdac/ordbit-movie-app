import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function login() {
  const navigate = useNavigate();

  const [email,setemail] = useState('sujay@gmail.com')
  const [password,setpassword] = useState('')

   //const {username, setUsername} = useContext(usercontext);

  async function  loginbtn(){
        if(password.length==0)
              toast.warning('Enter valid password')    
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim()))
                toast.warning('Enter valid email')
        else{
            
            
              if(email == "sujay@gmail.com" && password == 'xyz'){
                  navigate('/home')
              }
              //
            else{
              //toast.error(`${response['error']}`)
              toast.error("wrong user")
            }

          }
        }
  return (


    <div className="container d-flex align-items-center justify-content-center">
        <br /><br />
        
        <div className="row w-100">
            <div className="col-8 col-sm-6 col-md-4 col-lg-3 border mx-auto my-auto p-4 rounded login-container">
                <h1 className='page_Header'>Sign in</h1> <br />

                <label htmlFor=""> <b>Email</b></label><input onChange={(e)=>setemail(e.target.value)} type="email"  className='form-control mb-4' required/>
                
                <label htmlFor=""><b>Password</b></label><input onChange={(e)=>setpassword(e.target.value)} type="password"  className='form-control mb-4'/>
                
                <div className='x'><input type="checkbox"/> Remember me   <button className='btn btn-link '>forgot password?</button></div>
                
                <button className='btn btn-dark w-100 rounded mt-2' type='button' onClick={loginbtn}  >login</button>
                <br />
                <div className="text-center x">Don't have account? <button className='btn btn-link x'> <Link to='/signup'>create one</Link></button></div>
            </div>
        </div>
    
    </div> 
  )
}

export default login