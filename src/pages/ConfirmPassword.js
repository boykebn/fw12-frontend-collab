import React from "react";
import Left from "../components/authComponents/Left";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../helpers/http";

const ConfirmPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = React.useState("");

  const resetPassword = async (e) => {
    e.preventDefault();
    const code = e.target.code.value;
    const email = state;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return setErrMessage("Password dan konfirmasi password tidak sama");
    }

    try {
      const { data } = await http().post("/auth/resetPassword", {
        code,
        email,
        password,
        confirmPassword,
      });

      console.log(data);
      navigate("/confirm-relogin");
    } catch (err) {
      return setErrMessage(err.response.data.message);
    }
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <Left />
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="py-28 px-16">
          <h2 className="text-2xl font-bold mb-3 ">Reset password</h2>
          <p className="text-gray-500 mb-5">You need to change your password to activate your account</p>
          <form onSubmit={resetPassword}>
            {errMessage ? (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errMessage}</span>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col mb-7">
              <label className="text-gray-400 mb-1">Kode</label>
              <input className="border rounded py-2 px-4 bg-white" type="text" name="code" placeholder="Masukan kode " />
            </div>
            <div className="flex flex-col mb-7">
              <label className="text-gray-400 mb-1">Kata sandi</label>
              <input className="border rounded py-2 px-4 bg-white" type="password" name="password" placeholder="Masukan kata sandi" />
            </div>
            <div className="flex flex-col mb-7">
              <label className="text-gray-400 mb-1">Konfirmasi kata sandi</label>
              <input className="border rounded py-2 px-4 bg-white" type="password" name="confirmPassword" placeholder="Masukan konfirmasi kata sandi" />
            </div>
            <button className="flex justify-center bg-[#FBB017] rounded text-white w-full py-2 my-5">Reset password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
