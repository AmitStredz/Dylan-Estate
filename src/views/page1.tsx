import React, { useMemo, useState } from "react";
import Header from "./header";
import greenTickImg from "./assets/green-tick.png";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";

interface CountryOption {
  value: string;
  label: string;
}

const Page1: React.FC = () => {
  const [userType, setUserType] = useState("owner");
  const [otpSent, setOtpSent] = useState(false);
  const [countryRegion, setCountryRegion] = useState<CountryOption | null>(
    null
  );

  const navigate = useNavigate();

  const CountrySelector: React.FC<{
    value: CountryOption | null;
    onChange: (value: SingleValue<CountryOption>) => void;
  }> = ({ value, onChange }) => {
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value: SingleValue<CountryOption>) => {
      onChange(value);
      setCountryRegion(value as CountryOption); // Update countryRegion state
    };

    return (
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        required
      />
    );
  };

  const handleNextClick = () => {
    if (!otpSent) {
      setOtpSent(true);
    } else {
      console.log("Navigating...");
      navigate("/page2");
    }
  };

  return (
    <div className="bg-[#122B49] w-screen h-screen text-white overflow-auto lg:overflow-hidden">
      <Header customClass="some-custom-class" />

      {/* Body */}
      <div className="body flex flex-col gap-10 md:p-10 xl:p-20 xl:px-28">
        {/* Main title */}
        <div className="flex flex-col gap-1 sm:gap-5 max-sm:mt-7 font-merriweatherSans max-md:text-center">
          <h1 className="font-400 text-[28px] sm:text-[32px] max-sm:leading-8">
            Sell or Rent your Property For Free
          </h1>
          <p className="font-300 text-[12px] sm:text-[16px]">
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your needs.
          </p>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-10 xl:px-20 flex flex-col md:flex-row max-md:gap-20 justify-between">
          <div className="left flex flex-col gap-4 font-300 font-merriweatherSans">
            <span className="text-[20px] font-400">
              Upload you property in 4 simple steps
            </span>
            <div className="flex flex-col gap-5 text-[14px]">
              <ul className="flex items-center gap-1">
                <img src={greenTickImg} className="w-8" alt="tick" />
                <p>
                  Add your properties
                  <span className="font-400"> Basic Details</span>
                </p>
              </ul>
              <ul className="flex items-center gap-1">
                <img src={greenTickImg} className="w-8" alt="tick" />
                <p>
                  Add property
                  <span className="font-400">Location</span>
                </p>
              </ul>
              <ul className="flex items-center gap-1">
                <img src={greenTickImg} className="w-8" alt="tick" />
                <p>
                  Add property
                  <span className="font-400"> Features and amenities</span>
                </p>
              </ul>
              <ul className="flex items-center gap-1">
                <img src={greenTickImg} className="w-8" alt="tick" />
                <p>
                  Add
                  <span className="font-400">Price details</span>
                </p>
              </ul>
              <ul className="flex items-center gap-1">
                <img src={greenTickImg} className="w-8" alt="tick" />
                <p>
                  {" "}
                  Add your best
                  <span className="font-400">Property Shots</span>
                </p>
              </ul>
            </div>
          </div>

          <div className="right bg-white text-black rounded-xl lg:w-[35rem]">
            <div className="w-full h-full">
              <div className="form-header bg-[#FCF8F4] rounded-t-xl max-sm:text-center p-5 sm:px-12 ">
                <h1 className="font-500 text-[18px] sm:text-[20px]">LETS GET YOU STARTED !</h1>
              </div>

              <div className="overflow-auto">
                {otpSent ? (
                  <div className="flex flex-col gap-5 lg:w-[30rem] p-6 sm:px-11 h-56">
                    <div className="flex justify-between">
                      <p className="flex flex-wrap gap-1">
                        Enter OTP sent on <span>999-999-9999</span>
                        <span className="text-red-500"> *</span>
                      </p>
                      <a className="underline text-blue-900 cursor-pointer">
                        Change
                      </a>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="border-2 border-slate-600 rounded-sm p-1 px-2 w-full"
                        placeholder="0 0 0 0"
                      />
                      <div className="w-full flex justify-end">
                        <a className="hover:underline text-blue-900 cursor-pointer">
                          Resend OTP
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="form flex flex-col gap-8 text-[16px] lg:w-[30rem] p-5 sm:px-12 h-56">
                    <div className="flex flex-col gap-2">
                      <p className="font-500 text-[18px]">
                        <span className="text-red-600">*</span> I am :
                      </p>
                      <div className="flex gap-10 sm:gap-20 lg:justify-between">
                        <label className="cursor-pointer flex gap-1">
                          <input
                            type="radio"
                            name="user-type"
                            value="owner"
                            checked={userType === "owner"}
                            onChange={() => setUserType("owner")}
                            className="rounded-full"
                          />
                          Owner
                        </label>
                        <label className="cursor-pointer flex gap-1">
                          <input
                            type="radio"
                            name="user-type"
                            value="builder"
                            checked={userType === "builder"}
                            onChange={() => setUserType("builder")}
                            className="rounded-full"
                          />
                          Builder
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[16px] font-500">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="p-1 px-2 border-2 border-slate-400 rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-500">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <CountrySelector
                        value={countryRegion}
                        onChange={(value) =>
                          setCountryRegion(value as CountryOption)
                        }
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <label className="text-[16px] font-500">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="000-000-0000"
                          className="p-1 px-2 border-2 border-slate-400 rounded-sm"
                        />
                        {/* <div className="p-1 px-2 border-2 border-slate-400 rounded-sm">
                        <PhoneInput
                          placeholder="Enter phone number"
                        //   value={value}
                          onChange={()=>{}}
                        />
                      </div> */}
                      </div>
                      <p className="text-md font-500">OR</p>
                      <div className="flex flex-col">
                        <label className="text-[16px] font-500">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          className="p-1 px-2 border-2 border-slate-400 rounded-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="form-footer flex justify-between items-center p-3 sm:px-12 md:px-5 lg:px-12 rounded-b-xl text-[12px] bg-[#FCF8F4] bottom-0">
                <p className="font-400">
                  Need Help? <span className="font-500"> Call 9999999999</span>
                </p>
                <button
                  className="bg-[#1E324A] text-[16px] text-white p-1 px-5 rounded-lg"
                  onClick={handleNextClick}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
