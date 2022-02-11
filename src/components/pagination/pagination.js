import React from "react";
import {FcPrevious,FcNext} from 'react-icons/fc' 
import { useGlobalContext } from "../../context";
import './pagination.scss'
const Pagination=()=>{
    const {currentPage,totalPages,nextPage,prevPage}=useGlobalContext()
    return(
        <section className="pagination">
        <p>Page {currentPage} of {totalPages}</p>
        <div className="buttons">
        {currentPage>1 && <button onClick={prevPage}><FcPrevious/></button>}
        {currentPage<totalPages && <button onClick={nextPage}><FcNext/></button>}
        </div>
        </section>
    )
}

export default Pagination