import React from "react";
import Home from "./Home";

export default function Gallery() {
  return (
  <div>
      <Home/>
      <div class="container p-5 my-9 bg-dark text-white">
      <h1>BELSERION GALERRIES</h1>
      </div>

  <div class="container-xl mt-3">
  <div id="demo" class="carousel slide" data-ride="carousel">
   
{/*  <!-- Indicators --> */}
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
        <li data-target="#demo" data-slide-to="4"></li>
        <li data-target="#demo" data-slide-to="5"></li>
        <li data-target="#demo" data-slide-to="6"></li>
        <li data-target="#demo" data-slide-to="7"></li>
        <li data-target="#demo" data-slide-to="8"></li>

      </ul>

{/* <!-- The slideshow --> */}
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={require("../assets/galeri1.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Suite</h3>
              <p>Suite Belserion Hotel</p>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri2.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Swimming Poll</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri3.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Selow Belserion Room</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri4.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Belserion Bar</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri5.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Belserion Cocktail</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri6.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Meeting Belserion Room</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri7.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Indoor Belserion Bar</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri8.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Fitness Belserion</h3>
            </div>
        </div>

        <div class="carousel-item">
          <img src={require("../assets/galeri9.jpg")} alt="" width= "1100" height= "500"/>
            <div class="carousel-caption">
              <h3>Breakfast</h3>
            </div>
        </div>

      </div>

{/* <!-- Left and right controls --> */}
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    
    </div>
    </div>

</div>

  );
}
