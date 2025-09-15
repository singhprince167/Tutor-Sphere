import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Abouts from './components/Abouts'
import Contactus from './components/Contactus';
import FeedBack from './components/FeedBack';
import Layout from "./components/Layout"
import Adminlogin from './components/Admin/Adminlogin';
import Userlogin from './components/User/Userlogin';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import UserRegistration from './components/User/UserRegistration';
import Tutor from './components/tutor/Tutor';
import Tutorlogin from './components/tutor/Tutorlogin';
import AdminHome from './components/Admin/AdminHome';
import AllFeedbacks from './components/Admin/AllFeedbacks';
import AllContacts from './components/Admin/AllContacts';
import UserHome from './components/User/UserHome';
import TutorHome from './components/tutor/TutorHome';
import ExamTips from './components/ExamTips';
import Counselling from './components/Counselling';
import Parent_Guidance from './components/Parent_Guidance';
import TutorEditProfile from './components/tutor/TutorEditProfile';
import UserEditProfile from './components/User/UserEditProfile';
import Home from './components/Home';
import TutorCompose from './components/tutor/TutorCompose';
import Tutor_Inbox from './components/tutor/Tutor_Inbox';
import UserCompose from './components/User/UserCompose';
import User_Inbox from './components/User/User_Inbox';
import SearchTutor from './components/SearchTutor';
import AllTutors from './components/Admin/AllTutors';
import AllUsers from './components/Admin/AllUsers';
import UploadResource from './components/tutor/UploadResourse';
import AllResourse from './components/User/AllResourse';
import AllTutorsOnUser from './components/User/AllTutorsOnUser';
import MeetingRequest from './components/User/MeetingRequest';
import PendingQuery from './components/tutor/PendingQuery';
import AllAnswered from './components/tutor/AllAnswered';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* admin navigation */}

      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<App />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path='/searchtutor' element={<SearchTutor />} />
        <Route path="/ExamTips" element={<ExamTips />} />
        <Route path='/Counselling' element={<Counselling />} />
        <Route path='/Parent_Guidance' element={<Parent_Guidance />} />




      </Route>

      <Route>
        {/* admin navigation */}
        <Route path='/admin_home' element={<AdminHome />} />
        <Route path='/adminfeedback' element={<AllFeedbacks />} />
        <Route path='/admincontact' element={<AllContacts />} />
        <Route path='/alltutors' element={<AllTutors />} />
        <Route path='/allusers' element={<AllUsers />} />

      </Route>

      {/* user navigation */}
      <Route>

        <Route path='/userlogin' element={<Userlogin />} />
        <Route path="/userreg" element={<UserRegistration />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/useredit" element={<UserEditProfile />} />
        <Route path="/UserCompose_message" element={<UserCompose />} />
        <Route path='/User_inbox' element={<User_Inbox />} />
        <Route path='/allresourse' element={<AllResourse />} />
        <Route path='/alltutorsOnUserHeader' element={<AllTutorsOnUser />} />
        <Route path='/meetingrequest/:value' element={<MeetingRequest />} />


      </Route>

      {/* tutor navigation */}
      <Route>
        <Route path="/tutorreg" element={<Tutor />} />
        <Route path='/tutorlogin' element={<Tutorlogin />} />
        <Route path='/tutorhome' element={<TutorHome />} />
        <Route path='/editprofile' element={<TutorEditProfile />} />
        <Route path='/compose_message' element={< TutorCompose />} />
        <Route path='/tutor_inbox' element={<Tutor_Inbox />} />
        <Route path='/addUploadResource' element={<UploadResource />} />
        <Route path='/pendingquery' element={<PendingQuery />} />
        <Route path='/AllAnswered' element={<AllAnswered />} />

      </Route>


     



    </>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
