import React, { useState } from 'react'
import GroceryInput from './GroceryInput'
import {v4 as uuid} from 'uuid'
import GroceryList from './GroceryList';
import styles from './Grocery.module.css'


const Grocery = () => {
    const [item,setItem] = useState([]); 

    const handleAdd =(title)=>{
        const payload ={
            title,
            id:uuid(),
        }

        const newItem = [...item,payload]
        setItem(newItem)
    }

    const handleDelete = (id) =>{
        const updatedList = item.filter((item) => item.id !== id)
        setItem(updatedList)
    }
  return (
    <div className={styles.container}>
        <h1>Grocery List</h1>
        <GroceryInput handleAdd={handleAdd}/>
        {
            item.map((item)=>
               ( <GroceryList item={item.title} id={item.id} handleDelete={handleDelete}/>)
            )
        }
    </div>
  )
}

export default Grocery