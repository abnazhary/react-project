import React from 'react'

export default function Contact() {
  return <>
  
  <section className='contact-section py-5'>
  <h1 className='fw-bold text-center mb-5'>CONATCT SECTION</h1>

  <div className='w-50 m-auto'>
  <form action="">
    <input type="text" placeholder='User Name' className='w-100 form-control form-control-lg mb-3 ' />
    <input type="Number" placeholder='User Age' className='w-100 form-control form-control-lg mb-3 ' />
    <input type="Email" placeholder='User Email' className='w-100 form-control form-control-lg mb-3' />
    <input type="password" placeholder='User Password' className='w-100 form-control form-control-lg mb-3' />
    <button className='btn send text-white'>Send</button>
  </form>
 
  </div>
  </section>
  
  
  </>
}
