import './App.css';
import Input from './componentes/Input/Input.jsx';
import List from './componentes/List/List.jsx';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [masRapido, setRapido] = useState(null);
  return (
    <>
    <Input setItems={setItems} items={items} setRapido={setRapido} masRapido={masRapido} type="text" id="Input" placeholder="Tarea..."> </Input>     
    <List setItems={setItems} items={items}/>
    <p>El mas rapido fue: {masRapido}</p>
  </>
  );
}

export default App;
