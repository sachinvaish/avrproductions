import React from 'react'

export default function Testimonials() {
  return (
    <section className="bg-light-gray wow animate__fadeIn">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center margin-100px-bottom md-margin-70px-bottom sm-margin-50px-bottom wow animate__fadeIn">
          <p className="alt-font margin-5px-bottom text-uppercase text-small text-medium-gray">
            What people say
          </p>
          <h5 className="text-uppercase alt-font text-extra-dark-gray margin-20px-bottom font-weight-700 md-w-100">
            Clients Words
          </h5>
          <span className="separator-line-horrizontal-medium-light2 bg-deep-pink d-table mx-auto w-100px" />
        </div>
      </div>
      <div className="row position-relative justify-content-center">
        <div className="col-12 col-md-12 col-sm-9">
          <div
            className="swiper-container swiper-pagination-bottom black-move blog-slider"
            data-slider-options='{ "slidesPerView": "1", "allowTouchMove":true, "loop":false, "spaceBetween": 30, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "navigation": { "nextEl": ".swiper-button-next-2", "prevEl": ".swiper-button-prev-2" }, "breakpoints": { "992": { "slidesPerView":"3" }, "768": { "slidesPerView":"2" } }, "pagination": { "el": ".swiper-pagination-2", "clickable": true } }'
          >
            <div className="swiper-wrapper">
              {/* start testimonial item */}
              <div className="swiper-slide">
                <div className="margin-half-all bg-white box-shadow-light text-center padding-fourteen-all h-100 sm-padding-30px-all">
                  <img
                    src="images/avtar-14.jpg"
                    className="rounded-circle w-100px h-100px margin-25px-bottom md-margin-15px-bottom"
                    alt=""
                  />
                  <p className="md-margin-15px-bottom sm-margin-20px-bottom">
                    I wanted to hire the best and after looking at several other
                    companies, I knew Jacob was the perfect guy for the job. He
                    is a true professional.
                  </p>
                  <span className="text-extra-dark-gray text-small text-uppercase d-block line-height-10 alt-font font-weight-600">
                    Shoko Mugikura
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Design Manager
                  </span>
                </div>
              </div>
              {/* end testimonial item */}
              {/* start testimonial item */}
              <div className="swiper-slide">
                <div className="margin-half-all bg-white box-shadow-light text-center padding-fourteen-all h-100 sm-padding-30px-all">
                  <img
                    src="images/avtar-13.jpg"
                    className="rounded-circle w-100px h-100px margin-25px-bottom md-margin-15px-bottom"
                    alt=""
                  />
                  <p className="md-margin-15px-bottom sm-margin-20px-bottom">
                    Trust us we looked for a very long time and wasted thousands
                    of dollars testing other teams, freelancers, and outsource
                    companies.
                  </p>
                  <span className="text-extra-dark-gray text-small text-uppercase d-block line-height-10 alt-font font-weight-600">
                    Alexander Harvard
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Co Founder / CEO
                  </span>
                </div>
              </div>
              {/* end testimonial item */}
              {/* start testimonial item */}
              <div className="swiper-slide">
                <div className="margin-half-all bg-white box-shadow-light text-center padding-fourteen-all h-100 sm-padding-30px-all">
                  <img
                    src="images/avtar-15.jpg"
                    className="rounded-circle w-100px h-100px margin-25px-bottom md-margin-15px-bottom"
                    alt=""
                  />
                  <p className="md-margin-15px-bottom sm-margin-20px-bottom">
                    This is an excellent company! I personally enjoyed the
                    energy and the professional support the whole team gave to
                    us into creating website.
                  </p>
                  <span className="text-extra-dark-gray text-small text-uppercase d-block line-height-10 alt-font font-weight-600">
                    Lindsay Swanson
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Creative Director
                  </span>
                </div>
              </div>
              {/* end testimonial item */}
              {/* start testimonial item */}
              <div className="swiper-slide">
                <div className="margin-half-all bg-white box-shadow-light text-center padding-fourteen-all h-100 sm-padding-30px-all">
                  <img
                    src="images/avtar-16.jpg"
                    className="rounded-circle w-100px h-100px margin-25px-bottom md-margin-15px-bottom"
                    alt=""
                  />
                  <p className="md-margin-15px-bottom sm-margin-20px-bottom">
                    Their team are easy to work with and helped me make amazing
                    websites in a short amount of time. Thanks again guys for
                    all your hard work.
                  </p>
                  <span className="text-extra-dark-gray text-small text-uppercase d-block line-height-10 alt-font font-weight-600">
                    Herman Miller
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Creative Director
                  </span>
                </div>
              </div>
              {/* end testimonial item */}
            </div>
            <div className="swiper-pagination swiper-pagination-2" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
