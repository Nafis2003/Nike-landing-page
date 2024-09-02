import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {icons8Close} from "../assets/icons"
import { navLinks } from '../constants'
import { useState } from "react";
const Nav = () => {
  const [show,setShow]= useState(false);
  const HandleClick=()=>{
    setShow(!show)
  }

  return (
    <>
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/"><img src={headerLogo} alt="Logo" width={130} height={29}/></a>
            <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=><li key={item.label}><a href={item.href}>{item.label}</a></li>
                )}
            </ul>
            <div className='hidden max-lg:block' onClick={HandleClick}>
                <img src={show==false?hamburger:icons8Close} alt="Menu" width={25} height={25}/>
            </div>

        </nav>
    </header>

    { show && <div className='bg-white mt-[94px] absolute z-20 w-full h-auto py-8 shadow-sm'> 
              <ul className='flex flex-col justify-center items-center gap-8 lg:hidden'>
                {navLinks.map((item)=><li className=' text-xl font-medium' key={item.label}><a href={item.href}>{item.label}</a></li>
                )}
              </ul>

    </div>}
    </>

  )
}

export default Nav;