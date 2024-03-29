import React, { Component } from 'react'
import img1 from '../Layout/img1.jpg';
import img2 from '../Layout/img2.jpg';
import img3 from '../Layout/img3.jpg';
//import img4 from '../Layout/img4.jpg';
import '../Layout/Carasole.css'

export class Carasole extends Component {
  render() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
       
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img1} class="d-block w-100" alt="..."/>
           
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img2} class="d-block w-100" alt="..."/>
            
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."/>
           
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

export default Carasole
