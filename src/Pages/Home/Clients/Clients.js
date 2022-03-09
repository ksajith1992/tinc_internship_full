import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import clients_1 from '../../../Images/shirley.png'
import clients_2 from '../../../Images/theo.png'
import clients_3 from '../../../Images/daniel.png'



function Clients() {
  return <div>
     
<div className="row bg_clients p-4" id="Testi_monials">

<div className="col-sm-12 col-md-12 p-5">
<h2>Words of Our Clients</h2>
<p className='members_data'>Create React App doesnt handle backend logic so you can use it with any backend you want.
 Under the hood, it uses Babel and webpack, but you dont need to know anything about them.</p>


 <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>

        <img src={clients_1} alt='clients_1'/>

          <div className="myCarousel">
            <h3 className='clients_name'>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
        <img src={clients_2} alt='clients_2'/>

          <div className="myCarousel">
          <h3 className='clients_name'>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={clients_3} alt='clients_2'/>

          <div className="myCarousel">
          <h3 className='clients_name'>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>

</div>
</div>
  </div>;
}

export default Clients;
