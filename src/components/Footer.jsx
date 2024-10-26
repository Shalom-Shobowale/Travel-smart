import { faFacebookF, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-tertiaryColor flex flex-col md:flex-row gap-6 px-10 py-10">
      <div className="md:w-[30%] text-secondColor">
        <div>
          <div className="font-bold text-3xl mb-5">
            <i>
              Travel<span className="text-primaryColor">Smart</span>
            </i>
          </div>
        </div>
        <div>
          <p className="">
            Since 2002, we have been offering travel services of the highest
            quality, combining our energy and enthusiasm.
          </p>
        </div>
      </div>
      <div className="md:w-[30%] text-secondColor">
        <h1 className="font-bold text-xl text-white my-3">Contact Us</h1>
        <p>
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-location-dot"></i>
            <h1>07,Command,Lagos State.</h1>
          </div>
        </p>
        <p className="">
          <div className="flex gap-3 items-center my-2">
            <i className="fa-solid fa-envelope"></i>
            <h1>shalom@gmail.com</h1>
          </div>
        </p>
        <p>
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-phone"></i>
            <h1>+2349038186039</h1>
          </div>
        </p>
        <p>
          <div className="flex gap-3 mt-2">
            <i className="fa-solid fa-clock"></i>
            <h1>Mon-Sat 7:00am - 7:00pm</h1>
          </div>
        </p>
      </div>
      <div className="md:w-[20%] text-secondColor">
        <h1 className="font-bold text-xl">Site map</h1>
        <div>
        <li className="font-semibold my-3"><NavLink to="/">Home</NavLink></li>
                    <li className="font-semibold my-3"><NavLink to="/about">About</NavLink></li>
                    <li className="font-semibold my-3">
                    <NavLink to="/tour">Tour Review</NavLink>
                    </li>
                    <li className="font-semibold my-3"> <NavLink to="/trip-catalogue">Trip Catalogue</NavLink></li>
                    <li className="font-semibold my-3"><NavLink to="/contact">Contact</NavLink></li>
        </div>
      </div>
      <div className="md:w-[20%] text-secondColor">
        <h1 className="font-bold">Follow Us</h1>
        <div className="flex gap-5 my-5">
          <div className="bg-gray-400 w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="bg-gray-400 w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="bg-gray-400 w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className="bg-gray-400 w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <button className="bg-primaryColor py-2 px-5 text-secondColor font-medium rounded-2xl">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Footer;
