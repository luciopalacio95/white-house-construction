import React from 'react'
import pc from '../../assets/images/mantenimiento/CB_Web_Construcción.png'
import cel from '../../assets/images/mantenimiento/CB_Web_Construcción_Movil.png'

function Mantenimiento () {
  return (
    <>
      <img src={window.innerWidth <= 960 ? cel : pc} style={{ width: '100%' }} />
    </>
  )
}

export default Mantenimiento
