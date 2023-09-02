import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-classic-dark bg-extra-dark-gray padding-five-bottom sm-padding-30px-bottom">
    <div className="bg-dark-footer padding-50px-tb sm-padding-30px-tb">
      <div className="container">
        <div className="row align-items-center">
          {/* start slogan */}
          <div className="col-lg-4 col-md-5 text-center alt-font sm-margin-15px-bottom">
            London based highly creative studio
          </div>
          {/* end slogan */}
          {/* start logo */}
          <div className="col-lg-4 col-md-2 text-center sm-margin-10px-bottom">
            <a href="index.html">
              <img
                className="footer-logo"
                src="images/logo-white.png"
                data-at2x="images/logo-white@2x.png"
                alt="Pofo"
              />
            </a>
          </div>
          {/* end logo */}
          {/* start social media */}
          <div className="col-lg-4 col-md-5 text-center">
            <span className="alt-font margin-20px-right md-margin-15px-right">
              On social networks
            </span>
            <div className="social-icon-style-8 d-inline-block align-middle">
              <ul className="small-icon mb-0">
                <li>
                  <a
                    className="facebook text-white-2"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter text-white-2"
                    href="https://twitter.com/"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    className="google text-white-2"
                    href="https://plus.google.com/"
                    target="_blank"
                  >
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram text-white-2"
                    href="https://instagram.com/"
                    target="_blank"
                  >
                    <i
                      className="fab fa-instagram no-margin-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end social media */}
        </div>
      </div>
    </div>
    <div className="footer-widget-area padding-five-top padding-30px-bottom sm-padding-30px-top">
      <div className="container">
        <div className="row">
          {/* start about */}
          <div className="col-lg-3 col-sm-6 widget md-margin-30px-bottom text-center text-sm-start last-paragraph-no-margin">
            <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">
              About Agency
            </div>
            <p className="text-small w-95 sm-w-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the and typesetting
              industry.{" "}
            </p>
          </div>
          {/* end about */}
          {/* start blog post */}
          <div className="col-lg-3 col-sm-6 widget md-margin-30px-bottom">
            <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600 text-center text-sm-start">
              Latest Blog Post
            </div>
            <ul className="latest-post position-relative">
              <li className="media d-flex border-bottom border-color-medium-dark-gray">
                <figure className="flex-shrink-0">
                  <a href="blog-post-layout-01.html">
                    <img src="images/latest-blog2.jpg" alt="" />
                  </a>
                </figure>
                <div className="media-body flex-grow-1 text-small">
                  <a href="blog-post-layout-01.html" className="d-block mb-1">
                    Design is not just what looks...
                  </a>{" "}
                  <span className="clearfix" />
                  20 April 2017 | by <a href="blog-grid.html">Herman Miller</a>
                </div>
              </li>
              <li className="media d-flex border-bottom border-color-medium-dark-gray">
                <figure className="flex-shrink-0">
                  <a href="blog-post-layout-02.html">
                    <img src="images/latest-blog3.jpg" alt="" />
                  </a>
                </figure>
                <div className="media-body flex-grow-1 text-small">
                  <a href="blog-post-layout-02.html" className="d-block mb-1">
                    A lot of care, effort &amp; passion...
                  </a>{" "}
                  <span className="clearfix" />
                  20 April 2017 | by <a href="blog-grid.html">Herman Miller</a>
                </div>
              </li>
              <li className="media d-flex">
                <figure className="flex-shrink-0">
                  <a href="blog-post-layout-03.html">
                    <img src="images/latest-blog4.jpg" alt="" />
                  </a>
                </figure>
                <div className="media-body flex-grow-1 text-small">
                  <a href="blog-post-layout-03.html" className="d-block mb-1">
                    I love making the stuff, that's...
                  </a>{" "}
                  <span className="clearfix" />
                  20 April 2017 | by <a href="blog-grid.html">Herman Miller</a>
                </div>
              </li>
            </ul>
          </div>
          {/* end blog post */}
          {/* start newsletter */}
          <div className="col-lg-3 col-sm-6 widget xs-margin-30px-bottom text-center text-sm-start">
            <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">
              Subscribe Newsletter
            </div>
            <p className="text-small w-90 sm-w-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <form
              action="https://www.themezaa.com/html/pofo/email-templates/subscribe-newsletter.php"
              method="post"
            >
              <div className="position-relative newsletter w-95">
                <div className="col-12 mx-0">
                  <div className="form-results d-none" />
                </div>
                <div className="position-relative w-100 h-100">
                  <div className="position-relative w-100 h-100">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-transparent text-small m-0 border-color-medium-dark-gray required"
                      placeholder="Enter your email..."
                    />
                    <button
                      id="button-subscribe-newsletter"
                      type="submit"
                      className="btn btn-arrow-small position-absolute border-color-medium-dark-gray submit"
                    >
                      <i className="fas fa-caret-right no-margin-left" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* end newsletter */}
          {/* start instagram */}
          <div className="col-lg-3 col-sm-6 widget text-center text-sm-start">
            <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">
              Follow us Instagram
            </div>
            <div className="w-100 d-inline-block">
              <ul
                className="instafeed-grid instafeed-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-3col sm-grid-3col xs-grid-3col gutter-small"
                data-total={6}
              >
                <li className="grid-item">
                  <figure>
                    <a href="#" data-href="{{link}}" target="_blank">
                      <img
                        src="#"
                        data-src="{{image}}"
                        className="insta-image"
                        alt=""
                      />
                      <span className="insta-counts">
                        <i className="ti-instagram" />
                        {"{"}
                        {"{"}likes{"}"}
                        {"}"}
                      </span>
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
          {/* end instagram */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-bottom border-top border-color-medium-dark-gray padding-30px-top">
        <div className="row">
          {/* start copyright */}
          <div className="col-lg-6 col-md-6 text-small text-md-start text-center">
            POFO - Portfolio Concept Theme
          </div>
          <div className="col-lg-6 col-md-6 text-small text-md-end text-center">
            © 2021 POFO is Proudly Powered by{" "}
            <a href="http://www.themezaa.com/" target="_blank" title="ThemeZaa">
              ThemeZaa
            </a>
          </div>
          {/* end copyright */}
        </div>
      </div>
    </div>
  </footer>
  )
}
