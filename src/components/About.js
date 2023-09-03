import React from 'react'

export default function About() {
  return (
    <section className="wow animate__fadeIn bg-light-gray" id='about'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8 col-lg-9 col-md-11 text-center wow animate__fadeInUp margin-eight-bottom">
          <div className="alt-font text-medium-gray margin-5px-bottom text-uppercase text-small">
            About us
          </div>
          <h6 className="font-weight-300 text-extra-dark-gray mb-0">
          We are one of the leading companies providing Strategic Brand Activation Services. We bring to you the future of Experiential Marketing with our unique and thoughtful Brand Activation ideas and concepts. Our team of Experts are Highly Proficient with Immense Experience in Marketing and Advertising. 
          </h6>
        </div>
      </div>
      <div className="row justify-content-center" id='manifesto'>
        {/* start features box item */}
        <h3 className="alt-font row justify-content-center align-items-center" style={{marginBottom:'40px'}}>Our Manifesto</h3>
        <div className="col-12 col-lg-4 col-md-6 col-sm-8 md-margin-30px-bottom wow animate__fadeInUp">
          <div className="bg-white text-center">
            <a href="services-simple.html">
              <img src="images/latest-blog6.jpg" alt="" />
            </a>
            <div className="padding-45px-all md-padding-30px-all">
              <h6 className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">
                Creative.
              </h6>
              <p>
              In Experiential Marketing we Start with Conceptualizing unique and attention-seeking experiences. It involves developing out-of-the-box ideas that Resonate with the Target Audience, align with the Brand’s Values, and stand out from the competition. We focus on Generating Fresh and Imaginative Ideas for Events. Taking Minimum time to understand the client's objectives, target audience, and brand identity, and then developing a concept that align with these elements while adding a touch of innovation and surprise. We Assimilate the brand's messaging, products, or services seamlessly into the experience. The goal is to Subtly Reinforce Brand Awareness and association while avoiding overt sales pitches.
              </p>
              {/* <a
                href="services-simple.html"
                className="btn btn-small btn-rounded btn-transparent-dark-gray"
              >
                Explore services <i className="ti-arrow-right" />
              </a> */}
            </div>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col-12 col-lg-4 col-md-6 col-sm-8 md-margin-30px-bottom wow animate__fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="bg-white text-center">
            <a href="services-simple.html">
              <img src="images/latest-blog5.jpg" alt="" />
            </a>
            <div className="padding-45px-all md-padding-30px-all">
              <h6 className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">
                Art.
              </h6>
              <p>
              We Refer to a Carefully Curated Experience that serves as the Centerpiece of the Marketing Campaign. Like a work of art, it is designed to Evoke Emotions, Leave a Lasting Impact, and spark conversation among the audience. Large-scale, visually captivating Illustrations that invite attendees to engage physically or digitally. These Installations may incorporate technologies like Projection Mapping, Motion Sensing, or Touchscreens to create interactive and mesmerizing experiences. Gamification elements that challenge attendees to complete tasks, solve puzzles, or participate in competitions related to the Brand's offerings. These activities create a sense of excitement and achievement.
              </p>
              {/* <a
                href="services-simple.html"
                className="btn btn-small btn-rounded btn-transparent-dark-gray"
              >
                Explore services <i className="ti-arrow-right" />
              </a> */}
            </div>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col-12 col-lg-4 col-md-6 col-sm-8 wow animate__fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="bg-white text-center">
            <a href="services-simple.html">
              <img src="images/latest-blog7.jpg" alt="" />
            </a>
            <div className="padding-45px-all md-padding-30px-all">
              <h6 className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">
                Signature.
              </h6>
              <p>
              PRECISION. Conceptualization to Execution, Our focus on Minutest Meticulous attention to detail ensures that every aspect of the event, from planning to execution, is Flawlessly Executed. Commitment to understanding the Individual needs and Preferences of clients, resulting in Personalized and Tailored Event Experiences. We often introduce Fresh and creative themes and concepts that go beyond conventional campaign ideas, Delivering Memorable and engaging Experiences. Our strong network of trusted vendors, Exceptional Logistic Management ensure High Quality and Best in Industry Experiences. Having more that 90 Percent Retention Rate These elements contribute to our reputation and client loyalty
              </p>
              {/* <a
                href="services-simple.html"
                className="btn btn-small btn-rounded btn-transparent-dark-gray"
              >
                Explore services <i className="ti-arrow-right" />
              </a> */}
            </div>
          </div>
        </div>
        {/* end features box item */}
      </div>
    </div>
  </section>

  )
}
