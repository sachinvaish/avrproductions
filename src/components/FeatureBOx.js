import React from 'react'

export default function FeatureBOx() {
  return (
    <section className="p-0 wow animate__fadeIn bg-light-gray">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col wow animate__fadeInLeft padding-four-all md-padding-eight-all md-padding-15px-lr sm-padding-50px-tb">
          <div className="row m-0">
            <div className="col-12 col-xl-10 margin-six-bottom lg-margin-six-bottom md-margin-30px-bottom sm-no-margin-bottom">
              <h4 className="alt-font text-extra-dark-gray font-weight-600 text-center text-lg-start md-w-70 mx-auto mx-lg-0 sm-w-90 xs-w-100 sm-margin-30px-bottom">
                We are delivering beautiful digital products for you
              </h4>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-sm-2 m-0">
            {/* start features box item */}
            <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom last-paragraph-no-margin">
              <div className="feature-box-5 position-relative">
                <i className="icon-desktop text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-5px-bottom alt-font font-weight-600">
                    Powerful Website Builder
                  </div>
                  <p className="w-95 sm-w-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                </div>
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div
              className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom last-paragraph-no-margin"
              data-wow-delay="0.2s"
            >
              <div className="feature-box-5 position-relative">
                <i className="icon-book-open text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-5px-bottom alt-font font-weight-600">
                    Different Layout Type
                  </div>
                  <p className="w-95 sm-w-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                </div>
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div
              className="col lg-margin-six-bottom sm-margin-40px-bottom last-paragraph-no-margin"
              data-wow-delay="0.4s"
            >
              <div className="feature-box-5 position-relative">
                <i className="icon-wallet text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-5px-bottom alt-font font-weight-600">
                    True Responsiveness
                  </div>
                  <p className="w-95 sm-w-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                </div>
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col last-paragraph-no-margin" data-wow-delay="0.6s">
              <div className="feature-box-5 position-relative ">
                <i className="icon-camera text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-5px-bottom alt-font font-weight-600">
                    Elegant / Unique design
                  </div>
                  <p className="w-95 sm-w-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                </div>
              </div>
            </div>
            {/* end features box item */}
          </div>
        </div>
        <div
          className="col cover-background md-h-400px wow animate__fadeInRight"
          style={{ backgroundImage: 'url("images/services-classic-07.jpg")' }}
        />
      </div>
    </div>
  </section>
  )
}
