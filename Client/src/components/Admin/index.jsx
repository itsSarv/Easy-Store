import React, { useState } from 'react'



const Admin = () => {
  const[menu, setMenu] = useState('280px')
  const[profileToggle, setProfileToggle] = useState(false)

  return (
    <div>
    <aside className='h-screen bg-[#006eff] absolute ' style={{width: menu, transition: '.4s'}}>  
    </aside>
    <section className='bg-gray-200 h-screen' style={{marginLeft: menu, transition: '.4s'}}>
      <nav className='flex justify-between items-center px-8 py-3 bg-white'>

        <button onClick={()=>menu==='280px'? setMenu('0px'): setMenu('280px')}>
        <i className="ri-menu-2-line text-2xl p-1.5 hover:bg-[#0084ff] hover:text-white rounded-lg "> </i>
        </button>
      <div>
      <img 
      className='rounded-full w-12 relative cursor-pointer'  
      src="./Images/logo.png" alt="logo" 
      onClick={()=> setProfileToggle(!profileToggle)}
      />
      {
        profileToggle &&
        <div className='top-16 right-8 absolute px-4 py-4 bg-white text-center rounded-sm shadow-lg animate__animated animate__flipInX'>
            <h1 className=' font-medium text-xl mb-2'>Easy-Store</h1>
            <p className=' font-light'>easyshop@gmail.com</p> 
            <hr className='mt-6'/>
            <button className='mt-2  hover:bg-gray-600 hover:text-white px-14 py-2 rounded-md'>
            <i className="ri-logout-circle-r-line mr-1"></i>
            Logout</button>
        </div> 
      }
      </div>
      </nav>
    </section>
    </div>
  )
}

export default Admin

