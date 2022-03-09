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
import PaymentSuccessful from './Pages/Payment/PaymentSuccessful';
import Course from './Pages/Home/Products/Course';
import ProductsRating from './Pages/Home/Products/ProductsRating';
import Login_button from './Components/Login_button';
import ScroolUp from './Components/ScroolUp';


function App() {
  return (
   
   
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/OtpLogin" element={<OtpLogin />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Dashbord" element={<Dashbord />}/>
        <Route path="/EventsCard" element={<EventsCard />}/>
        <Route path="/ScoreBar" element={<ScoreBar />}/>
        <Route path="/CertificateBox" element={<CertificateBox />}/>
        <Route path="/Payment" element={<Payment />}/>
        <Route path="/PaymentSuccessful" element={<PaymentSuccessful />}/>
        <Route path="/ProductsRating" element={<ProductsRating />}/>
        <Route path="/Login_button" element={<Login_button />}/>
        <Route path="/Course" element={<Course />}/>
        <Route path="/scroolUp" element={<ScroolUp />}/>
        
        
        

      </Routes>
    </div>
  </Router>


  );
}

export default App;
