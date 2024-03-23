import { useContext } from "react";
import MyContext from "../context/MyContext";

const Stepper = () => {

const step = 1;

  return (
    <div className='stepper flex'>
     <h2 className={step == 1 ? 'active' : ''}></h2>
    </div>
  )
}

export default Stepper