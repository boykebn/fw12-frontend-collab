import React from "react";
import AssideNav from "../AssideNav";
import { IoMdCloudUpload, IoIosResize } from "react-icons/io";
import { BsImage } from "react-icons/bs";

export default function Portfolio() {
  return (
    <div className="bg-white rounded-[8px] p-1 mt-5 font-openSans">
      <AssideNav
        navClassName="font-openSans text-xl text-[#1F2A36]"
        nav1="Portfolio"
      />
      <hr className="w-full" />
      <form action="" className="px-7 mb-10">
        <div className="flex flex-col gap-2 mt-7">
          <label htmlFor="aplikasi" className="text-[#9EA0A5] text-xs">
            Nama aplikasi
          </label>
          <input
            type="text"
            name="aplikasi"
            className="dataDiri-InputClass"
            id="aplikasi"
            placeholder="Masukan nama aplikasi"
          />
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <label htmlFor="repository" className="text-[#9EA0A5] text-xs">
            Link repository
          </label>
          <input
            type="text"
            name="repository"
            className="dataDiri-InputClass"
            id="repository"
            placeholder="Masukan link repository"
          />
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <span className="text-[#9EA0A5] text-xs mt-7">Upload gambar</span>
          <div className="flex flex-col border-[1px] border-[#9EA0A5] border-dashed h-[348px] w-full rounded-[8px] justify-center items-center gap-5 text-[#9EA0A5] p-5 text-center">
            <IoMdCloudUpload className="h-16 w-28 cursor-pointer" />
            <span className="font-openSans text-[#1F2A36] text-sm">
              Drag & Drop untuk Upload Gambar Aplikasi Mobile
            </span>
            <span className="text-xs text-[#1F2A36]">
              Atau cari untuk mengupload file dari direktorimu.
            </span>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <BsImage className="w-8 h-8" />
                <span className="text-[9px] md:ext-xs text-[#1F2A36]">
                  High-Res Image <br />
                  PNG, JPG or GIF{" "}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosResize className="border-[1px] border-[#9EA0A5] rounded-[2px] w-8 h-7 md:w-8 md:h-8" />
                <span className="text-[9px] text-start md:text-xs text-[#1F2A36]">
                  Size <br /> 1080x1920 or 600x800{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-7" />
        <button className="btn-portfolioClassName hover:scale-[1.05]">
          Tambah portofolio
        </button>
      </form>
    </div>
  );
}
