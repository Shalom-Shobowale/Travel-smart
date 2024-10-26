import { NavLink } from "react-router-dom";
function Site (){

    return(
        <>

        <div className="h-[60vh] mb-8" style={{backgroundImage:URL("/image/Alamein faHotel.jpg")}}>
            <div className="w-[80%] py-28">
                <h1 className="text-5xl font-semibold text-secondColor">
                    About Us
                </h1>
            </div>
        </div>
            <section className="px-20 my-16">
                <ul className="list-square">
                    <li className="text-2xl font-semibold my-3"><NavLink to="/">Home</NavLink></li>
                    <li className="text-2xl font-semibold my-3"><NavLink to="/about">About</NavLink></li>
                    <li className="text-2xl font-semibold my-3">
                    <NavLink to="/tour">Tour Review</NavLink>
                    </li>
                    <li className="text-2xl font-semibold my-3"> <NavLink to="/trip-catalogue">Trip Catalogue</NavLink></li>
                    <li className="text-2xl font-semibold my-3"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </section>
        </>
    );
}
export default Site;