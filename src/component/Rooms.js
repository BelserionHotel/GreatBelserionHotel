import React from "react";
import Home from "./Home";

export default function Rooms() {
  return (
  
  <div>
    <Home/>
    <div class="container p-5 my-9 bg-dark text-white">
      <h1>BELSERION ROOM</h1>
    </div>

      <div class="container p-3 my-3">
      <h2>LISTS ROOMS</h2>
      <p>*all include breakfast</p>
        <div class="container">
          <div class="card">
            <div class="card bg-secondary text-white p-3">
              <img class="card-img" src={require("../assets/queenroom.jpg")} alt=""/>
              <div class="card-body">
                <h3>QUEEN ROOM</h3>
              <p>Special Room</p>
              <p>Rp 5.000.000*</p>
              </div>
                <button type="button" class="btn btn-outline-light">Reserve Now</button>
            </div>
            
            <div class="card bg-dark text-white p-3">
              <img class="card-img" src={require("../assets/kingroom.jpg")} alt=""/>
              <div class="card-body">
                <h3>KING ROOM</h3>
                <p>Suite Room</p>
                <p>Rp. 3.000.000*</p>
              </div>
                <button type="button" class="btn btn-outline-light">Reserve Now</button>
            </div>
            

            <div class="card bg-light text-dark p-3">
              <img class="card-img" src={require("../assets/TwinRoom.jpg")} alt=""/>
            <div class="card-body">
              <h3>TWIN ROOM</h3>
              <p>Mantap-mantap Twin Room</p>
              <p>Rp. 2.000.000*</p>
            </div>
              <button type="button" class="btn btn-primary">Reserve Now</button>
            </div>
              
          </div>
        </div>
      </div>

  </div>
    
    
  );
}
