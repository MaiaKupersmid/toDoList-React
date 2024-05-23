import './App.css';
import Input from './componentes/Input/Input.jsx';
import Button from './componentes/Button/Button.jsx';
import Div from './componentes/Div/Div.jsx';

function App() {
  return (
    <>
    <Div>
      <Input type="text" id="Input" placeholder="Tarea..."> </Input>
      <Button onclick="AgregarItem()" class="addBtn">Agregar tarea</Button>      
      <Button
        onclick="rapido()"
        class="addBtn boton2"
        text="Ver mas rapoido"
      />
    </Div>
    </>
  );
}

export default App;
