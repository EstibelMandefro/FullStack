import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faCopyright ,faHouse} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div>
     <footer className='footer'>
        <h5 className='text-muted'><FontAwesomeIcon icon={faCopyright} />2023 YOM Technology</h5>
        </footer> 
        
    </div>
  )
}

export default Footer
