import { useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";

import ConfirmModal from "./confirmModal";

const Page6 = () => {
  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [confirmModal, setConfirmModal] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      // Convert and save images as Base64 strings
      const base64Images = filesArray.map((file) => ({
        name: file.name,
        base64: URL.createObjectURL(file),
      }));

      // Save to localStorage
      localStorage.setItem("selectedImages", JSON.stringify(base64Images));
      console.log("image saved...");

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

  const handleNextClick = () => {
    setConfirmModal(!confirmModal);

  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
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
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 ">
                <span>FEATURES & AMENITIES</span>
              </div>
              <div className="bg-slate-600 h-2"></div>
            </div>
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 md:px-10 sm:px-10">
                <span>PRICE DETAILS</span>
              </div>
              <div className="bg-slate-600 h-2"></div>
            </div>

            <div>
              <div className="flex flex-col justify-center h-full p-2 md:p-5 bg-slate-200 max-sm:rounded-t-2xl  rounded-tr-2xl">
                <span>PROPERTY IMAGES</span>
              </div>
              <div className="bg-slate-300 h-2"></div>
            </div>
          </div>

          {/* Form Body */}
          <div className="form-body p-3 sm:p-10 sm:px-20 h-96 overflow-auto">
            <div className="flex flex-col gap-7 ">
              <span className="text-[14px] sm:text-[16px]">
                Add Photos / videos to attract more tenants!
              </span>

              <span className="text-[14px] sm:text-[16px] font-500">
                Add Photos of living room, bedroom, bathroom, floor, doors,
                kitchen, balcony, location map, neighborhood, etc
              </span>
              {/* <div className="upload-container h-96 border-2 "></div> */}

              {/* Image Upload */}
              <div className="relative bg-gray-300 h-96 flex items-center justify-center rounded-lg">
                {selectedImages.length > 0 ? (
                  <>
                    <img
                      src={URL.createObjectURL(selectedImages[currentIndex])}
                      alt={`Selected ${currentIndex + 1}`}
                      className="max-w-full h-full object-cover"
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

              <div className="flex flex-col gap-5 font-500 text-[14px] sm:text-[18px]">
                <span>OR</span>
                <span>
                  We can upload them for you! You can email the pictures and
                  videos to us at Dylanestate.com
                </span>
              </div>

              {/* Disclaimer */}
              <div className="disclaimer text-[10px] sm:text-[12px]">
                <p>Acepted formats are .jpg, .gif, .bmp & .png.</p>
                <p>
                  Maximum size allowed is 20 MB. Minimum dimension allowed
                  600*400 Pixel
                </p>
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

      <div className="absolute top-0 left-0">{confirmModal && <ConfirmModal closeModal={handleNextClick} />}</div>

    </div>
  );
};

export default Page6;
