import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Profile({ dataUser }) {
  const navigate = useNavigate();

  const changePassword = () => {
    navigate("/reset-password");
  };

  const back = () => {
    navigate("/home");
  };

  return (
    <div className="md:ml-20 lg:ml-[150px]">
      <div className="bg-white md:p-5 rounded-[8px] font-openSans py-4 mx-2">
        <div className="profile-image-parents">
          <img
            src={require("../../../../assets/images/test3.png")}
            alt="profile"
            className="profileImageClassName"
          />
          <div className="editButtonClassName">
            <RiPencilFill />
            <span>Edit</span>
          </div>
        </div>
        <div className="my-10 px-7 md:flex md:flex-col md:gap-2">
          <div className="grid grid-rows md:flex md:flex-col md:gap-2">
            <h2 className="text-[#1F2A36] text-xl">{dataUser?.name}</h2>
            <span className="text-[#1F2A36] text-sm">{dataUser?.jobDesk}</span>
            <span className="text-[#9EA0A5] text-sm order-3 md:order-2">
              {dataUser?.status}
            </span>
            <div className="flex flex-row order-2 md:flex md:items-center gap-2 text-sm text-[#9EA0A5] my-2">
              <HiOutlineMapPin />
              <span>{dataUser?.address}</span>
            </div>
            <div className="hidden md:flex order-4 items-center md:gap-2  text-[#9EA0A5] text-sm">
              <BsTelephone />
              <span>{dataUser?.phoneNumber}</span>
            </div>
            <p className="text-[#9EA0A5] order-5 hidden text-sm md:block">
              {dataUser?.bio}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 my-7 mx-3 md:flex md:flex-col md:m-2 md:gap-7 md:mt-10">
        <button
          type="button"
          className="btn-editProfile text-[#FFFFFF] bg-[#5E50A1]"
          onClick={changePassword}
        >
          Ubah Password
        </button>
        <button
          type="button"
          className="btn-editProfile bg-[#FFFFFF] text-[#5E50A1] border-[1px] border-[#5E50A1]"
          onClick={back}
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
