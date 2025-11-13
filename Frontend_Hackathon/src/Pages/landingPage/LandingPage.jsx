import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
   <>
   <div>
    <ol>
        
        <li><Link to ="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
    </ol>

   </div>
   </>
  )
}

export default LandingPage