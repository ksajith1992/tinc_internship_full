import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css'


import Banner from './Banner/Banner';
import Members from './Members/Members';
import Products from './Products/Products';
import OnlineMode from './OnlineMode/OnlineMode';
import Clients from './Clients/Clients';
import Newsletter from './Newsletter/Newsletter';
import Footer from '../../Components/Footer';

function Home() {
  return <>
      
      <div id="Banner">
      <Banner />
      </div>

      <div id="Members">
        <Members />
      </div>

      <div id="Pro_ducts">
      <Products />
      </div>

      <div id="OnlineMode">
        <OnlineMode />     
      </div>


      <div>
        <Clients />
      </div>

    

      <div id="Newsletter">
      <Newsletter />
      </div>

      <div id="Contactus">
      <Footer />
      </div>


     </>;
}

export default Home;
