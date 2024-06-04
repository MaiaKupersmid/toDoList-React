import './Input.css';

function Input({setItems, items, setRapido, masRapido}) {
    function handleSubmit(){        
        const obj = {
            id: generarIDUnico(),
            tarea: document.getElementById('tarea').value.trim(),
            fecha: Date.now(),
            tachado: false,
            tacho: ''
        }
        setItems([...items,obj]);
    }

    function generarIDUnico() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    var lista = [...items];

    function rapido(){
        let masRa = 0;
        let cual = '';

        for(let i = 0; i < lista.length; i++){
            if(masRa<lista[i].tacho){
                masRa=lista[i].tacho;
                cual = lista[i].tarea;
                setRapido(cual); 
                console.log("seteamos el rapido: ", cual)
            }
        }
    }
    
    return(
        <div class= "top" >
            <input class= "input" type="text" id="tarea" placeholder=""/>
            <button class="addBtn" onClick={handleSubmit}> submit </button>
            <button class="addBtn" onClick={rapido}>Ver mas rapido</button>
        </div>
    )
  
}

export default Input;
