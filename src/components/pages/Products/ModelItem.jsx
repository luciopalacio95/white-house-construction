// iconos casa
import { useState } from 'react'
import cama from '../../../assets/images/iconos/cama.svg'
import ducha from '../../../assets/images/iconos/ducha.svg'
import metro from '../../../assets/images/iconos/metros.svg'
import GaleryImage from '../GaleryImage'

function CardItem (props) {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false)

  const numberFormat = (number, decimals, decPoint, thousandsSep) => {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
    const n = !isFinite(+number) ? 0 : +number
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
    let s = ''
    const toFixedFix = function (n, prec) {
      const k = Math.pow(10, prec)
      return '' + Math.round(n * k) / k
    }
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || ''
      s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
  }

  const calcTotal = (metros_cubierto, metros_semicubierto) => {
    return parseFloat(metros_cubierto) + parseFloat(metros_semicubierto)
  }
  const handleImage = () => {
    console.log('handleImage')
    setAdvancedExampleOpen(true)
  }
  return (
    <>
      <li className='cards__item'>
        <GaleryImage
          advancedExampleOpen={advancedExampleOpen}
          setAdvancedExampleOpen={setAdvancedExampleOpen}
          advancedSlides={props.contenedor}
        />
        <div>

          <button className='cards__item__pic-wrap' type='button' onClick={handleImage}>
            <span className='badge'>{'Modelo ' + props.label}</span>
            <img src={props.src} alt='image' />
          </button>
          <div className='cards__item__info'>
            <div className='card__basic__data'>
              <div className='cards__item__data'>
                <img src={cama} alt='Cama' className='cards__item__data__icon' /><p className='cards__item__data__text'>{props.camas} Dormitorios</p>
              </div>
              <div className='cards__item__data'>
                <img src={ducha} alt='Ducha' className='cards__item__data__icon' /><p className='cards__item__data__text'>{props.duchas} Baños</p>
              </div>
              <div className='cards__item__data'>
                <img src={metro} alt='Metros' className='cards__item__data__icon' /><p className='cards__item__data__text'>{calcTotal(props.metros_cubierto, props.metros_semicubierto)} m<sup>2</sup></p>
              </div>
            </div>
            <hr className='cards__item__line' />
            <div className='cards__item__prince'>
              {/* <h5 className="cards__item__text">${numberFormat(precio,0, ",", ".")}</h5> */}
              <div className='cards__item__info__prince'>
                <h6 className='cards__item__entrega'>Entrega de <strong>$ {numberFormat(props.entrega, 0, ',', '.')}</strong></h6>
                {/* <h5 className="cards__item__cuotas">+{props.cuotas} CUOTAS <strong>${ numberFormat(precio_cuota,0, ",", ".")}</strong></h5> */}
                <h5 className='cards__item__cuotas'>+ CUOTAS</h5>
              </div>
              <div className='content__button__mas'>
                <button type='button' onClick={handleImage}>Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default CardItem
