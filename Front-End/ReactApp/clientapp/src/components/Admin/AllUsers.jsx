import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminHeader from '../Admin/AdminHeader.jsx'
import Footer  from '../Footer';

function AllUsers() {
    const [allusers, setallusers] = useState([])
    const URL = "http://localhost:3001/admin/allusers"
    useEffect(() => {
        const fetchData = async (req, response) => {
            try {
                let response = await axios.get(URL)
                setallusers(response.data);
            } catch (err) {
                console.log("Error")
            }

        }
        fetchData()
    })
    return (
        <>
        <AdminHeader/>
        <h1 style={{ textAlign: "center"}}>This is All Users page</h1>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
      
    </tr>
  </thead>
  <tbody>
    {allusers.map((e)=>{
      return (

       <tr>
      
      
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.password}</td>
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

export default AllUsers
