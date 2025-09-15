import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import Footer  from '../Footer';




export default function AllContact() {
    const [usercontact, setUsercontact] = useState([])
    const URL = "http://localhost:3001/admin/allcontacts"
    useEffect(() => {
        const fetchData = async (req, res) => {
            try {
                let response = await axios.get(URL)
                setUsercontact(response.data);
            } catch (err) {
                console.log("Error")
            }

        }
        fetchData()
    })
    return (
        <>
        <AdminHeader></AdminHeader>
        <h1 style={{ textAlign: "center"}}>This is user contact page</h1>
    <table class="table">
  <thead class="thead-dark">
    <tr>

      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Query</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {usercontact.map((e)=>{
      return (

       <tr>
      
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.Query}</td>
      <td>{e.number}</td>
    </tr> 
      )

    })}
   
    
  </tbody>
</table>
          
            <Footer />
        </>

    )
}


