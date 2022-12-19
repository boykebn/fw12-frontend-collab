import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Landing";
import Home from "./Home";
import Sort from "./Sort";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import ConfirmPassword from "./ConfirmPassword";
import ConfirmRelogin from "./ConfirmRelogin";
import RequestPassword from "./RequestPassword";
import CompanyProfile from "./CompanyProfile";
import EditJobseekerProfile from "./EditJobseekerProfile";
import EditCompanyProfile from "./EditCompanyProfile"






const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sort" element={<Sort />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/register-recruiter"
          element={<RegisterRecruiter />}
        ></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/confirm-password" element={<ConfirmPassword />}></Route>
        <Route path="/confirm-relogin" element={<ConfirmRelogin />}></Route>
        <Route path="/request-reset" element={<RequestPassword />}></Route>
        <Route path="/company-profile" element={<CompanyProfile />}></Route>
        <Route path="/edit-jobseeker-profile" element={<EditJobseekerProfile />} />
        <Route path="edit-company-profile" element={<EditCompanyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
