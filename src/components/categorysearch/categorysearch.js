import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import './categorysearch.scss'
const CategorySearch=()=>{
    const {setCategory,category}=useGlobalContext()
    const [placeholder,setPlaceholder]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const searchTerm=e.target.elements.category.value
            setCategory(searchTerm)
            e.target.elements.category.value=''
    }
    return(
        <div className="container">
        <section className="search">
        <form onSubmit={handleSubmit}>
    
        <select placeholder="Select a category" name="category" className="input">
            <option value="" disabled selected hidden >Select a category</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="general">General</option>
        </select>
        <button>Search</button>
        </form>
        </section>
        </div>
    )
}

export default CategorySearch