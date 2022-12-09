import React from 'react';

const Navbar = ({ navHandler }) => {

  return (
    <div class={`flex justify-between items-center bg-white py-4 px-5 md:px-16 text-sm md:text-xl lg:text-2xl font-semibold`}>
        <button onClick={() => navHandler("home", "Home")} className='transition duration-500 hover:scale-[1.1] text-base md:text-2xl lg:text-3xl text-lime-500 font-bold'>Mike Wazowski</button>
        <div>
          <button onClick={() => navHandler("home", "Home")} className="px-3 transition duration-500 hover:scale-[1.1]">about</button>
          <button onClick={() => navHandler("projects", "Home")} className="px-3 transition duration-500 hover:scale-[1.1]">projects</button>
        </div>
        <a href='https://twitter.com/monstersinc?lang=en' target='_blank' className='flex transition duration-500 hover:scale-[1.1]'>contact</a>
    </div>
  )
}

export default Navbar;