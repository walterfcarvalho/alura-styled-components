import React from 'react'
import {extratoLista} from '../../info'
import { Botao } from '../../Components/UI'


import {Box} from '../../Components/UI'
import Itens from '../Itens'

const Extrato = () => {

  return <Box>

    { extratoLista.updates.map( ({id, type, from, value, date}) => (

      <Itens  
        key={id} type={type} from={from} value={value} date={date}
      />

    ))}
    <Botao>Ver Mais</Botao>
  </Box>

}

export default Extrato