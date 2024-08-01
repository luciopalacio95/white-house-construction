import React, { useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImPhone } from 'react-icons/im'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Form from '../../Form/Form'
import FormSuccess from '../../Form/FormSuccess'
import { Link } from 'react-scroll'
import logo from '/assets/images/logo.png'
import './Footer.css'

function Footer () {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm () {
    setIsSubmitted(true)
  }

  return (
    <div className='footer-container' id='contact'>
      <div className='footer-links'>
        <div className='footer-link-wrapper1'>
          <div className='footer-link-items'>
            {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
            {/* <FormSuccess/> */}
          </div>
        </div>
        <div className='footer-link-wrapper2'>
          <div className='footer-link-items'>
            <h2>Contacto</h2>
            <a href='tel:' target='_blank' rel='noreferrer'>
              <ImPhone className='footer_icon_social' /> 0800-888-0123
            </a>
            <a
              href='https://api.whatsapp.com/'
              target='_blank' rel='noreferrer'
            >
              <IoLogoWhatsapp className='footer_icon_social' /> 11-58566771
            </a>
            <a href='https://www.google.com/maps/place/Villa+Carlos+Paz,+C%C3%B3rdoba/@-31.4121866,-64.5821384,12z/data=!3m1!4b1!4m6!3m5!1s0x942d6640d6777c71:0x75c24ab6cb121bed!8m2!3d-31.4207828!4d-64.4992141!16zL20vMGNoc3Bt?entry=ttu' target='_blank'><FaMapMarkerAlt className='footer_icon_social' /> Ficticia - Calle 27,<br /> Villa Carlos Paz, Córdoba</a>
            <a className='ubi-exception' href='https://www.google.com/maps/place/Buenos+Aires,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.615427,-58.7451462,11z/data=!3m1!4b1!4m6!3m5!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591!16zL20vMDFseTVt?entry=ttu' target='_blank'><FaMapMarkerAlt className='footer_icon_social' /> Ficticia - Calle 72,<br /> Buenos Aires, Buenos Aires</a>
          </div>
          <div className='footer-link-items'>
            <h2>Horarios</h2>
            <label className='label__direc'>Buenos Aires</label>
            <p>
              <b>Lunes a Domingo</b>
              08:00 - 18:00 hs.
            </p>
            <label className='label__direc'>Córdoba</label>

            <p>
              <b>Lunes a Viernes</b>
              08:00 - 18:00 hs.
            </p>
            <p>
              <b>Sábado</b>
              08:00 - 12:00 hs.
            </p>
            {window.innerWidth >= 767 && (
              <Link
                className='footer-logo-link'
                to='home'
                spy
                smooth
                offset={-180}
                duration={600}
              >
                <img
                  src={logo}
                  className={`footer-logo-icon ${isSubmitted && 'active'}`}
                  alt=''
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
