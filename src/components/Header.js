import React, { useRef } from 'react'

export default function Header() {

  const reload = ()=>{
    window.location.href = '#';
    collapseMenu();
  }

  const toggleMenu = useRef(0);
  const collapseMenu = ()=>{
    toggleMenu.current.click();
  }

  return (
    <header  >
  {/* topbar */}
  {/* <div className="top-header-area bg-black padding-10px-tb">
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
  </div> */}
  {/* end topbar */}
  {/* start navigation */}
  <nav className="navbar navbar-default bootsnav navbar-top header-light-transparent background-transparent navbar-expand-lg">
    <div className="container-lg nav-header-container" >
      {/* start logo */}
      <div className="col-auto ps-0">
        <a href='#' onClick={reload} title="AVR Productions" >
          <img
            src="images/logo.png"
            data-at2x="images/logo@2x.png"
            className="logo-dark default"
            alt="AVR Productions"
            style={{width:'auto',height:'50px',margin:'20px', marginLeft:'0'}}
          />
        </a>
      </div>
      {/* end logo */}
      <div className="col accordion-menu pe-0 pe-md-3">
        <button
          ref={toggleMenu}
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
            <li className="dropdown megamenu-fw ">
              <a href='#' onClick={reload}>Home</a>
            </li>
            <li className="dropdown megamenu-fw ">
              <a href="#about" onClick={collapseMenu}>About</a>
            </li>
            <li className="dropdown megamenu-fw ">
              <a href="#manifesto" onClick={collapseMenu}>Our Manifesto</a>
            </li>
            <li className="dropdown megamenu-fw ">
              <a href="#services" onClick={collapseMenu}>Services</a>
            </li>
            <li className="dropdown megamenu-fw ">
              <a href="#contact" onClick={collapseMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col-auto pe-0">
        <div className="header-searchbar">
          <a href="#search-header" className="header-search-form">
            <i className="fas fa-search search-button" />
          </a>
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
      </div> */}
    </div>
  </nav>
  {/* end navigation */}
  {/* end navigation */}
</header>
  )
}
