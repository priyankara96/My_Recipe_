import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import Button from 'react-bootstrap/Button';
import img1 from './images/slide_img01.jpg';
import img2 from './images/slide_img02.jpg';
import img3 from './images/slide_img03.jpg';
import img4 from './images/slide_img04.jpg';
import img5 from './images/slide_img05.jpg';


function Home() {
  return (
   
    <div> 
      {/* Create home page video */}
      <div className='homeView' style={{backdropFilter:'blur(10px )'}}>
      <h3 className="text-center" > <font face = "Comic sans MS" size ="9" class="text-danger" > Welcome to home page! </font> </h3>
       <br/><br/><br/><br/><br/>
      <video src={ ('https://player.vimeo.com/external/476754529.sd.mp4?s=e565f0e0800ee33e7a1b0e7b62d4cd8dfdf548ce&profile_id=165&oauth2_token_id=57447761')}   autoPlay loop muted />
       <h1 className="text-center" > My Recipe </h1>
      <p>What are you waiting for?</p>
      <div>
      <a class="btn btn-light" href="/List" role="button"> View more </a>
      </div>
    </div>
      
      
      
      
      <br/>
      {/* Create home page carts */}
      <div class="card-group"  >

      <h3 className="text-center" > <font face = "Comic sans MS" size ="6" class="text-danger" > &nbsp;&nbsp;&nbsp;&nbsp;
      Join us to make delicious home-cooked meals for the whole family </font> </h3>

      <div className = "container">
        <div class="card-group">
         
        <div  className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  style={{marginTop:"20px"}}>
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src="https://s3-ap-southeast-1.amazonaws.com/pankadu-lk/42/69812712698358947.jpg" className="card-img-top img-fluid" style={{height: '250px'}}/>
            <div className="card-body text-center">
              <h1 className="card-title" class="text-danger" > Fried Rice </h1>
              <h5 className="card-title">Make your own at home</h5>
              <p className="card-text">{}</p>
              <button className="btn btn-success" ><a href="/List" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
            </div>
          </div>
        </div>
        
        <div  className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  style={{marginTop:"20px"}}>
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src="https://s3-ap-southeast-1.amazonaws.com/pankadu-lk/42/69821732242656579.jpg" className="card-img-top img-fluid" style={{height: '250px'}}/>
            <div className="card-body text-center">
              <h1 className="card-title" class="text-danger" > Kottu </h1>
              <h5 className="card-title">Make your own at home</h5>
              <p className="card-text">{}</p>
              <button className="btn btn-success" ><a href="/List" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
            </div>
          </div>
        </div>

        <div  className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  style={{marginTop:"20px"}}>
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src="https://christieathome.com/wp-content/uploads/2020/08/Sweet-Soy-Scallion-Noodles-scaled.jpg" className="card-img-top img-fluid" style={{height: '250px'}}/>
            <div className="card-body text-center">
              <h1 className="card-title" class="text-danger" > Noodles </h1>
              <h5 className="card-title">Make your own at home</h5>
              <p className="card-text">{}</p>
              <button className="btn btn-success" ><a href="/List" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
            </div>
          </div>
        </div>

        <div  className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  style={{marginTop:"20px"}}>
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg" className="card-img-top img-fluid" style={{height: '250px'}}/>
            <div className="card-body text-center">
              <h1 className="card-title" class="text-danger" > Masala Dosa </h1>
              <h5 className="card-title">Make your own at home</h5>
              <p className="card-text">{}</p>
              <button className="btn btn-success" ><a href="/List" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
            </div>
          </div>
        </div>
          
        </div>
      </div>
      </div>




      {/* Create home page slide show */}
      <br/>
             <div className = "container"
              style = {{marginTop:"0px",
              width:'50%',             
              }}>
      

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>

        </div>
        <div className="carousel-inner">
    
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." style={{width:'6px'}}/>
          </div>
        
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." style={{width:'6px'}} />
          </div>
        
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
           </div>

          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
          </div>

          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>





    </div>
  );
}

export default Home;

