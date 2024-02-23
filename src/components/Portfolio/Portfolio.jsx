
import React, {useState} from 'react'


export default function Portfolio() {
  const [data , setData] = useState([
    {img:"./poert1.png" , id:"img1"},
    {img:"./poert1.png" , id:"img2"},
    {img:"./poert1.png" , id:"img3"},
    {img:"./poert1.png" , id:"img4"},
    {img:"./poert1.png" , id:"img5"},
    {img:"./poert1.png" , id:"img6"},
    
  
  ]
  
  )
  return <>
  <section className='porfolio-section py-5 text-center'>
  <h1 className='fw-bold mb-5'>PORTFOLIO COMPONENT</h1>

  <div className="container">
    <div className="row g-4">
      {data.map((item)=> <>
      <div className='col-md-4'>
        <div className='portfolio-item'>
        <img src={item.img} alt="" className='w-100 rounded-3' />
        <div className='plus'>
          <i className='fa-solid fa-plus'></i>
        </div>
        </div>
      </div>
      </>)}

      {data.map((item)=> <>
      
      
      </>)}
    </div>
  </div>
  </section>
  
  
  
  
  
  
  
  
  </>
}
