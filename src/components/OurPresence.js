import React from "react";

export default function OurPresence() {
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
          <div
            className="col-12 col-lg-6 col-md-12 col-sm-8 md-margin-30px-bottom wow animate__fadeInUp"
            style={{ marginBottom: "50px" }}
          >
            <div className="bg-white text-left image-hover-style">
              <div className="padding-45px-all md-padding-30px-all">
                <h5 className="text-extra-dark-gray font-weight-700 d-block alt-font margin-10px-bottom">
                  We're located in the following areas :
                </h5>
                <div style={{display:'flex', gap:'50px'}}>
                  <ul style={{fontSize:'1.3rem'}}>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>New Delhi</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Mumbai</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Bangalore</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Indore</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Chennai</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Karnataka</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Vizag</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Hyderabad</li>
                  </ul>
                  <ul style={{fontSize:'1.3rem'}}>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Punjab</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Gurgaon</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>J & K</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Rajasthan</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Himachal Pradesh</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Goa</li>
                    <li style={{margin:'30px',marginLeft:0,marginRight:'50px'}}>Gujrat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 col-md-12 col-sm-8 md-margin-30px-bottom wow animate__fadeInUp"
            style={{ marginBottom: "50px" }}
          >
            <div className="bg-white text-center image-hover-style">
              <div className="padding-45px-all md-padding-30px-all">
                <img src="images/Map.png" alt="Map" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
