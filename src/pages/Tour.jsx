import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

export default function Tour() {
  return (
    <div>
      <div
        className="h-[60vh] bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(src/assets/testimony.png)" }}
      >
        <header className="d-flex relative z-10">
          <Navbar />
          {/* <nav class="w-[90%] p-5 border-b-2 scroll-nav">
            <div class="flex justify-between items-center">
              <div>
                <div class="font-bold text-3xl">
                  <i>
                    Travel<span class="text-primaryColor">Smart</span>
                  </i>
                </div>
              </div>
              <div class="hidden menu absolute bg-tertiaryColor md:bg-inherit md:min-h-fit min-h-[40vh] left-0 top-[105%] w-full md:static md:flex items-center justify-center md:w-auto p-10 md:p-0 z-10">
                <ul class="flex-col md:flex-row flex gap-7 font-bold text-secondColor">
                  <li>
                    <a
                      href="index.html"
                      class="hover:text-primaryColor hover:border-b-4 hover:border-primaryColor text-primaryColor"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="About.html"
                      class="scroll-nav hover:text-primaryColor hover:border-b-4 hover:border-primaryColor"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="Trip.html"
                      class="scroll-nav hover:text-primaryColor hover:border-b-4 hover:border-primaryColor"
                    >
                      Trip Catalogue
                    </a>
                  </li>
                  <li>
                    <a
                      href="tour.html"
                      class="scroll-nav hover:text-primaryColor hover:border-b-4 hover:border-primaryColor text-primaryColor"
                    >
                      Tour Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="contact.html"
                      class="scroll-nav hover:text-primaryColor hover:border-b-4 hover:border-primaryColor"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
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
              Tour Review
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
                </span>
                Tour Review
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center px-10 gap-5 my-10">
        <div className=" md:w-[50%] md:h-[100vh] rounded-s-full">
          <img
            src="src\assets\feed-back.jpg"
            alt=""
            className="h-full rounded-md"
          />
        </div>
        <form
          action="https://formsubmit.co/523932e3b9d23c8a2ef0b4d76d9b1f5d "
          method="POST"
          className="md:my-10 p-6 bg-secondColor rounded-lg shadow-lg md:w-[50%]"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            We Value Your Feedback!
          </h2>

          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-semibold text-gray-700"
            >
              How would you rate your overall experience?
            </label>
            <select
              id="experience"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              required
            >
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="features"
              className="block text-sm font-semibold text-gray-700"
            >
              What features did you find most useful?
            </label>
            <textarea
              id="features"
              name="Message"
              rows="3"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Share your thoughts..."
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="suggestions"
              className="block text-sm font-semibold text-gray-700"
            >
              What improvements would you suggest?
            </label>
            <textarea
              id="suggestions"
              name="improvements"
              rows="3"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Your suggestions..."
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="comments"
              className="block text-sm font-semibold text-gray-700"
            >
              Any additional comments?
            </label>
            <textarea
              id="comments"
              name="Addition Comment"
              rows="3"
              className="mt-1 block w-full p-2 border border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Let us know..."
              required
            ></textarea>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white font-semibold py-2 rounded-md hover:bg-primaryColor transition duration-200"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-12 md:p-10 gap-5">
        <div className="md:col-span-6 col-span-12 justify-center bg-slate-200 shadow-slate-300 rounded-3xl  bg-center bg-no-repeat bg-cover ">
          <div className="h-32 w-full flex justify-center items-center  ">
            <div className="h-28 w-28  rounded-full ">
              <img
                src="src\assets\man2.jpg"
                alt=""
                className="h-28 w-28 rounded-full"
              />
            </div>
          </div>
          <div className="h-52 w-full">
            <h1 className="uppercase items-center flex text-center justify-center m-5 font-semibold ">
              jammes smith
            </h1>
            <p className="items-center flex text-center justify-center font-medium">
              I love the variety they offer. The land is my favorite, but
              everything Ive tried has been amazing.
            </p>
            <div className="flex justify-center items-center  ">
              <button
                className="bg-primaryColor text-secondColor font-semibold h-10 w-32  rounded-2xl m-10"
                id="card"
              >
                view full info{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="bg-white p-6 rounded-lg  shadow-md">
            <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
            <div className="flex mb-4">
              <span
                className="cursor-pointer text-gray-400 hover:text-primaryColor"
                data-value="1"
              >
                &#9733;
              </span>
              <span
                className="cursor-pointer text-gray-400 hover:text-primaryColor"
                data-value="2"
              >
                &#9733;
              </span>
              <span
                className="cursor-pointer text-gray-400 hover:text-primaryColor"
                data-value="3"
              >
                &#9733;
              </span>
              <span
                className="cursor-pointer text-gray-400 hover:text-primaryColor"
                data-value="4"
              >
                &#9733;
              </span>
              <span
                className="cursor-pointer text-gray-400 hover:text-primaryColor"
                data-value="5"
              >
                &#9733;
              </span>
            </div>
            <textarea
              id="reviewText"
              placeholder="Write your review..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
            ></textarea>
            <p id="ratingMessage" className="mt-2 text-gray-600"></p>
            <button
              id="submitReview"
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
              Submit Review
            </button>

            <h3 className="mt-6 text-lg font-semibold">Reviews:</h3>
            <div id="reviews" className="mt-2 space-y-2"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}