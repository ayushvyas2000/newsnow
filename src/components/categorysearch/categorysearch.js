import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import './categorysearch.scss'
const CategorySearch=()=>{
    const {setCategory,category}=useGlobalContext()
    const [placeholder,setPlaceholder]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const searchTerm=e.target.elements.category.value.trim()
        if (searchTerm==='') {
            setPlaceholder('Enter a valid category')
        }
        else{
            setCategory(searchTerm)
            e.target.elements.category.value=''
            setPlaceholder('Search by category')
        }
        
    }
    return(
        <div className="container">
        <section className="search">
        <form onSubmit={handleSubmit}>
        <input className="input" autoFocus placeholder={placeholder}
        type="text" name="category" />
        <button>Search</button>
        </form>
        </section>
        </div>
    )
}

export default CategorySearch