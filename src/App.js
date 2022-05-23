import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralContextProvider from "./context/userContext";
import UserLogin from "./container/auth/user/Login";
import UserRegister from "./container/auth/user/Register";
import AdminLogin from "./container/auth/admin/Login";
import SellerLogin from "./container/auth/seller/Login";
import BloggerLogin from "./container/auth/blogger/Login";

function App() {
  return (
    <div className="App">
      <GeneralContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/blogger/login" element={<BloggerLogin />} />
          </Routes>
        </BrowserRouter>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
