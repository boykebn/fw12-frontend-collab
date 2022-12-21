import React from "react";

export default function Social() {
  return (
    <div className="flex flex-col md:flex md:flex-col gap-6 lg:flex lg:flex-row px-7 mt-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="ig" className="text-[#9EA0A5] text-xs">
          Instagram
        </label>
        <input
          type="text"
          name="ig"
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
  );
}
