import React from 'react';
import styles from './Search.module.scss';



const Search = ({setSearch}) => {
  return (
    <div className={styles.searchContainer}>
    <form className={styles.form}>
        <input 
        onChange={e=>{
          setSearch(e.target.value)
        }}
        placeholder='Search for characters' type='text' className={styles.input}/>
        <button onClick={e=>e.preventDefault()} className={`${styles.btn} btn btn-s fs-5`}>Search</button>
    </form>
    </div>
  )
}

export default Search
