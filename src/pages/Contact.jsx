import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faClock, faEnvelope, faLessThan, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
      <div
        className="h-[60vh] bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(src/assets/testimony.png)" }}
      >
        <header className="d-flex relative z-10">
          <Navbar />
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
              Contact Us
            </h1>
            <div className="flex items-center gap-2">
              <div>
                <a href="index.html" className="text-[16px] text-secondColor">
                  Home
                </a>
              </div>
              <div className="text-[16px] text-secondColor flex items-center gap-2">
                <span>
                <FontAwesomeIcon
                  icon={faLessThan}
                />
                </span>{" "}
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-14">
        <div className="flex md:flex-row flex-col justify-center gap-14 w-[85%] py-16">
          <div className="flex flex-col gap-5 items-center">
            <div className="h-14 w-14 rounded-full flex justify-center items-center bg-orange-200">
              <a href="#map">
                <FontAwesomeIcon icon={faLocation} className="text-2xl text-primaryColor"/>
              </a>
            </div>
            <h1 className="text-touch">
              <a href="">
                <span className="font-bold">Address:</span>{" "}
                4,Peace,Command,Lagos state.
              </a>
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-5 items-center">
            <div className="h-14 w-14 rounded-full flex justify-center items-center bg-orange-200">
              <a href="tel:+234-903-818-6039">
                <FontAwesomeIcon icon={faPhone} className="text-2xl  text-primaryColor"/>
              </a>
            </div>
            <h1 className="text-touch">
              <a href="tel:+234-903-818-6039">
                <span className="font-bold">Phone no:</span> 09038186039
              </a>
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="h-14 w-14 rounded-full flex justify-center items-center bg-orange-200">
              <a href="mailto:shalomshobowale65@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl  text-primaryColor"/>
              </a>
            </div>
            <h1 className="text-touch">
              <a href="mailto:shalomshobowale65@gmail.com">
                <span className="font-bold">Name:</span> Shalom Shobowale
              </a>
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="h-14 w-14 rounded-full flex justify-center items-center bg-orange-200  text-primaryColor">
                <FontAwesomeIcon icon={faClock} className="text-2xl"/>
            </div>
            <h1 className="text-touch">
              <span className="font-bold">Time:</span> 8am - 8pm
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5 mb-14">
        <div className="md:w-[85%] flex md:flex-row flex-col gap-6">
          <form className="bg-bgColor md:px-8 rounded-sm shadow-md w-[100%] md:w-[65%] flex items-center justify-center">
            <div>
              <h1 className="mb-5 text-4xl font-semibold">Get In touch</h1>
              <div className="flex md:flex-row flex-col gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="md:w-64 border-b border-2 focus:outline-none focus:ring-0 p-3"
                />
                <input
                  type="tel"
                  name="number"
                  id="number "
                  placeholder="Number"
                  className=" md:w-64 border-b border-2 focus:outline-none focus:ring-0 p-2"
                />
              </div>
              <div className="flex flex-col my-3">
                <input
                  type="email"
                  name="email"
                  id="main"
                  placeholder="E-mail"
                  className="mb-4 border-b border-2 focus:outline-none focus:ring-0 p-3"
                />
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="Massages"
                  className="focus:outline-none border-b border-2 focus:ring-0 p-3"
                ></textarea>
              </div>
              <button className="bg-primaryColor py-3 px-10 rounded-sm text-secondColor font-semibold mb-3">
                Send Message
              </button>
              <p className="text-primaryColor hover:underline hover:text-red-600">
                <a href="">Do you have a query?</a>
              </p>
            </div>
          </form>
          <div className="md:w-[35%]">
            <div className="h-[70vh] bg-green-400">
              <img
                src="src\assets\asia-best-places-to-visit-dead-sea-israel-city.jpg"
                alt=""
                className="h-[70vh]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center mb-14" id="map">
        <div className="w-[85%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4982302592857!2d3.2353293739951714!3d6.708883693286827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b995b41b7dd6d%3A0xb6c08985374e0e09!2sAptech%20Computer%20Education%20-Sango%20Ota!5e0!3m2!1sen!2sng!4v1726526524523!5m2!1sen!2sng"
            style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[65vh]"
          ></iframe>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}