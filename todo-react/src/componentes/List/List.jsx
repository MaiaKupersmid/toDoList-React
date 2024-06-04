import Item from "../Item/Item.jsx";
import './List.css';

function List({ setItems, items }) {
    console.log(items);
    return (
        <>
            {items.map((i) => (
                <Item
                    key={i.id}
                    setItems={setItems}
                    items={items}
                    id={i.id}
                    tarea={i.tarea}
                    fecha={i.fecha}
                    tacho={i.tacho}
                    tachado={i.tachado}
                />
            ))}
        </>
    );
}

export default List;
