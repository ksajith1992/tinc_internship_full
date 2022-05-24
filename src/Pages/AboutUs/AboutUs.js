import React from 'react'
import '../MainCss.css'
import Navbarinn from '../../Components/Navbarinn'
import Footer from '../../Components/Footer'

function AboutUs() {
  return(
    <div id="content">
      <div id='backgroundfooter'>
        <Navbarinn />
        <div className="row" > 
            <h3 style={{textAlign:'center',color:'black',marginTop:10}}>About us</h3> 
            <p style={{paddingLeft:40,paddingRight:40}}>Tinc Internship is an edu-tech platform that aids the studentes attend online internships in 
            various fields like Accounts, HR, Operations, Finance, IT etc…Tinc Internship is Powered by MaverixPro®  Limited, A fitech Company Located on 
            Calicut, Kerala. The core of this project is to deliver online internship in this pandemic situation, so that students can be learn and 
            achieve their educational goals.</p><br/><br/><br/>
            <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>About MaverixPro</h1><br/> 
            <p style={{paddingLeft:40,paddingRight:40}}>MaverixPro® is a multi-dimensional structure that is achieved by incorporating multiple entities 
            to derive a product. The core business of MaverixPro® is in the securities markets which are initiated using our in-house strategy called the 
            BeardMan that has been developed and automated. BeardMan is a unique strategy built over an algorithm that helps us to trade and invest 
            effectively.
            To add on, we have a wide range of products from the capital market as well, we even have hybrid financial products which are a combination 
            derived from the securities and capital market which helps the clients to generate revenue using their assets. Our products stand out from the 
            rest because MaverixPro® uses the returns from its core business to diversify into traditional businesses as well, thus generating multiple 
            sources of revenue. The streams of diversification include the Fashion industry, Infrastructure, FMCG, Restaurant chains & Jewellery.</p>
            <div style={{margin:50}}></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;
