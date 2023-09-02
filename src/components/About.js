import React from 'react'

export default function About() {
  return (
    <section
    className="wow animate__fadeIn overflow-hidden cover-background md-no-background-img bg-medium-light-gray"
    style={{ backgroundImage: 'url("images/homepage-option17-banner-bg.jpg")' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-6 wow animate__fadeIn">
          <div className="row m-0">
            <div className="col-12 text-center text-lg-start sm-no-padding-lr last-paragraph-no-margin margin-60px-bottom md-margin-30px-bottom">
              <span className="text-medium text-deep-pink alt-font margin-10px-bottom d-inline-block">
                Easy way to build perfect websites
              </span>
              <h5 className="alt-font text-extra-dark-gray font-weight-600">
                Beautifully handcrafted templates for your website
              </h5>
              <p className="w-90 md-w-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the 's standard dummy text. Lorem
                Ipsum has been the industry's standard dummy text ever since.
                Lorem Ipsum is simply dummy text.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 row-cols-sm-2 m-0">
            {/* start features box item */}
            <div className="col text-center text-lg-start xs-margin-40px-bottom xs-no-padding-lr wow animate__fadeInUp last-paragraph-no-margin">
              <i className="icon-tools icon-extra-medium text-deep-pink margin-20px-bottom" />
              <div className="alt-font text-extra-dark-gray font-weight-600 margin-5px-bottom">
                Modern Framework
              </div>
              <p className="d-inline-block w-80 lg-w-90 md-w-100 xs-w-90">
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div
              className="col text-center text-lg-start xs-no-padding-lr wow animate__fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.2s"
            >
              <i className="icon-layers icon-extra-medium text-deep-pink margin-20px-bottom" />
              <div className="alt-font text-extra-dark-gray font-weight-600 margin-5px-bottom">
                Live Website Builder
              </div>
              <p className="d-inline-block w-80 lg-w-90 md-w-100 xs-w-90">
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
            {/* end features box item */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
