import React from 'react'
import alimetacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import {IconeTema} from '../Components/UI'

export default (type) => {

  const Images = {
    Restaurante: <IconeTema src={alimetacao} alt="Restaurante" />,
    Utilidades:  <IconeTema src={utilidades} alt="Utilidades"  />,
    Transporte:  <IconeTema src={transporte} alt="Transportes" />,
    Saude:       <IconeTema src={saude}      alt="Saude"       />,
    default:     <IconeTema src={outros}     alt="outros"      />,
  }

  return Images[type] || Images.default
} 