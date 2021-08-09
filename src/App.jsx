import React, { useEffect, useState } from 'react';

import  './App.css';
import _ from "lodash";

const options = ["piedra.PNG", "papel.PNG", "tijera.PNG"];


function App() {
  const [P1, setP1] = useState(null);
  const [P2, setP2] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    calcularResultado();
  }, [P2])

  function play(event){
    setP1(parseInt(event.currentTarget.dataset.id));
    setP2(_.random(0, 2));
  }
  function calcularResultado(){
    if(P1 == null || P2 == null) return;

    debugger;
    if (P1 === P2){
      setWinner(-1);      
    }
    else if((P1 === 0 && P2 === 2) || (P1 === 1 && P2 === 0) || (P1 === 2 && P2 === 1)){
      setWinner(1);
    }
    else{              
      setWinner(2);
            
    }
  }

  function reset(){
    setP1(null);
    setP2(null);
    setWinner(null);
  }

  return <div className="main">
    {
      winner == null ? 
      <div>
        <h1>Elegí una Opción</h1>
        <ul className="options">
          {
            options.map((elem, i) => <li key={elem} data-id={i} onClick={play}><img src={"/img/" + elem} alt="" /></li>)
          }
        </ul>
      </div> 
      : 
      <div className="result">
        <h1>El jugador 1 Eligio {options[P1].substr(0, options[P1].length - 4)} <img src={"/img/" + options[P1]} alt="" /></h1>
        <h1>El jugador 2 Eligio {options[P2].substr(0, options[P2].length - 4)} <img src={"/img/" + options[P2]} alt="" /></h1>
        <h1 >{winner === -1 ? 'Empate' : (winner === 1 ? 'Gano el Jugador 1':  "Gano la PC")} </h1>
        <button onClick={reset}>Jugar de nuevo</button>
        
      </div>
    }
  </div>
}

export default App;
