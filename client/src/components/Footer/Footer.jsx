import React from 'react'
import "./Footer.scss"
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">

          <h1>Categories</h1>

          <span>Women</span>
            
          <span>Men</span>

          <span>Shoes</span>

          <span>Accessories</span>
          
          <span>New Arrivals</span>
          
        </div>
        <div className="item">
                    
        <h1>Links</h1>

          <span>FAQ</span>
            
          <span>Pages</span>

          <span>Stores</span>

          <span>Compare</span>

          <span>Cookies</span>

        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste, unde ipsum fugiat necessitatibus quisquam sed beatae? Beatae possimus ut nihil esse ipsa dolor provident ullam aperiam veniam ab. Pariatur alias ad accusantium, dolores quos quis accusamus debitis quam? Laboriosam, architecto modi! Animi consequuntur ratione minima magni facere, explicabo dolorum.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur omnis quos quibusdam quaerat. Quasi, explicabo illo! Sunt nam quaerat quam libero voluptatem, suscipit cupiditate ex dignissimos, culpa non doloremque necessitatibus tempore ad quis nesciunt illum enim quod blanditiis adipisci. Asperiores reprehenderit quibusdam eaque repellendus quam, facilis maiores eius quidem blanditiis!

          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">DARKSTORE</span>
          <span className="copyright">© Copyright 2023. All rights reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment-options" />
        </div>
      </div>
    </div>
  )
}
