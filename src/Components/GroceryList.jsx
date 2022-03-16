import React from 'react'
import styles from './Grocery.module.css'

const GroceryList = ({item,id,handleDelete}) => {
  return (
    <div className={styles.list}>
        <span>{item}</span>
        <button className={styles.delBtn} onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default GroceryList