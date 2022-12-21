import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import http from "../../../../../helpers/http";
import AssideNav from "../AssideNav";
import Skill from "./Skill";

export default function SkillForm() {
  const token = useSelector((state) => state.auth.token);
  const [dataSkills, setDataSkills] = useState([]);
  const updateSkill = async (e) => {
    const values = {
      name: e.target.skill.value,
    };

    await http(token).post(`/profile/skills`, values);
  };

  const getSkills = async () => {
    const { data } = await http(token).get(`/profile/skills`);
    const { results } = data;
    setDataSkills(results);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="py-1 my-5 font-openSans bg-white rounded-[8px]">
      <hr className="w-full" />
      <form className="flex gap-5 w-full p-7" onSubmit={updateSkill}>
        <div className="flex flex-col w-full">
          <label htmlFor="skill">Masukan skill</label>
          <input
            type="text"
            name="skill"
            className="dataDiri-InputClass w-full"
            id="skill"
            placeholder="Masukkan Skill"
          />
        </div>
        <button
          type="submit"
          className="w-20 h-12 rounded-[4px] bg-[#FBB017] text-[#FFFFFF] font-openSans self-end hover:scale-[1.05]"
        >
          Simpan
        </button>
      </form>
      <div className="px-7 mb-5 flex gap-4 flex-wrap">
        {dataSkills?.map((e) => {
          return (
            <div className="px-7 py-2 rounded-[4px] bg-[#FBB017]" key={e.name}>
              {e.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
