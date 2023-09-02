import React from 'react'

export default function StartSection() {
  return (
    <section className="wow animate__fadeIn">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 text-center md-margin-50px-bottom wow animate__fadeInLeft">
          <img src="images/image-8.jpg" alt="" className="w-100" />
        </div>
        <div
          className="col-12 col-lg-7 wow animate__fadeInRight last-paragraph-no-margin"
          data-wow-delay="0.2s"
        >
          <div className="padding-eight-lr text-center text-lg-start sm-no-padding w-100">
            <span className="text-deep-pink alt-font margin-10px-bottom md-no-margin-bottom d-inline-block text-medium">
              Wide range of web development services
            </span>
            <h5 className="font-weight-600 alt-font text-extra-dark-gray">
              Responsive, convenient and multipurpose theme
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum has been the industry's standard dummy
              text ever since. Lorem Ipsum is printing and typesetting simply
              dummy text.
            </p>
            <a
              href="about-us-simple.html"
              className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-30px-top"
            >
              <i
                className="fas fa-play-circle icon-very-small margin-5px-right ms-0"
                aria-hidden="true"
              />{" "}
              About Company
            </a>
          </div>
        </div>
      </div>
      <div className="divider-full bg-extra-light-gray margin-seven-bottom margin-eight-top" />
      <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
        {/* start features box item */}
        <div className="col md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin">
          <div className="feature-box-5 position-relative">
            <i className="icon-desktop text-medium-gray icon-medium" />
            <div className="feature-content">
              <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">
                Modern Framework
              </div>
              <p className="d-inline-block w-75 lg-w-100 xs-w-90">
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin"
          data-wow-delay="0.2s"
        >
          <div className="feature-box-5 position-relative">
            <i className="icon-book-open text-medium-gray icon-medium" />
            <div className="feature-content">
              <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">
                Web Interactive
              </div>
              <p className="d-inline-block w-75 lg-w-100 xs-w-90">
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col wow animate__fadeInUp last-paragraph-no-margin"
          data-wow-delay="0.4s"
        >
          <div className="feature-box-5 position-relative">
            <i className="icon-gift text-medium-gray icon-medium" />
            <div className="feature-content">
              <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">
                Graphic Design
              </div>
              <p className="d-inline-block w-75 lg-w-100 xs-w-90">
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
          </div>
        </div>
        {/* end features box item */}
      </div>
    </div>
  </section>
  )
}
