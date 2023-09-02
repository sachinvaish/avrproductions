import React from 'react'

export default function VideoSection() {
  return (
    <section
    className="parallax"
    data-parallax-background-ratio={0}
    style={{ backgroundImage: 'url("images/parallax-bg6.jpg")' }}
  >
    <div className="opacity-full bg-extra-dark-gray" />
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-9 col-lg-10 text-center wow animate__fadeIn last-paragraph-no-margin">
          <a
            className="popup-youtube"
            href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
          >
            <img
              src="images/icon-play-white.png"
              className="w-10 sm-w-50px margin-30px-bottom"
              alt=""
            />
          </a>
          <h4 className="alt-font text-white-2">
            Beautiful and easy to use UI, professional animations and drag &amp;
            drop feature
          </h4>
          <p className="w-75 mx-auto text-medium-gray lg-w-90 sm-w-100 sm-margin-30px-bottom">
            With years of experience in the website design and development
            industry ThemeZaa pride ourselves on creating unique, creative and
            quality designs that are developed upon the latest modern coding and
            developing techniques, which are then built using the most up to
            date, structured coding framework so that your development team can
            take it to the next level with ease.
          </p>
          <a
            href="about-us-simple.html"
            className="btn btn-white btn-small text-extra-small border-radius-4 margin-45px-top sm-margin-35px-top"
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
  </section>
  )
}
