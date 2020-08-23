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
`;

  
  
  function App() {

    
    return( 
    <Site>
          <Botao>Click aqui</Botao>
      </Site>

    )
  }

export default App;
