import Header from "./header";
import { useNavigate } from "react-router-dom";

const Page7 = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header customClass="bg-[#FCF8F4]" />

      <div className="flex p-5 sm:p-10 md:p-24 h-full w-full">
        <div className="container  font-inter flex flex-col gap-10">
          <h1 className="text-[18px] sm:text-[24px] font-400">
            Thank you for listing your property with us,
          </h1>
          <p className="text-[14px] sm:text-[18px]">
            Your listing will be reviewed and will go live within 24 hours.
          </p>
          <p className="text-[14px] sm:text-[18px] lg:w-[55rem]">
            We will now manage your listing and get in touch with you after
            finding the best suitable tenant as per your preference.
          </p>
          <p className="text-[12px] sm:text-[16px] underline font-jacquesFranscois">
            -Dylan Estates
          </p>

          <div className="flex flex-col xsm:flex-row gap-2 xsm:gap-10 text-[14px] sm:text-[16px] text-white">
            <button className="p-2 px-4 rounded-xl bg-[#1E324A] ">
              Edit Property Listing
            </button>
            <button
              className="p-2 px-4 rounded-xl bg-[#1E324A] "
              onClick={()=> navigate('/page8')}
            >
              Preview Property Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
