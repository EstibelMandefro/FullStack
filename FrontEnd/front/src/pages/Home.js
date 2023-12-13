import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Home = () => {
const [employees, setEmployees]= useState([])

const {id} = useParams();
useEffect(()=> {
    loadEmployees();


}, []);

const loadEmployees=async()=>{
    const result= await axios.get("http://localhost:8181/api/v1/employs");
    setEmployees(result.data);
};

const deleteEmploye =async(id)=>{
   await axios.delete(`http://localhost:8181/api/v1/employs/${id}`)
  loadEmployees();
}


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table  table border table-hover">
  <thead style={{
   borderBottomColor: "black"
  }} >
    <tr>
    <th scope="col">S.NO</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col" style={{
    paddingLeft: '100px',
   
  }} >Action</th>
    </tr>
  </thead>
  <tbody>
    {
       employees.map((employee,index)=>(
        <tr>
      <th scope="row" key={index}>
        {index+1}
        </th>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>
        <Link className='btn btn-primary mx-2' to={`/viwemploy/${employee.id}` } >View</Link>
        <Link className='btn btn-outline-primary mx-2' to={`/editemploy/${employee.id}`}>Edit</Link>
        <button className='btn btn-danger mx-2'
        onClick={()=>deleteEmploye(employee.id)} > Delete</button>  
      </td>
     
    </tr>

       )) 
    }
    
  </tbody>
</table>
</div>       
</div>     
    
  )
}

export default Home
