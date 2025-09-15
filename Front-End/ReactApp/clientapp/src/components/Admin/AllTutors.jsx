import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminHeader from '../Admin/AdminHeader.jsx'
import Footer  from '../Footer';

function AllTutors() {
    const [alltutors, setalltutors] = useState([])
    const URL = "http://localhost:3001/admin/alltutors"
    useEffect(() => {
        const fetchData = async (req, response) => {
            try {
                let response = await axios.get(URL)
                setalltutors(response.data);
            } catch (err) {
                console.log("Error")
            }

        }
        fetchData()
    })
    return (
        <>
        <AdminHeader></AdminHeader>
        <h1 style={{ textAlign: "center"}}>This is All Tutors page.</h1>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Password</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      
    </tr>
  </thead>
  <tbody>
    {alltutors.map((e)=>{
      return (

       <tr>
      <td>{e.id}</td>
      <td>{e.password}</td>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.phone}</td>
      
    </tr> 
      )

    })}
   
    
  </tbody>
</table>
          
            <Footer />
        </>
        
    )
}

export default AllTutors
