import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import http from "../../../../helpers/http";
import { success } from "daisyui/src/colors";

export default function Profile(props) {
  const { profile } = props;
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = React.useState("");

  const updateCompany = async () => {
    const values = {
      name: document.getElementById("name").value,
      field: document.getElementById("field").value,
      address: document.getElementById("address").value,
      bio: document.getElementById("bio").value,
      email: document.getElementById("email").value,
      instagram: document.getElementById("instagram").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      linkedin: document.getElementById("linkedin").value,
    };

    const { data } = await http().patch(`/company/${profile.id}`, values);

    setSuccessMessage(data.message);
  };

  const back = () => {
    navigate(`/company-profile/${profile.userId}`);
  };

  return (
    <div className="md:ml-20 lg:ml-[150px]">
      <div className="bg-white md:p-5 rounded-[8px] font-openSans py-4 mx-2">
        <div className="profile-image-parents">
          <img src={require("../../../../assets/images/test3.png")} alt="profile" className="profileImageClassName" />
          <div className="editButtonClassName">
            <RiPencilFill />
            <span>Edit</span>
          </div>
        </div>
        <div className="my-10 px-7 md:flex md:flex-col md:gap-2">
          <div className="grid grid-rows md:flex md:flex-col md:gap-2">
            <h2 className="text-[#1F2A36] text-xl">{profile.name}</h2>
            <span className="text-[#1F2A36] text-sm">{profile.field}</span>
            {profile.status && <span className="text-[#9EA0A5] text-sm order-3 md:order-2">{profile.status}</span>}
            <div className="flex flex-row order-2 md:flex md:items-center gap-2 text-sm text-[#9EA0A5] my-2">
              <HiOutlineMapPin />
              <span>{profile.address}</span>
            </div>
            <p className="text-[#9EA0A5] order-5 hidden text-sm md:block">{profile.bio}</p>
          </div>
        </div>
      </div>
      {successMessage && (
        <div className="alert alert-success shadow-lg my-5">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{successMessage}</span>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-7 my-7 mx-3 md:flex md:flex-col md:m-2 md:gap-7 md:mt-10">
        <button onClick={() => updateCompany()} type="button" className="btn-editProfile text-[#FFFFFF] bg-[#5E50A1]">
          Simpan
        </button>
        <button onClick={() => back()} type="button" className="btn-editProfile bg-[#FFFFFF] text-[#5E50A1] border-[1px] border-[#5E50A1]">
          Kembali
        </button>
      </div>
    </div>
  );
}
