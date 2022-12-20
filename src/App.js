import './App.css';
import logo from './images/logo.png'
import Boton from './components/Boton';
import Pantalla from './components/pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import './styles/Boton.css';
import './styles/Pantalla.css';

function App() {

  const[input, SetInput] = useState('');

  const agregarInput = (val) => {
    SetInput(input + val);
  }

  const calcularResultado = () => {
    if (input){
    SetInput(evaluate(input));
    }
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo'
          alt='Logo de Bgsoft'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarclic={agregarInput}>1</Boton>
          <Boton manejarclic={agregarInput}>2</Boton>
          <Boton manejarclic={agregarInput}>3</Boton>
          <Boton manejarclic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclic={agregarInput}>4</Boton>
          <Boton manejarclic={agregarInput}>5</Boton>
          <Boton manejarclic={agregarInput}>6</Boton>
          <Boton manejarclic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclic={agregarInput}>7</Boton>
          <Boton manejarclic={agregarInput}>8</Boton>
          <Boton manejarclic={agregarInput}>9</Boton>
          <Boton manejarclic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclic={calcularResultado}>=</Boton>
          <Boton manejarclic={agregarInput}>0</Boton>
          <Boton manejarclic={agregarInput}>.</Boton>
          <Boton manejarclic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => SetInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
