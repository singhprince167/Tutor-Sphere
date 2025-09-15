import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import TutorDetails from "./TutorDetails";

function SearchTutor(){
  const [searchtutor, setSearchTutor] = useState([]);
  const [city, setCity] = useState("");

  const URL = "http://localhost:3001/SearchTutor";


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("citydetails in react"+city);
        // console.log("name is "+name);
        const params={city:city}
        const response = await axios.get(URL,{params});
        setSearchTutor(response.data.search_data);
        console.log(response.data);

      }
      catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [city]);

  return (
    <>
      
<div className="row">
             <h4 className="text-center">CityWise Tutor</h4>
             <div className="container w-50">
             <input type="text" name="city" placeholder='enter city' className='form-control' value={searchtutor.city} onChange={(e)=>{setCity(e.target.value)}}></input>
         </div>
</div>

<TutorDetails  searchtutor = {searchtutor}/>
 
    </>
  );
}

export default SearchTutor;