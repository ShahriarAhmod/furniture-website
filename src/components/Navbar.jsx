import React,{useState} from 'react'
import logo from '../images/logo.png'
import { RiCloseFill } from 'react-icons/ri'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShopping } from 'react-icons/ai'
const Navbar = () => {
  const [navbar,setNavbar]=useState(true)
  const [menu,setMenu]=useState(false)




  const StickyNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", StickyNavbar);
  return (
    <nav className={
      !navbar?'navbar':'navbar active'
    } onClick={()=>activeNav()}>
                <img src={logo} alt="" className="logo" />
                <ul className={menu?"nav-list active":"nav-list"}>
                    <li className="list-item">Home</li>
                    <li className="list-item">Shop</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Brands</li>
                    <li className="list-item">Contact Us</li>
                </ul>
                <div className="cart-item">
                    <FiSearch className="search-icon react-icons" />
                    <AiOutlineShopping className="cart-icon react-icons" />
                    
                    {
                      !menu?
                      <HiOutlineMenuAlt1 className="open-menu react-icons hidden" onClick={()=>setMenu(!menu)} />:
                    <RiCloseFill className="close-menu react-icons hidden" onClick={()=>setMenu(!menu)} />
                    }
                </div>
               

</nav>
  )
}

export default Navbar