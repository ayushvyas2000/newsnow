import React,{createContext,useContext, useEffect, useState} from "react";
import axios from "axios";
const url='https://current-news.p.rapidapi.com/news/'
const AppContext=createContext()

const AppProvider=({children})=>{
    const [loading,setLoading]=useState(true)
    const [category,setCategory]=useState('')
    const [list,setList]=useState([])
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(3)
    const fetchData=()=>{
        const options = {
            method: 'GET',
            url:`${url}${category}`,
            headers: {
              'x-rapidapi-host': 'current-news.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
          };
          setLoading(true)
          axios.request(options).then(function (response) {
            const {news}=response.data;
            setList(news)
            setLoading(false)
          }).catch(function (error) {
            setLoading(false)
            console.error(error);
          });
    }
    useEffect(()=>{
        setCurrentPage(1)
        setLoading(true)
        fetchData()
    },[category])
    useEffect(()=>{
      window.scrollTo(0, 0)
    },[currentPage])
    const indexOfLastPost=currentPage * postsPerPage
    const indexOfFirstPost=indexOfLastPost - postsPerPage
    const currentPosts=list.slice(indexOfFirstPost,indexOfLastPost)
    const totalPages=Math.ceil(list.length/postsPerPage)
    const nextPage=()=>{
      setCurrentPage(currentPage+1)
    }
    const prevPage=()=>{
      setCurrentPage(currentPage-1)
    }
    return(
        <AppContext.Provider value={{
            loading,
            list,
            setCategory,
            currentPosts,
            currentPage,
            nextPage,
            prevPage,
            totalPages,
            category
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
export { AppContext, AppProvider }