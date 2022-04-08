import { useState } from "react";
import "./App.css"


const App = () => {
  const [cuenta, setCuenta] = useState({valor:0, paso:1});

  const handleClick = (e) => {
    setCuenta({...cuenta, valor:cuenta.valor+ cuenta.paso});
  }
const handleChange = (e) =>{
  const paso =  Number (e.target.value);
  if(isNaN(paso)){
    return;
  }
  setCuenta({...cuenta, paso:paso});
};

const handleKeyDown = (e) =>{
  const value = Number(e.key);
  if(
    e.key ==="Backspace" ||
    e.key ==="Enter" ||
    e.key ==="Delete" ||
    e.key ==="ArrowLeft" ||
    e.key ==="ArrowRight" ||
    e.key ==="ArrowUp" ||
    e.key ==="ArrowDown" ||
    e.key ==="Tab"
  ){
    return;
  }

  if(isNaN(value) || e.key=== " "){
    e.preventDefault();
    return;
  }
}


  return (
    <div className="App">
      <h1>Contador</h1>
      <hr />
      <h2 className="text-center"> {cuenta.valor}</h2>
     <div className="margin-button" >
       <label>
         Paso
         <input  
         type="text" 
         style={{ width:"60px", margin:"5px"}} onChange = {handleChange} onKeyDown = {handleKeyDown} 
         />
       </label>

      <button className="btn btn-primary me-2" 
      onClick={handleClick}>+{cuenta.paso}</button>
      </div>
    </div>
  );
}

export default App; 