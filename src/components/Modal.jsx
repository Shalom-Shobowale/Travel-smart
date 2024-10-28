import { useRef, useState } from "react";
import Data from "../Data.json";

const Modal = () => {
  const[popup,setPopup] = useState(false)

  const openPoup = (item)=>{
    setPopup(item)
  }
  const closePopup = ()=>{
    setPopup(false)
  }
  const modalRef = useRef()
  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      setPopup(false)
    }
  }
  return (
    <div>
      <div className="relative flex justify-center">
        <div className="container grid md:grid-cols-3 gap-y-7 w-[90%] gap-6">
          {Data.map((item, index) => (
            <div key={index} className="bg-secondColor rounded-md shadow-lg">
              <img src={item.image} alt="" className="rounded-t-md w-full" />
              <div className="px-4">
                <h1 className="font-bold text-xl mt-5">{item.name}</h1>
                <div className="flex justify-between my-1">
                  <p className="font-semibold">
                    Price: <i className="fa-solid fa-naira-sign"></i>{" "}
                    {item.price}
                  </p>
                  <p className="font-semibold">Duration: {item.duration}</p>
                </div>
                <p className="font-semibold">Rating: {item.Rating}</p>
                <button onClick={()=>openPoup(item)} className="bg-primaryColor text-secondColor font-semibold text-sm p-2 rounded-md my-2">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

          {/* popup  */}
        { popup && <div ref={modalRef} onClick={closeModal} className="bg-black cursor-pointer bg-opacity-25 fixed w-full h-screen inset-0 backdrop-blur-sm z-30 "> 
          <div className="bg-secondColor md:w-[80%] rounded-md overflow-y-auto mx-auto h-[80vh] mt-16 relative">
            <div className="h-full flex md:flex-row flex-col gap-4">
              <p className="absolute p-2 text-xl top-2 right-2" onClick={closePopup}>❌</p>
              <div className="md:w-[50%] h-[100vh] bg-blue-400">
                <img src={popup.image} alt="" className="h-full object-cover" />
              </div>
              <div className="md:w-[50%] md:px-0 px-4 py-6 h-full">
                <h1 id="modal-title" className="text-2xl font-bold mb-2">{popup.name}</h1>
                <p id="modal-description" className="text-sm font-medium">{popup.sentenses1}</p>
                <h3 className="text-xl font-bold mt-5 mb-2">Location</h3>
                <p className="text-sm font-medium">{popup.sentenses2}</p>
                <h3 className="text-xl font-bold mt-5 mb-2">Accommodations</h3>
                <p className="text-sm font-medium">{popup.sentenses3}</p>
              </div>
            </div>
          </div>
          </div>}
          {/* popup  */}

    </div>
  );
};

export default Modal;
