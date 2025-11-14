import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Signup.css'

function signup() {
  const navigate = useNavigate()      

        const [Firstname ,setFirstName] = useState('')
        const [Lastname , setLastName] = useState('')
        const [Email,setEmail] = useState('')
        const [Password , setPassword] = useState('')
        const [Phone , setPhone] = useState('')
        const [Birth ,setBirth] = useState('00-00-0000')


       async function Onsignup(){
            if(Firstname.length==0){
              toast.warning('Enter the valid firstname')
            }else if (Lastname.length==0){
              toast.warning('Enter the valid Lastname')

            }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email.trim())){
              toast.warning('Enter valid email')
            }else if(Password.length==0){
              toast.warning('Enter valid password')
            }else if(Phone.length==0){
              toast.warning('Enter valid phone')
            } else{
              console.log(Firstname,Lastname,Email,Password,Phone,Birth);
              navigate('/')
              //
            }
          }    

  return (
    <div className="container d-flex align-items-center justify-content-center">
        <br /><br />
        <div className="row w-100">
            <div className="col-7 col-sm-5 col-md-4 col-lg-4  border mx-auto my-auto p-4 rounded signup-container">
                <h1 className='page_Header'>Sign up</h1> <br />

                <label htmlFor="" > <b>First Name</b></label><input type="text"  className='form-control mb-2'onChange={(e)=>setFirstName(e.target.value)} />
                
                <label htmlFor=""><b>Last Name</b></label><input type="text"  className='form-control mb-2' onChange={(e)=>setLastName(e.target.value)} />
                
                <label htmlFor=""> <b>Email</b></label><input type="email"  className='form-control mb-2' onChange={(e)=>setEmail(e.target.value)}/>
                
                <label htmlFor=""><b>Password</b></label><input type="password"  className='form-control mb-2' onChange={(e)=>setPassword(e.target.value)} />
                
                <label htmlFor=""><b>Phone</b></label><input type="tel"  className='form-control mb-2' onChange={(e)=>setPhone(e.target.value)} />
                
                <label htmlFor=""><b>Birth date</b></label><input type="date"  className='form-control mb-2' onChange={(e)=>setBirth(e.target.value)} /> <br />
                <button className='btn btn-dark w-100 rounded mt-2' onClick={Onsignup} >Signup</button>
                
                <div className="text-center x">Already a User? <button className='btn btn-link x'><Link to='/login'>login here</Link></button></div>
            </div>
        </div>
    </div>
  )
}

export default signup