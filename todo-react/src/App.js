import './App.css';
import Input from './componentes/Input/Input.jsx';
import List from './componentes/List/List.jsx';
import { useState } from "react";

function App() {
  const [Items, setItems] = useState([]);
  return (
    <>
    <List/>
      <Input setItems={setItems} items={Items} type="text" id="Input" placeholder="Tarea..."> </Input>     
      {/*<Button
        onClick="rapido()"
        class="addBtn boton2"
        text="Ver mas rapoido"
  />*/}    
    </>
  );
}

export default App;
