import React from 'react'

export default function Info() {
  return (
    <section className="wow animate__fadeIn">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 md-margin-50px-bottom">
          <h5 className="alt-font text-extra-dark-gray font-weight-600">
            Beautifully handcrafted templates for your website
          </h5>
          <ul className="p-0 list-style-4">
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
            <li>Find more creative ideas for your projects </li>
            <li>Unlimited power and customization possibilities</li>
          </ul>
          <a
            href="home-classic-digital-agency.html"
            className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"
          >
            <i
              className="fas fa-play-circle icon-very-small margin-5px-right no-margin-left"
              aria-hidden="true"
            />{" "}
            ALL advantages
          </a>
        </div>
        <div className="col-12 col-lg-7 text-center">
          <img src="images/explore-work-02.png" alt="" className="w-100" />
        </div>
      </div>
    </div>
  </section>
  )
}
