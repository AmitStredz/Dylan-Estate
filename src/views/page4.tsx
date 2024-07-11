import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
const Page4 = () => {
  const navigate = useNavigate();

  const [nonveg, setNonveg] = useState("");
  const [petsAllowed, setPetsAllowed] = useState("");
  const [electricity, setElectricity] = useState("");
  const [waterSupply, setWaterSupply] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [tiles, setTiles] = useState("");
  const [safety, setSafety] = useState("");
  const [amenities, setAmenities] = useState<Amenity[]>([
    { name: "security", state: false },
    { name: "cctv", state: false },
    { name: "lift", state: false },
    { name: "parking", state: false },
    { name: "water", state: false },
    { name: "powerPartial", state: false },
    { name: "powerFull", state: false },
    { name: "staff", state: false },
    { name: "garden", state: false },
    { name: "playArea", state: false },
    { name: "sport", state: false },
    { name: "gym", state: false },
    { name: "hall", state: false },
    { name: "center", state: false },
    { name: "club", state: false },
    { name: "pool", state: false },
    { name: "intercom", state: false },
    { name: "fire", state: false },
    { name: "club", state: false },
    { name: "pool", state: false },
  ]);
  const handleCheckboxChange = (index: number) => {
    const newAmenities = [...amenities];
    newAmenities[index].state = !newAmenities[index].state;
    setAmenities(newAmenities);

    console.log(amenities);
  };

  const handleNextClick = () => {
    console.log("nonveg: ", nonveg);
    console.log("petsAllowed: ", petsAllowed);
    console.log("electricity: ", electricity);
    console.log("waterSupply: ", waterSupply);
    console.log("furnishing: ", furnishing);
    console.log("tiles: ", tiles);
    console.log("safety: ", safety);
    console.log("amenities: ", amenities);

    localStorage.setItem("nonveg", nonveg);
    localStorage.setItem("petsAllowed", petsAllowed);
    localStorage.setItem("electricity", electricity);
    localStorage.setItem("waterSupply", waterSupply);
    localStorage.setItem("furnishing", furnishing);
    localStorage.setItem("tiles", tiles);
    localStorage.setItem("amenities", JSON.stringify(amenities));

    navigate("/page5");
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
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 ">
                <span>LOCATION DETAILS</span>
              </div>
              <div className="bg-slate-600 h-2"></div>
            </div>
            <div>
              <div className="flex flex-col justify-center h-full p-2 md:p-5 bg-slate-200 max-sm:rounded-t-2xl">
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
              <span className="font-600 text-[18px]">General Features</span>

              {/* Non Veg */}
              <div className="non-veg flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Non-Veg
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="non-veg"
                        value="Allowed"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setNonveg(e.target.value)}
                      />
                    </div>
                    Allowed
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="non-veg"
                        value="Not Allowed"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setNonveg(e.target.value)}
                      />
                    </div>
                    Not Allowed
                  </label>
                </div>
              </div>

              {/*Pets Allowed*/}
              <div className="pets-allowed flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Pets Allowed
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="pets-allowed"
                        value="Yes"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setPetsAllowed(e.target.value)}
                      />
                    </div>
                    Yes
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="pets-allowed"
                        value="No"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setPetsAllowed(e.target.value)}
                      />
                    </div>
                    No
                  </label>
                </div>
              </div>

              {/* Electricity */}
              <div className="electricity flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Electricity
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="electricity"
                        value="Rare/ No Powercut"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setElectricity(e.target.value)}
                      />
                    </div>
                    Rare/ No Powercut
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="electricity"
                        value="Frequent Powercut"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setElectricity(e.target.value)}
                      />
                    </div>
                    Frequent Powercut
                  </label>
                </div>
              </div>

              {/* Water SUpply */}
              <div className="water-supply flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Water Supply
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="water-supply"
                        value="Municipal Corporation (BMC)"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setWaterSupply(e.target.value)}
                      />
                    </div>
                    Municipal Corporation (BMC)
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="water-supply"
                        value="Borewell"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setWaterSupply(e.target.value)}
                      />
                    </div>
                    Borewell
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="water-supply"
                        value="Municipal Corporation (BMC) & Borewell"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setWaterSupply(e.target.value)}
                      />
                    </div>
                    Both
                  </label>
                </div>
              </div>

              <div className="divider w-full bg-slate-300 h-[2px]"></div>

              {/*Furnishing */}
              <div className="furnishing flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Furnishing
                </p>
                <div className="grid sm:grid-cols-3 gap-2 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="furnishing"
                        value="Fully Furnished"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setFurnishing(e.target.value)}
                      />
                    </div>
                    Fully Furnished
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="furnishing"
                        value="Semi Furnished"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setFurnishing(e.target.value)}
                      />
                    </div>
                    Semi Furnished
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="furnishing"
                        value="Unfurnished"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setFurnishing(e.target.value)}
                      />
                    </div>
                    Unfurnished
                  </label>
                </div>
              </div>

              <div className="divider w-full bg-slate-300 h-[2px]"></div>

              {/*Additional Features */}
              <div className="additional-features flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Additional Features
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        // name="water-supply"
                        // value="municipal"
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                    Air Conditioning
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        // name="water-supply"
                        // value="borewell"
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                    Ceiling Fans
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        // name="water-supply"
                        // value="both"
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                    Refrigerator
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        // name="water-supply"
                        // value="both"
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                    Washing Machine
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        // name="water-supply"
                        // value="both"
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                    Microwave
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        // name="water-supply"
                        // value="both"
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                    Oven
                  </label>
                </div>
              </div>

              <div className="divider w-full bg-slate-300 h-[2px]"></div>

              {/*Tiles */}
              <div className="tiles flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Tiles
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 items-center text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="tiles"
                        value="Normal White Tiles"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setTiles(e.target.value)}
                      />
                    </div>
                    Normal White Tiles
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="tiles"
                        value="Marbles"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setTiles(e.target.value)}
                      />
                    </div>
                    Marbles
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="tiles"
                        value="Vitrified Tiles"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setTiles(e.target.value)}
                      />
                    </div>
                    Vitrified Tiles
                  </label>
                </div>
              </div>

              <div className="divider w-full bg-slate-300 h-[2px]"></div>

              {/*Safety */}
              <div className="safety flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Safety
                </p>
                <div className="grid sm:grid-cols-3 items-center gap-2 text-[12px] sm:text-[16px] p-3">
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        name="security"
                        value="Yes"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setSafety(e.target.value)}
                      />
                    </div>
                    24/7 Security personnel (Gated Security)
                  </label>
                  <label className="items-center flex gap-3">
                    <div>
                      <input
                        type="checkbox"
                        name="security"
                        value="Yes"
                        className="size-5 sm:size-6 cursor-pointer"
                        onChange={(e) => setSafety(e.target.value)}
                      />
                    </div>
                    Security Systems- CCTV
                  </label>
                </div>
              </div>

              <div className="divider w-full bg-slate-300 h-[2px]"></div>

              {/*Society Amenities */}
              <div className="safety flex flex-col gap-2">
                <p className="font-500 text-[14px] sm:text-[18px]">
                  <span className="text-red-500">*</span> Society Amenities
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center items-center text-[12px] sm:text-[16px] p-3">
                 
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-5"
                    >
                      <div className="flex justify-center w-40 h-16 overflow-hidden object-contain">
                        <img
                          src={getAmenityImage(amenity.name)} // Assuming name directly corresponds to the image URL or path
                          alt={amenity.name}
                          className="object-cover"
                        />
                      </div>
                      <input
                        type="checkbox"
                        checked={amenity.state}
                        onChange={() => handleCheckboxChange(index)}
                        className="size-5 sm:size-6 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider w-full bg-slate-300 h-[2px]"></div>

              {/* body end */}
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

export default Page4;

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
