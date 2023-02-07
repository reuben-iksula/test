import React from "react";

function CrudFunctionalItem({ item, deleteCb, updateCb }) {
  return (
    <>
      {console.log("render child")}
      <li>
        <div>{item.value}</div>
        <button onClick={() => updateCb(item.id)}>Update</button>
        <button onClick={() => deleteCb(item.id)}>Delete</button>
      </li>
    </>
  );
}

export default CrudFunctionalItem;
