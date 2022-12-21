import React, { useState } from "react";
import { useSelector } from "react-redux";
import http from "../../../../../helpers/http";
import AssideNav from "../AssideNav";

export default function DataDiriForm() {
  const token = useSelector((state) => state.auth.token);

  const updateUserInfo = async (e) => {
    const values = {
      name: e.target.name.value,
      jobDesk: e.target.jobDesk.value,
      address: e.target.address.value,
      instagram: e.target.instagram.value,
      github: e.target.github.value,
      gitlab: e.target.gitlab.value,
      bio: e.target.description.value,
    };
    await http(token).patch(`/profile`, values);
  };

  return (
    <form
      onSubmit={updateUserInfo}
      className="flex flex-col md:flex md:flex-col bg-white rounded-[8px]"
    >
      <div className="box-border pt-1">
        <AssideNav
          navClassName="font-openSans text-xl text-[#1F2A36]"
          nav1="Data diri"
        />
        <hr className="w-full" />
        <div className="parents-DataDiriInputClassName">
          <label htmlFor="name" className="text-[#9EA0A5] text-xs">
            Nama lengkap
          </label>
          <input
            type="text"
            name="name"
            className="dataDiri-InputClass"
            id="namaLengkap"
            placeholder="Masukan nama lengkap"
          />
        </div>
        <div className="parents-DataDiriInputClassName">
          <label htmlFor="jobDesk" className="text-[#9EA0A5] text-xs">
            Job desk
          </label>
          <input
            type="text"
            name="jobDesk"
            className="dataDiri-InputClass"
            id="jobdesk"
            placeholder="Masukan nama Job desk"
          />
        </div>
        <div className="parents-DataDiriInputClassName">
          <label htmlFor="domisili" className="text-[#9EA0A5] text-xs">
            Domisili
          </label>
          <input
            type="text"
            name="address"
            className="dataDiri-InputClass"
            id="domisili"
            placeholder="Masukan Domosili"
          />
        </div>
        <div className="flex flex-col md:flex md:flex-col gap-6 lg:flex lg:flex-row px-7 mt-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="ig" className="text-[#9EA0A5] text-xs">
              Instagram
            </label>
            <input
              type="text"
              name="instagram"
              className="dataDiri-InputClass lg:w-full"
              id="ig"
              placeholder="Masukan Username IG"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="github" className="text-[#9EA0A5] text-xs">
              Github
            </label>
            <input
              type="text"
              name="github"
              className="dataDiri-InputClass lg:w-full"
              id="github"
              placeholder="Masukan Username Github"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gitlab" className="text-[#9EA0A5] text-xs">
              Gitlab
            </label>
            <input
              type="text"
              name="gitlab"
              className="dataDiri-InputClass lg:w-full"
              id="gitlab"
              placeholder="Masukan Username Gitlab"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-7 mt-7 md:flex md:flex-col md:gap-2">
          <label htmlFor="decryption" className="text-[#9EA0A5] text-xs">
            Deskripsi singkat
          </label>
          <textarea
            name="description"
            id="decryption"
            className="deskripsi-singkatClassName"
            placeholder="Tuliskan deskripsi singkat"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-20 h-12 rounded-[4px] bg-[#FBB017] text-[#FFFFFF] font-openSans m-7 hover:scale-[1.05]"
          >
            Simpan
          </button>
        </div>
      </div>
    </form>
  );
}
