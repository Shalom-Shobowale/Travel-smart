import { NavLink } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import files from "../files.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";

function HomePageHeader() {
  const [items, setItems] = useState(files);
  const [search, setSearch] = useState("");
  const filterItems = (cartItems) => {
    const updateItems = files.filter((curItem) => {
      return curItem.Category === cartItems;
    });
    setItems(updateItems);
  };

  const [sortType, setSortType] = useState("");
  const handleSort = (type) => {
    setSortType(type);
    if (type === "price") {
      const sortedItems = files.sort((a, b) => a.price - b.price);
      setItems(sortedItems);
    } else if (type === "popularity") {
      const sortedItems = files.sort((a, b) => b.Popularity - a.Popularity);
      setItems(sortedItems);
    } else if (type === "alphabetical") {
      const sortedItems = files.sort((a, b) => a.Tour.localeCompare(b.Tour));
      setItems(sortedItems);
    }
  };
  return (
    <>
      <div
        className="h-[97vh] bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(testimony.png)" }}
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="">
            <h1 className="text-secondColor text-5xl text-center font-semibold mb-2">
              Explore the World, Effortlessly.
            </h1>
            <p className="text-secondColor text-[22px] text-sm text-center">
              Discover, Plan, and Book Your Dream Trips with Travel Smart....
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-20">
        <section className="text-center mb-10">
          <h1 className="text-3xl font-semibold">Best Offers</h1>
          <p className="text-[#8e9aaf]">Check out our top-rated tours</p>
        </section>
        <div className="Container grid md:grid-cols-3 gap-y-7 w-[90%] gap-6">
          <div className="bg-secondColor rounded-md shadow-lg">
            <div className="">
              <img
                src="CopperCanyon,Chihuahua,Mexico.jpg"
                alt=""
                className="rounded-t-md w-full"
              />
            </div>
            <div className="px-4">
              <h1 className="font-bold text-xl mt-5">Tropical Beach Resort</h1>
              <div className="flex justify-between my-1">
                <p className="font-semibold">
                  Price: <i className="fa-solid fa-naira-sign"></i> 30000
                </p>
                <p className="font-semibold">Duration: 7 days</p>
              </div>
              <p className="font-semibold">Rating: ⭐⭐⭐⭐⭐</p>
              <button className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                View Details
              </button>
            </div>
          </div>

          <div>
            <div className="bg-secondColor rounded-md shadow-lg">
              <div className="">
                <img
                  src="australia-new-south-wales-sydney-bondi-beach.jpg"
                  alt=""
                  className="rounded-t-md w-full"
                />
              </div>
              <div className="px-4">
                <h1 className="font-bold text-xl mt-5">Come icey Adventures</h1>
                <div className="flex justify-between my-1">
                  <p className="font-semibold">
                    Price: <i className="fa-solid fa-naira-sign"></i> 50000
                  </p>
                  <p className="font-semibold">Duration: 7 days</p>
                </div>
                <p className="font-semibold">Rating: ⭐⭐⭐⭐</p>
                <button className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-secondColor rounded-md shadow-lg">
            <div className="">
              <img
                src="asia-best-places-to-visit-mount-fuji-japan.jpg"
                alt=""
                className="rounded-t-md w-full"
              />
            </div>
            <div className="px-4">
              <h1 className="font-bold text-xl mt-5">
                Discover the hidden game
              </h1>
              <div className="flex justify-between my-1">
                <p className="font-semibold">
                  Price: <i className="fa-solid fa-naira-sign"></i> 50000000
                </p>
                <p className="font-semibold">Duration: 7 days</p>
              </div>
              <p className="font-semibold">Rating: ⭐⭐⭐</p>
              <button className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-secondColor rounded-md shadow-lg">
            <div className="">
              <img
                src="asia-best-places-to-visit-jaipur-india.jpg"
                alt=""
                className="rounded-t-md w-full"
              />
            </div>
            <div className="px-4">
              <h1 className="font-bold text-xl mt-5">Nature meets culture</h1>
              <div className="flex justify-between my-1">
                <p className="font-semibold">
                  Price: <i className="fa-solid fa-naira-sign"></i> 90000
                </p>
                <p className="font-semibold">Duration: 6 days</p>
              </div>
              <p className="font-semibold">Rating: ⭐⭐</p>
              <button className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-secondColor rounded-md shadow-lg">
            <div className="">
              <img
                src="cape-town-south-africa.jpg"
                alt=""
                className="rounded-t-md w-full"
              />
            </div>
            <div className="px-4">
              <h1 className="font-bold text-xl mt-5">Nature Paradise</h1>
              <div className="flex justify-between my-1">
                <p className="font-semibold">
                  Price: <i className="fa-solid fa-naira-sign"></i> 200000
                </p>
                <p className="font-semibold">Duration: 4 days</p>
              </div>
              <p className="font-semibold">Rating: ⭐</p>
              <button className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-secondColor rounded-md shadow-lg">
            <div className="">
              <img
                src="australia-victoria-melbourne.jpg"
                alt=""
                className="rounded-t-md w-full"
              />
            </div>
            <div className="px-4">
              <h1 className="font-bold text-xl mt-5">Asia Tropical</h1>
              <div className="flex justify-between my-1">
                <p className="font-semibold">
                  Price: <i className="fa-solid fa-naira-sign"></i> 40000000
                </p>
                <p className="font-semibold">Duration: 7 days</p>
              </div>
              <p className="font-semibold">Rating: ⭐⭐⭐⭐⭐</p>
              <button className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                View Details
              </button>
            </div>
          </div>
        </div>

        <NavLink to="/trip-catalogue">
          <button className="bg-primaryColor text-secondColor font-bold py-3 px-5 rounded-3xl text-sm mt-10">
            VIEW ALL TOUR
          </button>
        </NavLink>
      </div>

      <h1 className="text-center text-4xl font-semibold md:mb-10">
        All Tours For You
      </h1>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-center md:gap-y-0 gap-y-10 my-12 w-[95%]">
          <div className="md:w-[26%] rounded-md h-[110vh] md:h-[120vh] shadow-2xl flex justify-center flex-col">
            <h1 className="font-bold px-6 my-3 text-xl">Search</h1>
            <div className="flex flex-col justify-center px-6 border-b">
              <form className="grid grid-rows-3">
                <div className="flex gap-2 relative my-3">
                  <img
                    src="placeholder1.png"
                    alt=""
                    className="absolute top-3 left-3"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Destination"
                    className="bg-gray-100 py-2 px-16 md:px-10 rounded-3xl"
                  />
                </div>
                <div className="flex gap-2 relative my-3">
                  <img
                    src="placehold2.png"
                    alt=""
                    className="absolute top-3 left-3"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Activities"
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-100 py-2  px-16 md:px-10 rounded-3xl"
                  />
                </div>
                <div className="flex gap-2 relative my-3">
                  <img
                    src="placehold2.png"
                    alt=""
                    className="absolute top-3 left-3"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Tour"
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-100 py-2  px-16 md:px-10 rounded-3xl"
                  />
                </div>
              </form>
            </div>
            <div className="mx-6 py-6 border-b">
              <div className="text-justify">
                <h6 className="font-bold text-xl">Price Range</h6>
                <p className="text-sm font-medium">Choose Your Price</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-3">
                <form action="" className="w-full">
                  <input
                    type="range"
                    value={search}
                    min={0}
                    max={200000}
                    className="w-full text-bold"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <p>
                      <FontAwesomeIcon icon={faNairaSign} /> {0}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faNairaSign} /> {2000000}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center flex-col pl-6">
              <h1 className="font-bold my-6 text-xl">Categories</h1>
              <div className="font-medium">
                <div className="container">
                  <div className="font-semibold" id="tourCategories">
                    <div className="flex gap-3">
                      <input
                        type="radio"
                        name="tour"
                        id="sea-tour"
                        value="Sea Tour"
                        onClick={() => filterItems("History & Culture")}
                      />
                      <p>
                        <a href="">History & Culture (776)</a>
                      </p>
                    </div>
                    <div className="flex gap-3 my-3">
                      <input
                        type="radio"
                        name="tour"
                        id=""
                        value=""
                        onClick={() => filterItems("Luxury & Safari")}
                      />
                      <p>
                        <a href="">Luxury & Safari (156)</a>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="radio"
                        name="tour"
                        id=""
                        value=""
                        onClick={() => filterItems("Adventure & Outdoor")}
                      />
                      <p>
                        <a href="">Adventure & Outdoor (74)</a>
                      </p>
                    </div>
                    <div className="flex gap-3 my-3">
                      <input
                        type="radio"
                        name="tour"
                        id="country-tour"
                        value="Country Tour"
                        onClick={() => filterItems("Natural Wonders")}
                      />
                      <p>
                        <a href="">Natural Wonders</a>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="radio"
                        name="tour"
                        id="mountain-tour"
                        value="Mountain Tour"
                        onClick={() => filterItems("Wildlife & Safari")}
                      />
                      <p>
                        <a href="">Wildlife & Safari</a>
                      </p>
                    </div>
                    <button
                      id="searchButton"
                      className="font-bold text-sm text-secondColor bg-primaryColor px-8 py-2 rounded-3xl my-5"
                    >
                      Search
                    </button>
                  </div>
                  <div id="results"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[70%]">
            <div className="flex md:flex-row flex-col gap-7 md:items-center mb-6 mx-0 md:mx-24">
                  <p className="font-semibold text-2xl md:text-base">Sort By:</p>
                  <button
                    className={`${
                      sortType === 'price' ? 'bg-tertiaryColor' : 'bg-primaryColor'
                    } font-semibold px-5 md:py-1 py-3 rounded-3xl text-secondColor`}
                    onClick={() => handleSort('price')}
                  >
                    Price
                  </button>
                  <button
                    className={`${
                      sortType === 'popularity' ? 'bg-tertiaryColor' : 'bg-primaryColor'
                    } px-5 md:py-1 py-3 font-semibold rounded-3xl text-secondColor`}
                    onClick={() => handleSort('popularity')}
                  >
                    Popularity
                  </button>
                  <button
                    className={`${
                      sortType === 'alphabetical' ? 'bg-tertiaryColor' : 'bg-primaryColor'
                    } px-5 md:py-1 py-3 font-semibold rounded-3xl text-secondColor`}
                    onClick={() => handleSort('alphabetical')}
                  >
                    Alphabetical order
                  </button>
            </div>
            <div className=" items-center md:items-end flex flex-col mb-8">
              <div className="container grid md:grid-cols-3 gap-y-7 w-[90%] gap-8">
                {items
                  .filter(
                    (item) =>
                      search.toLowerCase() === "" ||
                      item.description
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.Tour.toLowerCase().includes(search.toLowerCase()) ||
                      item.Activities.some((activity) =>
                        activity.toLowerCase().includes(search.toLowerCase())
                      )
                  )
                  .map((item, index) => (
                    <div key={index}>
                      <div className="bg-secondColor rounded-md shadow-lg">
                        <img
                          src={item.image}
                          alt={item.description}
                          className="rounded-t-md h-40 w-full"
                        />
                        <div className="px-4 my-2 pb-5">
                          <h1 className="font-bold mt-5">{item.description}</h1>
                          <p className="font-semibold">Country: {item.Country}</p>
                          <div className="my-1">
                            <p className="font-semibold">
                              Price: <FontAwesomeIcon icon={faNairaSign} />
                              {item.price}
                            </p>
                            <p className="font-semibold">
                              Duration: {item.duration}
                            </p>
                          </div>
                          <p className="font-semibold">
                            Rating:
                            {/* Consider using a dynamic rating component instead of hardcoded stars */}
                            ⭐⭐⭐
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-5 bg-no-repeat bg-cover py-10 bg-fixed"
        style={{ backgroundImage: "url(landing.jpg)" }}
      >
        <h1 className="text-4xl font-semibold text-center mb-5 text-secondColor">
          Why SunTravel
        </h1>
        <div className="flex md:flex-row flex-wrap flex-col gap-5 justify-center items-center">
          <div className="flex items-center justify-center gap-4 bg-secondColor shadow-lg md:w-[30%] rounded-md p-4">
            <div className="bg-tertiaryColor h-12 w-12 rounded-full flex justify-center items-center">
              <img src="icon1.png" alt="" />
            </div>
            <div className="md:w-[80%]">
              <h1 className="font-bold">Personalized matching</h1>
              <p className="text-sm text-[#8e9aaf]">
                Our search system helps you find a personalized tour in just a
                few clicks.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-secondColor shadow-lg md:w-[30%] rounded-md p-4">
            <div className="bg-tertiaryColor h-12 w-12 rounded-full flex justify-center items-center">
              <img src="icon2.png" alt="" />
            </div>
            <div className="md:w-[80%]">
              <h1 className="font-bold">Personalized matching</h1>
              <p className="text-sm text-[#8e9aaf]">
                Our search system helps you find a personalized tour in just a
                few clicks.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-secondColor shadow-lg md:w-[30%] rounded-md p-4">
            <div className="bg-tertiaryColor h-12 w-12 rounded-full flex justify-center items-center">
              <img src="icon3.png" alt="" />
            </div>
            <div className="md:w-[80%]">
              <h1 className="font-bold">Personalized matching</h1>
              <p className="text-sm text-[#8e9aaf]">
                Our search system helps you find a personalized tour in just a
                few clicks.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-secondColor shadow-lg md:w-[30%] rounded-md p-4">
            <div className="bg-tertiaryColor h-12 w-12 rounded-full flex justify-center items-center">
              <img src="icon4.png" alt="" />
            </div>
            <div className="md:w-[80%]">
              <h1 className="font-bold">Personalized matching</h1>
              <p className="text-sm text-[#8e9aaf]">
                Our search system helps you find a personalized tour in just a
                few clicks.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-secondColor shadow-lg md:w-[30%] rounded-md p-4">
            <div className="bg-tertiaryColor h-12 w-12 rounded-full flex justify-center items-center">
              <img src="icon5.png" alt="" />
            </div>
            <div className="md:w-[80%]">
              <h1 className="font-bold">Personalized matching</h1>
              <p className="text-sm text-[#8e9aaf]">
                Our search system helps you find a personalized tour in just a
                few clicks.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-secondColor shadow-lg md:w-[30%] rounded-md p-4">
            <div className="bg-tertiaryColor h-12 w-12 rounded-full flex justify-center items-center">
              <img src="icon6.png" alt="" />
            </div>
            <div className="md:w-[80%]">
              <h1 className="font-bold">Personalized matching</h1>
              <p className="text-sm text-[#8e9aaf]">
                Our search system helps you find a personalized tour in just a
                few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center px-5 md:px-16 gap-5 my-10">
        <div className=" md:w-[50%] md:h-[100vh] rounded-2xl">
          <img src="antartica.jpeg" alt="" className="md:h-full rounded-2xl" />
        </div>
        <form
          action="https://formsubmit.co/523932e3b9d23c8a2ef0b4d76d9b1f5d "
          method="POST"
          className="my-10 p-6 bg-secondColor rounded-lg shadow-lg  md:w-[50%]"
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

      <Footer />
    </>
  );
}

export default HomePageHeader;
