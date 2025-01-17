import React from 'react'
import ThemeOn from '../../assets/images/themeOff.svg'
import ThemeOff from '../../assets/images/themeOn.svg'
import { Icone } from '../../Components/UI'

const claro = <Icone src={ThemeOn} alt= "Tema Claro"/>
const escuro = <Icone src={ThemeOff} alt= "Tema escuro"/>

export default  ({tema}) => (tema ? escuro: claro)
  