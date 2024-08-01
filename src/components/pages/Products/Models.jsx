import React from 'react'
import './Models.css'
import CardItem from './ModelItem'
import { productos } from '../../../constants'

function Models () {
  return (
    <div className='cards' id='models'>
      <h1 className='title__models'>Nuestros modelos</h1>
      <div className='cards__container'>
        {productos.map((item, index) => (
          <CardItem
            key={index}
            src={item.src}
            text=''
            label={item.title}
            path=''
            camas={index}
            duchas={index}
            metros_cubierto={index * 30}
            metros_semicubierto={index * 20}
            entrega={index * 55100}
            cuotas={index * index}
            plantas={2}
            contenedor={item.srcSet}
          />))}
      </div>
    </div>
  )
}

export default Models
