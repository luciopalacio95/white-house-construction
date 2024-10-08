import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'

import sl1 from '/assets/images/sliders/slider-1.png'
import slm1 from '/assets/images/sliders/slider-mobile-1.png'
import sl2 from '/assets/images/sliders/slider-2.png'
import slm2 from '/assets/images/sliders/slider-mobile-2.png'
import sl3 from '/assets/images/sliders/slider-3.png'
import slm3 from '/assets/images/sliders/slider-mobile-3.png'

function Slider () {
  return (
    <>
      <Carousel
        showArrows={false}
        emulateTouch
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        swipeable={false} 
        useKeyboardArrows
        margin={0}
        padding={0}
        autoPlay
        interval={5000}
        transitionTime={800}
      >
        <div>
          <picture>
            <source media='(max-width: 600px)' srcSet={slm1} />
            <img src={sl1} alt='slider 1' />
          </picture>
          <div className='slider-redes'>
            <Link
              to='contact'
              spy
              smooth
              offset={-90}
              duration={600}
            >
              <button className='slider-button' id='info-1'>Más info +</button>
            </Link>
            <div className='slider-icon-redes'>
              <a
                href='https://www.instagram.com/'
                target='_blank' rel='noreferrer'
              > <FaInstagram className='slider-fa-icon' />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank' rel='noreferrer'
              > <FaFacebookSquare className='slider-fa-icon' />
              </a>
              <a
                href='https://api.whatsapp.com/.'
                target='_blank' rel='noreferrer'
              > <FaWhatsapp className='slider-fa-icon' />
              </a>
            </div>
          </div>
        </div>

        <div>
          <picture>
            <source media='(max-width: 600px)' srcSet={slm2} />
            <img src={sl2} alt='slider 2' />
          </picture>
          <div className='slider-redes'>
            <Link
              to='contact'
              spy
              smooth
              offset={-90}
              duration={600}
            >
              <button className='slider-button' id='info-2'>Más info +</button>
            </Link>
            <div className='slider-icon-redes'>
              <a
                href='https://www.instagram.com/'
                target='_blank' rel='noreferrer'
              > <FaInstagram className='slider-fa-icon' />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank' rel='noreferrer'
              > <FaFacebookSquare className='slider-fa-icon' />
              </a>
              <a
                href='https://api.whatsapp.com/.'
                target='_blank' rel='noreferrer'
              > <FaWhatsapp className='slider-fa-icon' />
              </a>
            </div>
          </div>
        </div>

        <div>
          <picture>
            <source media='(max-width: 600px)' srcSet={slm3} />
            <img src={sl3} alt='slider 3' />
          </picture>
          <div className='slider-redes'>
            <Link
              to='contact'
              spy
              smooth
              offset={-90}
              duration={600}
            >
              <button className='slider-button' id='info-3'>Más info +</button>
            </Link>
            <div className='slider-icon-redes'>
              <a
                href='https://www.instagram.com/'
                target='_blank' rel='noreferrer'
              > <FaInstagram className='slider-fa-icon' />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank' rel='noreferrer'
              > <FaFacebookSquare className='slider-fa-icon' />
              </a>
              <a
                href='https://api.whatsapp.com/.'
                target='_blank' rel='noreferrer'
              > <FaWhatsapp className='slider-fa-icon' />
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default Slider
