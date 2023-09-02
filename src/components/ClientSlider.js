import React from 'react'

export default function ClientSlider() {
  return (
    <section className="wow animate__fadeIn">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 position-relative">
          <div
            className="swiper-container text-center black-move wow animate__fadeIn"
            data-slider-options='{ "slidesPerView": "1", "loop":false, "allowTouchMove":true, "autoplay": { "delay": 3000, "disableOnInteraction": false}, "keyboard": { "enabled": true, "onlyInViewport": true }, "navigation": { "nextEl": ".swiper-button-next-1", "prevEl": ".swiper-button-prev-1" }, "pagination": { "el": ".swiper-pagination-1", "clickable": true }, "breakpoints": { "1200":{ "slidesPerView":"4" }, "992": { "slidesPerView":"3" }, "768": { "slidesPerView":"3" } } }'
          >
            <div className="swiper-wrapper">
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.envato.com/">
                  <img src="images/logo-1.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.woocommerce.com/">
                  <img src="images/logo-2.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.wordpress.com/">
                  <img src="images/logo-3.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.magento.com/">
                  <img src="images/logo-4.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.sass-lang.com/">
                  <img src="images/logo-5.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.pingdom.com/">
                  <img src="images/logo-6.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.lesscss.org/">
                  <img src="images/logo-7.png" alt="" />
                </a>
              </div>
              {/* end slide */}
              {/* start slide */}
              <div className="swiper-slide">
                <a href="https://www.jquery.com/">
                  <img src="images/logo-8.png" alt="" />
                </a>
              </div>
              {/* end slide */}
            </div>
            {/* <div class="swiper-pagination"></div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
