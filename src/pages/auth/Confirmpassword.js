import React from "react";
import Left from "./authComponents/Left";

const ConfirmPassword = () => {
    return (
        <div className="flex h-screen">
            <Left />
            <div className="basis-1/2 bg-[#E5E5E] overflow-y-auto">
                <div className="py-28 px-16">
                    <h2 className="text-2xl font-bold mb-3">Reset password</h2>
                    <p className="text-gray-500 mb-10">You need to change your password to activate your account</p>
                    <form>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Kata sandi</label>
                            <input className="border rounded py-2 px-4 bg-white" type="password" name="password" placeholder="Masukan kata sandi"/>
                        </div>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Konfirmasi kata sandi</label>
                            <input className="border rounded py-2 px-4 bg-white" type="password" name="cpassword" placeholder="Masukan konfirmasi kata sandi"/>
                        </div>
                        <button className="bg-[#FBB017] rounded text-white w-full py-2 my-5">Reset password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPassword