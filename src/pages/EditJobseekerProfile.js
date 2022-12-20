import React from "react";
import Profile from "../components/editProfileComponents/editJobseekerProfile/profile/Profile";
import JobseekerPersonalDataForm from "../components/editProfileComponents/editJobseekerProfile/asside/jobseekerPersonalData/JobseekerPersonalDataForm";
import Social from "../components/editProfileComponents/editJobseekerProfile/asside/jobseekerPersonalData/Social";
import SkillForm from "../components/editProfileComponents/editJobseekerProfile/asside/skill/SkillForm";
import JobseekerWorkExperience from "../components/editProfileComponents/editJobseekerProfile/asside/jobseekerWorkExperience/JobseekerWorkExperience";
import Portfolio from "../components/editProfileComponents/editJobseekerProfile/asside/portfolio/Portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EditJobseekerProfile() {
  return (
    <>
      <Navbar blueBg="bg-[#5E50A1] h-[28rem] w-full absolute top-32" greyBg="bg-[#E5E5E5] h-[217rem] md:h-[181rem] lg:h-[157rem] w-full absolute top-[29rem]" />
      <div className="relative">
        <div className="md:grid md:grid-cols-[400px_minmax(100px,_1fr)_10px] md:gap-5 mt-20 mb-32 lg:grid-cols-[500px_minmax(100px,_1fr)_110px]">
          <Profile />
          <div className="mx-2">
            <form action="" className="flex flex-col md:flex md:flex-col bg-white rounded-[8px]">
              <JobseekerPersonalDataForm />
              <Social />
              <div className="flex flex-col gap-2 px-7 mt-7 md:flex md:flex-col md:gap-2">
                <label htmlFor="decryption" className="text-[#9EA0A5] text-xs">
                  Deskripsi singkat
                </label>
                <textarea name="decryption" id="decryption" className="deskripsi-singkatClassName" placeholder="Tuliskan deskripsi singkat"></textarea>
              </div>
              <button type="button" className="w-20 self-end h-12 rounded-[4px] bg-[#FBB017] text-[#FFFFFF] font-openSans m-7 hover:scale-[1.05]">
                Simpan
              </button>
            </form>
            <SkillForm />
            <JobseekerWorkExperience />
            <Portfolio />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
