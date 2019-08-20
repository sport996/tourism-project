import React from "react";
import { Button } from "reactstrap";
import "../App.css";

const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Tourism in Saudi Arabia</h1>
          <br></br>
          <h3>Tours | Travel | Guide</h3>
          <br></br>
          <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="Where To (:" aria-label="Search" />
         </div>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
