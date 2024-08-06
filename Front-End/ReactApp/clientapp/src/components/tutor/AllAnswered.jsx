// import React, { useEffect, useState } from 'react'
// import TutorHeader from "./TutorHeader";
// import Footer from "../Footer";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// export default function AllAnswered() {
//   const URL = "http://localhost:3001/tutor/AllAnswered"
//   const [answerData, setAnswerData] = useState([])
//   const navigate = useNavigate()
//   useEffect(() => {
//     const tokenData = localStorage.getItem("Token_key")
//     if (!tokenData) {
//       navigate("/tutorlogin")
//     }
//     const fetchData = async () => {
//       try {

//         const params = { Tutor_id: tokenData }
//         const response = await axios.get(URL, { params })
//         console.log(response.data);
//         if (!response.data)
//           alert("yeah")

//         setAnswerData(response.data)
//       } catch (error) {
//         console.log(error);

//       }

//     }
//     fetchData();

//   }, [])
//   return (
//     <>
//      <TutorHeader />
//       <h1 style={{ textAlign: "center" }}>This is all Booking Answered</h1>
//       <table className="table">
//         <thead className="thead-dark">

//           <tr >
//             <th scope="col">Tutor id</th>
            
//             <th scope="col">User id</th>
//             <th scope="col">Questions</th>
//             <th scope="col">Answer</th>

//           </tr>
//         </thead>
//         <tbody>
//           {

//             answerData.map((e) => {
//               return (
//                 <tr>
//                   <td>{e.Tutor_id}</td>
//                   {/* <td>{e.contractorId}</td> */}
//                   <td>{e.User_id}</td>
//                   <td>{e.Questions}</td>
//                   <td>{e.Answer}</td>


//                 </tr>
//               )

//             }
//             )
//           }
//         </tbody>
//       </table>
//       <Footer></Footer>
//     </>

//   )

// }

import React, { useEffect, useState } from 'react';
import TutorHeader from "./TutorHeader";
import Footer from "../Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AllAnswered() {
  const URL = "http://localhost:3001/tutor/AllAnswered";
  const [answerData, setAnswerData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenData = localStorage.getItem("Token_key");
    if (!tokenData) {
      navigate("/tutorlogin");
    }
    const fetchData = async () => {
      try {
        const params = { Tutor_id: tokenData };
        const response = await axios.get(URL, { params });
        console.log(response.data);
        if (!response.data) alert("No data found");
        setAnswerData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TutorHeader />
      <h1 style={styles.heading}>This is All Tutor Answered</h1>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Tutor ID</th>
              <th style={styles.th}>User ID</th>
              <th style={styles.th}>Questions</th>
              <th style={styles.th}>Answer</th>
            </tr>
          </thead>
          <tbody>
            {answerData.map((e, index) => (
              <tr key={index}>
                <td style={styles.td}>{e.Tutor_id}</td>
                <td style={styles.td}>{e.User_id}</td>
                <td style={styles.td}>{e.Questions}</td>
                <td style={styles.td}>{e.Answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  tableContainer: {
    overflowX: "auto",
    margin: "0 auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  thead: {
    backgroundColor: "#333",
    color: "#fff",
  },
  th: {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  td: {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
};
