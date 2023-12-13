import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faUserPlus ,faHouse} from '@fortawesome/free-solid-svg-icons';

const EditEmploys = () => {
    let navigate=useNavigate();
    const {id} = useParams();
    const [employee, setEmployee] = useState({
        firstName:"",
        lastName:"",
        email:"",

    });
    useEffect(()=>{
        upLoadEmployees();

    }, [])

    
        const {firstName,lastName,email} =employee;
        const onInputChange = (e) =>{
            setEmployee({...employee,[e.target.name]: e.target.value});
        };
        
    

   const onSubmit = async (e)  =>{
        e.preventDefault();
        await axios.put(`http://localhost:8181/api/v1/employs/${id}`,employee)
        navigate("/");

    }

    const upLoadEmployees =async() =>{
      const  result= await axios.get(`http://localhost:8181/api/v1/employs/${id}`)
        setEmployee(result.data)
    }




  return (
    
     
       <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>
                
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                            <label htmlFor='Name' className="form-label">
                            <FontAwesomeIcon icon={faUserPlus} />  First Name
                                </label>
                            <input
                            type= {"text"} 
                            placeholder='Enter your first name'
                             name='firstName'
                            className='form-control'
                            value={firstName}
                            onChange={(e)=>onInputChange(e)}
                            />
                           
                            </div>
                            <div className='mb-3'>
                            <label htmlFor='Name' className="form-label">
                            <FontAwesomeIcon icon={faUserPlus} /> Last Name
                                </label>
                            <input
                            type=  {"text"} 
                            placeholder='Enter your last name'
                            name='lastName'
                            className='form-control'
                            value={lastName}
                            onChange={(e)=>onInputChange(e)}
                            />
                            </div>
                            
                            <div className='mb-3'>
                            <label htmlFor='Name' className="form-label">
                            <FontAwesomeIcon icon={faEnvelope} />   Email
                                </label>
                            <input
                            type=  {"text"} 
                            placeholder='Enter your email'
                            name='email'
                            className='form-control'
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>
                        <button  type='Submit' className='btn btn-outline-primary'>Submit</button>
                        <Link to="/" className='btn btn-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditEmploys
