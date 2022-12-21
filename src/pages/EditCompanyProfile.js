import React from "react";
import Profile from "../components/editProfileComponents/editCompanyProfile/profileEditCompanyProfile/ProfileCompany";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function EditCompanyProfile() {
  const { state } = useLocation();

  return (
    <>
      <Navbar blueBg="bg-[#5E50A1] h-[28rem] w-full absolute top-32 z-[-1]" grayBg="bg-[#E5E5E5] h-[125rem] md:h-[60rem] lg:h-[60rem] w-full absolute top-[29rem] md:top-[29rem] lg:top-[29rem] z-[-1]" />
      <div className="pt-24">
        <div className="md:grid md:grid-cols-[400px_minmax(100px,_1fr)_10px] md:gap-5 mt-20 mb-32 lg:grid-cols-[500px_minmax(100px,_1fr)_110px]">
          <Profile profile={state} />
          <div className="mx-2">
            <form className="flex flex-col px-7 py-7 md:flex md:flex-col bg-white rounded-[8px]">
              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="name" className="text-[#9EA0A5] text-xs">
                  Nama Perushaan
                </label>
                <input type="name" name="name" className="dataDiri-InputClass lg:w-full" id="name" placeholder="Masukan nama perusahaan" />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="field" className="text-[#9EA0A5] text-xs">
                  Bidang
                </label>
                <input type="field" name="field" className="dataDiri-InputClass lg:w-full" id="field" placeholder="Masukan bidang perusahaan" />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="address" className="text-[#9EA0A5] text-xs">
                  Domisili
                </label>
                <input type="address" name="address" className="dataDiri-InputClass lg:w-full" id="address" placeholder="Masukan Domisili" />
              </div>

              <div className="flex flex-col gap-2 mb-7 md:flex md:flex-col md:gap-2">
                <label htmlFor="bio" className="text-[#9EA0A5] text-xs">
                  Deskripsi singkat
                </label>
                <textarea name="bio" id="bio" className="deskripsi-singkatClassName" placeholder="Tuliskan deskripsi singkat"></textarea>
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="email" className="text-[#9EA0A5] text-xs">
                  Email
                </label>
                <input type="email" name="email" className="dataDiri-InputClass lg:w-full" id="email" placeholder="Masukan email" />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="instagram" className="text-[#9EA0A5] text-xs">
                  instagram
                </label>
                <input type="instagram" name="instagram" className="dataDiri-InputClass lg:w-full" id="instagram" placeholder="Masukan instagram" />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="phoneNumber" className="text-[#9EA0A5] text-xs">
                  Nomor Telepon
                </label>
                <input type="phoneNumber" name="phoneNumber" className="dataDiri-InputClass lg:w-full" id="phoneNumber" placeholder="Masukan nomor telepon" />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="linkedin" className="text-[#9EA0A5] text-xs">
                  linkedin
                </label>
                <input type="linkedin" name="linkedin" className="dataDiri-InputClass lg:w-full" id="linkedin" placeholder="Masukan linkedin" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
