import React from 'react'

export default function Services_new() {
  return (
    <section className="wow animate__fadeIn">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center margin-100px-bottom md-margin-70px-bottom sm-margin-50px-bottom">
          <div className="alt-font margin-5px-bottom text-uppercase text-small text-medium-gray">
            What We Do
          </div>
          <h5 className="text-uppercase alt-font text-extra-dark-gray margin-20px-bottom font-weight-700 md-w-100">
            our services
          </h5>
          <span className="separator-line-horrizontal-medium-light2 bg-deep-pink d-table mx-auto w-100px" />
        </div>
      </div>
      <div className="row justify-content-center">
        {/* start services item */}
        <div className="col-12 col-lg-4 col-md-6 col-sm-8 team-block text-start feature-box-15 md-margin-40px-bottom last-paragraph-no-margin wow animate__fadeInUp">
          <figure>
            <div className="feature-box-content sm-w-100">
              <div className="feature-box-image">
                <img src="images/image-4.jpg" alt="" />
              </div>
              <div className="hover-content bg-deep-pink d-flex justify-content-center align-items-center">
                <div className="padding-twelve-lr">
                  <span className="text-white-2 d-inline-block text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </div>
            </div>
            <figcaption>
              <div className="text-center margin-25px-top">
                <div className="text-extra-dark-gray alt-font font-weight-600">
                  Design and Development
                </div>
                <p>600+ We created web design</p>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* end services item */}
        {/* start services item */}
        <div
          className="col-12 col-lg-4 col-md-6 col-sm-8 team-block text-start feature-box-15 md-margin-40px-bottom last-paragraph-no-margin wow animate__fadeInUp"
          data-wow-delay="0.2s"
        >
          <figure>
            <div className="feature-box-content sm-w-100">
              <div className="feature-box-image">
                <img src="images/blog-img1.jpg" alt="" />
              </div>
              <div className="hover-content bg-deep-pink d-flex justify-content-center align-items-center">
                <div className="padding-twelve-lr">
                  <span className="text-white-2 d-inline-block text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </div>
            </div>
            <figcaption>
              <div className="text-center margin-25px-top">
                <div className="text-extra-dark-gray alt-font font-weight-600">
                  Social Media Marketing
                </div>
                <p>475+ We completed marketing</p>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* end services item */}
        {/* start services item */}
        <div
          className="col-12 col-lg-4 col-md-6 col-sm-8 team-block text-start feature-box-15 last-paragraph-no-margin wow animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          <figure>
            <div className="feature-box-content sm-w-100">
              <div className="feature-box-image">
                <img src="images/blog-img2.jpg" alt="" />
              </div>
              <div className="hover-content bg-deep-pink d-flex justify-content-center align-items-center">
                <div className="padding-twelve-lr">
                  <span className="text-white-2 d-inline-block text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </div>
            </div>
            <figcaption>
              <div className="text-center margin-25px-top">
                <div className="text-extra-dark-gray alt-font font-weight-600">
                  Mobile App Development
                </div>
                <p>475+ We created mobile app</p>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* end services item */}
      </div>
    </div>
  </section>
  )
}
