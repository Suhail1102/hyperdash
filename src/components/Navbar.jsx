import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from '../assets/PrimaryLogo.png'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <nav className="h-[97.5px] text-white " style={{padding:"1rem 4rem" , backgroundColor:"#1A1A1A"}} >
      <div className="w-full mx-auto flex justify-between items-center h-full">
        {/* Left Nav Links */}
        <ul className="hidden md:flex gap-14 items-center">
          <li className="hover:text-gray-400 cursor-pointer">Air X</li>
          <li className="hover:text-gray-400 cursor-pointer">Lexo Z</li>
          <li className="hover:text-gray-400 cursor-pointer">Gravity 9</li>
        </ul>

        {/* Logo */}
        <div className="">
         <img className="h-full w-full" src={Logo} alt="HyperDash Logo" />
        </div>

        {/* Right Nav Links */}
        <ul className="hidden md:flex gap-14 items-center ">
          <li className="hover:text-gray-400 cursor-pointer">Shop</li>
          <li className="hover:text-gray-400 cursor-pointer">Account</li>
          <li> <Bars3Icon className="h-8 w-8 text-white" /></li>
        </ul>

        {/* Mobile Menu Button */}
     
      </div>
    </nav>
</>

  )
}

export default Navbar