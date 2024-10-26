import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 flex flex-col md:flex-row md:justify-between justify-center md:items-center h-20 px-8 w-full fixed top-0 ${
        isSticky
          ? "w-full bg-white duration-300 ease-in-out"
          : "text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <div className="font-bold text-3xl">
            <h1 className="italic">
            Travel<span className="text-primaryColor">Smart</span>
            </h1>
          </div>
        </NavLink>

        <p className="md:hidden text-3xl cursor-pointer flex text-bgBody" onClick={()=> setIsOpen((open) => !open)}>{isOpen ? <i className="fa-solid fa-x"></i>: <i className="fa-solid fa-bars"></i>}</p>
      </div>
      <ul
        className={`md:flex gap-5 w-full py-5 md:py-0 absolute md:top-7 md:justify-end md:w-[94%] top-20 md:left-8 left-0 ${
          isOpen ? "block duration-300 ease-in text-center bg-black text-secondColor w-full" : "hidden"
        }  font-bold`} 
      >
        <li className="mb-5 md:mb-0  hover:text-primaryColor md:hover:border-b-2 md:hover:border-primaryColor">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mb-5 md:mb-0 hover:text-primaryColor md:hover:border-b-2 md:hover:border-primaryColor">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="mb-5 md:mb-0 hover:text-primaryColor md:hover:border-b-2 md:hover:border-primaryColor">
          <NavLink to="/tour">Tour Review</NavLink>
        </li>
        <li className="mb-5 md:mb-0 hover:text-primaryColor md:hover:border-b-2 md:md:hover:border-primaryColor">
          <NavLink to="/trip-catalogue">Trip Catalogue</NavLink>
        </li>
        <li className="mb-5 md:mb-0 hover:text-primaryColor md:hover:border-b-2 md:hover:border-primaryColor">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;