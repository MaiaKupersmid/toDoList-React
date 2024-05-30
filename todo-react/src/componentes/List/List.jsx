import Item from "../Item/Item.jsx"

function List({setItems, Items}){
    return(
        <>
            {Items.map(i=> (
                <Item
                    setItems={setItems}
                    Items={Items}
                    id= {i.id}
                    tarea={i.tarea}
                    fecha={i.fecha}
                    tachado={i.tachado} 
                />
            ))}
        </>
    )
}

export default List;
