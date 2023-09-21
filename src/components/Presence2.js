import React, { useState } from "react";
import tippy, {followCursor} from "tippy.js";
// import 'tippy.js/themes/tomato.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import { getByTitle } from "@testing-library/react";

export default function Presence2() {

  return (
   <section className="wow animate__fadeIn" id='branches'>
      <div className="container">
        <div className="row justify-content-center">
          <h3
            className="alt-font row justify-content-center align-items-center"
            style={{ marginBottom: "100px" }}
          >
            OUR PRESENCE
          </h3>
          {/* <div
            className="col-12 col-lg-6 col-md-12 col-sm-8 md-margin-30px-bottom wow animate__fadeInUp"
            style={{alignItems:'center',  paddingRight:'20px'}}
          >
            <div className="bg-white text-left image-hover-style">
              <div className="padding-45px-all md-padding-30px-all">
                <div style={{fontFamily:'Centaur Regular',fontSize:'1.2rem'}}>
                  <p>
                  AVR Productions stands as a premier event management company with a profound impact on the event and entertainment landscape in diverse Indian cities. From Delhi/NCR to Punjab, Mumbai to Hyderabad, Kolkata, and Bangalore, our footprint spans the nation. We specialize in creating captivating experiences rooted in the unique essence of each location. In Delhi/NCR, we craft corporate events that resonate with the city's cosmopolitan vibe, while Punjab hosts our opulent weddings blending tradition with extravagance. Mumbai's glamour sets the stage for our star-studded soirées and product launches, whereas Hyderabad inspires innovative tech-driven conferences and expos. Kolkata's rich heritage infuses our cultural spectacles, and Bangalore's dynamism fuels our cutting-edge tech events. At AVR Productions, we blend local insights with global trends, ensuring every event is a seamless fusion of creativity and precision, transforming visions into cherished memories. With us, your event is not just an occasion; it's an unforgettable journey.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="col-12 col-lg-6 col-md-12 col-sm-8 md-margin-30px-bottom wow animate__fadeInUp"
            style={{alignItems:'center',  paddingRight:'20px'}}
          >
            <div className="bg-white text-left image-hover-style">
              <div>
                <div >
                <img src="images/Map2.png" alt=""  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
