import React from 'react';

function Avatar(props){

      return(
        <div> 

            <img src={props.url} alt={props.name} />
            <br/>
            <span> {props.name} </span>

        </div>
      );
  
  }
  
  
  function App() {

    let user = {
      url:"https://www.google.com.br/google.jpg",
      name:"Fernando Trindade"
    };

    return <>
      <Avatar url={user.url} name={user.name} />     
    </>;
      
  }



/*
function BemVindo(props){

return <h1>Olá, {props.nome}! {props.idade} anos.</h1>;
}


function App() {
  return <>
  
  <BemVindo nome="Fernando" idade="90" />
  <BemVindo nome="Pedro" idade="70"/>
  <BemVindo nome="Paulo" idade="80"/> 
  
  </>;
    
}
*/

export default App;
