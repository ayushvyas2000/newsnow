import React from "react";
import { useGlobalContext } from "../../context";
import NewsItem from "./singlenews";
import './newslist.scss'
const NewsList=()=>{
    const {list,loading,currentPosts,category}=useGlobalContext()
    if(loading){
        return(
            <main className="center container">
            <h1>Loading News...</h1>
            </main>
        )
    }
    if (list.length<1) {
       return(
        <main className="center container">
        <h1>No news to show</h1>
        </main>
       ) 
    }
    return(
        
        <main className="center container">
        {category && <h2 className="description">Displaying the latest news in {category}</h2>}
        {
        currentPosts.map((item,index)=>{
        return(
            <NewsItem key={index} {...item} />
        )
        })
        }
        </main>
    )
}

export default NewsList