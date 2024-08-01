import { useState, useEffect } from 'react'

const ValidateForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    province: '',
    email: '',
    contact_from: '',
    area_code: '',
    phone: '',
    comment: '',
    utm_campain: window.location.href
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const boton = document.getElementsByClassName('form-input-btn')[0]
      const spin = document.getElementsByClassName('spinner_boton')[0]
      boton.setAttribute('disabled', true)
      spin.style.display = 'block'
      const myHeaders = new Headers()
      myHeaders.append('content-type', 'application/x-www-form-urlencoded')
      myHeaders.append('api-key', '$2y$10$h4lsR26IxVblvs8SnK1hY.g2SWImJDkgzHQEeJoqhKl2hJYfhYZC.')
      const contact = {}
      switch (values.contact_from) {
        case '1':
          contact.from = '10:00:00'
          contact.to = '12:00:00'
          break

        case '2':
          contact.from = '12:00:00'
          contact.to = '15:00:00'
          break

        case '3':
          contact.from = '15:00:00'
          contact.to = '19:00:00'
          break

        default:
          contact.from = '10:00:00'
          contact.to = '19:00:00'
      }
      const urlencoded = new URLSearchParams()
      urlencoded.append('nombre_apellido', values.name)
      urlencoded.append('email', values.email)
      urlencoded.append('telefono', values.area_code + values.phone)
      urlencoded.append('from', contact.from)
      urlencoded.append('to', contact.to)
      urlencoded.append('website', 2)
      urlencoded.append('provincia', values.province)
      if ((values.utm_campain).length > 35) {
        const tracking = (values.utm_campain).split('/')
        urlencoded.append('utm_campain', tracking.pop())
      }
      urlencoded.append('utm_url', values.utm_campain)
      urlencoded.append('comentario', values.comment + ' -- telefono: ' + values.area_code + values.phone + ' -- url: ' + values.utm_campain)
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }
      callback()
      /* fetch('backendurl/store?_token=$2y$10$h4lsR26IxVblvs8SnK1hY.g2SWImJDkgzHQEeJoqhKl2hJYfhYZC.', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result)).then(callback())
        .catch(error => console.log('error', error))
        */
    }
  })

  return { handleChange, values, handleSubmit, errors }
}

export default ValidateForm
