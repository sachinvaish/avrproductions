import React from 'react'

export default function Services() {
  return (
    <section className="overflow-hidden wow animate__fadeIn">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 margin-eight-bottom text-center last-paragraph-no-margin">
          <h5 className="alt-font text-extra-dark-gray font-weight-600">
            Beautiful and easy to use UI, professional animations and drag &amp;
            drop feature
          </h5>
          <p className="w-80 d-inline-block sm-w-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2">
        {/* start features box item */}
        <div className="col md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeInUp last-paragraph-no-margin">
          <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
            <div className="d-inline-block margin-20px-bottom">
              <i className="icon-tools text-white-2 icon-round-small bg-deep-pink" />
            </div>
            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
              Pixel Perfect Design
            </div>
            <p className="w-75 mx-auto md-w-80">
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy.
            </p>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeInUp last-paragraph-no-margin"
          data-wow-delay="0.2s"
        >
          <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
            <div className="d-inline-block margin-20px-bottom">
              <i className="icon-layers text-white-2 icon-round-small bg-deep-pink" />
            </div>
            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
              Full Documentation
            </div>
            <p className="w-75 mx-auto md-w-80">
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy.
            </p>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col xs-margin-15px-bottom wow animate__fadeInUp last-paragraph-no-margin"
          data-wow-delay="0.4s"
        >
          <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
            <div className="d-inline-block margin-20px-bottom">
              <i className="icon-scissors text-white-2 icon-round-small bg-deep-pink" />
            </div>
            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
              Reasonable Pricing
            </div>
            <p className="w-75 mx-auto md-w-80">
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy.
            </p>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div
          className="col wow animate__fadeInUp last-paragraph-no-margin"
          data-wow-delay="0.6s"
        >
          <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
            <div className="d-inline-block margin-20px-bottom">
              <i className="icon-lock text-white-2 icon-round-small bg-deep-pink" />
            </div>
            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
              User-friendly Admin
            </div>
            <p className="w-75 mx-auto md-w-80">
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy.
            </p>
          </div>
        </div>
        {/* end features box item */}
      </div>
    </div>
  </section>
  )
}
