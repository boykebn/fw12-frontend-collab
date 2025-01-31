import React from "react";
import Left from "../components/authComponents/Left";
import { useNavigate} from "react-router-dom";
import http from "../helpers/http";

const ResetPassword = () => {
    const navigate = useNavigate()

    const forgotPassword = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        
        const {data} = await http().post('/auth/forgotPassword', { email })

        navigate('/request-reset', {state: email})
    }
    return (
        <div className="flex h-screen overflow-y-hidden">
            <Left />
            <div className="md:basis-1/2 bg-[#E5E5E] overflow-y-auto">
                <div className="md:py-28 py-10 px-16">
                    <img className="md:hidden block mb-10" src={require('../assets/images/navlogo.png')} alt="logo" />
                    <h2 className="text-2xl font-bold mb-3">Reset password</h2>
                    <form onSubmit={forgotPassword}>
                    <p className="text-gray-500 mb-10">Enter your user account's verified email address and we will send you a password reset link.</p>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Email</label>
                            <input className="border rounded py-2 px-4 bg-white" type="email" name="email" placeholder="Masukan alamat email"/>
                        </div>
                        <button type="submit" className="flex justify-center bg-[#FBB017] rounded text-white w-full py-2 my-5">Send password reset email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword