import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./home.css"
function Home() {

    return (
      <div className="container container2">
        <div className="HomeContainer">
        <div id="HomeSlider" class="carousel slide text-center" data-bs-touch="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img  src="https://www.mu.edu.lb/media/24542/1.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://www.mu.edu.lb/media/22016/21.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://www.mu.edu.lb/media/13512/6j1a0140.jpg" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#HomeSlider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#HomeSlider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>

        <div id="about" className="section-padding about-section">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="section_title">
                <br></br>
                  <div className="section_subtitle">About Us</div>
                  <h2 className="section_main_title">
                    SATISFY YOUR <strong>CRAVINGS</strong>
                  </h2>
                </div>
                <div className="about-item text-start">
                  <p>&nbsp; Welcome to the al-Maaref University Cafeteria, your convenient and delicious dining solution right here on campus! At al-Maaref University, we understand the importance of providing students and university staff with a seamless dining experience. That's why we've introduced our online ordering system, designed to make your dining experience faster and more convenient than ever before.</p>
                  <p>&nbsp; Our cafeteria is not just a place to refuel; it's a hub of culinary delight, offering a diverse range of dishes to cater to every palate. From hearty meals to healthy options and mouthwatering snacks, our menu has something for everyone. We take pride in sourcing the freshest ingredients and preparing each dish with care to ensure that every bite is a delightful experience.</p>
                  <p>&nbsp; With our user-friendly online ordering platform, you can skip the lines and order your favorite meals or snacks with ease. Whether you're rushing between classes or looking for a quick and tasty lunch during a break, we've got you covered. Our commitment to quality, efficiency, and affordability is what sets us apart.</p>
                  <p>&nbsp; We're not just a cafeteria; we're a part of your daily campus life, and we're here to make it better. Join us in savoring the flavors of al-Maaref University, and discover the convenience of online ordering. Thank you for choosing al-Maaref University Cafeteria – where great food meets ultimate convenience.</p>
                  <p>&nbsp; Feel free to customize this paragraph further to match the unique qualities and offerings of the al-Maaref University Cafeteria Website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="HomeIconCont col-lg-5 border shadow rounded-3 mx-4 p-3">
            <div className="HomeIcon bg-secondary">
              <PhoneIcon/>
            </div>
            <h5>Tel-Number</h5>
            <p>81/778477</p>
            <p>81/998578</p>
          </div>
          <div className="HomeIconCont col-lg-5 border shadow rounded-3 mx-4 p-3">
          <div className="HomeIcon bg-secondary">
            <LocationOnIcon/>
          </div>
          <h5>Location</h5>
          <p>airport raod-behind Al-Maaref University</p>
            <p>airport raod- in the Al-Maaref University F -1</p>
            </div>
        </div>

      </div>
    );
}

export default Home;
