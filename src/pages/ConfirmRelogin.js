import React from "react";
import Left from "../components/authComponents/Left";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/auth";

const ConfirmRelogin = () => {
  const [errMessage, setErrMessage] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cb = () => {
      navigate("/home");
    };

    try {
      const results = await dispatch(
        loginAction({
          email,
          password,
          cb,
        })
      );
      setErrMessage(results.payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen">
      <Left />
      <div className="md:basis-1/2 bg-[#E5E5E] overflow-y-auto">
        <div className="py-28 px-16">
          <h2 className="text-2xl font-bold mb-3">Please login with your account</h2>
          <p className="text-gray-500 mb-10">We have an an email containing a password reset instruction toyour email. please check your email.</p>
          <form onSubmit={login}>
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
              <label className="text-gray-400 mb-1">Email</label>
              <input className="border rounded py-2 px-4 bg-white" type="email" name="email" placeholder="Masukan alamat email" />
            </div>
            <div className="flex flex-col mb-7">
              <label className="text-gray-400 mb-1">Kata sandi</label>
              <input className="border rounded py-2 px-4 bg-white" type="password" name="password" placeholder="Masukan kata sandi" />
            </div>
            <Link to="/home" className="flex justify-center bg-[#FBB017] rounded text-white w-full py-2 my-5">
              Reset password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRelogin;
