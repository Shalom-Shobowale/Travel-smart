import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
      className={`z-10 flex flex-col md:flex-row justify-between md:items-center h-20 px-8 w-11/12 fixed top-0 left-1/2 -translate-x-1/2 mx-auto ${
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
        <FontAwesomeIcon
          icon={faBars}
          className={`md:hidden`}
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>
      <ul
        className={`md:flex gap-5 ${
          isOpen ? "block gap-y-20 duration-300 ease-in text-center bg-black text-secondColor w-full" : "hidden"
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