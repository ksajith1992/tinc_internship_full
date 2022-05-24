import React from 'react'
import '../MainCss.css'
import Navbarinn from '../../Components/Navbarinn'
import Footer from '../../Components/Footer'

function Termsandconditions() {
  return (
    <div id="content">
    <div id='backgroundfooter'>
      <Navbarinn />
      <div className="row" > 
          <h3 style={{textAlign:'center',color:'black',marginTop:10}}>Terms & Conditions</h3> 
          <p style={{paddingLeft:40,paddingRight:40}}>We provide our services to you through this website based on the Terms of Use. Please read the Terms 
          carefully. Your use of this website constitutes your acceptance of our Terms.</p><br/><br/>
          <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>Licence to Use</h1>
          <p style={{paddingLeft:40,paddingRight:40}}>We grant you a limited licence to access and make personal use of this site. Except with our express 
          written consent, you are not allowed to download or modify our website, or any portion of it. You are not allowed to reproduce, duplicate, copy 
          or modify our website or any portion of it.</p><br/><br/>
          <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>Downloading</h1>
          <p style={{paddingLeft:40,paddingRight:40}}>On this website, we may provide materials which you are expressly allowed to download. By downloading
          any such materials, you agree to use the materials only for your personal, non-commercial use. You must retain all copyright and other proprietary
          notices contained in the original materials or any copy of those materials. You are not allowed to use these materials for any commercial purposes, 
          other than for the purpose of promoting the networking business of the Company, or on any other website unless a prior approval is obtained from 
          the Company in accordance with the our policies.</p><br/><br/>
        <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>Electronic Communications</h1>
        <p style={{paddingLeft:40,paddingRight:40}}>When you make any transaction via our website or send emails to us, you agree to receive communications
        from us electronically and all agreements, notices, or any other communications that we provide you electronically satisfy any legal requirement 
        that such communications be in writing.</p><br/><br/>
        <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>Copyright</h1>
        <p style={{paddingLeft:40,paddingRight:40}}>When you make any transaction via our website or send emails to us, you agree to receive communications
        from us electronically and all agreements, notices, or any other communications that we provide you electronically satisfy any legal requirement 
        that such communications be in writing.</p><br/><br/>
        <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>Personal Data</h1>
        <p style={{paddingLeft:40,paddingRight:40}}>All personal data you submit to us via this website is governed by our Privacy policy.</p>
        <div style={{margin:50}}></div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Termsandconditions