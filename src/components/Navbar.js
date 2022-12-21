import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../redux/reducers/auth";


const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(state => state.auth.role)

  const handlerLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <div>
      <nav className="fixed px-5 py-[33px] md:px-20 lg:pl-[150px] lg:pr-[130px] bg-white w-full z-10 top-0">
        <div className="container m-auto flex justify-between items-center text-gray-700">
          <Link to={"/home"}>
            <img
              className=""
              src={require("../assets/images/navlogo.png")}
              alt="navlogo"
            />
          </Link>
          <div className="flex items-center pr-0 text-base font-semibold gap-6 md:gap-12 lg:gap-12">
            <div className="group">
              <button className="">
                <img
                  className=""
                  src={require("../assets/images/bell.png")}
                  alt="bell"
                />
              </button>
              <div className="hidden right-2 md:right-[165px] top-14 group-hover:block absolute">
                <img
                  className="w-[258px] h-[305px] drop-shadow-lg ease-in duration-500 "
                  src={require("../assets/images/notif.png")}
                  alt="notif"
                />
              </div>
            </div>
            <div>
              <Link to="/chat">
                <img
                  className=""
                  src={require("../assets/images/mail.png")}
                  alt="mail"
                />
              </Link>
            </div>
            <div>
              <div className="dropdown dropdown-end">
                <img
                  className="w-[32px] h-[32px] rounded-[50%] cursor-pointer"
                  src={require("../assets/images/luffy.jpg")}
                  alt="profile"
                  tabIndex={0}
                />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/edit-jobseeker-profile">Profile</Link>
                  </li>
                  {role === 'RECRUITER' ? <li>
                    <Link to="/company-profile">Company Profile</Link>
                  </li> : null}
                  <li>
                    <button onClick={handlerLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={props.blueBg}></div>
      <div className={props.grayBg}></div>
    </div>
  );
};

export default Navbar;
