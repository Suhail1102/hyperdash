import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <nav className="h-24 text-white " style={{padding:"1rem 4rem" , backgroundColor:"#1A1A1A"}} >
      <div className="w-full mx-auto flex justify-between items-center h-full">
        {/* Left Nav Links */}
        <ul className="hidden md:flex gap-10">
          <li className="hover:text-gray-400 cursor-pointer">Air X</li>
          <li className="hover:text-gray-400 cursor-pointer">Lexo Z</li>
          <li className="hover:text-gray-400 cursor-pointer">Gravity 9</li>
        </ul>

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-yellow-400 italic">Hype</span>
          <span className="italic">Dash</span>
        </div>

        {/* Right Nav Links */}
        <ul className="hidden md:flex gap-10">
          <li className="hover:text-gray-400 cursor-pointer">Shop</li>
          <li className="hover:text-gray-400 cursor-pointer">Account</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="h-8 w-8 text-white" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-900 p-4 rounded-lg">
          <ul className="space-y-4">
            <li className="hover:text-gray-400 cursor-pointer">Air X</li>
            <li className="hover:text-gray-400 cursor-pointer">Lexo Z</li>
            <li className="hover:text-gray-400 cursor-pointer">Gravity 9</li>
            <li className="hover:text-gray-400 cursor-pointer">Shop</li>
            <li className="hover:text-gray-400 cursor-pointer">Account</li>
          </ul>
        </div>
      )}
    </nav>
</>

  )
}

export default Navbar