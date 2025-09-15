import axios from 'axios'
import Footer from "../Footer";
import UserHeader from "../User/UserHeader";
import {  useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function UserEditProfile() {

    const URL = "http://localhost:3001/user/profile"

    const Edit_URL = "http://localhost:3001/user/userEdit"

    const [editProfile, setEditProfile] = useState({ name: "", email: "", phone: "" })

    const [acname, setAcName] = useState("")
    const navigate = useNavigate()
    const token_data = localStorage.getItem("Token_key")

    useEffect(() => {
        console.log(`token data is ${token_data}`);
        if (!token_data) {
            navigate('/userlogin')

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
        <UserHeader/>
            <h1> User EditProfile page...</h1>
            <form onSubmit={handleForm}>
                <div className="card" style={{ margin: "12%", backgroundColor: "cyan", padding: "2%", width: "50%" }}>

                    <div className="card-body">
                        <h5 className='card-title'>Your Name:<input type="text" onChange={handleChange} name="name" value={editProfile.name} /></h5>
                        <h5 className='card-title'>Your Email:<input type="text" onChange={handleChange} name="email" value={editProfile.email} /></h5>
                        <h5 className='card-title'>Your Phone: <input type="text" onChange={handleChange} name="phone" value={editProfile.phone} /></h5>

                    </div>
                    <button className="btn btn_danger bg-warning" style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}>Edit Profile</button>

                </div>
            </form>
            <Footer/>
        </>
    );
}

export default UserEditProfile;