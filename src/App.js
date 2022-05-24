import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home/Home';
import Faq from './Pages/Faq/Faq';
import Services from './Pages/Services/Services';
import OtpLogin from './Pages/OtpLogin/OtpLogin';
import Signup from './Pages/OtpLogin/Signup';
import Dashbord from './Pages/Dashbord/Dashbord';
import EventsCard from './Pages/Dashbord/EventsCard';
import ScoreBar from './Pages/Dashbord/ScoreBar';
import CertificateBox from './Pages/Dashbord/CertificateBox';
import Payment from './Pages/Payment/Payment';
import Course from './Pages/Home/Products/Course';
import ProductsRating from './Pages/Home/Products/ProductsRating';
import Login_button from './Components/Login_button';
import ScroolUp from './Components/ScroolUp';
import Home_Signup from './Pages/OtpLogin/home_login/Home_Signup';
import Home_OtpLogin from './Pages/OtpLogin/home_login/Home_OtpLogin';
import Productspage from './Pages/Home/Products/Product_page/Productspage';
import CourseList from './Pages/CourseList/CourseList';
import Privacypolicy from './Pages/AboutUs/Privacypolicy';
import AboutUs from './Pages/AboutUs/AboutUs';
import Termsandconditions from './Pages/AboutUs/Termsandconditions';
import Disclaimer from './Pages/AboutUs/Disclaimer';
import Cancelationpolicy from './Pages/AboutUs/Cancelationpolicy';



function App() {
  return (
   
   
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Dashbord" element={<Dashbord />}/> 
        <Route path="/Signup" element={<Signup />}/> 
        <Route path="/Home_Signup" element={<Home_Signup />}/> 
        <Route path="/OtpLogin" element={<OtpLogin />}/>  
        <Route path="/Home_OtpLogin" element={<Home_OtpLogin />}/> 
        <Route path="/Dashbord" element={<Dashbord />}/>   
        <Route path="/Productspage" element={<Productspage />}/> 
        <Route path="/Payment" element={<Payment />}/>  
        <Route path="/CourseList" element={<CourseList />}/>  
        <Route path="/Course" element={<Course />}/> 
        <Route path="/Privacypolicy" element={<Privacypolicy />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Termsandconditions" element={<Termsandconditions />}/>
        <Route path="/Disclaimer" element={<Disclaimer />}/>
        <Route path="/Cancelationpolicy" element={<Cancelationpolicy />}/>
        
      </Routes>
    </div>
  </Router>


  );
}

export default App;
