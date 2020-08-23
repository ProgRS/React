import React from 'react';
import styled from 'styled-components';
//import './App.css';
const Site = styled.div`
width:440px;
height:400px;
background-color: #00FF00;



`;
const Botao = styled.button`
font-sizen:19px;  
padding:10px;
background-color: ${props => props.color || "#00FF00"};
`;

  
  
  function App() {

    
    return( 
    <Site>
          <Botao color="#FF0000">Click aqui</Botao>
          <Botao color="#0000FF">Click aqui</Botao>
          <Botao>Click aqui</Botao>
      </Site>

    );
  }

export default App;
