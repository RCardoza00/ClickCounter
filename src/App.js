import './App.css';
import logo from './img/freecodecamp-logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react'

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
    
    
  }
  const reiniciarContador = () => {
      setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logo}
          alt='Logo'/>
        
      </div>
      <div className='contenedor-contador'>
        <Contador numClicks={numClicks} />
          <Boton
           texto="Click" 
           esBotonDeClick={true} 
           manejarClick={manejarClick}/>
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={reiniciarContador}/>
      </div>
     
    </div>
  );
}

export default App;
