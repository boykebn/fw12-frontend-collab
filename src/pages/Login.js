import React from "react";
import Left from "../components/authComponents/Left";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex h-screen">
            < Left/>
            <div className="md:basis-1/2 bg-[#E5E5E]">
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
                        <div className="flex justify-end">
                            <Link to='/reset-password'>Lupa kata sandi?</Link>
                        </div>
                        <Link to='/home' className="flex justify-center bg-[#FBB017] rounded text-white w-full py-2 my-5">Masuk</Link>
                    </form>
                    <p className="text-center">Anda belum punya akun? <Link to='/register' className="text-[#FBB017]">Daftar disini</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login