import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <Navbar />
      <div
        className="h-[60vh] bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(src/assets/testimony.png)" }}
      >
        <header className="d-flex relative z-10">
          <div className="text-tertiaryColor text-3xl md:hidden open">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="text-tertiaryColor text-3xl hidden close">
            <i className="fa-solid fa-x"></i>
          </div>
        </header>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-[80%] py-28">
            <h1 className="text-5xl font-semibold text-secondColor">
              About Us
            </h1>
            <div className="flex items-center gap-2">
              <div>
                <NavLink to="/">
                  <p className="text-[16px] text-secondColor">
                    Home
                  </p>
                </NavLink>
              </div>
              <div className="text-[16px] text-secondColor flex items-center gap-2">
                <span>
                <FontAwesomeIcon
                  icon={faLessThan}
                />
                </span>
                About Us
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-10 gap-y-20 px-7 md:px-16 py-20">
        <div className="grid grid-cols-3 gap-5 md:w-[50%]">
          <img src="src\assets\one.png" alt="" />
          <img src="src\assets\two.png" alt="" />
          <img src="src\assets\three.png" alt="" />
          <img src="src\assets\four.png" alt="" />
          <img src="src\assets\five.png" alt="" />
          <img src="src\assets\six.png" alt="" />
          <img src="src\assets\seven.png" alt="" />
          <img src="src\assets\eight.png" alt="" />
          <img src="src\assets\nine.png" alt="" />
        </div>
        <div className="md:w-[50%] h-[60vh] flex flex-col justify-center">
          <h1 className="text-4xl text-pretty font-semibold">
            Traveling. Tours. Adventure.
          </h1>
          <p className="my-3 font-medium text-sm">
            Welcome to TravelSmart, your intelligent travel companion. Founded
            in 2002 by a team of passionate travelers and tech enthusiasts, were
            revolutionizing the way you explore the world. Our mission is to
            empower travelers with smart, personalized, and seamless
            experiences.
          </p>
          <h1 className="font-bold text-2xl ">Our Story</h1>
          <p className="text-sm font-medium my-3">
            TravelSmart was born out of frustration with outdated travel
            planning methods and a vision for a more intelligent, connected, and
            enjoyable travel experience. Our founders, seasoned travelers
            themselves, leveraged cutting-edge technology and industry expertise
            to create a platform that streamlines travel planning, provides
            expert recommendations, and delivers unforgettable moments.
          </p>
          <div>
              {" "}
              <button className="py-2 px-7 bg-primaryColor rounded-3xl font-bold text-secondColor">
                  <NavLink to="/trip-catalogue">View Tours</NavLink>
              </button>

          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around mx-5 md:mx-14 mb-20 ">
        <div className="md:w-[30%] rounded-tl-2xl rounded-br-2xl p-5 shadow-2xl flex items-center">
          <div>
            <h1 className="font-semibold text-xl text-center">Our Mission</h1>
            <div className="text-sm font-medium text-pretty my-3">
              <p className="px-2 font-bold mb-3">
                At TravelSmart, were dedicated to:
              </p>
              <div className="px-4">
                <li>Simplifying travel planning with innovative technology</li>
                <li className="my-2">
                  Providing personalized recommendations tailored to your
                  preferences
                </li>
                <li>Connecting travelers with authentic local experiences</li>
                <li className="mt-2">
                  Ensuring seamless bookings and hassle-free travel
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] rounded-tl-2xl rounded-br-2xl p-5 shadow-2xl flex items-center">
          <div>
            <h1 className="font-semibold text-xl text-center">Our Value</h1>
            <div className="text-sm font-medium text-pretty my-3">
              <li>
                Innovation: We continuously push the boundaries of travel
                technology
              </li>
              <li className="my-2">
                Personalization: We craft experiences tailored to your unique
                preferences
              </li>
              <li>
                Authenticity: We believe in genuine, immersive local experiences
              </li>
              <li className="mt-2">
                Simplicity: We strive for effortless travel planning and
                execution
              </li>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] rounded-tl-2xl rounded-br-2xl p-5 shadow-2xl flex items-center">
          <div>
            <h1 className="font-semibold text-xl text-center">What We Offer</h1>
            <div className="text-sm font-medium text-pretty my-3">
              <li>Expert travel guides and recommendations</li>
              <li className="my-2">
                Personalized itineraries and travel planning
              </li>
              <li>Seamless bookings and reservations</li>
              <li className="mt-2">Real-time travel updates and alerts</li>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Our Team</h1>
          <p className="text-sm text-gray-400 font-medium">
            An experienced team of people passionate about traveling
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around px-10">
          <div className="md:w-[32%] flex flex-col items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-green-500 my-4">
              <img
                src="src\assets\man.jpg"
                alt=""
                className="w-28 h-28 rounded-full bg-green-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">John Richard</h1>
              <p className="text-sm">
                <i>FOUNDER AND MANAGING DIRECTOR</i>
              </p>
              <p className="text-sm text-center my-4">
                A successful business owner, social entrepreneur, and business
                strategist, John is one of the most important persons at
                SunTravel, who founded it years ago.
              </p>
              <div className="flex gap-5 mb-4">
                <i className="text-gray-300 fa-brands fa-facebook-f"></i>
                <i className="text-gray-300 fa-brands fa-twitter"></i>
                <i className="text-gray-300 fa-brands fa-youtube"></i>
                <i className="text-gray-300 fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="md:w-[32%] flex flex-col items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-green-500 my-4">
              <img
                src="src\assets\woman.jpg"
                alt=""
                className="w-28 h-28 rounded-full bg-green-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">Mary Tessy</h1>
              <p className="text-sm">
                <i>SENIOR TRAVEL AGENT</i>
              </p>
              <p className="text-sm text-center my-4">
                Leslie started out in the travel industry straight from school,
                working for the National Union of Students Travel Service, and
                quickly learned all the aspects of business travel.
              </p>
              <div className="flex gap-5 mb-4">
                <i className="text-gray-300 fa-brands fa-facebook-f"></i>
                <i className="text-gray-300 fa-brands fa-twitter"></i>
                <i className="text-gray-300 fa-brands fa-youtube"></i>
                <i className="text-gray-300 fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="md:w-[32%] flex flex-col items-center justify-center relative">
            <div className="overLay justify-center absolute my-8 hidden">
              <button className="bg-primaryColor font-bold text-secondColor px-6 py-3 rounded-3xl text-sm">
                VIEW FULL INFO
              </button>
            </div>
            <div className="w-28 h-28 rounded-full bg-green-500 my-4">
              <img
                src="src\assets\man2.jpg"
                alt=""
                className="w-28 h-28 rounded-full bg-green-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">Kent Lawson</h1>
              <p className="text-sm">
                <i>HOSTEL AGENT</i>
              </p>
              <p className="text-sm text-center my-4">
                Kent started with SunTravel in May 2013, when he decided to
                change something in his life by entering the tour and hotel
                booking industry.
              </p>
              <div className="flex gap-5 mb-4">
                <i className="text-gray-300 fa-brands fa-facebook-f"></i>
                <i className="text-gray-300 fa-brands fa-twitter"></i>
                <i className="text-gray-300 fa-brands fa-youtube"></i>
                <i className="text-gray-300 fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
