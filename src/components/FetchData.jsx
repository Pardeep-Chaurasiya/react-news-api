import React, { useEffect,useState } from 'react'
import axios from 'axios'

const FetchData = ({cat}) => {

  const [data, setData] = useState("")

  const fetchData = async()=>{
    await axios.get(
      cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=dc84187e4d7449f1b47e02e2b2e6489f`
      :
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=dc84187e4d7449f1b47e02e2b2e6489f")
    .then(res => setData(res.data.articles))
  }
  useEffect(()=>{
    fetchData();
  },[cat])
  return (
    <div className='container my-5'>
      <h3 ><u>TOP HEADINGS</u></h3>
      <div className="my-3 container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight: "100vh"}}>{data ? 
      data.map((item,index)=>(
        <>
          <div 
            className="container my-3 p-3" 
            style={{width: "600px", boxShadow: "2px 2px 10px silver"}} 
            key={index}
            >
            <h5 className='my-1'>{item.title}</h5>
            
            <div className="d-flex justify-content-center align-items-center">
              <img src={item.urlToImage} alt="Image not found" className='img-fluid' style={{width : "100%", height : "300px", objectFit:"cover" }} />
            </div>
            
            <p className='my-1'>{item.content}</p>

            <a href={item.url} target='blank'>View More</a>
          </div>
        </>
      )) 
      
      : "loading ..."}</div>
    </div>
  )
}

export default FetchData