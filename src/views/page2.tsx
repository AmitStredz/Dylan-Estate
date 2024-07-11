import React, { useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [propertyFor, setPropertyFor] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [propertySubType, setPropertySubType] = useState<string>("");
  const [builtArea, setBuiltArea] = useState<string>("");
  const [carpetArea, setCarpetArea] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [totalFloor, setTotalFloor] = useState<string>("");
  const [facing, setFacing] = useState<string>("");
  const [propertyAge, setPropertyAge] = useState<string>("");
  const [bhkType, setbhkType] = useState<string>("");
  const [bathroom, setBathroom] = useState<string>("");
  const [balcony, setBalcony] = useState<string>("");
  const [tenantPreference, setTenantPreference] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log("PropertyFor: ", propertyFor);
    console.log("PropertyFor: ", propertyType);
    console.log("PropertyFor: ", propertySubType);
    console.log("PropertyFor: ", builtArea);
    console.log("PropertyFor: ", carpetArea);
    console.log("PropertyFor: ", floor);
    console.log("PropertyFor: ", totalFloor);
    console.log("PropertyFor: ", facing);
    console.log("PropertyFor: ", propertyAge);
    console.log("PropertyFor: ", bhkType);
    console.log("PropertyFor: ", bathroom);
    console.log("PropertyFor: ", balcony);
    console.log("PropertyFor: ", tenantPreference);
    console.log("PropertyFor: ", availability);
    console.log("PropertyFor: ", description);


    localStorage.setItem("propertyFor", propertyFor);
    localStorage.setItem("propertyType", propertyType);
    localStorage.setItem("propertySubType", propertySubType);
    localStorage.setItem("builtArea", builtArea);
    localStorage.setItem("carpetArea", carpetArea);
    localStorage.setItem("floor", floor);
    localStorage.setItem("totalFloor", totalFloor);
    localStorage.setItem("facing", facing);
    localStorage.setItem("propertyAge", propertyAge);
    localStorage.setItem("bhkType", bhkType);
    localStorage.setItem("bathroom", bathroom);
    localStorage.setItem("balcony", balcony);
    localStorage.setItem("tenantPreference", tenantPreference);
    localStorage.setItem("availability", availability);
    localStorage.setItem("description", description);

    navigate('/page3')
  };

  // const getButtonClasses = (isSelected: boolean) =>
  //   `p-2 sm:px-4 border rounded-full ${
  //     isSelected
  //       ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
  //       : "bg-white text-black"
  //   }`;

  // const handleResidentialOptionToggle = (option: string) => {
  //   setResidentialOptions((prev) =>
  //     prev.includes(option)
  //       ? prev.filter((item) => item !== option)
  //       : [...prev, option]
  //   );
  // };

  // const handleCommercialOptionToggle = (option: string) => {
  //   setCommercialOptions((prev) =>
  //     prev.includes(option)
  //       ? prev.filter((item) => item !== option)
  //       : [...prev, option]
  //   );
  // };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header customClass="bg-[#FCF8F4]" />

      <div className="flex justify-center px-3 sm:px-10 lg:px-28 xl:px-60 items-center h-full w-full">
        <div className="container rounded-t-xl font-inter">
          {/* Form Header */}
          <div className="form-header sm:grid grid-cols-5 text-[14px] text-center h-24 sm:bg-[#FCF8F4] rounded-t-2xl font-merriweatherSans">
            <div>
              <div className="flex flex-col justify-center h-full p-2 md:p-5  bg-slate-200 max-sm:rounded-t-2xl rounded-tl-2xl">
                <span>PROPERTY DETAILS</span>
              </div>
              <div className="bg-slate-300 h-2"></div>
            </div>
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5">
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
              {/* Property For */}
              <div className="property-for flex flex-col gap-2">
                <p className="font-500 text-[16px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Property For :
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 items-center text-[14px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <input
                      type="radio"
                      name="property-for"
                      value="rent"
                      className="size-5 sm:size-6"
                      onChange={()=> setPropertyFor("Rent")}
                    />
                    Rent
                  </label>
                  <label className="items-center flex gap-3">
                    <input
                      type="radio"
                      name="property-for"
                      value="sale"
                      className="size-5 sm:size-6"
                      onChange={()=> setPropertyFor("Sale")}

                    />
                    Sale
                  </label>
                </div>
              </div>

              {/* Property Type */}
              <div className="property-type flex flex-col gap-2">
                <p className="font-500 text-[16px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Property Type :
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 items-center text-[14px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <input
                      type="radio"
                      name="property-type"
                      className="size-5 sm:size-6"
                      checked={propertyType === "Residential"}
                      onChange={() => setPropertyType("Residential")}
                    />
                    Residential
                  </label>
                  <label className="items-center flex gap-3">
                    <input
                      type="radio"
                      name="property-type"
                      className="size-5 sm:size-6"
                      checked={propertyType === "Commercial"}
                      onChange={() => setPropertyType("Commercial")}
                    />
                    Commercial
                  </label>
                  <label className="items-center flex gap-3">
                    <input
                      type="radio"
                      name="property-type"
                      className="size-5 sm:size-6"
                      checked={propertyType === "Land / Plot"}
                      onChange={() => {
                        setPropertyType("Land / Plot");
                        setPropertySubType("");
                      }}
                    />
                    Land / Plot
                  </label>
                </div>
              </div>

              {/* Residential Options */}
              {propertyType === "Residential" && (
                <div className="residential-options flex gap-4 text-[12px] sm:text-[14px] -mt-8">
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Flat / Apartment"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Flat / Apartment")}
                  >
                    Flat / Apartment
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "House / Villa"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("House / Villa")}
                  >
                    House / Villa
                  </button>
                </div>
              )}

              {/* Commercial Options */}
              {propertyType === "Commercial" && (
                <div className="commercial-options flex gap-4 flex-wrap text-[12px] sm:text-[14px] -mt-8">
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Office Space"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Office Space")}
                  >
                    Office Space
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Co working"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Co working")}
                  >
                    Co working
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Restaurant / Cafe"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Restaurant / Cafe")}
                  >
                    Restaurant / Cafe
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Shop / Showroom"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Shop / Showroom")}
                  >
                    Shop / Showroom
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Industrial Bldg."
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Industrial Bldg.")}
                  >
                    Industrial Bldg.
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Industrial Shed"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Industrial Shed")}
                  >
                    Industrial Shed
                  </button>
                  <button
                    className={`p-2 sm:px-4 border rounded-full ${
                      propertySubType == "Warehouse/Godown"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setPropertySubType("Warehouse/Godown")}
                  >
                    Warehouse/Godown
                  </button>
                </div>
              )}

              {/* Area inputs */}
              <div className="flex justify-between gap-5 sm:gap-10">
                {/* Built Area */}
                <div className="w-full">
                  <p className="font-500 text-[16px] sm:text-[18px]">
                    Built up Area <span className="text-red-500"> *</span>
                  </p>
                  <div className="relative text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <input
                      type="number"
                      value={builtArea}
                      placeholder="0"
                      className="outline-none w-full"
                      onChange={(e) => setBuiltArea(e.target.value)}
                    />
                    <label className="absolute right-5">Sq. Ft.</label>
                  </div>
                </div>

                {/* Carpet Area */}
                <div className="w-full">
                  <p className="font-500 text-[16px] sm:text-[18px]">
                    Carpet Area <span className="text-red-500"> *</span>
                  </p>
                  <div className="relative text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <input
                      type="number"
                      value={carpetArea}
                      placeholder="0"
                      className="outline-none w-full"
                      onChange={(e) => setCarpetArea(e.target.value)}
                    />
                    <label className="absolute right-5">Sq. Ft.</label>
                  </div>
                </div>
              </div>

              {/* Property details */}
              <div className="flex flex-col sm:flex-row gap-10 w-full">
                <div className="flex gap-5 w-full">
                  {/* Property on Floor */}
                  <div className="w-full">
                    <p className="font-500 text-[16px] sm:text-[18px]">
                      Property on Floor <span className="text-red-500"> *</span>
                    </p>
                    <input
                      type="number"
                      value={floor}
                      placeholder="Floor"
                      className="min-w-0 w-[100%] outline-none text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2"
                      onChange={(e) => setFloor(e.target.value)}
                    />
                  </div>

                  {/* Total Floors */}
                  <div className="w-full flex flex-col justify-between">
                    <p className="font-500 text-[16px] sm:text-[18px]">
                      Total Floors <span className="text-red-500"> *</span>
                    </p>
                    <input
                      type="number"
                      value={totalFloor}
                      placeholder="Total Floors"
                      className="min-w-0 w-[100%] outline-none text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2"
                      onChange={(e) => setTotalFloor(e.target.value)}
                    />
                  </div>
                </div>

                {/* Property facing */}
                <div className="w-full flex flex-col justify-between">
                  <p className="font-500 text-[16px] sm:text-[18px]">
                    Property Facing <span className="text-red-500"> *</span>
                  </p>
                  <div className="relative border-2 text-[12px] sm:text-[16px] border-slate-500 rounded-md p-2">
                    <select
                      className="outline-none w-full cursor-pointer"
                      value={facing}
                      onChange={(e) => setFacing(e.target.value)}
                    >
                      <option value="" selected disabled>
                        Select
                      </option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North-East">North-East</option>
                      <option value="South-East">South-East</option>
                      <option value="North-West">North-West</option>
                      <option value="South-West">South-West</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Poperty Age */}
              <div>
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Property Age <span className="text-red-500"> *</span>
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-5 lg:gap-10 p-2 text-[12px] sm:text-[14px]">
                  <button
                    onClick={() => setPropertyAge("Less than 1 Year")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      propertyAge == "Less than 1 Year"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Less than 1 Year
                  </button>

                  <button
                    onClick={() => setPropertyAge("1-3 Years")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      propertyAge == "1-3 Years"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    1-3 Years
                  </button>
                  <button
                    onClick={() => setPropertyAge("3-5 Years")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      propertyAge == "3-5 Years"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    3-5 Years
                  </button>
                  <button
                    onClick={() => setPropertyAge("5-10 Years")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      propertyAge == "5-10 Years"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    5-10 Years
                  </button>
                  <button
                    onClick={() => setPropertyAge("More Than 10 Years")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      propertyAge == "More Than 10 Years"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    More than 10 Years
                  </button>
                </div>
              </div>

              {/* BHK Type*/}
              <div>
                <p className="font-500 text-[16px] sm:text-[18px]">
                  BHK Type <span className="text-red-500"> *</span>
                </p>
                <div className="flex flex-wrap p-2 gap-2 sm:gap-5 lg:gap-10 text-[12px]  sm:text-[14px]">
                  <button
                    onClick={() => setbhkType("1 RK")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      bhkType == "1 RK"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    1 RK
                  </button>

                  <button
                    onClick={() => setbhkType("1 BHK")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      bhkType == "1 BHK"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    1 BHK
                  </button>
                  <button
                    onClick={() => setbhkType("2 BHK")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      bhkType == "2 BHK"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    2 BHK
                  </button>
                  <button
                    onClick={() => setbhkType("3 BHK")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      bhkType == "3 BHK"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    3 BHK
                  </button>
                  <button
                    onClick={() => setbhkType("4 BHK")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      bhkType == "4 BHK"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    4 BHK
                  </button>
                  <button
                    onClick={() => setbhkType("5+ BHK")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      bhkType == "5+ BHK"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    5+ BHK
                  </button>
                </div>
              </div>

              {/* Bathrooms/Toilets*/}
              <div>
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Bathrooms/ Toilets<span className="text-red-500"> *</span>
                </p>
                <div className="flex flex-wrap p-2 gap-2 sm:gap-5 lg:gap-10 text-[12px] sm:text-[14px]">
                  <button
                    onClick={() => setBathroom("1")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      bathroom == "1"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    1
                  </button>

                  <button
                    onClick={() => setBathroom("2")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      bathroom == "2"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    2
                  </button>
                  <button
                    onClick={() => setBathroom("3")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      bathroom == "3"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    3
                  </button>
                  <button
                    onClick={() => setBathroom("4")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      bathroom == "4"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    4
                  </button>
                  <button
                    onClick={() => setBathroom("5")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      bathroom == "5"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    5
                  </button>
                  <button
                    onClick={() => setBathroom("6+")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      bathroom == "6+"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    6+
                  </button>
                </div>
              </div>

              {/* Balcony*/}
              <div>
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Balcony<span className="text-red-500"> *</span>
                </p>
                <div className="flex flex-wrap p-2 gap-2 sm:gap-5 lg:gap-10 text-[12px] sm:text-[14px]">
                  <button
                    onClick={() => setBalcony("0")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      balcony == "0"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    0
                  </button>

                  <button
                    onClick={() => setBalcony("1")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      balcony == "1"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setBalcony("2")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      balcony == "2"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    2
                  </button>
                  <button
                    onClick={() => setBalcony("3")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      balcony == "3"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    3
                  </button>
                  <button
                    onClick={() => setBalcony("4+")}
                    className={` p-2 px-6 border border-slate-600 rounded-3xl ${
                      balcony == "4+"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    4+
                  </button>
                </div>
              </div>

              {/* Tenant Preference*/}
              <div>
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Tenent Preference<span className="text-red-500"> *</span>
                </p>
                <div className="flex flex-wrap p-2 gap-2 sm:gap-5 lg:gap-10 text-[12px] sm:text-[14px]">
                  <button
                    onClick={() => setTenantPreference("Any")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      tenantPreference == "any"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Any
                  </button>

                  <button
                    onClick={() => setTenantPreference("Family")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      tenantPreference == "family"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Family
                  </button>
                  <button
                    onClick={() => setTenantPreference("Bachelor (Man)")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      tenantPreference == "Bachelor (Man)"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Bachelor (Man)
                  </button>
                  <button
                    onClick={() => setTenantPreference("Bachelor (Women)")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      tenantPreference == "Bachelor (Women)"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Bachelor (Women)
                  </button>
                </div>
              </div>

              {/* Availability*/}
              <div>
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Availability<span className="text-red-500"> *</span>
                </p>
                <div className="flex flex-wrap p-2 gap-2 sm:gap-5 lg:gap-10 text-[12px] sm:text-[14px]">
                  <button
                    onClick={() => setAvailability("Immediate")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      availability == "Immediate"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Immediate
                  </button>

                  <button
                    onClick={() => setAvailability("Within 15 Days")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      availability == "Within 15 Days"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Within 15 Days
                  </button>
                  <button
                    onClick={() => setAvailability("Within 1 Month")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      availability == "Within 1 Month"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Within 1 Month
                  </button>
                  <button
                    onClick={() => setAvailability("Within 2 Months")}
                    className={` p-2 px-4 border border-slate-600 rounded-3xl ${
                      availability == "Within 2 Months"
                        ? "bg-gradient-to-r from-blue-400 to-[#122b49] text-white border-none"
                        : ""
                    }`}
                  >
                    Within 2 Months
                  </button>
                </div>
              </div>

              {/* Property Description */}
              <div className="flex flex-col gap-3">
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Property Description <span className="text-red-500"> *</span>
                </p>
                <textarea
                  // size=""
                  className="w-full text-[12px] sm:text-[16px] min-h-24 p-2 border rounded-md border-slate-600"
                  placeholder="Add a description for your property to attrct the best tenant"
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                />
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
              onClick={handleNextClick}
            >
              NEXT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
