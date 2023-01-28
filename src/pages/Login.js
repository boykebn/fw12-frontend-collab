import Left from "../components/authComponents/Left";
import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const loginScheme = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Masukkan email"),
  password: Yup.string().required("Masukkan kata sandi"),
});
const Login = () => {
  const [errMessage, setErrMessage] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (value) => {
    const cb = () => {
      navigate("/home");
    };

    try {
      const results = await dispatch(loginAction({ ...value, cb }));
      setErrMessage(results.payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <Left />
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="md:pt-28 pt-10 px-16">
          <img className="md:hidden block mb-10" src={require("../assets/images/navlogo.png")} alt="logo" />
          <h2 className="text-2xl font-bold mb-3">Halo, Pewpeople</h2>
          <p className="text-gray-500 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginScheme}
            onSubmit={login}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex flex-col mb-7">
                  <label className="text-gray-400 mb-1">Email</label>
                  <Field className="border rounded py-2 px-4 bg-white focus:outline-none" type="email" name="email" placeholder="Masukan alamat email" />
                  {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
                </div>
                <div className="flex flex-col mb-3">
                  <label className="text-gray-400 mb-1">Password</label>
                  <Field className="border rounded py-2 px-4 bg-white focus:outline-none" type="password" name="password" placeholder="Masukan kata sandi" />
                  {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
                </div>

                <div className="flex justify-end">
                  <Link to="/reset-password" className="text-blue-500">
                    Lupa kata sandi?
                  </Link>
                </div>
                <button type="submit" className="flex justify-center bg-[#FBB017] rounded text-white w-full py-2 my-5">
                  Masuk
                </button>
              </Form>
            )}
          </Formik>
          <p className="text-center">
            Anda belum punya akun?{" "}
            <Link to="/register" className="text-[#FBB017]">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
