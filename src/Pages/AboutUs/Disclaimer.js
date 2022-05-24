import React from 'react'
import '../MainCss.css'
import Navbarinn from '../../Components/Navbarinn'
import Footer from '../../Components/Footer'

function Disclaimer() {
  return (
    <div id="content">
    <div id='backgroundfooter'>
      <Navbarinn />
      <div className="row" > 
          <h3 style={{textAlign:'center',color:'black',marginTop:10}}>Disclaimer</h3> 
          <p style={{paddingLeft:40,paddingRight:40}}>Your use of this website constitutes your acceptance to the terms of this Disclaimer.</p>
          <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>Market Presence Restrictions</h1><br/> 
          <p style={{paddingLeft:40,paddingRight:40}}>We only has presence in the markets listed below despite its site being accessible worldwide. As such,
          the information provided and the products and/or services accessible through this website are restricted and only intended for use by any person 
          in the countries listed below where we have market presence and such access and/or use is not contrary to local laws or regulations. If you choose
          to access the site and/or conduct any business in any countries in which we do not have market presence, then you do so purely on your own 
          initiative and at your sole risk. It shall be your sole responsibility to inquire into, ascertain and observe all local laws or regulations which 
          you are subject to.</p>
          <h1 style={{paddingLeft:40,paddingRight:40,fontSize:20}}>No Warranty to Accuracy</h1>
          <p style={{paddingLeft:40,paddingRight:40}}>We expressly disclaim any guarantee or warranty of promised future income or earning. Any claim of 
          earning or earning potential should be treated as an opinion only and you shall not rely on it unless you have verified its accuracy. We shall 
          not be held liable to and shall not accept any liability, obligation or responsibility whatsoever for any loss or damage arising from your 
          reliance on such claims.</p>
        <div style={{margin:50}}></div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Disclaimer