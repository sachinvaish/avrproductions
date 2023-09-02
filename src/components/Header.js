import React from 'react'

export default function Header() {
  return (
    <header className="header-with-topbar">
  {/* topbar */}
  <div className="top-header-area bg-black padding-10px-tb">
    <div className="container-lg">
      <div className="row align-items-center m-0">
        <div className="col-md-6 ps-lg-0 text-uppercase alt-font d-flex align-items-center justify-content-center justify-content-md-start">
          <a
            href="tel:1234567890"
            className="text-link-white-2 line-height-normal"
            title="Call us 123-456-7890"
          >
            Call us 123-456-7890
          </a>
          <div className="separator-line-verticle-extra-small bg-dark-gray d-inline-block margin-two-half-lr position-relative align-middle" />
          <a
            href="mailto:no-reply@domain.com"
            className="text-link-white-2 line-height-normal"
            title="no-reply@domain.com"
          >
            no-reply@domain.com
          </a>
        </div>
        <div className="col-md-6 pe-lg-0 d-none d-md-flex align-items-center justify-content-end">
          <div className="icon-social-very-small d-inline-block line-height-normal">
            <a
              href="https://www.facebook.com/"
              title="Facebook"
              target="_blank"
              className="text-link-white-2"
            >
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/"
              title="Twitter"
              target="_blank"
              className="text-link-white-2"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://linkedin.com/"
              title="Linked In"
              target="_blank"
              className="text-link-white-2"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://plus.google.com/"
              title="Google Plus"
              target="_blank"
              className="text-link-white-2"
            >
              <i className="fab fa-google-plus-g" />
            </a>
          </div>
          <div className="separator-line-verticle-extra-small bg-dark-gray d-inline-block margin-two-half-lr position-relative align-middle top-1px" />
          <div className="btn-group dropdown-style-1">
            <button
              type="button"
              className="btn dropdown-toggle sm-w-100"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              English <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#" title="English">
                  <span className="icon-country usa" />
                  English
                </a>
              </li>
              <li>
                <a href="#" title="England">
                  <span className="icon-country england" />
                  England
                </a>
              </li>
              <li>
                <a href="#" title="France">
                  <span className="icon-country france" />
                  France
                </a>
              </li>
              <li>
                <a href="#" title="China">
                  <span className="icon-country china" />
                  China
                </a>
              </li>
              <li>
                <a href="#" title="Hong Kong">
                  <span className="icon-country hong-kong" />
                  Hong Kong
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end topbar */}
  {/* start navigation */}
  <nav className="navbar navbar-default bootsnav navbar-top header-light-transparent background-transparent navbar-expand-lg">
    <div className="container-lg nav-header-container">
      {/* start logo */}
      <div className="col-auto ps-0">
        <a href="index.html" title="Pofo" className="logo">
          <img
            src="images/logo.png"
            data-at2x="images/logo@2x.png"
            className="logo-dark default"
            alt="Pofo"
          />
          <img
            src="images/logo-white.png"
            data-at2x="images/logo-white@2x.png"
            alt="Pofo"
            className="logo-light"
          />
        </a>
      </div>
      {/* end logo */}
      <div className="col accordion-menu pe-0 pe-md-3">
        <button
          type="button"
          className="navbar-toggler collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-collapse-toggle-1"
        >
          <span className="sr-only">toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbar-collapse-toggle-1"
        >
          <ul
            id="accordion"
            className="nav navbar-nav navbar-left no-margin alt-font text-normal"
            data-in="animate__fadeIn"
            data-out="animate__fadeOut"
          >
            {/* start menu item */}
            <li className="dropdown megamenu-fw">
              <a href="#">Home</a>
              <i
                className="fas fa-angle-down dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-hidden="true"
              />
              {/* start sub menu */}
              <div className="menu-back-div dropdown-menu megamenu-content mega-menu collapse mega-menu-full">
                <ul>
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Classic Homepages</li>
                      <li>
                        <a href="home-classic-corporate.html">
                          Classic corporate
                        </a>
                      </li>
                      <li>
                        <a href="home-classic-digital-agency.html">
                          Classic digital agency
                        </a>
                      </li>
                      <li>
                        <a href="home-classic-innovation-agency.html">
                          Classic innovation agency
                        </a>
                      </li>
                      <li>
                        <a href="home-classic-web-agency.html">
                          Classic web agency
                        </a>
                      </li>
                      <li>
                        <a href="home-classic-one-page.html">
                          Classic one page
                        </a>
                      </li>
                      <li>
                        <a href="home-classic-start-up.html">
                          Classic start-up
                        </a>
                      </li>
                      <li>
                        <a href="home-classic-interactive-agency.html">
                          Classic interactive agency
                        </a>
                      </li>
                      <li className="menu-new">
                        <a href="home-classic-business.html">
                          Classic business
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column */}
                  {/* start sub menu column */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Creative Homepages</li>
                      <li>
                        <a href="home-creative-studio.html">Creative studio</a>
                      </li>
                      <li>
                        <a href="home-creative-business.html">
                          Creative business
                        </a>
                      </li>
                      <li>
                        <a href="home-creative-simple-portfolio.html">
                          Creative simple portfolio
                        </a>
                      </li>
                      <li>
                        <a href="home-creative-branding-agency.html">
                          Creative branding agency
                        </a>
                      </li>
                      <li className="menu-new">
                        <a href="home-creative-minimalist-portfolio.html">
                          creative minimalist portfolio
                        </a>
                      </li>
                      <li>
                        <a href="home-creative-small-business.html">
                          Creative small business
                        </a>
                      </li>
                      <li>
                        <a href="home-creative-designer.html">
                          Creative designer
                        </a>
                      </li>
                      <li>
                        <a href="home-creative-agency.html">Creative agency</a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Portfolio Homepages</li>
                      <li>
                        <a href="home-portfolio-minimal.html">
                          Portfolio minimal
                        </a>
                      </li>
                      <li>
                        <a href="home-portfolio-multiple-carousel.html">
                          Portfolio multiple carousel
                        </a>
                      </li>
                      <li>
                        <a href="home-portfolio-centered-slides.html">
                          Portfolio centered slides
                        </a>
                      </li>
                      <li>
                        <a href="home-portfolio-personal.html">
                          Portfolio personal
                        </a>
                      </li>
                      <li>
                        <a href="home-portfolio-metro.html">Portfolio metro</a>
                      </li>
                      <li>
                        <a href="home-portfolio-full-screen-vertical.html">
                          Portfolio full screen – vertical
                        </a>
                      </li>
                      <li>
                        <a href="home-portfolio-photographer.html">
                          Portfolio photographer
                        </a>
                      </li>
                      <li>
                        <a href="home-portfolio-parallax.html">
                          Portfolio parallax
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Blog Homepages</li>
                      <li>
                        <a href="home-blog-grid.html">Blog grid</a>
                      </li>
                      <li>
                        <a href="home-blog-masonry.html">Blog masonry</a>
                      </li>
                      <li>
                        <a href="home-blog-clean.html">Blog clean</a>
                      </li>
                      <li>
                        <a href="home-blog-personal.html">Blog personal</a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                </ul>
                {/* end sub menu */}
              </div>
            </li>
            {/* end menu item */}
            <li className="dropdown simple-dropdown">
              <a href="#">Pages</a>
              <i
                className="fas fa-angle-down dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-hidden="true"
              />
              {/* start sub menu */}
              <ul className="dropdown-menu" role="menu">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    About <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about-us-simple.html">About us simple</a>
                    </li>
                    <li>
                      <a href="about-us-classic.html">About us classic</a>
                    </li>
                    <li>
                      <a href="about-us-modern.html">About us modern</a>
                    </li>
                    <li>
                      <a href="about-me.html">About me</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Services <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="services-simple.html">Services simple</a>
                    </li>
                    <li>
                      <a href="services-classic.html">Services classic</a>
                    </li>
                    <li>
                      <a href="services-modern.html">Services modern</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Contact <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="contact-us-simple.html">Contact simple</a>
                    </li>
                    <li>
                      <a href="contact-us-classic.html">Contact classic</a>
                    </li>
                    <li>
                      <a href="contact-us-classic-02.html">
                        Contact classic – style 02
                      </a>
                    </li>
                    <li>
                      <a href="contact-us-modern.html">Contact modern</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Team <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="team-simple.html">Team simple</a>
                    </li>
                    <li>
                      <a href="team-classic.html">Team classic</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Additional Pages <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="our-clients.html">Our clients</a>
                    </li>
                    <li>
                      <a href="404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming soon</a>
                    </li>
                    <li>
                      <a href="coming-soon-02.html">Coming soon – style 02</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="search-result.html">Search result</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu-fw">
              <a href="#">Portfolio</a>
              <i
                className="fas fa-angle-down dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-hidden="true"
              />
              {/* start sub menu */}
              <div className="menu-back-div dropdown-menu megamenu-content mega-menu collapse mega-menu-full">
                <ul>
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">
                        Grid - Full width Layouts
                      </li>
                      <li>
                        <a href="portfolio-full-width-grid-overlay.html">
                          Portfolio grid overlay
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-grid-with-icon.html">
                          Portfolio grid with icon
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-grid-transform.html">
                          Portfolio grid transform
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-grid-zooming.html">
                          Portfolio grid zooming
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="dropdown-header">
                        Masonry - Full width Layouts
                      </li>
                      <li>
                        <a href="portfolio-full-width-masonry-overlay.html">
                          Portfolio masonry overlay
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-masonry-with-icon.html">
                          Portfolio masonry with icon
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="dropdown-header">
                        Metro - Full width Layouts
                      </li>
                      <li>
                        <a href="portfolio-full-width-metro-overlay.html">
                          Portfolio metro overlay
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-metro-with-icon.html">
                          Portfolio metro with icon
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-metro-transform.html">
                          Portfolio metro transform
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-metro-zooming.html">
                          Portfolio metro zooming
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="dropdown-header">
                        Other - Full width Layouts
                      </li>
                      <li>
                        <a href="portfolio-full-width-image-gallery.html">
                          Portfolio image gallery
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-justified-gallery.html">
                          Portfolio justified
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-carousel.html">
                          Portfolio carousel
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-full-width-parallax.html">
                          Portfolio parallax
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column */}
                  {/* start sub menu column */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Grid - Boxed Layouts</li>
                      <li>
                        <a href="portfolio-boxed-grid-overlay.html">
                          Portfolio grid overlay
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-grid-with-icon.html">
                          Portfolio grid with icon
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-grid-transform.html">
                          Portfolio grid transform
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-grid-zooming.html">
                          Portfolio grid zooming
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="dropdown-header">
                        Masonry - Boxed Layouts
                      </li>
                      <li>
                        <a href="portfolio-boxed-masonry-overlay.html">
                          Portfolio masonry overlay
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-masonry-with-icon.html">
                          Portfolio masonry with icon
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="dropdown-header">Metro - Boxed Layouts</li>
                      <li>
                        <a href="portfolio-boxed-metro-overlay.html">
                          Portfolio metro overlay
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-metro-with-icon.html">
                          Portfolio metro with icon
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-metro-transform.html">
                          Portfolio metro transform
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-metro-zooming.html">
                          Portfolio metro zooming
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="dropdown-header">Other - Boxed Layouts</li>
                      <li>
                        <a href="portfolio-boxed-image-gallery.html">
                          Portfolio image gallery
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-justified-gallery.html">
                          Portfolio justified
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-carousel.html">
                          Portfolio carousel
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-parallax.html">
                          Portfolio parallax
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Single Project Page</li>
                      <li>
                        <a href="single-project-page-01.html">
                          Single project page 01
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-02.html">
                          Single project page 02
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-03.html">
                          Single project page 03
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-04.html">
                          Single project page 04
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-05.html">
                          Single project page 05
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-06.html">
                          Single project page 06
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-07.html">
                          Single project page 07
                        </a>
                      </li>
                      <li>
                        <a href="single-project-page-08.html">
                          Single project page 08
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Portfolio Columns</li>
                      <li>
                        <a href="portfolio-two-columns.html">
                          Portfolio 2 columns
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-three-columns.html">
                          Portfolio 3 columns
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-four-columns.html">
                          Portfolio 4 columns
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-five-columns.html">
                          Portfolio 5 columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3 d-none d-lg-block">
                    {/* start sub menu item  */}
                    <ul>
                      <li>
                        <a
                          href="home-creative-studio.html"
                          className="menu-banner-image"
                        >
                          <img
                            src="images/menu-banner-01.png"
                            alt="portfolio"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="home-creative-studio.html"
                          className="menu-banner-image"
                        >
                          <img
                            src="images/menu-banner-02.png"
                            alt="portfolio"
                          />
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                </ul>
                {/* end sub menu */}
              </div>
            </li>
            <li className="dropdown simple-dropdown">
              <a href="#" title="Blog">
                Blog
              </a>
              <i
                className="fas fa-angle-down dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-hidden="true"
              />
              {/* start sub menu */}
              <ul className="dropdown-menu" role="menu">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Standard <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-standard-full-width.html">
                        Blog standard – full width
                      </a>
                    </li>
                    <li>
                      <a href="blog-standard-with-left-sidebar.html">
                        Blog standard with left sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-standard-with-right-sidebar.html">
                        Blog standard with right sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Classic <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-classic.html">Blog classic</a>
                    </li>
                    <li>
                      <a href="blog-classic-full-width.html">
                        Blog classic – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog List <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-list.html">Blog list</a>
                    </li>
                    <li>
                      <a href="blog-list-full-width.html">
                        Blog list – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Grid <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-grid.html">Blog grid</a>
                    </li>
                    <li>
                      <a href="blog-grid-full-width.html">
                        Blog grid – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Masonry <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-masonry.html">Blog masonry</a>
                    </li>
                    <li>
                      <a href="blog-masonry-full-width.html">
                        Blog masonry – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Simple <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-simple.html">Blog simple</a>
                    </li>
                    <li>
                      <a href="blog-simple-full-width.html">
                        Blog simple – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Clean <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-clean.html">Blog clean</a>
                    </li>
                    <li>
                      <a href="blog-clean-full-width.html">
                        Blog clean – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Images <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-images.html">Blog images</a>
                    </li>
                    <li>
                      <a href="blog-images-full-width.html">
                        Blog images – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Blog Only Text <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-only-text.html">Blog only text</a>
                    </li>
                    <li>
                      <a href="blog-only-text-full-width.html">
                        Blog only text – full width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Post Layout <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-post-layout-01.html">Blog post layout 01</a>
                    </li>
                    <li>
                      <a href="blog-post-layout-02.html">Blog post layout 02</a>
                    </li>
                    <li>
                      <a href="blog-post-layout-03.html">Blog post layout 03</a>
                    </li>
                    <li>
                      <a href="blog-post-layout-04.html">Blog post layout 04</a>
                    </li>
                    <li>
                      <a href="blog-post-layout-05.html">Blog post layout 05</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Post Types <i className="fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-standard-post.html">Standard post</a>
                    </li>
                    <li>
                      <a href="blog-gallery-post.html">Gallery post</a>
                    </li>
                    <li>
                      <a href="blog-slider-post.html">Slider post</a>
                    </li>
                    <li>
                      <a href="blog-html5-video-post.html">HTML5 video post</a>
                    </li>
                    <li>
                      <a href="blog-youtube-video-post.html">
                        Youtube video post
                      </a>
                    </li>
                    <li>
                      <a href="blog-vimeo-video-post.html">Vimeo video post</a>
                    </li>
                    <li>
                      <a href="blog-audio-post.html">Audio post</a>
                    </li>
                    <li>
                      <a href="blog-blockquote-post.html">Blockquote post</a>
                    </li>
                    <li>
                      <a href="blog-full-width-post.html">Full width post</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* end sub menu */}
            </li>
            <li className="dropdown megamenu-fw">
              <a href="#">Elements</a>
              <i
                className="fas fa-angle-down dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-hidden="true"
              />
              {/* start sub menu */}
              <div className="menu-back-div dropdown-menu megamenu-content mega-menu collapse mega-menu-full icon-list-menu">
                <ul>
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">General elements</li>
                      <li>
                        <a href="accordions.html">
                          <i className="ti-layout-accordion-separated" />{" "}
                          Accordions
                        </a>
                      </li>
                      <li>
                        <a href="buttons.html">
                          <i className="ti-mouse" /> Buttons
                        </a>
                      </li>
                      <li>
                        <a href="team.html">
                          <i className="ti-user" /> Team
                        </a>
                      </li>
                      <li>
                        <a href="team-carousel.html">
                          <i className="ti-layout-slider-alt" /> Team carousel
                        </a>
                      </li>
                      <li>
                        <a href="clients.html">
                          <i className="ti-id-badge" /> Clients
                        </a>
                      </li>
                      <li>
                        <a href="client-carousel.html">
                          <i className="ti-layout-slider" /> Client carousel
                        </a>
                      </li>
                      <li>
                        <a href="subscribe.html">
                          <i className="ti-bookmark" /> Subscribe
                        </a>
                      </li>
                      <li>
                        <a href="call-to-action.html">
                          <i className="ti-headphone-alt" /> Call to action
                        </a>
                      </li>
                      <li>
                        <a href="tab.html">
                          <i className="ti-layout-tab" /> Tab
                        </a>
                      </li>
                      <li>
                        <a href="google-map.html">
                          <i className="ti-location-pin" /> Google map
                        </a>
                      </li>
                      <li>
                        <a href="text-slider.html">
                          <i className="ti-layout-media-overlay" /> Text slider
                        </a>
                      </li>
                      <li>
                        <a href="contact-form.html">
                          <i className="ti-clipboard" /> Contact form
                        </a>
                      </li>
                      <li>
                        <a href="image-gallery.html">
                          <i className="ti-gallery" /> Image gallery
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column */}
                  {/* start sub menu column */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Infographics / icons</li>
                      <li>
                        <a href="progress-bar.html">
                          <i className="icon-hourglass" /> Progress bar
                        </a>
                      </li>
                      <li>
                        <a href="icon-with-text.html">
                          <i className="ti-layout-media-left" /> Icon with text
                        </a>
                      </li>
                      <li>
                        <a href="overline-icon-box.html">
                          <i className="ti-layout-placeholder" /> Overline icon
                          box
                        </a>
                      </li>
                      <li>
                        <a href="custom-icon-with-text.html">
                          <i className="ti-layout-cta-btn-left" /> Custom icon
                          with text
                        </a>
                      </li>
                      <li>
                        <a href="counters.html">
                          <i className="ti-timer" /> Counters
                        </a>
                      </li>
                      <li>
                        <a href="countdown.html">
                          <i className="ti-alarm-clock" /> Countdown
                        </a>
                      </li>
                      <li>
                        <a href="pie-charts.html">
                          <i className="ti-pie-chart" /> Pie charts
                        </a>
                      </li>
                      <li>
                        <a href="text-box.html">
                          <i className="ti-layout-cta-left" /> Text box
                        </a>
                      </li>
                      <li>
                        <a href="fancy-text-box.html">
                          <i className="ti-layout-cta-center" /> Fancy text box
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Interactive Elements</li>
                      <li>
                        <a href="testimonials.html">
                          <i className="ti-thought" /> Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="testimonials-carousel.html">
                          <i className="ti-comments" /> Testimonials carousel
                        </a>
                      </li>
                      <li>
                        <a href="video.html">
                          <i className="ti-video-camera" /> Video
                        </a>
                      </li>
                      <li>
                        <a href="interactive-banners.html">
                          <i className="ti-image" /> Interactive banners
                        </a>
                      </li>
                      <li>
                        <a href="services.html">
                          <i className="ti-headphone-alt" /> Services
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-slider.html">
                          <i className="ti-layout-slider-alt" /> Portfolio
                          slider
                        </a>
                      </li>
                      <li>
                        <a href="info-banner.html">
                          <i className="ti-layout-slider" /> Info banner
                        </a>
                      </li>
                      <li>
                        <a href="rotate-box.html">
                          <i className="ti-layout-width-full" /> Rotate box
                        </a>
                      </li>
                      <li>
                        <a href="process-step.html">
                          <i className="ti-stats-up" /> Process step
                        </a>
                      </li>
                      <li>
                        <a href="blog-posts.html">
                          <i className="ti-comment-alt" /> Blog posts
                        </a>
                      </li>
                      <li>
                        <a href="instagram.html">
                          <i className="ti-instagram" /> Instagram
                        </a>
                      </li>
                      <li>
                        <a href="parallax-scrolling.html">
                          <i className="ti-exchange-vertical" /> Parallax
                          scrolling
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Text &amp; containers</li>
                      <li>
                        <a href="heading.html">
                          <i className="ti-text" /> Heading
                        </a>
                      </li>
                      <li>
                        <a href="dropcaps.html">
                          <i className="ti-layout-accordion-list" /> Dropcaps
                        </a>
                      </li>
                      <li>
                        <a href="columns.html">
                          <i className="ti-layout-column3-alt" /> Columns
                        </a>
                      </li>
                      <li>
                        <a href="blockquote.html">
                          <i className="ti-quote-left" /> Blockquote
                        </a>
                      </li>
                      <li>
                        <a href="highlights.html">
                          <i className="ti-underline" /> Highlights
                        </a>
                      </li>
                      <li>
                        <a href="message-box.html">
                          <i className="ti-layout-media-right-alt" /> Message
                          box
                        </a>
                      </li>
                      <li>
                        <a href="social-icons.html">
                          <i className="ti-signal" /> Social icons
                        </a>
                      </li>
                      <li>
                        <a href="lists.html">
                          <i className="ti-list" /> Lists
                        </a>
                      </li>
                      <li>
                        <a href="seperators.html">
                          <i className="ti-layout-line-solid" /> Separators
                        </a>
                      </li>
                      <li>
                        <a href="pricing-table.html">
                          <i className="ti-layout-grid2-thumb" /> Pricing table
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                </ul>
                {/* end sub menu */}
              </div>
            </li>
            <li className="dropdown megamenu-fw">
              <a href="#">Features</a>
              <i
                className="fas fa-angle-down dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-hidden="true"
              />
              {/* start sub menu */}
              <div className="menu-back-div dropdown-menu megamenu-content mega-menu collapse mega-menu-full">
                <ul>
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Header Styles</li>
                      <li>
                        <a href="transparent-header.html">Transparent header</a>
                      </li>
                      <li>
                        <a href="white-header.html">White header</a>
                      </li>
                      <li>
                        <a href="dark-header.html">Dark header</a>
                      </li>
                      <li>
                        <a href="header-with-top-bar.html">
                          Header with top bar
                        </a>
                      </li>
                      <li>
                        <a href="header-with-sticky-top-bar.html">
                          Header with sticky top bar
                        </a>
                      </li>
                      <li>
                        <a href="header-with-push.html">Header with push</a>
                      </li>
                      <li>
                        <a href="center-navigation.html">Center navigation</a>
                      </li>
                      <li>
                        <a href="center-logo.html">Center logo</a>
                      </li>
                      <li>
                        <a href="top-logo.html">Top logo</a>
                      </li>
                      <li>
                        <a href="one-page-navigation.html">
                          One page navigation
                        </a>
                      </li>
                      <li>
                        <a href="hamburger-menu.html">Hamburger menu</a>
                      </li>
                      <li>
                        <a href="hamburger-menu-modern.html">
                          Hamburger menu modern
                        </a>
                      </li>
                      <li>
                        <a href="hamburger-menu-half.html">
                          Hamburger menu half
                        </a>
                      </li>
                      <li>
                        <a href="left-menu-classic.html">Left menu classic</a>
                      </li>
                      <li>
                        <a href="left-menu-modern.html">Left menu modern</a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column */}
                  {/* start sub menu column */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Footer</li>
                      <li>
                        <a href="footer-standard.html">Footer standard</a>
                      </li>
                      <li>
                        <a href="footer-standard-dark.html">
                          Footer standard dark
                        </a>
                      </li>
                      <li>
                        <a href="footer-classic.html">Footer classic</a>
                      </li>
                      <li>
                        <a href="footer-classic-dark.html">
                          Footer classic dark
                        </a>
                      </li>
                      <li>
                        <a href="footer-clean.html">Footer clean</a>
                      </li>
                      <li>
                        <a href="footer-clean-dark.html">Footer clean dark</a>
                      </li>
                      <li>
                        <a href="footer-modern.html">Footer modern</a>
                      </li>
                      <li>
                        <a href="footer-modern-dark.html">Footer modern dark</a>
                      </li>
                      <li>
                        <a href="footer-center-logo.html">
                          Footer center logo{" "}
                        </a>
                      </li>
                      <li>
                        <a href="footer-center-logo-dark.html">
                          Footer center logo dark
                        </a>
                      </li>
                      <li>
                        <a href="footer-strip.html">Footer strip</a>
                      </li>
                      <li>
                        <a href="footer-strip-dark.html">Footer strip dark</a>
                      </li>
                      <li>
                        <a href="footer-center-logo-02.html">
                          Footer center logo 02
                        </a>
                      </li>
                      <li>
                        <a href="footer-center-logo-02-dark.html">
                          Footer center logo 02 dark
                        </a>
                      </li>
                      <li className="menu-new">
                        <a href="footer-clean-modern.html">
                          footer clean modern
                        </a>
                      </li>
                      <li className="menu-new">
                        <a href="footer-clean-modern-dark.html">
                          footer clean modern dark
                        </a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Page Title</li>
                      <li>
                        <a href="page-title-left-alignment.html">
                          Left alignment
                        </a>
                      </li>
                      <li>
                        <a href="page-title-right-alignment.html">
                          Right alignment
                        </a>
                      </li>
                      <li>
                        <a href="page-title-center-alignment.html">
                          Center alignment
                        </a>
                      </li>
                      <li>
                        <a href="page-title-dark-style.html">Dark style</a>
                      </li>
                      <li>
                        <a href="page-title-big-typography.html">
                          Big typography
                        </a>
                      </li>
                      <li>
                        <a href="page-title-parallax-image-background.html">
                          Parallax image background
                        </a>
                      </li>
                      <li>
                        <a href="page-title-background-breadcrumbs.html">
                          Image after breadcrumbs
                        </a>
                      </li>
                      <li>
                        <a href="page-title-gallery-background.html">
                          Gallery background
                        </a>
                      </li>
                      <li>
                        <a href="page-title-background-video.html">
                          Background video
                        </a>
                      </li>
                      <li>
                        <a href="page-title-mini-version.html">Mini version</a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                  {/* start sub menu column  */}
                  <li className="mega-menu-column col-12 col-lg-3">
                    {/* start sub menu item  */}
                    <ul>
                      <li className="dropdown-header">Gallery</li>
                      <li>
                        <a href="single-image-lightbox.html">
                          Single image lightbox
                        </a>
                      </li>
                      <li>
                        <a href="lightbox-gallery.html">Lightbox gallery</a>
                      </li>
                      <li>
                        <a href="zoom-gallery.html">Zoom gallery</a>
                      </li>
                      <li className="menu-new">
                        <a href="metro-gallery.html">metro gallery</a>
                      </li>
                      <li className="menu-new">
                        <a href="justified-gallery.html">justified gallery</a>
                      </li>
                      <li>
                        <a href="popup-with-form.html">Popup with form</a>
                      </li>
                      <li>
                        <a href="modal-popup.html">Modal popup</a>
                      </li>
                      <li>
                        <a href="open-youtube-video.html">Open youtube video</a>
                      </li>
                      <li>
                        <a href="open-vimeo-video.html">Open vimeo video</a>
                      </li>
                      <li>
                        <a href="open-google-map.html">Open google map</a>
                      </li>
                    </ul>
                    {/* end sub menu item  */}
                  </li>
                  {/* end sub menu column  */}
                </ul>
                {/* end sub menu */}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-auto pe-0">
        <div className="header-searchbar">
          <a href="#search-header" className="header-search-form">
            <i className="fas fa-search search-button" />
          </a>
          {/* search input*/}
          <form
            id="search-header"
            method="post"
            action="https://www.themezaa.com/html/pofo/search-result.html"
            name="search-header"
            className="mfp-hide search-form-result"
          >
            <div className="search-form position-relative">
              <button
                type="submit"
                className="fas fa-search close-search search-button"
              />
              <input
                type="text"
                name="search"
                className="search-input"
                placeholder="Enter your keywords..."
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </nav>
  {/* end navigation */}
  {/* end navigation */}
</header>
  )
}
