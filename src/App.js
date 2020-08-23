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
border:3px solid #FF0000;
color:#FF0000;
background-color:#FFF;
margin:5px;
border-radius:5px;
`;
 const BotaoPequeno = styled(Botao)`
 
   
 padding:5px 10px;
 font-size:16px;

 `;
  
  
  function App() {

    
    return( 
    <Site>
          <Botao >Click aqui</Botao>
          <BotaoPequeno >Click aqui</BotaoPequeno>
         
      </Site>

    );
  }

export default App;
