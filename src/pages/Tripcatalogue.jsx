import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import files from "../files.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";
export default function Tripcatalogue() {
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
    <div>
      <div
        className="h-[60vh] bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(testimony.png)" }}
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-[80%] py-28">
            <h1 className="text-5xl font-semibold text-secondColor">
              Trip Categories
            </h1>
            <div className="flex items-center gap-2 mt-4">
              <div>
                <NavLink to="/">
                  <p className="text-[16px] text-secondColor">Home</p>
                </NavLink>
              </div>
              <div className="text-[16px] text-secondColor flex items-center gap-2">
                <span>
                  <FontAwesomeIcon icon={faLessThan} />
                </span>{" "}
                Trip Categories
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-center md:gap-y-0 gap-y-10 my-12 w-[95%]">
          <div className="md:w-[26%] rounded-md h-[90vh] md:h-[100vh] shadow-2xl flex justify-center flex-col">
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
                        <a href="">History & Culture </a>
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
                        <a href="">Luxury & Safari</a>
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
                        <a href="">Adventure & Outdoor</a>
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
              <div className="container grid md:grid-cols-3 gap-y-7 w-[92%] gap-8 md:overflow-y-scroll md:h-[120vh]">
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
      <Footer />
    </div>
  );
}
