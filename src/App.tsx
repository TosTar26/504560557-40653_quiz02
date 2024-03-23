import { useEffect, useState } from 'react'
import './App.css'
import MyContext from './context/MyContext'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'

function App() {

  const [step, setStep] = useState(1);

  const [products] = useState([
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ]);

  const cambiarValorSuma = () => {
    if (step < products.length) {
      setStep(step + 1);
    }
  };

  const cambiarValorResta = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  
  return (
    <>
      <h1>504560557 - Quiz 02</h1>
      <h3>{
      step }</h3>
       <Stepper/>
       <Content/>
      <div className='flex'>
        <button type="button" onClick={cambiarValorResta}>Prev</button>
        <button type="button" onClick={cambiarValorSuma}>Next</button>
      </div>
    </>
  )
}


export default App
