import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function navbar() {
    const navigate = useNavigate()

    function logout(event){
        event.preventDefault();
        sessionStorage.removeItem("token")
      sessionStorage.removeItem("name")
      sessionStorage.removeItem("lastName")
     

    

      navigate('/')
      

    }

  return (
    <nav className='navbar navbar-expand-lg bg-dark p-3' data-bs-theme='dark' >
          <div className='container-fluid'>
            
             <div className='collapse navbar-collapse ' id='navbarNav'>
              <ul className='navbar-nav me-auto  d-flex gap-5 ' id='navbarNav'>
                <li className='nav-item '>
                  <Link to='/Home/PropertyDetails' className='navlinks'> Movies </Link>
                </li>
                
                <li className='nav-item ' >
                  <Link to='#' className='navlinks'> Myreviews </Link>
                </li>
                
              
                <li className='nav-item '>
                  <Link to='#' className='navlinks'> ContactUs </Link>
                </li>
                
                <li className='nav-item ms-auto '>
                    <Link  onClick={logout} className='navlinks'><button  className='btn '><b>logout</b></button> </Link>
                  <Link to='/profile' className='navlinks'><button  className='btn '><b>Profile</b></button> </Link>
                     
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default navbar