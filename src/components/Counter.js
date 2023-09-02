import React from 'react'

export default function Counter() {
  return (
    <section className="wow animate__fadeIn">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        {/* start counter box item */}
        <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
          <div className="feature-box-5 position-relative">
            <i className="icon-desktop text-medium-gray icon-extra-medium top-6" />
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={350}
                data-speed={2000}
              >
                350
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.2s"
        >
          <div className="feature-box-5 position-relative">
            <i className="icon-camera text-medium-gray icon-extra-medium top-6" />
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={780}
                data-speed={2000}
              >
                780
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Photo Capture
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left xs-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.4s"
        >
          <div className="feature-box-5 position-relative">
            <i className="icon-laptop text-medium-gray icon-extra-medium top-6" />
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={850}
                data-speed={2000}
              >
                850
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Work Completed
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.6s"
        >
          <div className="feature-box-5 position-relative">
            <i className="icon-chat text-medium-gray icon-extra-medium top-6" />
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={650}
                data-speed={2000}
              >
                650
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Telephonic Talk
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
      </div>
    </div>
  </section>
  )
}
