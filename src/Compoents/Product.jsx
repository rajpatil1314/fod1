import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router';


  const Product = () => {
    const [data,setdata]= useState([ ]);
    const [page,setpage]= useState(1)

   const fetchdata = () =>{
     fetch(`http://localhost:3000/products`)
     .then((res)=>res.json())
     .then((data)=>setdata(data))
     .catch ((err) => console.log(err));
   } ; 
    
    
   useEffect(()=>
  {
    fetchdata();

  },[data])
  const Handelete=(id) =>

  {

  fetch(`http://localhost:3000/products/${id}`,{
    method:"Delete"

  })
  .then(res=>res.json())
  .then(data=>alert('delete successs..'))

  }
  

    return (
      <div>
      <h1>
          product
      </h1>
      <div className='product'>
       {data.map((el)=>(
        
       
    <div key={el.id}>
    <Link to={`/description/${el.id}`}>

    <div>{el.id}</div>

    <img src={el.image} alt="" style={{height:200,width:200}}/>
    <h2>{el.title}</h2>
    <h4>{el.description}</h4>
    <h5>{el.category}</h5>
    </Link>
    <h2>{el.price}</h2>
    <button  onClick={()=>Handelete(el.id)}>delete</button><br />
    <Link to={`/edit/${el.id}`}>
    <button>update</button></Link>
    </div>
  )
  
  )}</div>
  <br /><br /><br />
  <button onClick={()=>setpage(page+1)}>next</button>
  {page}
  <button onClick={()=>setpage(page-1)}>prev</button>
        
      </div>
    )
  }

export default Product