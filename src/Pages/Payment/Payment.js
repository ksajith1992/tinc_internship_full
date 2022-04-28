import React from 'react'; 
import '../MainCss.css'
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Components/Footer';
import ResponsiveAppBar from '../../Components/NaveBar_inner';


function Payment() {
  return (
    <>
     <ResponsiveAppBar />
      <div class="wrapperpayment">
        <div className='paymentbox'>
          <div className="col-50">
            <div className='course_details'>
              <div style={{padding:20}}>
                <h5 style={{color:'black'}}>Course:-<span></span></h5>
                <h5 style={{color:'black'}}>Description:-<span style={{fontSize:10}}>hvvhvvvhjjkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</span></h5>
                <h5 style={{color:'black'}}>Amount:-<span></span>rs</h5>
              </div>
            </div>     
            <div>
              <div className="mainbutn">                                              
                  <button type="button" >Paynow</button>
              </div>        
            </div>
          </div>
        </div>
      </div> 
      <Footer/>   
 </>
  )
}
export default Payment