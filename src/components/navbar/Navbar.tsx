import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuLinks = document.querySelector('ul');
  const toggleMenu = () => {
    if(menuLinks?.classList.contains('hidden')) {
      menuLinks.classList.remove('hidden');
      setMenuActive(true)
    } else {
      menuLinks?.classList.add('hidden');
      setMenuActive(false)
    }
  }

  return (
    <div className="container px-8 py-4 flex justify-center content-center relative lg:justify-between w-4/5 h-10">
      <div>
        <h3 className=' py-1 px-2 border border-l-sky-600 border-r-sky-600 border-t-black border-b-black'>DR Design</h3>
      </div>
      <div className=' pr-12 absolute right-6'>
        <div onClick={toggleMenu} className="container rounded-2xl bg-sky-700 p-2 w-8 h-8 flex justify-center content-center ">
          { !menuActive === false ? <AiOutlineClose /> : <AiOutlineMenu />} 
        </div>
      </div>
      <ul className=' mr-5 z-50 bg-sky-700 p-3 mt-11 hidden h-max absolute right-0'>
        <li className='my-3 pr-2'><a href="#">Home</a></li>
        <li className='my-3 pr-2'><a href="#">About</a></li>
        <li className='my-3 pr-2'><a href="#">Stack</a></li>
        <li className='my-3 pr-2'><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;