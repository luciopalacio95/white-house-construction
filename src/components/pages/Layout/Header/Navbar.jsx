import React, { useState, useEffect } from 'react'
import { BsList, BsX } from 'react-icons/bs'
import { Link } from 'react-scroll'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import logo from '/assets/images/logo.png'

function NavBar () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navbar, setNavBar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  const changeBackground = () => {
    if (window.scrollY >= 0.1) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <IconContext.Provider value={{ color: '#ff7f32' }}>
        <div className={`navbar ${navbar && 'active'}`}>
          <div className='navbar-container container'>
            <Link
              className='navbar-logo'
              to='home'
              spy
              smooth
              offset={-180}
              duration={600}
              onClick={closeMobileMenu}
            >
              <img
                src={logo}
                className='navbar-logo-icon'
                alt=''
              />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <BsX /> : <BsList />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='models'
                  spy
                  smooth
                  offset={-90}
                  duration={600}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Modelos
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='contact'
                  spy
                  smooth
                  offset={-40}
                  duration={600}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
