import { useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import MapComponent from "./mapComponent";
import { MapPin } from "lucide-react";

const Page3 = () => {
  const [buildingName, setBuildingName] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");

  const [destination, setDestination] = useState("");
  const [destination2, setDestination2] = useState("");

  const navigate = useNavigate();

  const handleNectClick = () => {
    console.log("buildingName: ", buildingName);
    console.log("locality: ", locality);
    console.log("landmark: ", landmark);
    console.log("city: ", city);

    localStorage.setItem("buildingName", buildingName);
    localStorage.setItem("locality", locality);
    localStorage.setItem("landmark", landmark);
    localStorage.setItem("city", city);

    navigate("/page4");
  };
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header customClass="bg-[#FCF8F4]" />

      <div className="flex justify-center px-3 sm:px-10 lg:px-28 xl:px-60 items-center h-full w-full">
        <div className="container rounded-t-xl font-inter">
          {/* Form Header */}
          <div className="form-header sm:grid grid-cols-5 text-[14px] text-center h-24 sm:bg-[#FCF8F4] rounded-t-2xl font-merriweatherSans">
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 ">
                <span>PROPERTY DETAILS</span>
              </div>
              <div className="bg-slate-600 h-2"></div>
            </div>
            <div>
              <div className="flex flex-col justify-center h-full p-2 md:p-5 bg-slate-200 max-sm:rounded-t-2xl">
                <span>LOCATION DETAILS</span>
              </div>
              <div className="bg-slate-300 h-2"></div>
            </div>
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 ">
                <span>FEATURES & AMENITIES</span>
              </div>
              <div className="bg-slate-300 h-2"></div>
            </div>
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 md:px-10 sm:px-10">
                <span>PRICE DETAILS</span>
              </div>
              <div className="bg-slate-300 h-2"></div>
            </div>

            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 ">
                <span>PROPERTY IMAGES</span>
              </div>
              <div className="bg-slate-300 h-2"></div>
            </div>
          </div>

          {/* Form Body */}
          <div className="form-body p-3 sm:p-6 sm:px-11 h-96 overflow-auto">
            <div className="flex flex-col gap-10 ">
              {/* Address fields1 */}
              <div className="flex justify-between gap-10">
                {/* Building/ Society Name */}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Building / Society Name
                    <span className="text-red-500">*</span>
                  </p>
                  <div className=" text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <input
                      type="text"
                      value={buildingName}
                      placeholder="Enter Apartment name"
                      className="outline-none w-full"
                      onChange={(e) => setBuildingName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Locatily/ Area */}
                <div className="w-full flex flex-col justify-between gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Locatily / Area <span className="text-red-500">*</span>
                  </p>
                  <div className=" text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <input
                      type="text"
                      value={locality}
                      placeholder="Eg: sheetal nagar"
                      className="outline-none w-full"
                      onChange={(e) => setLocality(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Address fields2 */}
              <div className="flex justify-between gap-10">
                {/* Landmark / Street name */}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Landmark / Street name
                    <span className="text-red-500">*</span>
                  </p>
                  <div className="text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <input
                      type="text"
                      value={landmark}
                      placeholder="Prominent Landmark"
                      className="outline-none w-full"
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </div>
                </div>

                {/* City */}
                <div className="w-full flex flex-col justify-between gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    City<span className="text-red-500"> *</span>
                  </p>
                  <div className="text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <input
                      value={city}
                      type="text"
                      placeholder="Eg: Mumbai, Maharashtra"
                      className="outline-none w-full"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex flex-col gap-5 w-full">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  Mark Locality on Map
                </p>
                <div className="relative flex justify-center h-96 w-full">
                  <div className="absolute top-14 w-2/3">
                  <MapPin className="absolute left-2 top-2 "/>
                    <input
                      type="text"
                      placeholder="Search your society or nearest landmark"
                      className=" p-2 px-10 w-full"
                    />
                  </div>
                  <MapComponent destination={destination2}></MapComponent>
                </div>
              </div>
            </div>
          </div>

          <div className="form-footer flex justify-between items-center p-2 px-[7vw] sm:p-5 sm:px-16 text-white rounded-b-2xl bg-[#122b49]">
            <p className="text-[10px] sm:text-[12px] flex gap-1 items-center">
              Need Help?
              <span className="font-500 text-[12px] sm:text-[14px]">
                Call 9999999999
              </span>
            </p>
            <a
              className="cursor-pointer text-[16px] sm:text-[18px]"
              onClick={handleNectClick}
            >
              NEXT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
