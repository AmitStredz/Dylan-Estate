import { useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";

const Page5 = () => {
  const navigate = useNavigate();

  const [rent, setRent] = useState<string>("");
  const [security, setSecurity] = useState<string>("");


  const handleNextClick = () => {
    console.log("rent: ", rent);
    console.log("security: ", security);

    localStorage.setItem("rent", rent);
    localStorage.setItem("security", security);

    navigate("/page6");
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
            <div className="max-sm:hidden">
              <div className="flex flex-col justify-center h-full p-2 md:p-5 ">
                <span>FEATURES & AMENITIES</span>
              </div>
              <div className="bg-slate-600 h-2"></div>
            </div>
            <div>
              <div className="flex flex-col justify-center h-full p-2 md:p-5 md:px-10 sm:px-10 bg-slate-200 max-sm:rounded-t-2xl">
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
              <div className="flex justify-between gap-10">
                {/* Rent*/}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Rent
                    <span className="text-red-500">*</span>
                  </p>
                  <div className="relative text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <div>
                      <input
                        type="number"
                        value={rent}
                        placeholder="₹"
                        className="outline-none w-full"
                        onChange={(e) => setRent(e.target.value)}
                      />
                    </div>
                    <label className="absolute top-2 right-6 text-slate-500">
                      / Month
                    </label>
                  </div>
                </div>

                {/* Security*/}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Security
                    <span className="text-red-500">*</span>
                  </p>
                  <div className="relative text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <div>
                      <input
                        type="number"
                        placeholder="₹"
                        className="outline-none w-full"
                        onChange={(e) => setSecurity(e.target.value)}
                      />
                    </div>
                    <label className="absolute top-2 right-6 text-slate-500">
                      / Month
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-10">
                {/* Maintainance */}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Maintainance <span className="text-red-500">*</span>
                  </p>
                  <div className="text-[12px] sm:text-[16px] border-2 border-slate-500 rounded-md p-2">
                    <select className="outline-none w-full cursor-pointer">
                      <option>Included in Rent</option>
                      <option>Extra Maintainance</option>
                    </select>
                  </div>
                </div>

                {/* Maintainance 2 */}
                <div className="w-full flex flex-col justify-between gap-2">
                  <p className="font-500 text-[14px] sm:text-[18px]">
                    Maintainance<span className="text-red-500"> *</span>
                  </p>
                  <div className="text-[12px] sm:text-[16px] flex gap-5">
                    <input
                      type="number"
                      placeholder="₹ Maintainance"
                      className="outline-none w-full border-2 border-slate-500 rounded-md p-2"
                    />
                    <select className="w-full border-2 border-slate-500 rounded-md p-2 cursor-pointer">
                      <option>Monthly</option>
                      <option>Annually</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Pricing details to convey to agent? */}
              <div className="flex flex-col gap-3">
                <p className="font-500 text-[16px] sm:text-[18px]">
                  Additional Pricing details to convey to agent?{" "}
                  <span className="text-red-500"> *</span>
                </p>
                <textarea
                  // size=""
                  className="w-full text-[12px] sm:text-[16px] min-h-24 p-2 border rounded-md border-slate-600"
                  placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
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

export default Page5;
