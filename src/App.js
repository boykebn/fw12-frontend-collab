import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home"
import Sort from "./pages/Sort"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ResetPassword from "./pages/auth/ResetPassword"
import ConfirmPassword from "./pages/auth/ConfirmPassword"
import ConfirmRelogin from "./pages/auth/ConfirmRelogin"
import PageReqResetPass from "./pages/auth/PageReqResetPass"

const App = () => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
