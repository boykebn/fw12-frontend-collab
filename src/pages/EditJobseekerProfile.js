import React, { useEffect, useState } from "react";
import Profile from "../components/editProfileComponents/editJobseekerProfile/profile/Profile";
import JobseekerPersonalDataForm from "../components/editProfileComponents/editJobseekerProfile/asside/jobseekerPersonalData/JobseekerPersonalDataForm";
import Social from "../components/editProfileComponents/editJobseekerProfile/asside/jobseekerPersonalData/Social";
import SkillForm from "../components/editProfileComponents/editJobseekerProfile/asside/skill/SkillForm";
import JobseekerWorkExperience from "../components/editProfileComponents/editJobseekerProfile/asside/jobseekerWorkExperience/JobseekerWorkExperience";
import Portfolio from "../components/editProfileComponents/editJobseekerProfile/asside/portfolio/Portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import http from "../helpers/http";
import { useSelector } from "react-redux";

export default function EditJobseekerProfile() {
  const { name } = useSelector((state) => state.profile);
  const { picture } = useSelector((state) => state.profile);
  const { phoneNumber } = useSelector((state) => state.profile);
  const { email } = useSelector((state) => state.profile);
  const { jobDesk } = useSelector((state) => state.profile);
  const { address } = useSelector((state) => state.profile);
  const { bio } = useSelector((state) => state.profile);
  const { instagram } = useSelector((state) => state.profile);
  const { github } = useSelector((state) => state.profile);
  const { gitlab } = useSelector((state) => state.profile);
  const { status } = useSelector((state) => state.profile);
  const { linkedin } = useSelector((state) => state.profile);

  const dataUser = {
    name,
    picture,
    phoneNumber,
    email,
    jobDesk,
    address,
    bio,
    instagram,
    github,
    gitlab,
    status,
    linkedin,
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="md:grid md:grid-cols-[400px_minmax(100px,_1fr)_10px] md:gap-5 pt-36 mb-32 lg:grid-cols-[500px_minmax(100px,_1fr)_110px]">
          <Profile dataUser={dataUser} />
          <div className="mx-2">
            <JobseekerPersonalDataForm dataUser={dataUser} />
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
