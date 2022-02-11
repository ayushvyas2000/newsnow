import React from "react";
import thumbnail from './default.jpg'
const NewsItem=({author,content,description,title,url,urlToImage,publishedAt})=>{
return(
    <article className="news-container">
        <div className="img">
        <img className="thumbnail" src={`${urlToImage?urlToImage:thumbnail}`} alt="" />
        </div>
        <h3 className="title">{title}</h3>
        {author && <h4 className="author">By  {author}</h4>}
        <h5 className="description">{description}</h5>
        <p className="content">{content}</p>
        <a target="_blank" href={url}>Read More</a>
        <p className="published">Published on: {publishedAt}</p>
    </article>
)
}

export default NewsItem