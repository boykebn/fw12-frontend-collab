import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Landing";
import Home from "./Home";
import Sort from "./Sort";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import ConfirmPassword from "./ConfirmPassword";
import ConfirmRelogin from "./ConfirmRelogin";
import PageReqResetPass from "./PageReqResetPass";
import CompanyProfile from "./CompanyProfile";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sort" element={<Sort />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/confirm-password" element={<ConfirmPassword />}></Route>
        <Route path="/confirm-relogin" element={<ConfirmRelogin />}></Route>
        <Route path="/request-reset" element={<PageReqResetPass />}></Route>
        <Route path="/company-profile" element={<CompanyProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
