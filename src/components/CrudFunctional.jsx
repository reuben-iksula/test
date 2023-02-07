import React, { useEffect, useState } from "react";
import CrudFunctionalItem from "./CrudFunctionalItem";

function CrudFunctional() {
  //   const [id, setId] = useState(-1);
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     console.log("useEffect");
  //     setId((prevId) => prevId + 1);
  //   }, [items]);

  const addItem = () => {
    console.log("add");
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const updateItem = (id) => {
    console.log("update");
    const itemToUpdate = items.find((item) => {
      return item.id === id;
    });
    console.log(itemToUpdate);
    // let newItem = { id, value: Math.floor(Math.random() * 10) + 1 };
    setItems(
      items.map((item) => {
        if (item === itemToUpdate) {
          item.value = Math.floor(Math.random() * 10) + 1;
        }
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    console.log("delete");
    let filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <>
      {console.log("render parent")}
      <div>CrudFunctional</div>
      <button onClick={addItem}>Add</button>

      <div>
        <ul>
          {items.map((item) => {
            return (
              <CrudFunctionalItem
                key={item.id}
                item={item}
                deleteCb={deleteItem}
                updateCb={updateItem}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CrudFunctional;
