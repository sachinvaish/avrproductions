import React from 'react'

export default function Animate() {
  return (
    <section className="p-0 wow animate__fadeIn">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2 row-cols-sm-1">
        {/* start features item */}
        <div
          className="col p-0 cover-background position-relative sm-h-450px xs-h-350px wow animate__fadeIn"
          style={{
            background:
              'transparent url("images/homepage-option17-image-01.jpg")'
          }}
        />
        {/* end features item */}
        {/* start features item */}
        <div
          className="col p-0 d-flex align-items-center position-relative bg-extra-dark-gray text-center text-md-start wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="padding-fifteen-all md-padding-thirteen-all sm-padding-eight-all xs-padding-30px-all w-100">
            <div className="alt-font text-medium-gray margin-10px-bottom">
              Build perfect websites
            </div>
            <div className="alt-font text-extra-large margin-20px-bottom text-white-2 w-90 lg-w-100 sm-margin-15px-bottom">
              Unlimited power and customization possibilities
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum has been the industry's standard dummy
              text ever since. Lorem Ipsum is simply dummy text.
            </p>
            <a
              href="about-us-simple.html"
              className="btn btn-transparent-white btn-small border-radius-4"
            >
              <i
                className="fas fa-play-circle icon-very-small margin-5px-right ms-0"
                aria-hidden="true"
              />
              Read More
            </a>
          </div>
        </div>
        {/* end features item */}
        {/* start features item */}
        <div
          className="col p-0 cover-background position-relative order-xl-0 order-md-2 sm-h-450px xs-h-350px wow animate__fadeIn"
          data-wow-delay="0.4s"
          style={{
            background:
              'transparent url("images/homepage-option17-image-02.jpg")'
          }}
        />
        {/* end features item */}
        {/* start features item */}
        <div
          className="col p-0 d-flex align-items-center position-relative bg-extra-dark-gray text-center text-md-start wow animate__fadeIn"
          data-wow-delay="0.6s"
        >
          <div className="padding-fifteen-all md-padding-thirteen-all sm-padding-eight-all xs-padding-30px-all w-100">
            <div className="alt-font text-medium-gray margin-10px-bottom">
              Unique digital experiences
            </div>
            <div className="alt-font text-extra-large margin-20px-bottom text-white-2 w-90 lg-w-100 sm-margin-15px-bottom">
              Pixel perfect design and clear code delivered to you
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum has been the industry's standard dummy
              text ever since. Lorem Ipsum is simply dummy text.
            </p>
            <a
              href="about-us-classic.html"
              className="btn btn-transparent-white btn-small border-radius-4"
            >
              <i
                className="fas fa-play-circle icon-very-small margin-5px-right ms-0"
                aria-hidden="true"
              />
              Read More
            </a>
          </div>
        </div>
        {/* end features item */}
      </div>
    </div>
  </section>
  )
}
