import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Globe,
  Heart,
  IndianRupee,
  MapPin,
  Phone,
  Star,
  Upload,
  UserRound,
} from "lucide-react";
import Header from "./header2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MapComponent from "./mapComponent";

import logo from "./assets/logo.png";
import location from "./assets/location.png";
import property from "./assets/property.png";

import bedroom from "./assets/overview/bedroom.png";
import bahthroom from "./assets/overview/bathroom.png";
import area from "./assets/overview/area.png";
import floor from "./assets/overview/floors.png";
import totalfloor from "./assets/overview/total-floors.png";
import facing from "./assets/overview/facing.png";
import balcony from "./assets/overview/balcony.png";
import furnishing from "./assets/overview/furnishing.png";
import tenant from "./assets/overview/tenant.png";
import tiles from "./assets/overview/tiles.png";
import availability from "./assets/overview/availability.png";
import water2 from "./assets/overview/water-supply.png";
import pets from "./assets/overview/pet.png";
import nonVeg from "./assets/overview/non-veg.png";
import electricity from "./assets/overview/electricity.png";
import age from "./assets/overview/age.png";
import type from "./assets/overview/type.png";
import security2 from "./assets/overview/security.png";

import security from "./assets/amenities/24-7-security.png";
import cctv from "./assets/amenities/cctv-camera.png";
import lift from "./assets/amenities/lift.png";
import parking from "./assets/amenities/reserved-parking.png";
import water from "./assets/amenities/water-supply.png";
import powerPartial from "./assets/amenities/power-backup-partial.png";
import powerFull from "./assets/amenities/power-backup-full.png";
import staff from "./assets/amenities/maintainance-staff.png";
import garden from "./assets/amenities/garden.png";
import playArea from "./assets/amenities/play-area.png";
import sport from "./assets/amenities/sport.png";
import gym from "./assets/amenities/gym.png";
import hall from "./assets/amenities/hall.png";
import center from "./assets/amenities/shopping-center.png";
import club from "./assets/amenities/club-house.png";
import pool from "./assets/amenities/swimming-pool.png";
import intercom from "./assets/amenities/intercom.png";
import fire from "./assets/amenities/fire-safety.png";

interface Amenity {
  name: string;
  state: boolean;
}

const Page8 = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [amenities, setAmenities] = useState<any[]>([]);
  const [neighbourType, setNeighbourType] = useState<string>("transport");
  const [destination, setDestination] = useState("");
  const [destination2, setDestination2] = useState("");

  // useEffect(() => {
  //   // Load images from localStorage
  //   const storedImages = localStorage.getItem("selectedImages");
  //   if (storedImages) {
  //     setSelectedImages(JSON.parse(storedImages));
  //     console.log("image retrieved...");
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save images to localStorage
  //   localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
  // }, [selectedImages]);

  useEffect(() => {
    // Retrieve amenity data from localStorage
    const storedAmenities = localStorage.getItem("amenities");
    // console.log("storedAmenity", storedAmenities);
    if (storedAmenities) {
      const parsedAmenities: Amenity[] = JSON.parse(storedAmenities);

      // Filter amenities where state is true
      const filtered = parsedAmenities.filter(
        (amenity) => amenity.state === true
      );

      // Set filtered amenities state
      setAmenities(filtered);
      console.log("Amenities", amenities);
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
      setCurrentIndex(selectedImages.length); // Show the latest added image
    }
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const busStations = [
    "Mira Road Station (E) 0.7 km | 3 mins",
    "Mira Road Station (E) 0.8 km | 2 mins",
    "Mira Road Station (E) 0.9 km | 4 mins",
    "Mira Road Police Station 1.8 km | 6 mins",
  ];

  const railwayStations = [
    "Mira Road Station 1.3 km | 5 mins",
    "Bhayandar Station 4.0 km | 14 mins",
    "Dahisar Station 7.1 km | 22 mins",
  ];

  const hospitals = [
    "Life Care Hospital 1.3 km | 5 mins",
    "Saibaba Hospital 4.0 km | 14 mins",
    "Riddhi Siddhi Hospital 7.1 km | 22 mins",
    "Sanjeevani  Hospital 7.1 km | 22 mins",
    "Karuna Hospital 7.1 km | 22 mins",
  ];
  const pharmacy = [
    "Mira Road Station 1.3 km | 5 mins",
    "Bhayandar Station 4.0 km | 14 mins",
    "Dahisar Station 7.1 km | 22 mins",
  ];
  const superMarket = [
    "New Apna Bazar 1.3 km | 5 mins",
    "R.C.M Bazar 4.0 km | 14 mins",
    "Asmita Super Market 7.1 km | 22 mins",
    "D Mart 7.1 km | 22 mins",
  ];
  const shoppingMall = [
    "Mira Road Mall 1.3 km | 5 mins",
    "Hyper Mall 4.0 km | 14 mins",
    "Dahisar Mall 7.1 km | 22 mins",
  ];

  const handleSearchClick = () => {
    if (destination) {
      setDestination2(destination);
    }
  };
  return (
    <div className="h-full w- overflow-x-hidden">
      <Header customClass="bg-[#FCF8F4]" />

      <div className="flex flex-col p-5 gap-10 sm:px-8 md:px-14 h-full w-full font-inter">
        {/* Back arrow */}
        <div>
          <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        </div>

        {/* Section 1 (Property Details) */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 w-full">
          {/* Left */}
          <div className="flex flex-col gap-10 w-full lg:w-2/3">
            {/* Property Preview */}
            <div className="">
              {/* Title */}
              <h1 className="text-[20px] sm:text-[26px] font-400 font-merriweatherSans mb-4">
                {localStorage.getItem("bhkType") || "1 BHK"}{" "}
                {localStorage.getItem("propertySubType") || "House / Villa"} For{" "}
                {localStorage.getItem("propertyFor") || "Rent"} in{" "}
                {localStorage.getItem("locality") || "Chandra Nagar"} (
                {localStorage.getItem("builtArea") || "5000"} Sq.ft.)
              </h1>
              {/* Address */}
              <div className="address flex justify-between p-2">
                <span className="flex items-center font-300 text-[12px] sm:text-[16px]">
                  <MapPin className="mr-1" />
                  {localStorage.getItem("locality") || "Chandra Nagar"}, near{" "}
                  {localStorage.getItem("landmark") || "Shivaji Temple"},{" "}
                  {localStorage.getItem("city") || "Lucknow"}
                </span>
                <div className="flex gap-2">
                  <div className="flex items-center shadow-2xl shadow-black rounded-full cursor-pointer p-1 sm:p-2">
                    <Heart />
                  </div>
                  <div className="flex items-center shadow-2xl shadow-black rounded-full cursor-pointer p-1 sm:p-2">
                    <Upload />
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div
                className={`relative h-96 flex items-center justify-center ${
                  selectedImages.length > 0 ? "bg-[#0e0e0ee6]" : "bg-gray-300"
                } `}
              >
                {selectedImages.length > 0 ? (
                  <>
                    <img
                      src={URL.createObjectURL(selectedImages[currentIndex])}
                      alt={`Selected ${currentIndex + 1}`}
                      className="max-w-full h-full object-cover "
                    />
                    <button
                      onClick={handlePrevImage}
                      className=" absolute   left-0 bg-white p-2"
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-0 bg-white p-2"
                    >
                      {">"}
                    </button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded">
                      {currentIndex + 1} / {selectedImages.length}
                    </div>
                    <label
                      htmlFor="image-upload"
                      className="absolute bottom-2 right-2 p-2 bg-[#1E324A] text-white rounded cursor-pointer"
                    >
                      + Add More Photos
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-gray-600">No photos added</span>
                    <label
                      htmlFor="image-upload"
                      className="mt-2 p-2 bg-[#1E324A] text-white rounded cursor-pointer"
                    >
                      + Add Photos Now
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                )}
              </div>

              <div className="p-2 px-5 text-sm bg-gray-400 rounded-b-lg">
                Property ID: 99999999
              </div>
            </div>

            {/* Property Overview */}
            <div className="flex flex-col gap-10 p-5 sm:p-10 border-x-2 border-b-2 rounded-md">
              <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
                Property Overview
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">
                {/* Bedroom */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={bedroom} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-500">
                      {localStorage.getItem("bhkType")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Bedrooms
                    </p>
                  </div>
                </div>

                {/* Bathroom */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img
                      src={bahthroom}
                      alt="bathroom"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("bathroom")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Bathroom
                    </p>
                  </div>
                </div>

                {/* Area */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={area} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("builtArea")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Sq. Ft.
                    </p>
                  </div>
                </div>
                {/* Floor */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={floor} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("floor")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Property on Floor
                    </p>
                  </div>
                </div>
                {/* Total Floors */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img
                      src={totalfloor}
                      alt="bedroom"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("totalFloor")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Total Floors
                    </p>
                  </div>
                </div>
                {/* facing */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={facing} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("facing")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">Facing</p>
                  </div>
                </div>
                {/* Balcony */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={balcony} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("balcony")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Balcony
                    </p>
                  </div>
                </div>
                {/* Furinishing */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img
                      src={furnishing}
                      alt="bedroom"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("furnishing")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Furinishing
                    </p>
                  </div>
                </div>
                {/* Tenant */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={tenant} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("tenantPreference")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Tenant Preference
                    </p>
                  </div>
                </div>
                {/* Flooring */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={tiles} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("tiles")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Flooring
                    </p>
                  </div>
                </div>
                {/* Availability */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img
                      src={availability}
                      alt="bedroom"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("availability")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Availability
                    </p>
                  </div>
                </div>
                {/* Water Supply */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={water2} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("waterSupply")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Water Supply
                    </p>
                  </div>
                </div>
                {/* pets */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={pets} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("petsAllowed")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Pets Allowed
                    </p>
                  </div>
                </div>
                {/* Non-Veg */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={nonVeg} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("nonveg")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Non - Veg
                    </p>
                  </div>
                </div>
                {/* electricity */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img
                      src={electricity}
                      alt="bedroom"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("electricity")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Electricity Status
                    </p>
                  </div>
                </div>
                {/* Age */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={age} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("propertyAge")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Property Age
                    </p>
                  </div>
                </div>
                {/* Type */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img src={type} alt="bedroom" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("propertyType")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Property Type
                    </p>
                  </div>
                </div>
                {/* Security */}
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-10 h-10 overflow-hidden p-2">
                    <img
                      src={security2}
                      alt="bedroom"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-600">
                      {localStorage.getItem("security")}
                    </span>
                    <p className="text-[14px] fot-300 text-slate-600">
                      Gated Security
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-col gap-10 p-5 sm:p-10 border-x-2 border-b-2 rounded-md">
              <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
                Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-10">
                {/* Block */}

                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex justify-center sm:w-40 h-12 sm:h-16 overflow-hidden object-contain"
                  >
                    <img
                      src={getAmenityImage(amenity.name)} // Assuming name directly corresponds to the image URL or path
                      alt={amenity.name}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-5 sm:gap-10 p-5 sm:p-10 border-x-2 border-b-2 rounded-md">
              <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
                Decription
              </h2>
              <p className="text-[12px] sm:text-[16px]">{localStorage.getItem("description")}</p>
            </div>
          </div>

          {/* Right (Pricing section) */}
          <div className="w-full lg:w-1/3">
            <div className="flex justify-between xl:px-10 p-5 bg-[#F6EFE6] text-center">
              <div className="flex flex-col">
                <span className="text-[18px] sm:text-[24px] font-700 font-merriweatherSans">
                  ₹{localStorage.getItem("rent") || "10,000"} / Month
                </span>
                <span className="text-[12px] sm:text-[14px] text-slate-600">
                  (Rent-Negotiable)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] sm:text-[24px] font-700 font-merriweatherSans">
                  ₹{localStorage.getItem("security") || "20,000"}
                </span>
                <span className="text-[12px] sm:text-[14px] text-slate-600">
                  (Deposit)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 bg-[#FDFAF7] p-5 xl:p-10">
              <span className="text-[18px] font-600 font-merriweatherSans">
                Send an Inquiry for this property?
              </span>
              <p className="text-[12px] font-300 text-slate-600">
                Contact Person : Melvin Lasrado
              </p>
              <form className="flex flex-col gap-4 text-[12px] sm:text-[16px]">
                <div className="flex items-center gap-2 p-2 bg-white border-2">
                  <Phone className="fill-black"></Phone>
                  <span className="font-600">+91-9999999999</span>
                </div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="p-2 bg-white border-2 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Email *"
                  className="p-2 bg-white border-2 w-full"
                  required
                />
                <div className="flex gap-2">
                  <span className="p-2 bg-white border-2">+91</span>
                  <input
                    type="text"
                    placeholder="999-999-9999"
                    className="p-2 bg-white border-2 w-full"
                  />
                </div>

                <div className="flex justify-center w-full">
                  <p className="p-2 px-5 bg-white border-2">
                    I would like more information about Sector 5, shanti nagar,
                    anubhav society
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1E324A] text-white py-2 rounded-md font-merriweatherSans"
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section 2 (Explore Neighborhood) */}
        <div className="flex flex-col gap-10 p-5 sm:p-10 w-full  rounded-md shadow-2xl shadow-slate-400">
          <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
            Explore Neighborhood
          </h2>

          <div className="container flex flex-col lg:flex-row gap-5 w-full">
            {/* <MapComponent></MapComponent> */}
            <div className="map-left flex flex-col gap-2 w-full lg:w-2/3">
              <div className="address-bar flex flex-col sm:flex-row justify-between text-[14px] sm:text-[16px]">
                <div className="flex gap-2 items-center">
                  <div className="w-5 sm:w-7 overflow-hidden">
                    <img
                      src={location}
                      alt="location"
                      className="object-cover"
                    />
                  </div>
                  <span>
                    {localStorage.getItem("locality") || "Chandra Nagar"},{" "}
                    {localStorage.getItem("landmark") || "Shivaji Temple"}
                  </span>
                </div>
                <div className="flex gap-2 items-center sm:w-2/3">
                  <label>To:</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="border-2 w-full h-full outline-none rounded-md"
                  />
                  <button
                    onClick={handleSearchClick}
                    className="p-1 sm:p-2 px-5 sm:px-20 text-white bg-[#1E324A] rounded-md"
                  >
                    Search
                  </button>
                </div>
              </div>
              {/* Map */}
              <div className="w-full h-96 bg-slate-400">
                <MapComponent destination={destination2}></MapComponent>
              </div>
            </div>
            <div className="details-right w-full lg:w-1/3 h-full">
              <div className="header grid grid-cols-3 bg-[#F6EFE6] font-merriweatherSans">
                <div
                  className={` p-2 sm:px-6 cursor-pointer hover:font-500 ${
                    neighbourType == "transport"
                      ? "border-b-2 border-slate-700"
                      : ""
                  }`}
                  onClick={() => setNeighbourType("transport")}
                >
                  Transport
                </div>
                <div
                  className={` p-2 sm:px-6 cursor-pointer hover:font-500 ${
                    neighbourType == "essentials"
                      ? "border-b-2 border-slate-700"
                      : ""
                  }`}
                  onClick={() => setNeighbourType("essentials")}
                >
                  Essentials
                </div>
                <div
                  className={` p-2 sm:px-6 cursor-pointer hover:font-500 ${
                    neighbourType == "utility"
                      ? "border-b-2 border-slate-700"
                      : ""
                  }`}
                  onClick={() => setNeighbourType("utility")}
                >
                  Utilities
                </div>
              </div>

              <div className="content flex flex-col gap-3 bg-[#FDFAF7] h-full w-full p-4 px-5">
                {neighbourType == "transport" ? (
                  <>
                    <Dropdown title="Bus Station" items={busStations} />
                    <Dropdown title="Railway Station" items={railwayStations} />
                    <Dropdown title="Metro Station" items={railwayStations} />
                    <Dropdown title="Airport" items={busStations} />
                  </>
                ) : neighbourType == "essentials" ? (
                  <>
                    <Dropdown title="Hospitals" items={hospitals} />
                    <Dropdown title="Pharmacy" items={pharmacy} />
                    <Dropdown title="Schools" items={hospitals} />
                    <Dropdown title="ATM" items={pharmacy} />
                  </>
                ) : neighbourType == "utility" ? (
                  <>
                    <Dropdown title="Super markets" items={superMarket} />
                    <Dropdown title="Shopping Mall" items={shoppingMall} />
                    <Dropdown title="Gym" items={superMarket} />
                    <Dropdown title="Park" items={shoppingMall} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Ratings & Review (Section 3) */}
        <div className="flex flex-col gap-10 p-5 sm:p-10 border-x-2 border-b-2 rounded-md">
          <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
            Ratings & Reviews
          </h2>

          <div className="flex flex-col sm:flex-row gap-10 justify-between">
            {/* Review 1 */}
            <div className="sm:w-2/5 flex flex-col gap-3">
              <div className="header flex justify-between">
                <div className="flex gap-2">
                  <UserRound
                    className="bg-slate-300 rounded-full p-2"
                    size="40px"
                  ></UserRound>
                  <div>
                    <span className="font-700">Aiswarya Malik</span>
                    <p className="text-slate-600 text-[12px]">
                      Tenant (8 Months)
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="font-700 text-[18px">4.5</span>
                  <Star className="fill-black"></Star>
                </div>
              </div>

              <div className="text">
                <span className="text-[14px] sm:text-[16px] font-500">
                  Good Society
                </span>
                <p className="text-[13px] sm:text-[14px]">
                  The garden view is mesmerizing, the exposure of natural light
                  is good.
                </p>
                <p className="text-[13px] sm:text-[14px]">
                  Easy access to stores, markets and schools.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="sm:w-2/5 flex flex-col gap-3">
              <div className="header flex justify-between">
                <div className="flex gap-2">
                  <UserRound
                    className="bg-slate-300 rounded-full p-2"
                    size="40px"
                  ></UserRound>
                  <div>
                    <span className="font-700">Aiswarya Malik</span>
                    <p className="text-slate-600 text-[12px]">
                      Tenant (8 Months)
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="font-700 text-[18px">4.5</span>
                  <Star className="fill-black"></Star>
                </div>
              </div>

              <div className="text">
                <span className="text-[14px] sm:text-[16px] font-500">
                  Good Society
                </span>
                <p className="text-[13px] sm:text-[14px]">
                  The garden view is mesmerizing, the exposure of natural light
                  is good.
                </p>
                <p className="text-[13px] sm:text-[14px]">
                  Easy access to stores, markets and schools.
                </p>
              </div>
            </div>
          </div>

          <div className="flex max-sm:justify-center">
            <button className="p-2 px-10 sm:px-20 text-white bg-[#1E324A] rounded-lg">
              Write Review
            </button>
          </div>
        </div>

        {/* Similar Properties (Section 4) */}
        <div className="flex flex-col gap-10 p-14  rounded-md bg-[#FDFAF7] -mx-16">
          <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
            Similar Properties in Mira Road
          </h2>

          <div className="flex justify-center sm:justify-between flex-wrap gap-5 ">
            <img src={property} alt="property" className="w-48 sm:w-80" />
            <img src={property} alt="property" className="w-48 sm:w-80" />
            <img src={property} alt="property" className="w-48 sm:w-80" />
            <img src={property} alt="property" className="w-48 sm:w-80" />
          </div>
        </div>

        {/* About Miraroad (Section 5) */}
        <div className="flex flex-col gap-10 p-5 sm:p-10 border-x-2 border-b-2 rounded-md">
          <h2 className="text-[20px] sm:text-[32px] max-sm:text-center font-500 font-merriweatherSans">
            About Mira Road
          </h2>
          <div className="flex flex-col gap-5 text-[14px] sm:text-[16px]">
            <p>
              Spread over 510 sqft. this home is an ideal place to live in.
              Access to bus station & medical stores is very easy & convenient
              from this house.
            </p>
            <p>
              If you are a frequent traveller, then you'll be happy to note that
              train station is less than 10 minutes from this house. With PVR
              Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch
              your favourite movies running & never worry about missing a show
              because of traffic.{" "}
            </p>
            <p>Never miss out on lifestyle as Rassaz Mall......</p>
            <a className="font-600 underline cursor-pointer">Show more</a>
          </div>
          <div className="flex max-sm:justify-center">
            <button className="p-2 px-10 sm:px-20 text-white bg-[#1E324A] rounded-lg">
              Write Review
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-10 bg-[#1E324A] text-white p-10 md:px-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-[14px] lg:text-[16px]">
            <div className="flex flex-col gap-1 sm:gap-4">
              <ul className="hover:underline">HOME</ul>
              <ul className="hover:underline">PROPERTIES</ul>
              <ul className="hover:underline">LIST YOUR PROPERTY</ul>
              <ul className="hover:underline">SAVED SEARCHES</ul>
            </div>
            <div className="flex flex-col gap-1 sm:gap-4">
              <ul className="hover:underline">ABOUT MIRA ROAD</ul>
              <ul className="hover:underline">EMI CALCULATOR</ul>
              <ul className="hover:underline">TEATIMONIALS</ul>
              <ul className="hover:underline">EXPLORE NEIGHBORHOOD</ul>
            </div>
            <div className="flex flex-col gap-1 sm:gap-4">
              <ul className="hover:underline">ABOUT US</ul>
              <ul className="hover:underline">CONTACT US</ul>
              <ul className="hover:underline">FAQ'S</ul>
            </div>
            <div className="flex flex-col gap-1 sm:gap-4">
              <div>
                <h1 className="lg:text-[20px]">CONTACT US</h1>
                <p className="text-[11px] lg:text-[12px]">
                  B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5,
                  Shanti
                </p>
              </div>
              <div>
                <h1 className="lg:text-[20px]">OFFICE HOURS</h1>
                <p className="text-[11px] sm:text-[12px]">
                  B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5,
                  Shanti
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider bg-white h-[0.5px]"></div>

        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <div className="text-[11px] sm:text-[12px]">
            <p>
              © 2024 Dylan Estates. All rights reserved. Dylan Estates- Your
              Neighborhood Experts
            </p>
            <p>Privacy Policy | Terms & Conditions </p>
          </div>
          <div className="flex gap-3">
            <button className="flex gap-2">
              <Globe></Globe>
              English (IN)
            </button>
            <button className="flex gap-2">
              <IndianRupee />
              INR
            </button>
          </div>
        </div>
      </div>

      {/* ... */}
    </div>
  );
};

export default Page8;

// Helper function to get amenity image based on key
const getAmenityImage = (key: string) => {
  switch (key) {
    case "security":
      return security;
    case "cctv":
      return cctv;
    case "lift":
      return lift;
    case "parking":
      return parking;
    case "water":
      return water;
    case "powerPartial":
      return powerPartial;
    case "powerFull":
      return powerFull;
    case "staff":
      return staff;
    case "garden":
      return garden;
    case "playArea":
      return playArea;
    case "sport":
      return sport;
    case "gym":
      return gym;
    case "hall":
      return hall;
    case "center":
      return center;
    case "club":
      return club;
    case "pool":
      return pool;
    case "intercom":
      return intercom;
    case "fire":
      return fire;
    default:
      return "";
  }
};

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
      <button
        className="w-full flex justify-between items-center p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      {isOpen && (
        <ul className="mt-2 bg-white ">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 border-b last:border-none">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
