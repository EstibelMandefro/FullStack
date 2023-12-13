import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPlus ,faHouse} from '@fortawesome/free-solid-svg-icons';



export default function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <FontAwesomeIcon icon={faHouse} />  Employee Application
      </a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className='btn btn-outline-light' to="/addemployees">
   <h3><FontAwesomeIcon icon={faPlus} /></h3> 
    </Link>
    
  </div>
</nav>
    </div>
  )
}
