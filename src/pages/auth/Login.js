import React from "react";
import Left from "./authComponents/Left";

const Login = () => {
    return (
        <div className="flex h-screen">
            < Left/>
            <div className="basis-1/2 bg-[#E5E5E]">
                <div className="py-28 px-16">
                    <h2 className="text-2xl font-bold mb-3">Halo, Pewpeople</h2>
                    <p className="text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <form>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Email</label>
                            <input className="border rounded py-2 px-4 bg-white" type="email" name="email" placeholder="Masukan alamat email"/>
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-gray-400 mb-1">Password</label>
                            <input className="border rounded py-2 px-4 bg-white" type="password" name="password" placeholder="Masukan kata sandi"/>
                        </div>
                        <p className="text-right">Lupa kata sandi?</p>
                        <button className="bg-[#FBB017] rounded text-white w-full py-2 my-5">Masuk</button>
                    </form>
                    <p className="text-center">Anda belum punya akun? <span className="text-[#FBB017]">Daftar disini</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login