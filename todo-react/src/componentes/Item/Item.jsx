function Item(props) {
  
    return(
        <>
        <div class="cita">
            <p>tarea: <span>{props.mascota}</span></p>
            <p>fecha: <span>{props.dueño}</span></p>
            {/*<Button onClick={() => eliminar(props.id, props.citas, props.setCitas)}
              class="button elimnar u-full-width"
              text= "Eliminar x"
            />
            */}
          </div>
        </>
    )
}

export default Item;