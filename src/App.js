import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resetpassword from "./pages/Resetpassword";
import Confirmpassword from "./pages/Confirmpassword";
import Confirmrelogin from "./pages/Confirmrelogin";
import Pagereqresetpass from "./pages/Pagereqresetpass";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/confirm-password" element={<Confirmpassword />} />
        <Route path="/confirm-relogin" element={<Confirmrelogin />} />
        <Route path="/request-reset" element={<Pagereqresetpass />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
