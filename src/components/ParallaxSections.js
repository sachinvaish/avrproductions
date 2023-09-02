import React from 'react'

export default function ParallaxSections() {
  return (
    <section
    className="parallax"
    data-parallax-background-ratio="0.6"
    style={{ backgroundImage: "url(_images/homepage-9-parallax-img5.html)" }}
  >
    <div className="opacity-medium bg-extra-dark-gray" />
    <div className="container-fluid position-relative">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1 align-items-center">
        <div className="col text-center md-margin-50px-bottom sm-margin-30px-bottom wow animate__fadeIn">
          <img
            src="images/homepage-option15-image-3.png"
            alt=""
            className="w-100"
          />
        </div>
        <div className="col wow animate__fadeIn" data-wow-delay="0.2s">
          <div className="w-75 xl-w-85 lg-w-100 padding-three-lr sm-no-padding-lr">
            <h4 className="alt-font text-white-2 font-weight-600">
              Unique, truly responsive and functional websites{" "}
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum has been the industry's standard dummy
              text.
            </p>
            <ul className="p-0 list-style-4 margin-30px-bottom list-style-color">
              <li>
                Beautiful and easy to understand UI, professional animations
              </li>
              <li>
                Theme advantages are pixel perfect design &amp; clear code
                delivered
              </li>
              <li>
                Present your services with flexible, convenient and multipurpose
              </li>
              <li>Unlimited power and customization possibilities</li>
            </ul>
            <a
              href="about-us-modern.html"
              className="btn btn-white btn-small text-extra-small border-radius-4 margin-20px-tb md-no-margin-bottom"
            >
              <i
                className="fas fa-play-circle icon-very-small margin-5px-right ms-0"
                aria-hidden="true"
              />
              GET TO KNOW US
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
