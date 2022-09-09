import React from "react";
import "./grc.css";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, EditItem }) => {
  return (
    <>
      <div className="groceary-list">
        {items.map((item) => {
          const { id, title } = item;
          return (
            <div className="item-container" key={id}>
              {title}

              <div className="icon">
                <button className="edit" onClick={() => EditItem(id)}>
                  <FaEdit className="edit" />
                </button>
                <button className="delet" onClick={() => removeItem(id)}>
                  <FaTrash className="trash" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
