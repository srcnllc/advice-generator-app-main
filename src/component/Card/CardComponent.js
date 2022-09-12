import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardComponent.css';
import icon from '../../ChallangerProject/images/pattern-divider-desktop.svg';
import buton from '../../ChallangerProject/images/icon-dice.svg'


function CardComponent() {
  const [data,setData] = useState([]);
  const [click,setClick]=useState(true)
  useEffect(()=>{
      axios.get(`https://api.adviceslip.com/advice`)
      .then(res=>{
         setData(res.data.slip)
      })
  },[click])

  return (
    <>
    <div className='card'>
      <h1>{`ADVİCE#${data.id}`}</h1>
      <p>{data.advice}</p>
      <img className='image' src={icon} alt={icon} />
      <button onClick={()=>setClick(()=>!click)}><img src={buton} alt={buton}/></button>
    </div>
   
    </>
  )
}

export default CardComponent
