import React from 'react'

export default function Advantages() {
  return (
    <section className="p-0 wow animate__fadeIn bg-light-gray" id="services">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1">
        <div className="col padding-seven-half-tb padding-eight-lr xl-padding-five-half-tb xl-padding-six-lr lg-padding-five-all md-padding-ten-all sm-padding-15px-lr text-center text-lg-start last-paragraph-no-margin wow animate__fadeIn">
          <span className="text-medium margin-15px-bottom d-block alt-font text-deep-pink">
            We create premium designs and technology
          </span>
          <h4 className="alt-font text-extra-dark-gray font-weight-600 mx-auto mx-lg-0 sm-w-100">
            we design brand, digital experience that engage the right customers.
          </h4>
          <p className="w-80 lg-w-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum has been the industry. Lorem Ipsum is simply
            dummy text of the printing and industry. Lorem Ipsum has been the
            industry's standard dummy text ever since. Lorem Ipsum has been the
            industry.
          </p>
          <a
            href="services-simple.html"
            className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-35px-top"
          >
            <i
              className="fas fa-play-circle icon-very-small margin-5px-right ms-0"
              aria-hidden="true"
            />
            all advantages
          </a>
        </div>
        <div
          className="col position-relative md-h-500px sm-h-300 cover-background wow animate__fadeIn"
          style={{ backgroundImage: 'url("images/parallax-bg11.jpg")' }}
        />
      </div>
    </div>
  </section>
  )
}
