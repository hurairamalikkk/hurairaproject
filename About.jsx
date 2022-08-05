import React from 'react';
import '../CSS/about.css';
import img1 from "../image/card1.jpeg";

const About = () => {
    return (
        <div>
           <div className='header'> <h1 >About me <br></br> _<span>___</span></h1></div>
            <div class="section">
    <img  width="350px" height="500px" src={img1} alt="frame"/>
    <div class="hed"><h1>Hi! I am <span>Huraira Malik</span></h1>
    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. 
        I also make website more & more interactive with web animations.</p>
        <ul>
            <li>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Huraira Malik</li>
            <li>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 18 Years</li>
            <li>Nationality &nbsp;&nbsp;&nbsp; : Pakistan</li>
            <li>Language &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : English</li>
            <li>Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Layyah Punjab Pakistan</li>
            <li>Freelance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Avail...</li>
        </ul>        
       <button>Download Resume</button>

    </div>
        </div>
        <div className='header'> <h1 >SERVICES <br></br> _<span>___</span></h1></div>
        <div className="review">
		<div className="review1">
        <i class='fas fa-paint-brush' style={{color:'blue' , fontSize:'50px'}}></i>
      <h2>Web Design</h2>
      <h3>_____</h3>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
			</div>
			<div className="review1">
            <i class='fab fa-html5' style={{color:'blue' , fontSize:'50px'}}></i>
        <h2>Web Development</h2>
        <h3>_____</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
			</div>
			<div className="review1">
            <i class='fas fa-mobile-alt' style={{color:'blue' , fontSize:'50px'}}></i>
        <h2>Mobile Application</h2>
      
        <h3>____</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
			</div>
			</div>
            <div className='header'> <h1 >REVIEWS<br></br> _<span>___</span></h1></div>
        </div>
    );
};

export default About;