import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ConfirmModalProps {
    closeModal: () => void; // Specify closeModal prop type as a function that returns void
  }
  

  const ConfirmModal: React.FC<ConfirmModalProps> = ({ closeModal }) => {
    const navigate = useNavigate();
    const modalRef = useRef<HTMLDivElement>(null);
  
    const bgModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (modalRef.current === e.target) {
        closeModal();
      }
    };

  return (
    <div ref={modalRef} onClick={bgModal}
    className="flex fixed justify-center w-screen h-screen left-0 top-0 p-5 text-white items-center backdrop-blur-sm z-[1000]"
    data-aos="zoom-in"

    >
      <div className="flex flex-col gap-5 p-10 text-center bg-white text-black rounded-xl shadow-2xl">
        <span className="font-600">
          POST PROPERTY ON DYLAN ESTATE? <span className="text-red-500">*</span>
        </span>
        <button
          className="p-2 text-white rounded-lg bg-[#122B49]"
          onClick={() => navigate("/page7")}
        >
          Continue
        </button>
        <p>
          By continuing you agree to our{" "}
          <span className="font-500 underline cursor-pointer">
            Terms and Conditions & Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}

export default ConfirmModal;
