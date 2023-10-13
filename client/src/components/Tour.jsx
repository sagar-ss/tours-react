import React, { useState } from 'react'

const Tour = ({tour,handleNotInterested}) => {
    const {id,info, image, name, price} = tour;
    const [readMore , setReadMore] = useState(false)
  return (
    <div style={{width:'20vw' ,border:'.5px solid black', marginBottom:'1rem'}}>

      <img src={image} alt = {name} style={{width:'20vw'}}/>

      <h2>{name}</h2>
      <p>{readMore?info:`${info.substring(0,150)}...`}
      <button type='button' style={{color:'green', backgroundColor:'transparent', border:'none', fontWeight:'bold'}} onClick ={()=>setReadMore(!readMore)}>{readMore?'see less': 'read more'}</button>
      </p>

      <button type='button' className='btn' style={{display:'block', margin:'auto'}}  onClick={()=>handleNotInterested(id)}>not interested</button>
    </div>
  )
}

export default Tour
