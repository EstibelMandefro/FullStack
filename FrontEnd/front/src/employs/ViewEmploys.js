import React, { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const ViewEmploys = () => {

    const [employ, setEmploy] = useState({
        firstName:"",
        lastName:"",
        email:"",

    });

    const {id} =useParams();

    useEffect(()=>{

        upLoadEmployees();
        


    }, [])



    const upLoadEmployees =async() =>{
        const  result= await axios.get(`http://localhost:8181/api/v1/employs/${id}`)
        setEmploy(result.data)


    }
  return (
   
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Employee Details</h2>
            

           

            <div className='card'>
                <div className='card-header'>
                    Details of Employee Id:{employ.id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>First Name:</b>
                            {employ.firstName}

                        </li>
                        <li className='list-group-item'>
                            <b>Last Name:</b>
                            {employ.lastName}
                            </li>
                            <li className='list-group-item'>
                            <b>email:</b>
                            {employ.email}

                        </li>

                       
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"} >Back to Home</Link>
          </div>
        </div>
     </div>
  );
}

export default ViewEmploys
