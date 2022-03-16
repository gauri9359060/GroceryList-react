import React, { useState } from "react";
import styles from './Grocery.module.css'

const GroceryInput = ({ handleAdd }) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        placeholder="Add Grocery Item"
        onChange={(e) => setTitle(e.currentTarget.value)}
        value={title}
        className={styles.inputBox}
      />
      <button onClick={()=>{handleAdd(title);setTitle("");}} className={styles.addBtn}>Add</button>
    </div>
  );
};

export default GroceryInput;
