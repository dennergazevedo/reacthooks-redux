import React from 'react';

// STYLED-COMPONENTS
import {
  Container,
  Logomarca,
  Body,
} from './styles';

// ASSETS
import logomarca from '../../assets/img/logo.png';

export default function Notfound() {
  return (
    <Container>
      <Logomarca src={logomarca} alt="Logo" />
      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>
      <span className="notFound">
        PÁGINA NÃO ENCONTRADA
      </span>
      <button type="button" className="back" onClick={() => window.location.href = '/'}>
        VOLTAR PARA PÁGINA INICIAL
      </button>
    </Container>
  );
}
