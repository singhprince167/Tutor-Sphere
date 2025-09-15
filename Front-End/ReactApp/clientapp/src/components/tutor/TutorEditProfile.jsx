import React from 'react'
import TutorHeader from './TutorHeader'
import { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function TutorEditProfile() {
    const URL = "http://localhost:3001/tutor/profile"

    const Edit_URL = "http://localhost:3001/tutor/TutorEdit"

    const [editProfile, setEditProfile] = useState({ name: "", email: "", phone: "" })

    const [acname, setAcName] = useState("")
    const navigate = useNavigate()
    const token_data = localStorage.getItem("Token_key")

    useEffect(() => {
        console.log(`token data is ${token_data}`);
        if (!token_data) {
            navigate('/tutorlogin')

        }
        setAcName(token_data)
        fetchData()
    }, [])

    async function fetchData() {
        const params = {
            email: token_data
        }
        try {
            const response = await axios.get(URL, { params })
            console.log(response.data);
            setEditProfile(response.data)
        }
        catch (err) {
            console.log("err" + err);
        }
    }

    const handleChange = (e) => {
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value })

    }
    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(Edit_URL, editProfile);
            if (response.data.acknowledged)
                alert("Profile Updated Succesfully")

        }
        catch (err) {
            console.log("err" + err);
        }
    }

    return (
        <>
        <TutorHeader/>  
        
        <h1>This is Tutor Edit page</h1>
        <form onSubmit={handleForm}>
            <div className="card" style={{ margin: "12%", backgroundColor: "cyan", padding: "2%", width: "50%" }}>

                <div className="card-body">
                    <h1 className='card-title'>Your name:<input type='text'onChange={handleChange} name="name" value={editProfile.name}/></h1>
                    {/* <h1 className='card-title'>Your Email:<input type='text'onChange={handleChange}name="name" value={editprofile.email}/></h1> */}
                    {/* <h1 className='card-title'>Your Phone:{profile.phone}</h1>
                    <h1 className='card-title'>Your Experience:{profile.experience}</h1>
                    <h1 className='card-title'>Your Qualification:{profile.qualification}</h1>
                    <h1 className='card-title'>Your Skill:{profile.skill}</h1>
                    <h1 className='card-title'>Your Gender:{profile.gender}</h1>
                    <h1 className='card-title'>Your City:{profile.city}</h1>
                    <h1 className='card-title'>Your Standard:{profile.Standard}</h1>
                     */}
                </div>
                <button className="btn btn_danger bg-warning" style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}>Edit Profile</button>

            </div> 
       
            </form>
       
        </>
    )
}

export default TutorEditProfile


