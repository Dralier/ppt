import React, { useState } from 'react';
import styles from './Ppt.module.css';

// Los archivos de imágenes deben estar ubicados en la carpeta public/img del proyecto de React
const elementos = ['piedra.jpg','papel.jpg','tijera.jpg']

const Ppt = ()=>{
  const [lasManos, setElegidos] = useState([]); 
  const [mensajeGanador, setGanador] = useState("");   
  const jugar=(e)=>{
    const j1 = parseInt(e.currentTarget.dataset.id);
    const j2 = Math.floor(Math.random() * elementos.length); 
    const jugadores = [];
    jugadores.push(j1);
    jugadores.push(j2);  
    setElegidos(jugadores);
    if (j1 === j2){
      setGanador("Empate");         
    }
    else if((j1 === 0 && j2 === 2) || (j1 === 1 && j2 === 0) || (j1 === 2 && j2 === 1)){
      setGanador("Ganó Player 1");
    }
    else{              
        setGanador("Ganó a compu");
            
    }     
  }   
  
  // Como componente
  const Resultado = ()=>{
    if(lasManos.length !== 0){        
      return(
      <section>
      <p>Jugador 1: <img src={"img/"+elementos[lasManos[0]]} width="32" height="32" alt="Player 1"/></p>
      <p>Computadora: <img src={"img/"+elementos[lasManos[1]]} width="32" height="32" alt="Computer" /></p>
      <p>{mensajeGanador}</p>
    </section>  
    )
    }
    else{
      return null
    }
    
  }
  return(
    <main>
      <ul id="elegir">
          {elementos.map((el, i) => 
            <li key={i} data-id={i} onClick={jugar}><img src={"img/" + el} alt="" /></li>)}
      </ul>
      {<Resultado/>}   
    </main>
  )

}

export default Ppt;