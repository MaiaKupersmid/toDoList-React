import React, { useState } from "react";

function Item(props) {
    const [isChecked, setIsChecked] = useState(props.tachado);

    var lista = [...props.items];
    return (
        <>
            <div class="header">
                <input type="checkbox" checked={isChecked} onClick={() => handleCheckboxChange(props.id)} id={props.id}/>
                <label> {props.tarea} {formatDate(new Date(props.fecha))}</label> <br />
            </div>
            <p></p>
        </>
    );

    function formatDate(date) {
        return (
            date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "      " + date.getHours() + ":" + date.getMinutes()
        );
    }

    function handleCheckboxChange(id) {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id === id) {
                lista[i].tacho = new Date().getTime();
                lista[i].tachado = !lista[i].tachado;
                setIsChecked(lista[i].tachado); 
            }
        }
    }
}

export default Item;
