import React from 'react';
import '../CSS/contact.css';
const ProductList = () => {
    return (
        <div>
            <div className='header'> <h1 >Contact Me <br></br> _<span>___</span></h1></div>
  
        <div class="row">
            <div class="column1">
            <div class="second">
           <div className="form">
            <h1>Get In Touch</h1>
        <input type="text" placeholder="Email" name="#"></input>
        <input type="text" placeholder="Name" name="#"></input>
        <input type="text" placeholder="Your Number" name="#"></input>
        <textarea rows="10" cols="50" placeholder="Your Message"></textarea>
        <div><button>Send Message</button></div>
    </div>
    </div>
    </div>
  <div class="column1">
  <div className="review3">
		<div className="review4">
        <i class="material-icons" style={{fontSize:"36px"}}>call</i>
      <h3>phone</h3>
			
            <p>+92 316 6353497</p>
			</div>
			<div className="review4">
            <i class="material-icons" style={{fontSize:"36px"}}>email</i>
            <h3>Email</h3>
			
            <p>hurairamalik2200@gmail.com</p>
			</div>
			<div className="review4">
            <i class="material-icons" style={{fontSize:"36px"}}>location_on</i>
        <h3>Location</h3>
			<p>Layyah Punjab Pakistan</p>
			</div>
			</div>
        </div>
  </div>
</div>
    );
};

export default ProductList;