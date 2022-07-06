import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from '../Extrato';
import styled from 'styled-components'

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${ ({theme}) => theme.text };

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const ContainerWrapper  = styled.div `
  background-color: ${ ({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`

const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá valter !</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo >
    </ContainerWrapper>
  )
}

export default Container;
