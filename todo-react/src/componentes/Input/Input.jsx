import './Input.css';

function Input({setItems, Items}) {
    function handleSubmit(){        
        const obj = {
            id: generarIDUnico(),
            tarea: document.getElementById('tarea').value.trim(),
            fecha: Date.now(),
            tachado: false
            }

            setItems([...Items,obj]);
    }

    function generarIDUnico() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    return(
        <>
            <input type="text" id="tarea" placeholder=""/>
            <button onClick={handleSubmit}> </button>
        </>
    )
    
}

export default Input;
