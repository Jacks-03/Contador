import { useState } from "react";
import "./App.css";

const App = () => {
  const [valor, setValor] = useState(0);
  const handleClick = (v) => {
    // console.log(v)
    setValor(v+1);
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <hr />
      <h2 className="text-center"> {valor}</h2>
     <div className="margin-button" >
      <button className="btn btn-primary me-2" onClick={ ()=> handleClick (valor) }>+1</button>
      </div>
    </div>
  );
}
export default App;
